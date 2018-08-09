(function() {
  "use strict";
  window.addEventListener("load", function() {
    const nav = document.querySelector("nav");
    const navLinks = nav.getElementsByTagName("a");
    const dropDown = document.getElementById("dropdown");

    nav.addEventListener("click", event => {
      const target = event.target;
      if (target.tagName === "A") {
        const relatedPanel = document.getElementById(
          target.dataset.relatedPanel
        );

        if (target.classList.contains("active")) {
          $("#dropdown").slideUp();
        } else {
          $("#dropdown").slideDown();
        }

        for (let i = 0; i < navLinks.length; i++) {
          if (
            navLinks[i] === target &&
            !navLinks[i].classList.contains("active")
          ) {
            navLinks[i].classList.add("active");
          } else {
            navLinks[i].classList.remove("active");
          }
        }

        $("#dropdown li").fadeOut("fast", function() {
          const firstChild = dropDown.firstElementChild;
          dropDown.insertBefore(relatedPanel, firstChild);
          $("#dropdown li").fadeIn();
        });
      }
    });
  });
})();
