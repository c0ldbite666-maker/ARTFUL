// Общие функции для всех страниц
class MainApp {
    constructor() {
        this.init();
    }

    init() {
        this.handleNavigation();
        this.handleCtaButtons();
        this.highlightActivePage();
    }

    // Обработка навигации
    handleNavigation() {
        const freelancerBtn = document.querySelector('.btn-freelancer');
        const clientBtn = document.querySelector('.btn-client');
        
        if (freelancerBtn && this.isMainPage()) {
            freelancerBtn.addEventListener('click', () => {
                window.location.href = 'freelancers.html';
            });
        }
        
        if (clientBtn && this.isMainPage()) {
            clientBtn.addEventListener('click', () => {
                window.location.href = 'clients.html';
            });
        }
    }

    // Обработка CTA кнопок
    handleCtaButtons() {
        const ctaButtons = document.querySelectorAll('.btn');
        ctaButtons.forEach(button => {
            if (this.isCtaButton(button)) {
                button.addEventListener('click', () => {
                    this.showRegistrationMessage();
                });
            }
        });
    }

    // Подсветка активной страницы
    highlightActivePage() {
        const currentPage = this.getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            if (this.isActiveLink(link, currentPage)) {
                link.style.color = '#2c5530';
                link.style.fontWeight = 'bold';
            }
        });
    }

    // Вспомогательные методы
    isMainPage() {
        return window.location.pathname.includes('index.html') || 
               window.location.pathname === '/' ||
               window.location.pathname.endsWith('/');
    }

    isCtaButton(button) {
        const ctaTexts = ['НАЧАТЬ РАБОТУ', 'ЗАРЕГИСТРИРОВАТЬСЯ', 
                         'РАЗМЕСТИТЬ ПРОЕКТ', 'СОЗДАТЬ ПРОЕКТ'];
        return ctaTexts.some(text => button.textContent.includes(text));
    }

    getCurrentPage() {
        return window.location.pathname.split('/').pop();
    }

    isActiveLink(link, currentPage) {
        const linkPage = link.getAttribute('href');
        return linkPage === currentPage || 
               (currentPage === '' && linkPage === 'index.html') ||
               (linkPage.includes(currentPage.replace('.html', '')) && currentPage !== 'index.html');
    }

    showRegistrationMessage() {
        alert('Регистрация временно недоступна. Скоро мы откроем возможность регистрации!');
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new MainApp();
});