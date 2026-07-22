/*=================================================
 TERASS ECO PREMIUM V6
 Hero Slider
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

  const slider = document.getElementById("hero-slider-items");
  const dots = document.getElementById("heroDots");
  const prev = document.getElementById("heroPrev");
  const next = document.getElementById("heroNext");

  if (!slider) return;

  const feed =
    "/feeds/posts/default/-/Featured?alt=json&max-results=5";

  let current = 0;
  let slides = [];

  fetch(feed)
    .then(res => res.json())
    .then(data => {

      if (!data.feed.entry) {
        slider.innerHTML =
          "<div class='hero-empty'>Belum ada artikel Featured.</div>";
        return;
      }

      data.feed.entry.forEach((post, index) => {

        let title = post.title.$t;

        let link = "#";

        post.link.forEach(item => {
          if (item.rel === "alternate")
            link = item.href;
        });

        let image = "";

        if (post.media$thumbnail) {
          image = post.media$thumbnail.url.replace(
            "/s72-c/",
            "/s1600/"
          );
        }

        slider.innerHTML += `
          <div class="hero-slide ${index===0?'active':''}">
              <img src="${image}" alt="${title}" loading="lazy">
              <div class="hero-caption">
                  <h2>${title}</h2>
                  <a href="${link}" class="hero-btn">
                    Baca Selengkapnya
                  </a>
              </div>
          </div>
        `;

        dots.innerHTML += `
          <span class="hero-dot ${index===0?'active':''}"
                data-index="${index}">
          </span>
        `;

      });

      slides = document.querySelectorAll(".hero-slide");

      const heroDots =
        document.querySelectorAll(".hero-dot");

      function showSlide(i){

        slides.forEach(s=>s.classList.remove("active"));
        heroDots.forEach(d=>d.classList.remove("active"));

        current=i;

        if(current<0)
          current=slides.length-1;

        if(current>=slides.length)
          current=0;

        slides[current].classList.add("active");
        heroDots[current].classList.add("active");
      }

      prev.onclick=()=>showSlide(current-1);

      next.onclick=()=>showSlide(current+1);

      heroDots.forEach(dot=>{
        dot.onclick=()=>{
          showSlide(parseInt(dot.dataset.index));
        };
      });

      setInterval(()=>{
        showSlide(current+1);
      },5000);

      document.getElementById("hero-loading")?.remove();

    })
    .catch(err=>{
      console.log(err);
      slider.innerHTML =
      "<div class='hero-empty'>Gagal memuat slider.</div>";
    });

});
