const option1 = document.getElementById("option1"),
  option2 = document.getElementById("option2"),
  option3 = document.getElementById("option3"),
  audio = document.getElementById("myAudio");

const btn = document.querySelector(".btn");

const quiz = [
  {
    q: "Which month comes right before june",
    options: ["may", "july", "august"],
    answer: 0,
  },
  {
    q: "What color is a banana",
    options: ["red", "blue", "yellow"],
    answer: 2,
  },
  {
    q: "How many days in a week",
    options: ["5", "8", "7"],
    answer: 2,
  },
  {
    q: "How many colures are present in rainbow",
    options: ["7", "5", "9"],
    answer: 0,
  },
  {
    q: "How many months in a year ",
    options: ["10", "12", "9"],
    answer: 1,
  },
  {
    q: "Choose the correct spelling",
    options: ["thre", "trhee", "three"],
    answer: 2,
  },
  {
    q: "Which number comes right before 80",
    options: ["79", "81", "88"],
    answer: 0,
  },
  {
    q: "What is the national fruit of India",
    options: ["mango", "apple", "banana"],
    answer: 0,
  },
  {
    q: "What color is a apple",
    options: ["red", "blue", "yellow"],
    answer: 0,
  },
  {
    q: "How many weeks in a year",
    options: ["79", "52", "50"],
    answer: 1,
  },

];

let questionCounter = 0;
let currentQuestion;
let answer = "";

const getNewQuestion = (index) => {
  const questionIndex = quiz[index];
  console.log(questionIndex);
  currentQuestion = questionIndex;
  answer = currentQuestion.options[currentQuestion.answer];
  console.log(answer);
  document.getElementById("num1").innerHTML = currentQuestion.q ?? "";
  option1.innerHTML = currentQuestion.options[0];
  option2.innerHTML = currentQuestion.options[1];
  option3.innerHTML = currentQuestion.options[2];
};

function addscore() {
  var score = parseInt(document.getElementById("current_score").textContent);
  score += 5;
  document.getElementById("current_score").textContent = score;
}

function subtractscore() {
  var score = parseInt(document.getElementById("current_score").textContent);
  score -= 1;
  document.getElementById("current_score").textContent = score;
}

option1.addEventListener("click", function () {
  if (option1.innerHTML == answer) {
    addscore();
    questionCounter = (questionCounter + 1) % quiz.length;
    getNewQuestion(questionCounter);
  } else {
    audio.play();
    subtractscore();
  }
});

option2.addEventListener("click", function () {
  if (option2.innerHTML == answer) {
    addscore();
    questionCounter = (questionCounter + 1) % quiz.length;
    getNewQuestion(questionCounter);
  } else {
    audio.play();
    subtractscore();
  }
});

option3.addEventListener("click", function () {
  if (option3.innerHTML == answer) {
    addscore();
    questionCounter = (questionCounter + 1) % quiz.length;
    getNewQuestion(questionCounter);
  } else {
    audio.play();
    subtractscore();
  }
});

btn.addEventListener("click", function () {
  document.getElementById("current_score").textContent = 0;
  questionIndex = 0;
  getNewQuestion(questionIndex);
});

getNewQuestion(questionCounter);
