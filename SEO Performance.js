(function(){
"use strict";


function addMeta(name, content){

if(!content) return;

let meta = document.querySelector(
'meta[name="'+name+'"]'
);

if(!meta){

meta = document.createElement("meta");
meta.name = name;
document.head.appendChild(meta);

}

meta.content = content;

}


// Website description

addMeta(
"description",
"TERASS ECO TECHNOLOGY - Innovation Technology Otomotif, Gadget, Laptop, Review dan Tutorial."
);


// Open Graph

function addOG(property,content){

let meta=document.createElement("meta");

meta.setAttribute("property",property);
meta.content=content;

document.head.appendChild(meta);

}


addOG(
"og:title",
document.title
);


addOG(
"og:type",
"website"
);


addOG(
"og:url",
window.location.href
);


addOG(
"og:site_name",
"TERASS ECO TECHNOLOGY"
);


// Schema Article

if(document.querySelector(".post")){

let schema={

"@context":"https://schema.org",

"@type":"BlogPosting",

"headline":document.title,

"url":window.location.href,

"publisher":{

"@type":"Organization",

"name":"TERASS ECO TECHNOLOGY"

}

};


let script=document.createElement("script");

script.type="application/ld+json";

script.textContent=
JSON.stringify(schema);

document.head.appendChild(script);

}


})();
