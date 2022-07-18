"Use Strict";

// My solution
const poll = {
  question: "What is Your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  answers: new Array(4).fill(0),
};

const registerNewAnswer = () => {
  let inputNum = prompt(`What is your favourite progrmming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)`);

  let res = Number(inputNum) ?? null;
  console.log(res);
  if (typeof res === "number") {
    if (inputNum >= 0 && inputNum <= 3) {
      poll.answers[inputNum] += 1;
      displayResults(poll.answers);
      displayResults("82,41,15,16");
    } else {
      alert("Please Choose Between the Avaliable numbers");
    }
  }
};

function displayResults(type) {
  typeof type === "object"
    ? console.log(type)
    : console.log(`Poll results are : ${type}`);

  if (type === "string") {
    const res = [];
    for (const items of type) {
      res.push(items);
    }
    console.log(`The Poll results are : ${res} `);
  }
}

document.getElementById("poll").addEventListener("click", registerNewAnswer);

// // Jonas Solution
// const poll2 = {
//   question: "What is Your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//   answers: new Array(4).fill(0),
//   // Get answer
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
//       )
//     );
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };

// document
//   .getElementById("poll")
//   .addEventListener("click", poll2.registerNewAnswer.bind(poll2));

// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
