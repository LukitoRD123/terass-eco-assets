/*!
 * TERASS ECO
 * search.js v1.0
 */

(function () {
  "use strict";

  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-button");

  if (!searchInput || !searchButton) return;

  function doSearch() {

    const keyword = searchInput.value.trim();

    if (!keyword) return;

    window.location.href =
      "/search?q=" + encodeURIComponent(keyword);

  }

  searchButton.addEventListener("click", doSearch);

  searchInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
      doSearch();
    }

  });

})();
