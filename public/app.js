var quizQuestions = [
  {
    num: 1,
    question: "HTML stands for -",
    Option: {
      a: "HighText Machine Language",
      b: "HyperText and links Markup Language",
      c: "HyperText Markup Language",
      d: "None of these",
    },
    answer: "HyperText Markup Language",
  },
  {
    num: 2,
    question: "Which type of JavaScript Languages is",
    Option: {
      a: "Object-Oriented ",
      b: "Object-Base",
      c: "Assembly Languages",
      d: "high Level",
    },
    answer: "Object-Base",
  },
  {
    num: 3,
    question: "'Input' tag is -",
    Option: {
      a: "a format tag.",
      b: "an empty tag.",
      c: "All of the above",
      d: "None of the above",
    },
    answer: "an empty tag.",
  },
  {
    num: 4,
    question: "The 'hr' tag in HTML is used for -",
    Option: {
      a: "new line ",
      b: "vertical ruler",
      c: "new paragraph",
      d: "horizontal ruler",
    },
    answer: "horizontal ruler",
  },
  {
    num: 5,
    question: "Attribute is used to define inline styles is-",
    Option: {
      a: "style",
      b: "type",
      c: "class",
      d: "None of the above",
    },
    answer: "style",
  },
];

var htmlQuestion = document.getElementById("htmlQuestion");
var htmlOptions = document.getElementsByClassName("htmlOptions");
// var main_headng = document.getElementById("main_headng")
var stdname = document.getElementById("name");
var email = document.getElementById("email");
var number = document.getElementById("number");
var questionsCounter = document.getElementById("questionsCounter");
var nextbtn = document.getElementById("nextbtn");
var quizBox = document.getElementById("quizBox");
var loginform = document.getElementById("loginform");
var login_box = document.getElementById("login_box");
var quizButton = document.getElementById("quizButton");
var resultBox = document.getElementById("resultBox");
var resultValue = document.getElementById("resultValue");
var gif_img = document.getElementById("gif_img");
var counter = 0;
var score = 0;

function setQuestion() {
  htmlQuestion.innerHTML = quizQuestions[counter].question;
  htmlOptions[0].innerHTML = quizQuestions[counter].Option.a;
  htmlOptions[1].innerHTML = quizQuestions[counter].Option.b;
  htmlOptions[2].innerHTML = quizQuestions[counter].Option.c;
  htmlOptions[3].innerHTML = quizQuestions[counter].Option.d;
  questionsCounter.innerHTML = counter + 1 + " / " + quizQuestions.length;
}
function formSubmit() {
  loginform.className = "hide";
  quizButton.className += "show";
  document.getElementById("quizHeading").className = "hide"
  gif_img.src = "./Ptwe-unscreen.gif";
  
  if (window.matchMedia("(max-width: 500px)").matches) {
    document.getElementsByClassName("section_2")[0].style.height = "90vh";
  document.getElementsByClassName("section_2")[0].style.padding = "0px";
  } else {
    
  }
}
function validation() {
  if (stdname.value == "") {
    alert("Please Provide Your Name!");
    stdname.focus();
  } else if (email.value == "") {
    alert("Please Provide Your Email!");
    email.focus();
  } else if (number.value == "" || number.value < 11) {
      alert("Please Provide Full 11 digit Number!");
      stdname.focus();
  } else {
    formSubmit()
  }
}

function startQuiz() {
  quizBox.className += "show";
  login_box.className = "hide";
}

function nextQuestion() {
  counter++;
  console.log(counter);
  if (counter < quizQuestions.length) {
    setQuestion();
    // questionsCounter.innerHTML = counter + 1 + " / " + quizQuestions.length;
  } else {
    console.log("hello");
    quizBox.style.display = "none";
    // main_headng.innerHTML = "QUIZ SCORE"
    resultBox.className = "show";
    document.getElementById("showName").innerHTML = "NAME : " + stdname.value;
    resultValue.innerHTML = "SCORE : "+ score + " / " + quizQuestions.length*10;
    var percentage = (score / (quizQuestions.length * 10)) * 100;
    if (percentage < 40) {
      document.getElementById("resultGrade").innerHTML = "GRADE : FAIL";
    } else {
      document.getElementById("resultGrade").innerHTML = "GRADE : PASS";
    }
  }

  nextbtn.className = "hide";

  for (var i = 0; i < htmlOptions.length; i++) {
    htmlOptions[i].style.backgroundColor = "lightgray";
    htmlOptions[i].classList.remove("disabled");
  }
}

function checkAns(e) {
  nextbtn.className = "show";

  if (e.innerHTML == quizQuestions[counter].answer) {
    score += 10;
    console.log(score);
    e.style.backgroundColor = "lime";
  } else {
    e.style.backgroundColor = "red";

    for (var i = 0; i < htmlOptions.length; i++) {
      if (htmlOptions[i].innerHTML == quizQuestions[counter].answer) {
        htmlOptions[i].style.backgroundColor = "lime";
      }
    }
  }
  for (var i = 0; i < htmlOptions.length; i++) {
    htmlOptions[i].className += " disabled";
  }
}
