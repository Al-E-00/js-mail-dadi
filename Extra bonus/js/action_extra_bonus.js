/* 
- create an array asking to the user how many numbers it 
has to contain
- produce whole numbers casual for how many elements we have to put inside

!! what type of control we need to do on user input
*/


document.querySelector(".sendButton").addEventListener("click", function(){
    let numberElements = document.getElementById("userNumber").value;
        
    for (let i = 0; i < numberElements; i++) {
        numCasualNumbers = Math.floor(Math.random() * i);
        document.getElementById("listCasualNum").innerHTML += (`<li class="my-3">${numCasualNumbers}</li>`);
    }
        let myArr = String(numCasualNumbers).split("").map((numCasualNumbers)=>{
            return Number(numCasualNumbers)
        })

        console.log(myArr);
        /* let lastFive = numCasualNumbers.length - 2;
        console.log("------------");
        console.log(lastFive); */
})






/* document.querySelector(".sendButtonSecond").addEventListener("click", function() {
let userEndElements = document.getElementById("userExtract").value;
console.log(userEndElements);
    

for (let i = 0; i < userEndElements; i++){
    let lastElements = numCasualNumbers.slice(Math.max(numCasualNumbers.length - userEndElements));
    console.log (lastElements);
}
}) */