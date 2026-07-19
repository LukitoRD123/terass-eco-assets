(function(){
"use strict";

const relatedBox = document.querySelector(".related-posts");

if(!relatedBox) return;


const label = relatedBox.dataset.label || "Technology";


fetch("/feeds/posts/default/-/" + label + "?alt=json&max-results=4")
.then(response => response.json())
.then(data => {

let html = "";

const posts = data.feed.entry || [];


posts.forEach(post=>{

let title = post.title.$t;

let link = post.link.find(
item => item.rel === "alternate"
).href;


let image = "";

if(post.media$thumbnail){
image = post.media$thumbnail.url
.replace("/s72-c/","/s400/");
}


html += `
<div class="related-item">

<img loading="lazy" src="${image}" alt="${title}">

<a href="${link}">
${title}
</a>

</div>
`;

});


relatedBox.innerHTML = html;


})
.catch(error=>{
console.log("Related posts error",error);
});


})();
