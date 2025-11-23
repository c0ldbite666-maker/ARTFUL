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
// js/script.js
document.addEventListener('DOMContentLoaded', function() {
  const projectForm = document.getElementById('projectForm');
  const projectMessage = document.getElementById('projectMessage');

  projectForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const projectData = {
      title: document.getElementById('projectTitle').value,
      description: document.getElementById('projectDescription').value,
      category: document.getElementById('projectCategory').value,
      budget: parseInt(document.getElementById('projectBudget').value),
      clientName: document.getElementById('clientName').value,
      clientEmail: document.getElementById('clientEmail').value,
      createdAt: new Date(),
      status: 'open'
    };

    db.collection("projects").add(projectData)
      .then(() => {
        showProjectMessage('✅ Проект успешно размещен! Фрилансеры увидят его в ближайшее время.', 'success');
        projectForm.reset();
      })
      .catch((error) => {
        showProjectMessage('❌ Ошибка: ' + error.message, 'error');
      });
  });

  function showProjectMessage(text, type) {
    projectMessage.textContent = text;
    projectMessage.style.display = 'block';
    projectMessage.style.background = type === 'success' ? '#d4edda' : '#f8d7da';
    projectMessage.style.color = type === 'success' ? '#155724' : '#721c24';
    
    setTimeout(() => {
      projectMessage.style.display = 'none';
    }, 5000);
  }
});