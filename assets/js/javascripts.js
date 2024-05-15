
// JavaScript for toggle navigation bar
let openHam = document.querySelector("#openHam");
let closeHam = document.querySelector("#closeHam");
let navigationItems = document.querySelector("#navigation-items");

const hamburgerEvent = (navigation, close, open) => {
  navigationItems.style.display = navigation;
  closeHam.style.display = close;
  openHam.style.display = open;
};

// JavaScript for button control for index html
var btn = document.getElementById("myBtn");

function myFunction() {
  // this will Redirect to info.html
  window.location.href = "info.html";
}
