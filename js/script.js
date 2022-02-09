const menuButton = document.getElementById("menuBTN")
const navbar = document.getElementById("navbar");

menuButton.onclick = function(){
    if (!menuButton.classList.contains("collapsed")) {
        navbar.style.backgroundColor = "rgb(6,23,39)";
    }else{
        navbar.style.backgroundColor = "rgba(6, 23, 39, 0.5)";
    }
};