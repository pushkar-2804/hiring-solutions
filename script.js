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

document.addEventListener("DOMContentLoaded", function () {
  var hamburgerMenu = document.querySelector(".hamburger-menu");
  var navbarLinks = document.querySelector(".navbar-links");

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("change");
    navbarLinks.classList.toggle("change");
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();

const token = localStorage.getItem("token");
if (token) localStorage.removeItem("token");
