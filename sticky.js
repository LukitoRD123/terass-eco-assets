(function(){
"use strict";

const header = document.querySelector(".header-wrapper");

if(!header) return;

window.addEventListener("scroll",function(){

    if(window.scrollY > 80){
        header.classList.add("sticky-active");
    }else{
        header.classList.remove("sticky-active");
    }

});

})();
