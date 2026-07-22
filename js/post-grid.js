/* =================================
 TERASS ECO TECHNOLOGY
 POST GRID AUTO LOAD
================================= */


document.addEventListener("DOMContentLoaded",()=>{


const grid=document.querySelector(".blog-grid");

if(!grid)return;


fetch("/feeds/posts/default?alt=json&max-results=6")


.then(res=>res.json())


.then(data=>{


let posts=data.feed.entry;


posts.forEach(post=>{


let title=post.title.$t;


let link=post.link.find(
l=>l.rel==="alternate"
).href;



grid.innerHTML+=`

<article class="post-card">


<div class="post-thumb">

<img loading="lazy"
src="https://picsum.photos/600/400">

</div>



<div class="post-info">


<h2 class="post-title">

<a href="${link}">
${title}
</a>

</h2>



<p class="post-desc">

Artikel terbaru teknologi TERASS ECO TECHNOLOGY

</p>


<a class="post-button"
href="${link}">
Baca →
</a>


</div>


</article>

`;


});


// Animasi scroll

const cards=document.querySelectorAll(".post-card");


const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});


cards.forEach(card=>observer.observe(card));


});


});
