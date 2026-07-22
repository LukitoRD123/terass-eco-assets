/* =================================
 TERASS ECO TECHNOLOGY
 Featured Post System
================================= */

document.addEventListener("DOMContentLoaded",()=>{

const featured=document.querySelector("#featured-post");

if(!featured) return;


fetch("/feeds/posts/default?alt=json&max-results=1")
.then(res=>res.json())
.then(data=>{

let post=data.feed.entry[0];

let title=post.title.$t;

let link=post.link.find(
l=>l.rel==="alternate"
).href;


let image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/";


featured.innerHTML=`

<div class="featured-card">

<div class="featured-image">
<img src="${image}" loading="lazy">
</div>


<div class="featured-content">

<h2>
<a href="${link}">
${title}
</a>
</h2>

<p>
Artikel teknologi terbaru dari TERASS ECO TECHNOLOGY
</p>

<a class="read-more" href="${link}">
Baca Selengkapnya →
</a>

</div>

</div>

`;

});

});
