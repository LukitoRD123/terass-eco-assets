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
 * - Latest Posts
 * - Scroll Animation
 * ===========================================================
 */


(function(){

"use strict";

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


darkMode();
   
latestPosts();

scrollAnimation();



console.log(
"TERASS ECO main.js V4.0.0 Loaded"
);


});


})();
