const navLinks = document.querySelectorAll('.nav-link');
// Получаем все разделы страницы
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('href').substring(1);

        // Показываем только выбранный раздел
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedText = document.querySelector(".animate");

    window.addEventListener("scroll", function () {
        if (animatedText) {
            const textPosition = animatedText.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (textPosition < screenPosition) {
                animatedText.style.animation = "fadein 2s forwards";
            }
        }
    });
});