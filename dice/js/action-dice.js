/* 
- generate casual num from 1 to 6 (player and computer)
- how is the winner (highest score)
*/

/* 
- need arrays and cycles
- need to compare
*/

// 1. generate casual num from 1 to 6 two times, one from the computer
// and the other from the player

/* const pcRandomNum = Math.floor(Math.random() * 6) + 1;

console.log(pcRandomNum);

const userRandomNum = Math.floor(Math.random() * 6) + 1;

console.log(userRandomNum); */

//2. we need to compare the two numbers to find who have the highest

/* if (pcRandomNum == userRandomNum) {
    console.log ("Game ended in a draw");
}
if (pcRandomNum > userRandomNum) {
    console.log ("Pc have won");
} 
if (pcRandomNum < userRandomNum) {
    console.log ("User have won");
}
 */

// bonus

//let's do 6 match and print for each match the result 

for (let i = 0; i < 6; i++) {
    const pcRandomNum = Math.floor(Math.random() * 6) + 1;
    const userRandomNum = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".pcResults").innerHTML += (`<li class="my-3">${pcRandomNum}</li>`)
    document.querySelector(".userResult").innerHTML += (`<li class="my-3">${userRandomNum}</li>`)

    const sumPcRandomNum = pcRandomNum[i] + pcRandomNum [i];
    console.log(sumPcRandomNum);
}
