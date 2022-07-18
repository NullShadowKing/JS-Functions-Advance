"Use Strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //  Es5
  //  numPassengers = numPassengers || 1;
  //  price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", 4);
createBooking("LH123", 2, 500);

createBooking("LH123", undefined, 1000);

const flight = "LH234";
const iman = {
  name: "iman mohammadi",
  passport: 245587899845,
};

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr." + passenger.name;

//   if (passenger.passport === 245587899845) {
//     alert("check in");
//   } else {
//     alert("Wrong passport");
//   }
// };

// checkIn(flight, iman);
// console.log(flight);
// console.log(iman);

// // Is the sane as doing...
const flightNum = flight;
const passenger = iman;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(iman);
// checkIn(flight, iman);

// Higer-Order functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`transforemed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!!!", upperFirstWord);
transformer("JavaScript is the best!!!", oneWord);

// JS uses callbacks all the time
const hight5 = function () {
  console.log("🖐");
};

document.body.addEventListener("click", hight5);

["iman", "sara", "rana", "behruz"].forEach(hight5);

// funstions that returns functions
// clouser

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("hey");
greeterHey("iman");
greeterHey("sara");

greet("Hello")("iman");

const gret = (greeting) => {
  return (N) => {
    console.log(`${greeting} ${N}`);
  };
};

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

gret("Hi")("Iman");

greetArr("Salam")("Iman");

// -------------------------------------------------------------

const iranAir = {
  airline: "iranAir",
  iataCode: "IR",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    // this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

iranAir.book(258, "Iman Mohammadi");
iranAir.book(476, "Sara Mohammadi");
console.log(iranAir);

const mahanAir = {
  airline: "mahanAir",
  iataCode: "PR",
  booking: [],
};

const book = iranAir.book;

// Does Not Work
// book(23, "Iman Mohammadi");

// Call Method
book.call(mahanAir, 23, "Iman Mohamadi");
console.log(mahanAir);

book.call(iranAir, 174, "Rana Omidi");
console.log(iranAir);

const parsAir = {
  airline: "Pars Air",
  iataCode: "PA",
  booking: [],
};

book.call(parsAir, 025, "Behruz Mohammadi");
console.log(parsAir);

// Apply method (Old Way)
const flightData = [501, "Sara Mohammadi"];
book.apply(parsAir, flightData);
console.log(parsAir);
// New Way for modern JS
book.call(parsAir, ...flightData);
console.log(parsAir);

// Bind Method
const bookMA = book.bind(mahanAir);
const bookPA = book.bind(parsAir);
const bookIR = book.bind(iranAir);
bookMA(104, "Iman Mohammadi");
bookPA(201, "Sara Mohammadi");

const bookMA41 = book.bind(mahanAir, 41);

bookMA41("Iman Mohammadi");
bookMA41("Rana  Omidi");

// with Event Listenders

iranAir.planes = 300;
iranAir.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// here the this keyword refers to iranAir
iranAir.buyPlane();

// but there the this keyword refers to button so we need a solution
document.querySelector(".buy").addEventListener("click", iranAir.buyPlane);
// solution

document
  .querySelector(".buy")
  .addEventListener("click", iranAir.buyPlane.bind(iranAir));

// Partial application
// Partial programming means we can pre-set variables (we put default values for variables)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(400));
console.log(addVAT(100));
console.log(addVAT(23));

// addVAT = (rate, value) => value + value * rate;

const fn = (rate, value) => {
  return () => {
    console.log(value + value * 0.23);
  };
};

fn(null, 100)();

// const gret = (greeting) => {
//   return (N) => {
//     console.log(`${greeting} ${N}`);
//   };
// };

// // Normal Function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// // Arrow Function
const AddTaxValue = (rate) => {
  return (value) => {
    return value + value * rate;
  };
};

const AddVat = AddTaxValue(0.24);
console.log(AddVat(100));
console.log(AddVat(100));
console.log(AddVat(1000));

// Immediately Invoked Function Expression (IIFE)

// Wrong
// const runOnce = function () {
//   console.log("This will never run again");
// };

// runOnce();

// runOnce();

// // Correct
// #1
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();
//Error because of inner scope : so this variable has a inner scope that avoid global scope to access it
// console.log(isPrivate);
// #2
(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 24;
  var notPrivate = 42;
}
// console.log(isPrivate);
console.log(notPrivate);

// Closures
// closure make a func to remember all variables that exist in birthplace(or birthtime) so this way in following example calling the booker cause the function inside the secureBooking run and it will increase the passengerCount Variable ( this is closure )
// so accouding to the closure : the booker has access to the passenger coun because its scope chain accessed to the securebooking scope so it means that because the booker function declared inside securebooking it has access to the scope chain of secure booking and that means booker as access to the passengercount (the birthplace variables are always be remembered)

// A Function has Access to the variable enviroment (VE) of the execution context in which it was created even after that execution context has gone (removed from the memory)
// IN FACT : VE attached to the function, exactly as it was at the time and place the function was created

// closure has priority over scope chain ###### Important
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
booker();

console.dir(booker);

// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
// Re-assingning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`WE are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} second`);
};

// setTimeout(function () {
//   console.log("TIMER");
// }, 1000);

// // if we comment out the pergroup insde the func the following pergroup variable will be used but if we have both because closure has pirority over scope chain so the pergroup inside the func will be used
// // const perGroup = 1000;

// boardPassengers(180, 3);
// boardPassengers(300, 3);
