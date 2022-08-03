const menuBtn = document.getElementsByClassName("menu-btn");
var mobileNav = document.getElementsByClassName("navtest");
var mobileNav2 = document.getElementsByClassName("navtest2")
mobileNav2[0].style.display = "none";
let menuOpen = false;



menuBtn[0].addEventListener("click", () =>{
    if(!menuOpen) {
        menuBtn[0].classList.add("open");
        mobileNav[0].classList.add("dropdown-menu");
        mobileNav2[0].style.display = "flex";
        menuOpen = true;
    } else {
        menuBtn[0].classList.remove("open");
        mobileNav[0].classList.remove("dropdown-menu");
        mobileNav2[0].style.display = "none";
        menuOpen = false;  
    }
});