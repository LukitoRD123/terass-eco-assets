/* =================================
   TERASS ECO TECHNOLOGY
   DARK MODE PREMIUM
================================= */


document.addEventListener("DOMContentLoaded",()=>{


const btn=document.querySelector("#darkmode-toggle");


if(!btn)return;



// cek mode sebelumnya

if(localStorage.getItem("terass-dark") === "active"){

document.body.classList.add("dark-mode");

}



// tombol

btn.onclick=()=>{


document.body.classList.toggle("dark-mode");



if(document.body.classList.contains("dark-mode")){


localStorage.setItem(
"terass-dark",
"active"
);


}else{


localStorage.removeItem(
"terass-dark"
);


}



};



});
