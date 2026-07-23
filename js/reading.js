document.addEventListener("scroll",()=>{

let article=document.querySelector(".post-body");

if(!article)return;


let top=article.offsetTop;

let height=article.offsetHeight;


let scroll=window.scrollY-top;

let progress=(scroll/(height-window.innerHeight))*100;


const bar=document.querySelector("#reading-progress");

if(bar){

bar.style.width=progress+"%";

}


});

/*
TERASS ECO READING TIME
*/


document.addEventListener("DOMContentLoaded",()=>{


const content=document.querySelector(".post-body");

const output=document.querySelector("#reading-time");


if(!content || !output)return;



const words=content.innerText
.trim()
.split(/\s+/)
.length;


const minutes=Math.ceil(words/200);



output.innerHTML=
"Waktu baca: "+minutes+" menit";


});
