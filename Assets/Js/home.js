import { toggleMenu } from "../js/nav.js";

const menuIcon = document.querySelector(".MenuIcon");
const overlay = document.querySelector(".Overlay");

menuIcon.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
