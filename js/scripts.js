const productsButton = document.querySelector("#products-button")
const productsDropdown = document.querySelector("#products-dropdown")
const menuBars = document.querySelector("#menu-bars")
const navLinksLeft = document.querySelector(".nav-links-left")

const drumSetButton = document.querySelector("#drumSetButton")
const drumSetCymbalsMenu = document.querySelector(".drumSetCymbalsMenu")

productsButton.addEventListener("click", function(){
    const toggleDropdown = function () {
        productsDropdown.classList.toggle("show");
    };
    toggleDropdown();
})

menuBars.addEventListener('click', function(){
    const togglePopout = function () {
        navLinksLeft.classList.toggle("show");
    }
    togglePopout();
    console.log("Clicked menu bars")
})

drumSetButton.addEventListener("click", function(e){
    const toggleDrumSetMenu = function () {
        drumSetCymbalsMenu.classList.toggle("show");
    };
    toggleDrumSetMenu();
})