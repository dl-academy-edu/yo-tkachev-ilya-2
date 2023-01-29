const popup = document.querySelector(".popup");
const openBtn = document.querySelector(".banner__btn-js");
const closeBtn = document.querySelector(".popup-img")
const focustInput = document.querySelector(".contactUs__input")


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
