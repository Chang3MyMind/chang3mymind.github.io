import { toggleMenu } from "./Nav.js";

const menuIcon = document.querySelector(".MenuIcon");
const overlay = document.querySelector(".Overlay");

menuIcon.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
