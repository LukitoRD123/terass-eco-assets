/*
TERASS ECO SCROLL ANIMATION
*/


document.addEventListener("DOMContentLoaded",()=>{


const items=document.querySelectorAll(
".post-outer, .sidebar-section .widget, .featured-card, .related-card"
);



items.forEach(item=>{

item.classList.add("reveal");

});



const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("active");

observer.unobserve(entry.target);

}


});


},{
threshold:.15

});



items.forEach(item=>{

observer.observe(item);

});


});
