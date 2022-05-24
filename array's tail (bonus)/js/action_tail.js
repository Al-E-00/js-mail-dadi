/* 
- create an Array with num elements
- print, with a cycle, last 5 elements

!! - what's the min elements?
!! - cycle done to extract last 5 elements from every array (even if we don't 
know the elements num)
*/

let elements = [2, 4, 6, 1, 43, 54, 13, 53, 65, 21, 43, 64, 65, 23, 54];
    const lastFive = elements.slice(-5);
    console.log(lastFive);


for (let i = 0; i < 5; i++) {
    let text = (`last five numbers are: ${lastFive}`);
    console.log(text);
    document.getElementById("printOnScreen").innerHTML = "Last five numbers are: " + lastFive + ";";
}