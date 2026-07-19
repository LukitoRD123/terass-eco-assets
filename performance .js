(function () {
  "use strict";

  // Jalankan saat halaman sudah selesai dimuat
  window.addEventListener("load", function () {

    // Lazy load untuk iframe
    document.querySelectorAll("iframe").forEach(function (iframe) {
      iframe.setAttribute("loading", "lazy");
    });

    // Decode gambar secara asynchronous
    document.querySelectorAll("img").forEach(function (img) {
      img.setAttribute("decoding", "async");
    });

  });

})();
