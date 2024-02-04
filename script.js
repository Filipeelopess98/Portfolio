const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

