document.addEventListener('DOMContentLoaded', function () {

    const btn = document.querySelector(".hamburger");
    const iconHamburger = document.querySelector(".bars");
    const iconClose = document.querySelector(".close");
    const ulNavigation = document.querySelector(".navi");
    const liNavigation = document.querySelector(".navi").children;

    const mobile = window.matchMedia("(max-width: 1024px)");
    mobile.addListener(function (isMobile) {
        if (isMobile.matches) {
            ulNavigation.classList.remove("show")
            iconHamburger.classList.remove("hidden")
            iconClose.classList.remove("show")
        }
    })

    btn.addEventListener("click", function () {
        ulNavigation.classList.toggle("show")
        iconHamburger.classList.toggle("hidden")
        iconClose.classList.toggle("show")
    })
    for (let i = 0; i < liNavigation.length; i++) {
        liNavigation[i].addEventListener("click", function () {
            ulNavigation.classList.toggle("show")
            iconHamburger.classList.toggle("hidden")
            iconClose.classList.toggle("show")
        })
    };

});