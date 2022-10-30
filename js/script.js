import { mcqData } from "./mcqData.js";
import { show, display } from "../js/page.js";
import { mcq } from "../js/element.js";

// globale  variable
let answeredQuestion = [];
let mcqPoint = 0;
let minute = 9;
let sec = 59;
let pageName = "index";
const mcqSection = document.querySelector(".mcqSection");
const submit = document.querySelector("#finish");
const startBtn = document.querySelector("#startMCQ");
const startAgain = document.querySelector("#startAgain");
const fStartAgain = document.querySelector("#fStartAgain");
const score = document.getElementById("score");

//Get result from answeredQuestion array
// and calculate mcq point
const getResult = () => {
  mcqData.forEach((item, i) => {
    if (answeredQuestion[i] === item.answer) {
      mcqPoint += 1;
    }
  });
};

// collected data from mcq
const collectedResult = () => {
  mcqData.forEach((item, index) => {
    // only checked value will be collected
    // and push it into answeredQuestion array
    let data = document.querySelector(
      `input[name="${item.title}"]:checked`
    ).value;
    answeredQuestion.push(data);
  });
};

// Result calculation
const calculateResult = () => {
  collectedResult();
  getResult();
  score.innerHTML = `${mcqPoint} out of ${mcqData.length}`;
  pageName = "result";
  start();
};

//timer function using setInterval
const countDown = () => {
  setInterval(() => {
    document.getElementById("timer").innerHTML = `0${minute} : ${sec}`;
    sec--;
    if (sec < 10) {
      document.getElementById("timer").innerHTML = `0${minute} :0${sec}`;
    }
    if (sec === 0) {
      if (minute === 0) {
        pageName = "timeout";
        start();
      }
      sec = 59;
      minute--;
    }
  }, 1000);
};

// load mcq get value from mcqdata
//pageName vari active page name
//which will be displayed
//here mcqCard is single mcq-qsn
const startMCQ = () => {
  pageName = "mcq";
  mcqData.forEach((value, index) => {
    const mcqCard = mcq(index + 1, value);
    mcqSection.appendChild(mcqCard);
  });
  countDown();
  start();
};

// reload index page again
const index = () => {
  pageName = "index";
  window.location.reload();
};

const start = () => {
  show(pageName);
  display();
  submit.onclick = calculateResult;
  startBtn.onclick = startMCQ;
  startAgain.onclick = index;
  fStartAgain.onclick = index;
};

window.onload = start;
