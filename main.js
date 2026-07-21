/*!
 * ===========================================================
 * TERASS ECO TECHNOLOGY
 * Premium Blogger Template
 *
 * File    : main.js
 * Version : V4.0.0
 * Module  : Core Javascript
 *
 * Feature :
 * - Sticky Header
 * - Dark Mode
 * - Back To Top
 * - Latest Posts
 * - Lazy Loading
 * - Scroll Animation
 * ===========================================================
 */


(function(){

"use strict";

/* ===========================================================
   STICKY HEADER
=========================================================== */

function stickyHeader(){

const header =
document.querySelector(".header-wrapper");


if(!header) return;


window.addEventListener("scroll",function(){

if(window.scrollY > 50){

header.classList.add("sticky-active");

}else{

header.classList.remove("sticky-active");

}

});

}



/* ===========================================================
   BACK TO TOP
=========================================================== */

function backToTop(){

const button =
document.querySelector(".back-top");


if(!button)return;


window.addEventListener("scroll",function(){


if(window.scrollY > 400){

button.classList.add("show");

}else{

button.classList.remove("show");

}


});


button.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


}



/* ===========================================================
   LATEST POSTS BLOGGER
=========================================================== */

function latestPosts(){


const box =
document.getElementById("latest-posts");


if(!box)return;



fetch(
"/feeds/posts/default?alt=json&max-results=6"
)


.then(response=>response.json())


.then(data=>{


let html="";


const posts =
data.feed.entry || [];



posts.forEach(post=>{


let title =
post.title.$t;


let link="#";



post.link.forEach(item=>{

if(item.rel==="alternate"){

link=item.href;

}

});



let image =
"https://via.placeholder.com/600x400";



if(post.media$thumbnail){

image =
post.media$thumbnail.url
.replace(
"s72-c",
"w600"
);

}



html += `

<article class="latest-card">


<img src="${image}"
alt="${title}"
loading="lazy">


<div class="latest-body">


<h3 class="latest-title">

<a href="${link}">
${title}
</a>

</h3>


<a class="read-more"
href="${link}">

Baca Selengkapnya →

</a>


</div>


</article>


`;


});



box.innerHTML=html;


})


.catch(()=>{


box.innerHTML=
"<p>Artikel gagal dimuat</p>";


});


}



/* ===========================================================
   SCROLL ANIMATION
=========================================================== */

function scrollAnimation(){


const items =
document.querySelectorAll(".animate");


if(!items.length)return;


const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}

});


});


items.forEach(item=>{

observer.observe(item);

});


}



/* ===========================================================
   INITIALIZE
=========================================================== */

document.addEventListener(
"DOMContentLoaded",
function(){


mobileMenu();

stickyHeader();

darkMode();

backToTop();

latestPosts();

scrollAnimation();



console.log(
"TERASS ECO main.js V4.0.0 Loaded"
);


});


})();
