/*!
 * TERASS ECO
 * featured.js v1.0
 */

(function () {
  "use strict";

  function loadFeaturedPosts() {

    const container = document.getElementById("featured-posts");

    if (!container) return;

    fetch("/feeds/posts/default?alt=json&max-results=4")
      .then(res => res.json())
      .then(data => {

        let html = "";

        const posts = data.feed.entry || [];

        posts.forEach(post => {

          let title = post.title.$t;

          let link = "#";

          post.link.forEach(l => {
            if (l.rel === "alternate") link = l.href;
          });

          let img = "";

          if (post.media$thumbnail) {
            img = post.media$thumbnail.url.replace("s72-c", "s800");
          }

          html += `
          <div class="featured-card">

              <img src="${img}" alt="${title}">

              <h3>${title}</h3>

              <a href="${link}">
              Baca Artikel
              </a>

          </div>
          `;

        });

        container.innerHTML = html;

      });

  }

  loadFeaturedPosts();

})();
