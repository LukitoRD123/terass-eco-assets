document.addEventListener("DOMContentLoaded",()=>{


const box=document.querySelector("#related-post");


if(!box)return;



fetch("/feeds/posts/default?alt=json&max-results=4")


.then(res=>res.json())


.then(data=>{


let posts=data.feed.entry;


let html=`

<h3>
Artikel Terkait
</h3>

<div class="related-grid">

`;



posts.forEach(post=>{


let title=post.title.$t;


let link=post.link.find(
l=>l.rel==="alternate"
).href;



html+=`

<div class="related-card">

<img 
src="https://picsum.photos/400/250"
loading="lazy">


<h4>

<a href="${link}">
${title}
</a>

</h4>


</div>

`;

});


html+=`

</div>

`;

box.innerHTML=html;


});


});
