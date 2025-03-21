const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');


// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    if (menuLinks.classList.contains('active')) {
        gsap.from(".navbar__menu a", { opacity: 0, y: -10, duration: 0.5, stagger: 0.1 });
    }
};


menu.addEventListener('click', mobileMenu);





document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".clickable");

    items.forEach(item => {
        item.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            
            // Scroll to the section smoothly
            const section = document.getElementById(target);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});













// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
}); 


gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12
}); 

gsap.from('.animate-img', {
    scrollTrigger: '.animate-services',
    duration: 1.2,
    opacity: 0,
    x: -200,
    
}); 


gsap.from('.animate-membership', {
    scrollTrigger: '.animate-membership',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.8
}); 

gsap.from('.animate-team', {
    scrollTrigger: '.animate-team',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.6
});


gsap.from('.animate-email', {
    scrollTrigger: '.animate-email',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.2,
    delay: 0.7
});


document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Αποτρέπει το default jump
        document.getElementById('contact-footer').scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Ξεκινά η προβολή από την κορυφή του footer
        });
    });
});








document.addEventListener("DOMContentLoaded", function() {
    gsap.from("body", { opacity: 0, duration: 1 });
});









