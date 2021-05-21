// alert("Script loaded")

const img = document.getElementsById("preview");

function openImage() {
    // img.style.display = "block";
    img.style.width = "60%";
    img.style.height = "auto";
    img.style.transition = "width 0.5s ease";
}

function closeImage() {
    // img.style.display = "none";
    img.style.width = "40%";
    img.style.height = "auto";
    img.style.transition = "width 0.5s ease";
}