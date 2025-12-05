// Обработка страницы мастер-классов
document.addEventListener('DOMContentLoaded', function() {
    initWorkshops();
    initSmoothScroll();
    adjustFirstSectionPadding();
});

function initWorkshops() {
    // Запись на мастер-класс
    document.querySelectorAll('.btn-workshop').forEach(button => {
        button.addEventListener('click', function() {
            const workshopCard = this.closest('.workshop-card');
            const workshopTitle = workshopCard.querySelector('.workshop-title').textContent;
            const workshopPrice = workshopCard.querySelector('.workshop-price').textContent;
            
            showWorkshopRegistration(workshopTitle, workshopPrice);
        });
    });
    
    // Добавляем анимацию появления карточек
    animateWorkshopCards();
}

function showWorkshopRegistration(title, price) {
    const modalHtml = `
        <div class="registration-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        ">
            <div style="
                background: white;
                padding: 40px;
                border-radius: 15px;
                max-width: 500px;
                width: 90%;
                text-align: center;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            ">
                <h3 style="color: #333; margin-bottom: 20px;">Запись на мастер-класс</h3>
                <p style="color: #666; margin-bottom: 10px;"><strong>${title}</strong></p>
                <p style="color: #C09C5E; font-weight: 600; margin-bottom: 25px;">${price}</p>
                
                <form id="registration-form" style="text-align: left;">
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Имя *</label>
                        <input type="text" required style="
                            width: 100%;
                            padding: 12px;
                            border: 2px solid #eee;
                            border-radius: 8px;
                            font-family: 'Montserrat', sans-serif;
                        ">
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Телефон *</label>
                        <input type="tel" required style="
                            width: 100%;
                            padding: 12px;
                            border: 2px solid #eee;
                            border-radius: 8px;
                            font-family: 'Montserrat', sans-serif;
                        ">
                    </div>
                    
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Email</label>
                        <input type="email" style="
                            width: 100%;
                            padding: 12px;
                            border: 2px solid #eee;
                            border-radius: 8px;
                            font-family: 'Montserrat', sans-serif;
                        ">
                    </div>
                    
                    <div style="display: flex; gap: 10px;">
                        <button type="button" onclick="closeModal()" style="
                            flex: 1;
                            padding: 12px;
                            border: 2px solid #C09C5E;
                            background: transparent;
                            color: #C09C5E;
                            border-radius: 25px;
                            font-family: 'Montserrat', sans-serif;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s ease;
                        ">Отмена</button>
                        
                        <button type="submit" style="
                            flex: 1;
                            padding: 12px;
                            border: none;
                            background: #C09C5E;
                            color: white;
                            border-radius: 25px;
                            font-family: 'Montserrat', sans-serif;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s ease;
                        ">Записаться</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Обработка формы
    document.getElementById('registration-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за заявку! Наш менеджер свяжется с вами для подтверждения записи.');
        closeModal();
    });
}

function closeModal() {
    const modal = document.querySelector('.registration-modal');
    if (modal) {
        modal.remove();
    }
}

function animateWorkshopCards() {
    const cards = document.querySelectorAll('.workshop-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

function initSmoothScroll() {
    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function adjustFirstSectionPadding() {
    const header = document.querySelector('.always-scrolled');
    const firstSection = document.querySelector('.workshops-hero');
    
    if (header && firstSection) {
        const headerHeight = header.offsetHeight;
        firstSection.style.paddingTop = (headerHeight + 80) + 'px';
    }
}

window.addEventListener('resize', adjustFirstSectionPadding);

// Закрытие модального окна по клику вне его
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('registration-modal')) {
        closeModal();
    }
});

