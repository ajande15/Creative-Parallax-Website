document.addEventListener("DOMContentLoaded", function() {
    let bars = document.querySelector(".fa-bars");
    let center = document.querySelector(".header__center");

    bars.addEventListener("click", function() {
        center.classList.toggle("active");
    })
})