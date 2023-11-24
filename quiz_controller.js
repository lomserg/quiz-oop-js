function Quiz(questions) {
  this.score = 0;
  this.index = 0;
  this.questions = questions;
}

// index
Quiz.prototype.getIndexQuestion = function () {
  return this.questions[this.index];
};
// end
Quiz.prototype.endQuiz = function () {
  return this.index === this.questions.length;
};
// guess
Quiz.prototype.guess = function (choice) {
  // if (this.getIndexQuestion().checkAnswer(choice)) this.score++;
  // this.index++;
  if (this.getIndexQuestion().answer === choice) this.score++;
  this.index++;
};
