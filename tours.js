// Обработка страницы экскурсий
document.addEventListener('DOMContentLoaded', function() {
    initTours();
    initGallery();
    initTestimonials();
    initFAQ();
    adjustFirstSectionPadding();
});

function initTours() {
    // Бронирование экскурсий
    document.querySelectorAll('.btn-tour').forEach(button => {
        button.addEventListener('click', function() {
            const tourCard = this.closest('.tour-card');
            const tourTitle = tourCard.querySelector('.tour-title').textContent;
            const tourPrice = tourCard.querySelector('.tour-price').textContent;
            
            showTourBooking(tourTitle, tourPrice);
        });
    });
    
    // Анимация появления карточек
    animateTourCards();
}

function showTourBooking(title, price) {
    const modalHtml = `
        <div class="booking-modal" style="
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
                <h3 style="color: #333; margin-bottom: 20px;">Бронирование экскурсии</h3>
                <p style="color: #666; margin-bottom: 10px;"><strong>${title}</strong></p>
                <p style="color: #C09C5E; font-weight: 600; margin-bottom: 25px;">${price}</p>
                
                <form id="booking-form" style="text-align: left;">
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
                    
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Email</label>
                        <input type="email" style="
                            width: 100%;
                            padding: 12px;
                            border: 2px solid #eee;
                            border-radius: 8px;
                            font-family: 'Montserrat', sans-serif;
                        ">
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Дата экскурсии *</label>
                        <input type="date" required style="
                            width: 100%;
                            padding: 12px;
                            border: 2px solid #eee;
                            border-radius: 8px;
                            font-family: 'Montserrat', sans-serif;
                        ">
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; color: #333; font-weight: 500;">Количество человек *</label>
                        <input type="number" min="1" max="20" required style="
                            width: 100%;
                            padding: 12px;
                            border: 2px solid #eee;
                            border-radius: 8px;
                            font-family: 'Montserrat', sans-serif;
                        ">
                    </div>
                    
                    <div style="display: flex; gap: 10px;">
                        <button type="button" onclick="closeBookingModal()" style="
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
                        ">Забронировать</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Обработка формы
    document.getElementById('booking-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за бронирование! Наш менеджер свяжется с вами для подтверждения экскурсии.');
        closeBookingModal();
    });
}

function closeBookingModal() {
    const modal = document.querySelector('.booking-modal');
    if (modal) {
        modal.remove();
    }
}

function animateTourCards() {
    const cards = document.querySelectorAll('.tour-card');
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

function initGallery() {
    // Обработка кликов по галерее
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            showGalleryModal(imgSrc);
        });
    });
}

function showGalleryModal(imgSrc) {
    const modalHtml = `
        <div class="gallery-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        ">
            <img src="${imgSrc}" style="
                max-width: 90%;
                max-height: 90%;
                border-radius: 10px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            " alt="Увеличенное изображение">
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Закрытие по клику
    document.querySelector('.gallery-modal').addEventListener('click', function() {
        this.remove();
    });
}

function initTestimonials() {
    // Анимация отзывов
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((testimonial, index) => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
            testimonial.style.transition = 'all 0.6s ease';
            testimonial.style.opacity = '1';
            testimonial.style.transform = 'translateX(0)';
        }, index * 300 + 500);
    });
}

function initFAQ() {
    // Обработка FAQ
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Закрываем все открытые вопросы
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Открываем текущий, если он был закрыт
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

function adjustFirstSectionPadding() {
    const header = document.querySelector('.always-scrolled');
    const firstSection = document.querySelector('.first-section');
    
    if (header && firstSection) {
        const headerHeight = header.offsetHeight;
        firstSection.style.paddingTop = (headerHeight + 80) + 'px';
    }
}

window.addEventListener('resize', adjustFirstSectionPadding);

// Закрытие модальных окон по клику вне их
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('booking-modal') || e.target.classList.contains('gallery-modal')) {
        e.target.remove();
    }
});