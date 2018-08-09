(function() {
  "use strict";

  window.addEventListener("load", function() {
    const slideshowWrapper = document.querySelector(".slideshow-wrapper");
    var slideshow = [
      {
        image: "images/slideshow_1.jpeg",
        caption: "Cloudy with a chance of moon"
      },
      {
        image: "images/slideshow_2.jpeg",
        caption: "Half moon mountain"
      },
      {
        image: "images/slideshow_3.jpeg",
        caption: "Moonrise"
      }
    ];

    const images = [];
    let index = 0;

    const caption = document.querySelector("#caption");
    const prevButton = document.querySelector("#prev");
    const nextButton = document.querySelector("#next");
    prevButton.setAttribute("disabled", "disabled");

    slideshow.forEach(slide => {
      let image = new Image();
      image.src = slide.image;
      images.push(image);
      slideshowWrapper.appendChild(image);
    });

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    showSlideAndCaption();

    function prevSlide() {
      if (index === images.length - 1) {
        nextButton.removeAttribute("disabled");
      }

      if (index > 0) {
        index += -1;
        showSlideAndCaption();
      }

      if (index <= 0) {
        prevButton.setAttribute("disabled", "disabled");
      }
    }

    function nextSlide() {
      if (index === 0) {
        prevButton.removeAttribute("disabled");
      }

      if (index < images.length - 1) {
        index += 1;
        showSlideAndCaption();
      }

      if (index >= images.length - 1) {
        nextButton.setAttribute("disabled", "disabled");
      }
    }

    function showSlideAndCaption() {
      if (index < 0) {
        index = images.length - 1;
      }

      images.forEach(image => {
        image.style.display = "none";
      });

      images[index].style.display = "block";
      caption.innerText = slideshow[index].caption;
    }
  });
})();
