// Специфичные функции для страницы фрилансеров
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

// js/freelancers.js
document.addEventListener('DOMContentLoaded', function() {
  const freelancerForm = document.getElementById('freelancerForm');
  const formMessage = document.getElementById('formMessage');

  freelancerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Получаем данные формы
    const freelancerData = {
      name: document.getElementById('freelancerName').value,
      email: document.getElementById('freelancerEmail').value,
      skills: document.getElementById('freelancerSkills').value.split(',').map(skill => skill.trim()),
      category: document.getElementById('freelancerCategory').value,
      bio: document.getElementById('freelancerBio').value,
      registrationDate: new Date(),
      status: 'active'
    };

    // Сохраняем в Firebase
    db.collection("freelancers").add(freelancerData)
      .then((docRef) => {
        showMessage('✅ Регистрация успешна! Мы свяжемся с вами в ближайшее время.', 'success');
        freelancerForm.reset();
      })
      .catch((error) => {
        showMessage('❌ Ошибка регистрации: ' + error.message, 'error');
      });
  });

  function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.style.display = 'block';
    formMessage.style.background = type === 'success' ? '#d4edda' : '#f8d7da';
    formMessage.style.color = type === 'success' ? '#155724' : '#721c24';
    formMessage.style.border = type === 'success' ? '1px solid #c3e6cb' : '1px solid #f5c6cb';
    
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 5000);
  }
});