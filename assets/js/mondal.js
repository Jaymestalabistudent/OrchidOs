// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal and fetch the content
btn.onclick = function() {
  modal.style.display = "block";
  fetch('info.json')
    .then(response => response.json())
    .then(data => {
      const modalTextElement = document.getElementById("modalText");
      modalTextElement.innerText = data.content;
    })
    .catch(error => {
      document.getElementById("modalText").innerText = "Failed to load content.";
      console.error('Error fetching the JSON:', error);
    });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
