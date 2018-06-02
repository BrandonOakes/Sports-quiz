// var correct = 0;
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
