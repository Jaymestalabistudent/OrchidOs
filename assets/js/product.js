//  JavaScript file for sales pages.
$(document).ready(function () {
  $("#modelSelect").change(function () {
    var selectedModel = $(this).val();
    var imagePath;

    switch (selectedModel) {
      case "xiaomi":
        imagePath = "../assets/img/xiaomi.jpg";
        break;
      case "nothing-phone-2":
        imagePath = "../assets/img/nothing-phone-2.png";
        break;
      case "pixel":
        imagePath = "../assets/img/pixel-4.png";
        break;
      default:
        imagePath = "../assets/img/pixel-4.png";
    }

    $("#productImage").attr("src", imagePath);
  });
});
// second sales page
$(document).ready(function () {
  $("#modelSelect2").change(function () {
    var selectedModel = $(this).val();
    var imagePath;

    switch (selectedModel) {
      case "xiaomi":
        imagePath = "../img/xiaomi-13.png";
        break;
      case "pixel7":
        imagePath = "../img/pixel-7.png";
        break;
      default:
        imagePath = "../img/pixel-7.png";
    }

    $("#productImage").attr("src", imagePath);
  });
});

// sales.js
// JavaScript for sales.html page this will make the page open in a new tab for a pdf prospectus for companies
document.addEventListener("DOMContentLoaded", function () {
  // this is the event listener for the contact button
  var contactButton = document.getElementById("contact-button");
  if (contactButton) {
    contactButton.addEventListener("click", function () {
      const link = document.createElement("a");
      link.href = "https://jmp.sh/Op5a0NAy";
      link.target = "_blank"; // Open the PDF in a new tab
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});
