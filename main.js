console.log('test');

window.onscroll = function() {myFunction()};
        
var headerNavbar = document.getElementById("header-navbar");
var sticky = headerNavbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > (sticky + 10)) {
    // headerNavbar.classList.add("fixed-top")
    headerNavbar.classList.add("bg-light");
    // headerNavbar.classList.add("animated");
    // headerNavbar.classList.add("fadeIn");
  } else {
    // headerNavbar.classList.remove("fixed-top")
    headerNavbar.classList.remove("bg-light");
    // headerNavbar.classList.remove("animated");
    // headerNavbar.classList.remove("fadeIn");
  }
}

var rollingText = document.getElementsByClassName("rolling-text");
console.log(rollingText);
setInterval(() => {
  // rollingText[0].classList.toggle("fadeInLeft");
  if (rollingText[0].classList.contains("fadeIn")) {
    rollingText[0].classList.remove("fadeIn");
    rollingText[0].classList.add("fadeOut");
    rollingText[1].classList.remove("fadeOut");
    rollingText[1].classList.add("fadeIn");
  } else {
    rollingText[0].classList.add("fadeIn");
    rollingText[0].classList.remove("fadeOut");
    rollingText[1].classList.remove("fadeIn");
    rollingText[1].classList.add("fadeOut");
  }
}, 3000);