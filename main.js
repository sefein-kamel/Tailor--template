// preloader
var preloader = document.getElementsByClassName("preloader")[0];
window.onload = function () {
  setTimeout(function () {
    preloader.style.transition = "opacity 300ms"
    preloader.style.opacity = 0;
    setTimeout(function () {
      preloader.style.display = "none"
    }, 300)
  }, 500)
}

// scroll events
window.addEventListener("scroll", function () {
  var scrollY = window.scrollY;

  var header = document.getElementsByClassName("header")[0];
  var offers = document.getElementsByClassName("offer");

  if (scrollY > 500) {
    header.classList.add("fixed-bar");
    if (offers.length >= 3) {
      offers[0].style.animation = "fadeInUp 1.5s forwards";
      offers[1].style.animation = "fadeInUp 1.5s .4s forwards";
      offers[2].style.animation = "fadeInUp 1.5s .8s forwards";
    }
  } else {
    header.classList.remove("fixed-bar");
  }

  var services = document.getElementsByClassName("services-box");
  if (scrollY > 2200) {
    services[0].style.animation = "fadeInUp 1.5s forwards";
    services[1].style.animation = "fadeInUp 1.5s .4s forwards";
    services[2].style.animation = "fadeInUp 1.5s .8s forwards";
    services[3].style.animation = "fadeInUp 1.5s 1.2s forwards";
  }

  var testimonial = document.getElementsByClassName("testimonial-contant");
  if (scrollY > 3250) {
    testimonial[0].style.animation = "slider 5s infinite";
    testimonial[1].style.animation = "slider 5s infinite";
  }
});
