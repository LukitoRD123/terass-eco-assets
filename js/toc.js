/*
TERASS ECO AUTO TOC
*/


document.addEventListener("DOMContentLoaded",()=>{


const article=document.querySelector(".post-body");

const toc=document.querySelector("#toc-list");


if(!article || !toc)return;



const headings=article.querySelectorAll("h2,h3");


if(headings.length===0){

document.querySelector("#toc").style.display="none";

return;

}



headings.forEach((heading,index)=>{


let id="heading-"+index;


heading.id=id;


toc.innerHTML+=`

<li>

<a href="#${id}">

${heading.innerText}

</a>

</li>

`;


});


});
