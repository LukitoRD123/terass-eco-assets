document.addEventListener("scroll",()=>{

let article=document.querySelector(".post-body");

if(!article)return;


let top=article.offsetTop;

let height=article.offsetHeight;


let scroll=window.scrollY-top;

let progress=(scroll/(height-window.innerHeight))*100;


document.querySelector("#reading-progress")
.style.width=progress+"%";


});
