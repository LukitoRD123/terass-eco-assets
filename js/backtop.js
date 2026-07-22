document.addEventListener("DOMContentLoaded",()=>{


const btn=document.querySelector("#backTop");


window.addEventListener("scroll",()=>{


if(window.scrollY>400){

btn.style.display="block";

}else{

btn.style.display="none";

}


});


btn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


});
