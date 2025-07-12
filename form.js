function clickbutton(e){
    let name = document.querySelector("#name");
    let password = document.querySelector("#password");
    let errorData = document.querySelector(".error")
    let errorData1 = document.querySelector(".error1")

    e.preventDefault();
    let patternName = /[A-z][a-z]+[0-9]$/
    let passName1 = /[A-Z][a-z][0-9]{8}/

    if (patternName.test(name.value) === false) {
        errorData.classList.toggle("error2")
    }
    if (passName1.test(password.value) === false) {
        errorData1.classList.toggle("error3")
    }
}