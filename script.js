document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const discordLink = "https://discord.gg/2MAvArcxdq";
    const supportOptions = document.querySelectorAll('.support-option');
    const selectedSupportOption = document.getElementById('selected-support-option');
    let currentSupportOption = 'Discord';

    const products = [
        {
            id: 1,
            name: "SPOTIFY-LIFYRV",
            price: 50.00,
            image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=500&q=80",
            description: "base clean vrpex, scripts exclusivos, mapas clean, carros próprios para o servidor, dp tema rj !"
        },
        {
            id: 2,
            name: "GARAGEM EXCLUSIVA",
            price: 75.00,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
            description: "Sistema de garagem com visual moderno e otimizado."
        },
        {
            id: 3,
            name: "Pack 100 Carros Otimizados",
            price: 140.00,
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=500&q=80",
            description: "Coleção de veículos leves e prontos para o servidor."
        }
    ];

    // Load Products
    function loadProducts() {
        productGrid.innerHTML = products.map(product => `
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/500x300/141414/ff0000?text=Sem+Imagem'" class="product-image">
                </div>
                <div class="product-info">
                    <div class="product-badge"><i class="fas fa-code"></i> SCRIPT</div>
                    <h3>${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <span class="price">R$ ${product.price.toFixed(2)}</span>
                    <a href="${discordLink}" target="_blank" class="btn btn-primary btn-block js-buy-button">
                        <i class="fab fa-discord"></i> Comprar via Discord
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Initial Load
    loadProducts();

    function updateBuyButtons() {
        document.querySelectorAll('.js-buy-button').forEach(button => {
            button.innerHTML = `<i class="fas fa-headset"></i> Atendimento: ${currentSupportOption}`;
        });
    }

    supportOptions.forEach(option => {
        option.addEventListener('click', () => {
            currentSupportOption = option.dataset.supportOption;

            supportOptions.forEach(item => {
                const isSelected = item === option;
                item.classList.toggle('selected', isSelected);
                item.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
            });

            selectedSupportOption.textContent = `Atendimento selecionado: ${currentSupportOption}`;
            updateBuyButtons();
        });
    });

    updateBuyButtons();

    // Terms Modal Logic
    const termsModal = document.getElementById('terms-modal');
    const openTerms = document.getElementById('open-terms');
    const closeTerms = document.getElementById('close-terms');
    const closeTermsBtn = document.getElementById('close-terms-btn');

    function toggleTerms() {
        termsModal.classList.toggle('hidden');
        document.body.style.overflow = termsModal.classList.contains('hidden') ? 'auto' : 'hidden';
    }

    openTerms.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTerms();
    });

    closeTerms.addEventListener('click', toggleTerms);
    closeTermsBtn.addEventListener('click', toggleTerms);

    // Close on outside click
    termsModal.addEventListener('click', (e) => {
        if (e.target === termsModal) toggleTerms();
    });
});
