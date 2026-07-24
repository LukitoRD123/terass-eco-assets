/* =====================================
   TERASS ECO TECHNOLOGY V4
   FEATURED POST JS
===================================== */


document.addEventListener("DOMContentLoaded", function(){


const featured =
document.querySelector(".featured-grid");


if(!featured) return;



fetch("/feeds/posts/default/-/Featured?alt=json&max-results=4")


.then(response => response.json())


.then(data => {


if(!data.feed.entry){

featured.innerHTML =
"<p>Belum ada Featured Post</p>";

return;

}



let html="";



data.feed.entry.forEach(post=>{


let title =
post.title.$t;



let link="#";

post.link.forEach(item=>{

if(item.rel==="alternate"){

link=item.href;

}

});



let image =
"https://via.placeholder.com/600x350";



if(post.media$thumbnail){

image =
post.media$thumbnail.url.replace(
"/s72-c/",
"/s1600/"
);

}



html += `

<article class="featured-card">


<img src="${image}" 
alt="${title}"
loading="lazy">


<h3>
${title}
</h3>


<a class="featured-btn"
href="${link}">
Baca Selengkapnya
</a>


</article>

`;



});



featured.innerHTML=html;



})


.catch(error=>{


console.log(error);


featured.innerHTML =
"<p>Gagal memuat Featured Post</p>";


});


});
