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

const pcRandomNum = Math.floor(Math.random() * 6) + 1;

console.log(pcRandomNum);

const userRandomNum = Math.floor(Math.random() * 6) + 1;

console.log(userRandomNum);

//2. we need to compare the two numbers to find who have the highest

if (pcRandomNum == userRandomNum) {
    console.log ("Game ended in a draw");
    document.getElementById("result").innerHTML = ("Game ended in a draw");
}
if (pcRandomNum > userRandomNum) {
    console.log ("Pc have won");
    document.getElementById("result").innerHTML = ("Pc have won");
} 
if (pcRandomNum < userRandomNum) {
    console.log ("User have won");
    document.getElementById("result").innerHTML = ("User have won");
}