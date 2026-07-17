/*!
 * TERASS ECO Template
 * main.js v1.0
 * https://terasseco.blogspot.com
 */

(function () {
  "use strict";

  const TerassEco = {

    init() {
      console.log("TERASS ECO Main.js Loaded");

      this.menu();
      this.darkMode();
      this.backToTop();
    },

    menu() {

      const menuBtn = document.querySelector(".menu-toggle");
      const nav = document.querySelector(".main-nav");

      if (!menuBtn || !nav) return;

      menuBtn.addEventListener("click", function () {
        nav.classList.toggle("active");
      });

    },

    darkMode() {

      const btn = document.querySelector(".dark-toggle");

      if (!btn) return;

      btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        localStorage.setItem(
          "terass-dark",
          document.body.classList.contains("dark-mode")
        );
      });

      if (localStorage.getItem("terass-dark") === "true") {
        document.body.classList.add("dark-mode");
      }

    },

    backToTop() {

      const btn = document.getElementById("backTop");

      if (!btn) return;

      window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
          btn.classList.add("show");
        } else {
          btn.classList.remove("show");
        }

      });

      btn.addEventListener("click", function () {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      });

    }

  };

  document.addEventListener("DOMContentLoaded", function () {
    TerassEco.init();
  });

})();
