const date = document.querySelector("#date");

const sideBarBtn = document.querySelector("#side-bar-btn");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#close-btn");

sideBarBtn.addEventListener("click", () => {
    sideBar.classList.add("sidebar-show");
    
    document.querySelector("body").style.position = "fixed";
})

closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("sidebar-show");
    
    document.querySelector("body").style.position = "unset";
})



date.innerHTML = new Date().getFullYear();