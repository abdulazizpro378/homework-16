document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
      type: "loop",
      perPage: 2,
      arrows: false,
      autoplay: true,
    });
    splide.mount();
  });
  