const popup = document.querySelector(".popup");
const openBtn = document.querySelector(".banner__btn-js");
const closeBtn = document.querySelector(".popup-img")
const focustInput = document.querySelector(".contactUs__input")
const disable = document.querySelector(".btn-verif")
const verif = document.getElementById("box")


openBtn.addEventListener("click", function()  {
    popup.classList.add("open")
    focustInput.focus()
})

closeBtn.addEventListener("click", function()  {
    popup.classList.remove("open")
})

window.addEventListener("keydown", function(e) {
    if(e.code === "Escape" && popup.classList.contains("open")){
        popup.classList.remove("open")
    }
})


function fun1() {
    var chbox;
    chbox = document.getElementById('box');
        if (chbox.checked) {
            disable.classList.add("active")
            document.querySelector('.btn-verif').disabled = false;
        }
        else {
            disable.classList.remove("active")
            document.querySelector('.btn-verif').disabled = true;
        }
    }
