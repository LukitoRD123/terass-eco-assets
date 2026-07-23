document.addEventListener("DOMContentLoaded",()=>{

const btn=document.querySelector("#mobile-toggle");
const nav=document.querySelector("#main-nav");
const overlay=document.querySelector("#mobile-overlay");

if(!btn || !nav || !overlay)return;

btn.onclick=()=>{

nav.classList.add("active");
overlay.classList.add("active");

};

overlay.onclick=()=>{

nav.classList.remove("active");
overlay.classList.remove("active");

};

});
