var correct = 0;
// var question = [
//             [prompt("What team won the superbowl in 2018"), 'EAGLES'],
//             [prompt("What team won the superbowl in 2017"), 'PATRIOTS'],
//             [prompt("What team the NBA title in 2017?"), 'WARRIORS'],
//             [prompt("What team won the World series in 2017?"), 'ASTROS'],
//             [prompt("What team won the World series in 2016?"), 'CUBS']
//           ];
let lis = document.getElementsbyTagName('li')
lis.addEventListener('mouseover', () => {
  lis.setAttribute('style', 'color:red')
})
for (asked = 0; asked < question.length; asked +=1){
    answer = question[asked][0];
    if (answer.toUpperCase() === question[answer][1]){
      correct += 1;
    }
}


if (correct <= 2) {
  var outputDiv = document.getElementById('output')
  outputDiv.innerHTML = "<p>You got " + correct + "  questions correct, you earn the BENCH PLAYER sports trivia grade</p>";
}else if (correct >3 && correct <5) {
    outputDiv.innerHTML = "<p>You got " + correct + " questions correct, you earn the STARTER sports trivia grade</p>";
}else if (correct === 5) {
    outputDiv.innerHTML = "<p>You got " + correct + " questions correct, you earn the ALL-STAR sports trivia grade</p>";
}
