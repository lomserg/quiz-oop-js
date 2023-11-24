const questions = [
  new Question(
    "Какой любимый фрукт ?",
    ["банан", "апельсин", "яюдлоко", "груша"],
    "апельсин"
  ),
  new Question(
    "Какой любимый цвет ?",
    ["красный", "синий", "зеленый", "желтый"],
    "синий"
  ),
  new Question(
    "Какой любимый овощ",
    ["капуста", "морковь", "огурец", "помидор"],
    "огурец"
  ),
];
const quiz = new Quiz(questions);

function populate() {
  if (quiz.endQuiz()) {
    console.log("end");
    showScores();
  }
  let questions = quiz.getIndexQuestion();
  const quizElement = document.querySelector(".quiz");
  // questions
  quizElement.querySelectorAll(".question").forEach((question, index) => {
    question.innerHTML = questions.answers[index];
    question.removeEventListener("click", guessHandler);
    question.addEventListener("click", guessHandler);
  });
  // qustion title
  quizElement.querySelector(".title").innerHTML = questions.question;
  ///progress///
  let progressElem = document.querySelector(".progress");
  console.log(progressElem);
  progressElem.innerHTML = `question: ${quiz.index} of ${quiz.questions.length}`;
}

function guess(answer) {
  quiz.guess(answer);
}

function guessHandler() {
  // Extract the choice from the clicked element's ID
  let choice = this.innerHTML;

  quiz.guess(choice);
  populate();
}

function showScores() {
  const quizElement = document.querySelector(".quiz");
  quizElement.innerHTML = `<h1>Your score is ${quiz.score}</h1>`;
}

populate();
