/*!
 * TERASS ECO TECHNOLOGY
 * category.js v1.0
 * Category Posts Loader
 */

(function(){

"use strict";


window.loadCategoryPosts = function(label, containerID, maxResults){

    maxResults = maxResults || 3;


    var blogURL = "https://terasseco.blogspot.com";


    var feedURL = blogURL +
    "/feeds/posts/default/-/" +
    encodeURIComponent(label) +
    "?alt=json-in-script&max-results=" +
    maxResults +
    "&callback=showCategoryPosts";


    var script = document.createElement("script");


    script.setAttribute("data-container", containerID);

    script.src = feedURL;


    document.body.appendChild(script);

};



window.showCategoryPosts = function(data){


    var scripts = document.getElementsByTagName("script");

    var currentScript = scripts[scripts.length - 1];


    var containerID =
    currentScript.getAttribute("data-container");


    var container =
    document.getElementById(containerID);


    if(!container) return;



    var posts = data.feed.entry;



    if(!posts){

        container.innerHTML =
        "<p>Belum ada artikel.</p>";

        return;

    }



    var html = "";



    posts.forEach(function(post){


        var title =
        post.title.$t;


        var link =
        "#";


        if(post.link){

            post.link.forEach(function(item){

                if(item.rel === "alternate"){

                    link = item.href;

                }

            });

        }



        var thumbnail =
        "https://via.placeholder.com/300x180";



        if(post.media$thumbnail){

            thumbnail =
            post.media$thumbnail.url
            .replace("/s72-c/","/s400/");

        }



        html += `

        <article class="category-card">

            <a href="${link}">

                <img 
                src="${thumbnail}" 
                loading="lazy"
                alt="${title}">

                <h3>${title}</h3>

            </a>

        </article>

        `;


    });



    container.innerHTML = html;


};



})();
