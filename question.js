function Question(question, answers, answer) {
  this.question = question;
  this.answers = answers;
  this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};
