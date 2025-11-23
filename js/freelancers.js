
class FreelancersPage {
    constructor() {
        this.init();
    }

    init() {
        this.handleFreelancerActions();
        this.animateBenefits();
    }

    handleFreelancerActions() {
        // Дополнительные действия для фрилансеров
        const portfolioButtons = document.querySelectorAll('.benefit-card');
        portfolioButtons.forEach((card, index) => {
            card.addEventListener('click', () => {
                this.showBenefitDetails(index);
            });
        });
    }

    animateBenefits() {
        // Анимация появления преимуществ
        const benefits = document.querySelectorAll('.benefit-card');
        benefits.forEach((benefit, index) => {
            benefit.style.animationDelay = `${index * 0.1}s`;
            benefit.classList.add('fade-in');
        });
    }

    showBenefitDetails(index) {
        const benefitTitles = [
            'Постоянный поток заказов',
            'Справедливая оплата', 
            'Защита сделок',
            'Развитие карьеры'
        ];
        
        console.log(`Подробнее о: ${benefitTitles[index]}`);
    }
}

// Инициализация страницы фрилансеров
if (window.location.pathname.includes('freelancers.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        new FreelancersPage();
    });
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('freelancerForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Просто показываем сообщение об успехе
    message.textContent = '✅ Регистрация успешна!';
    message.style.display = 'block';
    message.style.background = '#d4edda';
    message.style.color = '#155724';
    message.style.padding = '1rem';
    message.style.borderRadius = '5px';
    message.style.marginTop = '1rem';
    
    // Очищаем форму
    form.reset();
    
    // Через 3 секунды скрываем сообщение
    setTimeout(() => {
      message.style.display = 'none';
    }, 3000);
  });
});
