//Получаем все ссылки меню 
const navLinks = document.querySelectorAll('.nav-link')
// Получаем все разделы страницы
const sections = document.querySelectorAll('.section');
// Обработчик клика по меню
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('href').substring(1);
 // Показываем только выбранный раздел
    if (section.id === targetId) {
        section.classList.add('active');
    } else {
        section.classList.remove('active');
            }
        });
    });
});
