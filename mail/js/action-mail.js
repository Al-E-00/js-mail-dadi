/* 
1. Ask user mail
2. check mail with access
3. print message with the outcome

!!! don't use includes(), indexOf()
*/


//1. Ask user mail
const mail = document.getElementById("mailCheck");
const trustedMail = ["pippobaudo@gmail.com", "troyesivan@hotmail.com", "strangerThingsOutIn4Days@gmail.com", "helloWorld@imnew.com", "javascriptIsDope(kindof)@gmail.com"];

let isValid = false;




document.querySelector(".btnCheckMail").addEventListener("click", function () {
    //chceck if mail is valid
    //it has to have @
    if (mail.indexOf("@") === -1) {
        document.querySelector(".printMessage").innerHTML = "Not valid email";
    
        return;
    }

    for (let i = 0; i < trustedMail.length; i++) {
        
    if (trustedMail[i] === mail.value) {
        isValid = true;
        }
    }

    if (isValid === true) {
        document.querySelector(".printMessage").innerHTML = (`<span class="text-primary">You re trusted, welcome!</span>`);
    } else {
        document.querySelector(".printMessage").innerHTML = (`<span class="text-danger">GO AWAY!!!</span>`);
    }
})
