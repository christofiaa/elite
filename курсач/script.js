document.addEventListener('DOMContentLoaded', function() {
        const header = document.querySelector('header');
        const videoContainer = document.querySelector('.video-container');
        
        function updateHeader() {
            const videoHeight = videoContainer.offsetHeight;
            const offset = 100; // Можно настроить отступ
            
            // Меняем когда прокрутили на (высота видео - отступ)
            if (window.scrollY > videoHeight - offset) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        updateHeader();
        window.addEventListener('scroll', updateHeader);

        // Принудительное воспроизведение видео в новой секции
        const showcaseVideo = document.querySelector('.video-showcase video');
        if (showcaseVideo) {
            showcaseVideo.play().catch(function(error) {
                console.log('Автовоспроизведение заблокировано:', error);
            });
        }
    });
    // Добавьте этот код перед закрывающим тегом </body> или в ваш основной JS файл
document.addEventListener('DOMContentLoaded', function() {
    // Элементы для бургер-меню
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    
    // Функция для открытия/закрытия мобильного меню
    function toggleMobileMenu() {
        burgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }
    
    // Функция для закрытия мобильного меню
    function closeMobileMenu() {
        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Инициализация бургер-меню
    if (burgerMenu && mobileNav && mobileOverlay) {
        burgerMenu.addEventListener('click', toggleMobileMenu);
        mobileOverlay.addEventListener('click', closeMobileMenu);
        
        // Закрытие меню при клике на ссылку
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
    
    // Адаптация уведомлений для мобильных
    function adaptNotificationsForMobile() {
        const notificationContainer = document.querySelector('.notification-container');
        if (window.innerWidth <= 480 && notificationContainer) {
            // Для очень маленьких экранов немного корректируем положение
            notificationContainer.style.marginRight = '10px';
        }
    }
    
    // Вызываем при загрузке и изменении размера окна
    window.addEventListener('load', adaptNotificationsForMobile);
    window.addEventListener('resize', adaptNotificationsForMobile);
});
document.addEventListener('DOMContentLoaded', function() {
    // Элементы для бургер-меню
    const burgerMenu = document.getElementById('burger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileOverlay = document.getElementById('mobile-overlay');
    
    if (burgerMenu && mobileNav && mobileOverlay) {
        // Функция для открытия/закрытия мобильного меню
        function toggleMobileMenu() {
            burgerMenu.classList.toggle('active');
            mobileNav.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        }
        
        // Функция для закрытия мобильного меню
        function closeMobileMenu() {
            burgerMenu.classList.remove('active');
            mobileNav.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        burgerMenu.addEventListener('click', toggleMobileMenu);
        mobileOverlay.addEventListener('click', closeMobileMenu);
        
        // Закрытие меню при клике на ссылку
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
});