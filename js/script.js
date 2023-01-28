const popup = document.querySelector(".popup");
const openBtn = document.querySelector(".banner__btn-js");
const closeBtn = document.querySelector(".popup")

openBtn.addEventListener("click", function()  {
    popup.classList.add("open")
})

closeBtn.addEventListener("click", function()  {
    popup.classList.remove("open")
})
