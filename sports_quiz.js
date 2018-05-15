var correct = 0;
var question1 = prompt("What team won the superbowl in 2018");
var question2 = prompt("What team the superbowl in 2017");
var question3 = prompt("What team the NBA championship in 2017?")
var question4 = prompt("What team the MLB World series in 2017?")
var question5 = prompt("What team won the World series in 2016?")

if (question1.toUpperCase() === "EAGLES") {
   correct += 1;
}

if (question2.toUpperCase() === "PATRIOTS") {
   correct += 1;
}

if (question3.toUpperCase() === "WARRIORS") {
   correct += 1;
}

if (question4.toUpperCase() === "INDIANS") {
   correct += 1;
}

if (question5.toUpperCase() === "CUBS") {
   correct += 1;
}


if (correct <= 2) {
  document.write("<p>You got " + correct + "  questions correct, you earn the BENCH PLAYER sports trivia grade</p>");
}else if (correct >3 && correct <5) {
    document.write("<p>You got " + correct + " questions correct, you earn the STARTER sports trivia grade</p>");
}else if (correct === 5) {
    document.write("<p>You got " + correct + " questions correct, you earn the ALL-STAR sports trivia grade</p>" );
}
