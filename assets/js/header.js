const responsiveNavBar = document.getElementById("responsive-nav");
const body = document.querySelector("body");

responsiveNavBar.addEventListener("click", function () {
  body.classList.toggle("responsive");
});
