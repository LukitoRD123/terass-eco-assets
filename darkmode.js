/* ===========================================================
   DARK MODE
=========================================================== */

function darkMode(){

const button =
document.querySelector(".dark-toggle");


if(!button) return;


const saved =
localStorage.getItem("terass-dark");


if(saved==="active"){

document.body.classList.add("dark-mode");

}


button.addEventListener("click",function(){


document.body.classList.toggle("dark-mode");


if(
document.body.classList.contains("dark-mode")
){

localStorage.setItem(
"terass-dark",
"active"
);

}else{

localStorage.removeItem(
"terass-dark"
);

}


});

}
