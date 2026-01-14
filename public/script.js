// GrowX India Mart - Dynamic Product Loading

const products = [
    {
        id: 1,
        name: "Premium OEM Seat Covers",
        description: "OEM-authorized genuine leather covers with custom fitment as per OEM specifications.",
        image: "./assets/seat-covers.jpeg",
        category: "OEM Solutions"
    },
    {
        id: 2,
        name: "Custom-Fit 7D Floor Mats",
        description: "Premium all-weather protection floor mats with perfect fitment and luxury finish.",
        image: "./assets/mat.jpeg",
        category: "Accessories"
    },
    {
        id: 3,
        name: "Premium Car Audio System",
        description: "High-fidelity infotainment and sound systems with Android Auto and Apple CarPlay.",
        image: "./assets/audio-systems.jpeg",
        category: "Electronics"
    }
];

let displayedCount = 0;
const productsPerPage = 3;
const productGrid = document.getElementById('product-grid');

function createProductCard(product) {
    return `
        <div class="product-card bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            <div class="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onerror="this.src='https://placehold.co/800x500/e2e8f0/64748b?text=${encodeURIComponent(product.name)}'">
                <div class="absolute top-4 left-4">
                    <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-blue-600 rounded-full shadow-sm font-sans">
                        ${product.category}
                    </span>
                </div>
            </div>
            <div class="p-8">
                <h3 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">${product.name}</h3>
                <p class="text-slate-500 text-base leading-relaxed mb-6">${product.description}</p>
                <button onclick="window.location.href='#contact'" class="w-full py-4 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-900 font-bold rounded-xl transition-all border border-slate-200 hover:border-blue-600">
                    Enquire Now
                </button>
            </div>
        </div>
    `;
}

function loadProducts() {
    const nextProducts = products.slice(displayedCount, displayedCount + productsPerPage);

    nextProducts.forEach(product => {
        const card = createProductCard(product);
        productGrid.insertAdjacentHTML('beforeend', card);
    });

    displayedCount += nextProducts.length;
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();

    // Mobile Menu Toggle Logic
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconPath = document.getElementById('menu-icon-path');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');

            // Toggle hamburger to X icon
            if (!isHidden) {
                menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            }
        });

        // Close menu when clicking links
        document.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            });
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! We have received your message and will get back to you soon at growxindiamart2025@gmail.com.');
            contactForm.reset();
        });
    }
});
