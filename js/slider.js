document.addEventListener("DOMContentLoaded",()=>{


const slider =
document.getElementById("hero-slider-items");


if(!slider)return;


let current=0;


fetch("/feeds/posts/default/-/Featured?alt=json&max-results=5")

.then(res=>res.json())

.then(data=>{


if(!data.feed.entry){

slider.innerHTML=
"Belum ada Featured Post";

return;

}



data.feed.entry.forEach((post,index)=>{


let title=post.title.$t;


let link="#";


post.link.forEach(l=>{

if(l.rel==="alternate")

link=l.href;

});



let image="";


if(post.media$thumbnail){

image=
post.media$thumbnail.url
.replace("/s72-c/","/s1600/");

}



slider.innerHTML+=`

<div class="hero-slide ${index===0?'active':''}">

<img src="${image}">

<div class="hero-caption">

<h2>${title}</h2>

<a class="hero-btn" href="${link}">
Baca Selengkapnya
</a>

</div>

</div>

`;

});


let slides=
document.querySelectorAll(".hero-slide");



function showSlide(i){

slides.forEach(s=>
s.classList.remove("active")
);


current=i;


if(current>=slides.length)
current=0;


slides[current]
.classList.add("active");

}



setInterval(()=>{

showSlide(current+1);

},5000);



});


});
