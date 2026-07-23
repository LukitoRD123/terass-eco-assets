document.addEventListener("DOMContentLoaded",()=>{


const toggle=document.querySelector("#search-toggle");

const close=document.querySelector("#search-close");

const overlay=document.querySelector("#search-overlay");

const input=document.querySelector("#search-input");

const result=document.querySelector("#search-result");



if(!toggle || !overlay)return;



toggle.onclick=()=>{

overlay.classList.add("active");

input.focus();

};



close.onclick=()=>{

overlay.classList.remove("active");

input.value="";

result.innerHTML="";

};



let posts=[];



fetch("/feeds/posts/default?alt=json&max-results=100")

.then(res=>res.json())

.then(data=>{

posts=data.feed.entry || [];

});



input.addEventListener("keyup",()=>{


let keyword=input.value.toLowerCase();


result.innerHTML="";


if(keyword==="")return;



posts.forEach(post=>{


let title=post.title.$t;


if(title.toLowerCase().includes(keyword)){


let link=post.link.find(
x=>x.rel==="alternate"
).href;



let thumb="https://via.placeholder.com/100";


if(post.media$thumbnail){

thumb=post.media$thumbnail.url
.replace("/s72-c/","/s1600/");

}



result.innerHTML+=`

<a class="search-card" href="${link}">


<img src="${thumb}" />


<div class="search-info">

<h4>
${title}
</h4>

</div>


</a>

`;

}


});


});


});
