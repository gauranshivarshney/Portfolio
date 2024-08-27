var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Python Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})