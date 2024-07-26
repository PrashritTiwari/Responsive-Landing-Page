
const navbar = document.getElementById('navbar');


function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
}


window.addEventListener('scroll', handleScroll);