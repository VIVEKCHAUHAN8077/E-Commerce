let icon = document.querySelector(".fa-solid fa-bars")
let icon2 = document.querySelector(".fa-solid fa-xmark")
let slider = document.querySelector("#slider-navbar")
let body = document.querySelector("body")


function sliderNavbar(){
    if(slider.style.left === "-400px"){
        slider.style.left = "0px"
      
    }else{
        slider.style.left = "-400px"
    }
}

    function removeContainer(){
        if(slider.style.left === "400px"){
        slider.style.left = "-400px"
    }else{
    slider.style.left = "-400px"
    }
}