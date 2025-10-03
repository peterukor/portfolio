document.addEventListener("DOMContentLoaded", function () {
  // Active section highlight (desktop behavior still works)
  var sections = document.querySelectorAll("main section");
  var navItems = document.querySelectorAll(".personal nav li");

  window.addEventListener("scroll", function () {
    var current = "";
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(function (li) {
      li.classList.remove("view");
      var link = li.querySelector("a");
      if (link.getAttribute("href") === "#" + current) {
        li.classList.add("view");
      }
    });
  });

  // Mobile hamburger → overlay nav (transparent) + icon swap
  var hamburger = document.getElementById("hamburger");
  var hamburgerIcon = document.getElementById("hamburger-icon");
  var nav = document.querySelector(".personal nav");

  if (hamburger && nav && hamburgerIcon) {
    hamburger.addEventListener("click", function () {
      nav.classList.toggle("active");
      if (nav.classList.contains("active")) {
        hamburgerIcon.src = "assets/icons/hamburger-2.svg";
      } else {
        hamburgerIcon.src = "assets/icons/hamburger.svg";
      }
    });

    // Close overlay when any nav link is clicked
    var links = nav.querySelectorAll("a");
    links.forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("active");
        hamburgerIcon.src = "assets/icons/hamburger.svg";
      });
    });
  }
});
