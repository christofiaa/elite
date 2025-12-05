// Обработка карточек филиалов для iframe карты
document.addEventListener('DOMContentLoaded', function() {
    initBranchCards();
    adjustFirstSectionPadding();
});

function initBranchCards() {
    // Обработка кликов по карточкам филиалов
    document.querySelectorAll('.branch-card').forEach(card => {
        card.addEventListener('click', function() {
            const branchName = this.getAttribute('data-branch');
            highlightBranchCard(branchName);
        });
    });

    // Обработка кнопок "Построить маршрут"
    document.querySelectorAll('.btn-route').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.branch-card');
            const address = card.getAttribute('data-address');
            const branchName = card.getAttribute('data-branch');
            openRoute(address, branchName);
        });
    });
}

function highlightBranchCard(branchName) {
    // Убираем подсветку у всех карточек
    document.querySelectorAll('.branch-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Подсвечиваем выбранную карточку
    const selectedCard = document.querySelector(`.branch-card[data-branch="${branchName}"]`);
    if (selectedCard) {
        selectedCard.classList.add('active');
        selectedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function openRoute(address, branchName = '') {
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    
    if (confirm(`Построить маршрут до ${branchName || 'филиала'}?\nАдрес: ${address}`)) {
        window.open(mapsUrl, '_blank');
    }
}

// Регулировка отступа для первой секции
function adjustFirstSectionPadding() {
    const header = document.querySelector('.always-scrolled');
    const firstSection = document.querySelector('.first-section');
    
    if (header && firstSection) {
        const headerHeight = header.offsetHeight;
        firstSection.style.paddingTop = (headerHeight + 80) + 'px';
    }
}

window.addEventListener('resize', adjustFirstSectionPadding);