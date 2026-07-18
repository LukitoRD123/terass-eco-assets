/*!
 * TERASS ECO Template
 * main.js v1.1
 */

(function () {
  "use strict";

  function loadLatestPosts() {

    const container = document.getElementById("latest-posts");

    if (!container) return;

    fetch("/feeds/posts/default?alt=json&max-results=6")
      .then(res => res.json())
      .then(data => {

        let html = "";

        const posts = data.feed.entry || [];

        posts.forEach(post => {

          let title = post.title.$t;
          let link = "#";

          post.link.forEach(item => {
            if (item.rel === "alternate") {
              link = item.href;
            }
          });

          let image = "https://via.placeholder.com/600x400";

          if (post.media$thumbnail) {
            image = post.media$thumbnail.url.replace("s72-c", "w600");
          }

          let summary = "";

          if (post.summary) {
            summary = post.summary.$t;
          }

          summary = summary.replace(/<[^>]+>/g, "");
          summary = summary.substring(0, 120) + "...";

          html += `
<article class="latest-card">

  <img src="${image}" alt="${title}" loading="lazy">

  <div class="latest-body">

    <span class="post-badge">TERASS ECO</span>

    <h3 class="latest-title">
      <a href="${link}">
        ${title}
      </a>
    </h3>

    <p class="latest-desc">
      ${summary}
    </p>

    <a class="read-more" href="${link}">
      Baca Selengkapnya →
    </a>

  </div>

</article>
`;
        });

        container.innerHTML = html;

      })
      .catch(() => {
        container.innerHTML =
          "<div class='loading-post'>Gagal memuat artikel</div>";
      });

  }

  document.addEventListener("DOMContentLoaded", function () {
    loadLatestPosts();
  });

})();     
/* ======================================
   TERASS ECO TECHNOLOGY V3.3.2
   Lazy Loading Premium
====================================== */

document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll("img");

  images.forEach(function(img){

    if(!img.hasAttribute("loading")){
      img.setAttribute("loading","lazy");
    }

    if(!img.hasAttribute("decoding")){
      img.setAttribute("decoding","async");
    }

  });

});
// Mobile Menu TERASS ECO
const menuBtn = document.getElementById('menuBtn');
const menu = document.querySelector('nav');

if(menuBtn && menu){
  menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
  });
                           }
