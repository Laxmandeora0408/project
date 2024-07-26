var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function opennav() {
  document.getElementById("slidenav").style.width = "175px";
  document.getElementById("menuicon").style.display = "none";
}
function closnav() {
  document.getElementById("slidenav").style.width = "0";
  document.getElementById("menuicon").style.display = "block";
}

function redirectToContact() {
  // Redirect to contact.html page
  window.location.href = "contact.html";
}
