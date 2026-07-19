(function(){
"use strict";

const btn = document.querySelector(".back-to-top");

if(!btn) return;


window.addEventListener("scroll",function(){

    if(window.scrollY > 300){
        btn.classList.add("show");
    }else{
        btn.classList.remove("show");
    }

});


btn.addEventListener("click",function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


})();
