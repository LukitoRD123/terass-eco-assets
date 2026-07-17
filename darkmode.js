/*!
 * TERASS ECO
 * darkmode.js v1.0
 */

(function () {
  "use strict";

  const darkBtn = document.getElementById("darkBtn");

  if (!darkBtn) return;

  // Terapkan tema yang tersimpan
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkBtn.innerHTML = "☀️";
  } else {
    darkBtn.innerHTML = "🌙";
  }

  darkBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      darkBtn.innerHTML = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      darkBtn.innerHTML = "🌙";
    }

  });

})();
