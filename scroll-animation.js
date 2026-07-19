(function(){
"use strict";

const elements = document.querySelectorAll(
".post, .widget, .hero-slide, .featured-item"
);

if(!elements.length) return;


const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});


elements.forEach(el=>{
el.classList.add("hidden");
observer.observe(el);
});


})();
