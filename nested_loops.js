let name = prompt("Hello, welcome to the grade 1 Math test for Kipp Paseo. Could you please enter your name? ")
const firstLetter = name.charAt(0)
const firstLetterCap = firstLetter.toUpperCase()
const remainingLetters = name.slice(1)
const capitalizedName = firstLetterCap + remainingLetters

let numArray = []
let tempNumArray = []
let points = 0;
let maxValue = 10;
let i;
let j;
let sum = i + j;
let testQuestions = Number(prompt("Enter a number of questions that you would like to answer for the test: "));
let counter = 1;


for (let i = 0; i < maxValue; i++) {
  for (let j = 0; j < maxValue; j++) {
      let sum = i + j
      // console.log(`${i} + ${j} = ${sum}`);
      numArray.push(`${i} + ${j} = ${sum}`);
      tempNumArray.push(`${i} + ${j} = `)
     }
  }




 for (let x = 0; x < testQuestions; x++) {
         let randomNumber = Math.floor((Math.random() * numArray.length));
         let yourMath = (prompt(`Question # ${counter}. Please do the math: ${tempNumArray[randomNumber]}`));
         // let result = toString(tempNumArray[randomNumber]);
         // let result2 = toString(numArray[randomNumber])
         const words = tempNumArray[randomNumber].split(' ');
         const words2 = numArray[randomNumber].split(' ');
         // console.log(words2);
         // console.log(words2[4]);
         yourMath == words2[4] ? points += 1 : points += 0
         // console.log(points);
         counter++;
}

// console.log("number of questions: ", testQuestions);
// console.log("number of points: ", points);
let result = testQuestions - points;
// console.log("Difference between the two: ", result);
// if (result === 0) {
//    console.log("You are a rock star!");
// }


switch(result) {
    case 0:
        console.log(`Congrats ${capitalizedName}, you obtained ${points} correct answers out of ${testQuestions}. YOU ARE A ROCK STAR!`);
        break;
    case 1:
        console.log(`Good job ${capitalizedName}, you obtained ${points} correct answers out of ${testQuestions}. You are really good at this!`);
        break;
    case 2:
    case 3:
        console.log(`Nicely done ${capitalizedName}, you obtained ${points} correct answers out of ${testQuestions}. Just be a bit more focused and you'll reach the sky!`);
        break;  
    case testQuestions:
        console.log(`You obtained ${points} correct answers out of ${testQuestions}. That stinks ${capitalizedName}!`);
        break;
}


// console.log(numArray);
// console.log(points);
// console.log(numArray[67]);