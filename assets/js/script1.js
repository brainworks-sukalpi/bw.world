var all_questions = [{
  question_string: "12 is 60% of what number among the given?",
  choices: {
    options: [["20", "1"], ["10", "0"], ["120", "0"], ["36", "0"]]
  }
}, {
  question_string: "Given a cake (cylindrical shape), How many cuts would you make to get the 8 equal pieces?",
  choices: {
    options: [["3", "1"], ["2", "0"], ["8", "0"], ["4", "0"]]
  }
}, {
  question_string: "Which of the following is smallest number?",
  choices: {
    options: [["0.079", "1"], ["2.016", "0"], ["0.709", "0"], ["0.216", "0"]]
  }
}, {
  question_string: 'What would be the next number in the series 1..4..10..19..31..?',
  choices: {
    options: [["46", "1"], ["49", "0"], ["32", "0"], ["41", "0"]]
  }
}];

function main() {
  var arrayQuestions = [];
  for(var i=0; i<all_questions.length; i++) {
    arrayQuestions.push(all_questions[i].question_string, all_questions[i].options, i);
  }
}
