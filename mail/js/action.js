/* 
1. Ask user mail
2. check mail with access
3. print message with the outcome

!!! don't use includes(), indexOf()
*/


//1. Ask user mail

document.querySelector(".btnCheckMail").addEventListener("click", function () {

    const mail = document.getElementById("mailCheck").value
    console.log(mail);

    //2. check mail with access
    /* 
    -   create a Array with a list of trusted mails 
    -   check if the inserted mail it's trusted
    */

    const trustedMail = ["pippobaudo@gmail.com", "troyesivan@hotmail.com", "strangerThingsOutIn4Days@gmail.com", "helloWorld@imnew.com", "javascriptIsDope(kindof)@gmail.com"];

    
    if (mail == trustedMail.value) {
        document.querySelectot(".printMessage").innerHTML = ("You re trusted, welcome!");
    } else {
        document.querySelector(".printMessage").innerHTML = ("GO AWAY!!")
    }
}
)

