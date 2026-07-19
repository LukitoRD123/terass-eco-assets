/*!
 * TERASS ECO TECHNOLOGY
 * mobilemenu.js v3.4
 */

document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const mainMenu = document.querySelector(".main-menu");
  const overlay = document.getElementById("menu-overlay");

  if (!menuBtn || !mainMenu) return;

  menuBtn.addEventListener("click", function () {
    mainMenu.classList.toggle("active");

    if (overlay) {
      overlay.classList.toggle("active");
    }
  });

  if (overlay) {
    overlay.addEventListener("click", function () {
      mainMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  }

});
