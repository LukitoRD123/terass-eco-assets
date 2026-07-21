/*!
 * ===========================================================
 * TERASS ECO TECHNOLOGY
 * mobilemenu.js V4.0.0
 * ===========================================================
 */

(function(){

"use strict";

function initMobileMenu(){

const menuBtn  = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".main-menu");
const overlay  = document.querySelector(".menu-overlay");

if(!menuBtn || !mainMenu) return;


/* OPEN / CLOSE MENU */

menuBtn.addEventListener("click",function(){

mainMenu.classList.toggle("active");

if(overlay){
overlay.classList.toggle("active");
}

document.body.classList.toggle("menu-open");

});


/* CLOSE VIA OVERLAY */

if(overlay){

overlay.addEventListener("click",function(){

mainMenu.classList.remove("active");
overlay.classList.remove("active");
document.body.classList.remove("menu-open");

});

}


/* CLOSE VIA LINK */

mainMenu.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(){

mainMenu.classList.remove("active");

if(overlay){
overlay.classList.remove("active");
}

document.body.classList.remove("menu-open");

});

});

}


/* INIT */

document.addEventListener(
"DOMContentLoaded",
initMobileMenu
);

})();
