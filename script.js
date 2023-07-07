// Add any custom JavaScript functionality here
// (if required for your landing page)

// Example: Smooth scrolling for anchor links

document.addEventListener("DOMContentLoaded", function () {
  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  for (var i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener("click", function (e) {
      e.preventDefault();

      var target = document.querySelector(this.getAttribute("href"));

      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  }
});
