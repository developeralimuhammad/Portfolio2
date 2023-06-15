const menuIcon = document.querySelector("#menuIcon")
const menu = document.querySelector("#menu")
const closeIcon = document.querySelector("#closeIcon")



menuIcon.addEventListener("click", ()=>{
    //Clicked
    menu.classList.replace("hidden" , "visible")

})

closeIcon.addEventListener("click", ()=>{
    //Clicked
    menu.classList.replace("visible" , "hidden")

})