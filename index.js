const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode")); /* if we want previous setting(dark/white). if we refresh the page the mode is same as previous setting*/
updateBody()

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }
    else{
        bodyEl.style.background = "white";
    }
}

inputEl.addEventListener("input", ()=>{
    updateBody()
    updatLocalStorage()
})

function updatLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked)) /*for adding to local storage. if we want previous setting(dark/white)*/
}