// Специфичные функции для страницы заказчиков
class ClientsPage {
    constructor() {
        this.init();
    }

    init() {
        this.handleClientActions();
        this.animateStatistics();
    }

    handleClientActions() {
        // Дополнительные действия для заказчиков
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                this.showCategoryProjects(index);
            });
        });
    }

    animateStatistics() {
        // Анимация статистики
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            this.animateCounter(stat);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.textContent);
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
            }
        }, 20);
    }

    showCategoryProjects(index) {
        const categories = ['Дизайн', 'Разработка', 'Контент', 'Видео', 'Маркетинг', 'Аудио'];
        console.log(`Показать проекты в категории: ${categories[index]}`);
    }
}

// Инициализация страницы заказчиков
if (window.location.pathname.includes('clients.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        new ClientsPage();
    });
}