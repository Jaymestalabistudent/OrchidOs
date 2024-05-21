//  JavaScript file for sales pages.
$(document).ready(function() {
  $('#modelSelect').change(function() {
      var selectedModel = $(this).val();
      var imagePath;

      switch(selectedModel) {
          case 'xiaomi':
              imagePath = '../assets/img/xiaomi.jpg';
              break;
          case 'nothing-phone-2':
              imagePath = '../assets/img/nothing-phone-2.png';
              break;
          case 'pixel':
              imagePath = '../assets/img/pixel-4.png';
              break;
          default:
              imagePath = '../assets/img/pixel-4.png';
      }

      $('#productImage').attr('src', imagePath);
  });
});
// second sales page
$(document).ready(function() {
  $('#modelSelect2').change(function() {
      var selectedModel = $(this).val();
      var imagePath;

      switch(selectedModel) {
          case 'xiaomi':
              imagePath = '../assets/img/xiaomi-13.png';
              break;
          case 'pixel7':
              imagePath = '../assets/img/pixel-7.png';
              break;
          default:
              imagePath = '../assets/img/pixel-7.png';
      }

      $('#productImage').attr('src', imagePath);
  });
});
document.getElementById('contact-button').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'https://pdfupload.io/docs/04cf5edc'; 
  link.target = '_blank'; // this action  Opens the PDF in a new tab
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});