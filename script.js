window.onload = function() {
    var greetingElement = document.querySelector(".greeting");
    greetingElement.style.opacity = 1;

    var introElement = document.querySelector(".introduction");
    introElement.style.opacity = 1;

    var containerElement = document.querySelector(".container1");
    containerElement.style.opacity = 1;
};

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('nav-visible');
    });
});