// Efeito de fade-in nas seções
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.3}s`;
    });

    // Lógica do menu hamburguer (se você tiver um)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Lógica para abrir/fechar o mini-menu de contatos
    const openContactMenuBtn = document.getElementById('openContactMenuBtn');
    const closeContactMenuBtn = document.getElementById('closeContactMenuBtn');
    const contactMiniMenu = document.getElementById('contactMiniMenu');

    if (openContactMenuBtn && contactMiniMenu && closeContactMenuBtn) {
        openContactMenuBtn.addEventListener('click', () => {
            contactMiniMenu.classList.add('active');
        });

        closeContactMenuBtn.addEventListener('click', () => {
            contactMiniMenu.classList.remove('active');
        });
    }

    // NOVA LÓGICA PARA ABRIR/FECHAR O MINI-MENU DE CATÁLOGOS
    const openCatalogMenuBtn = document.getElementById('openCatalogMenuBtn');
    const closeCatalogMenuBtn = document.getElementById('closeCatalogMenuBtn');
    const catalogListMiniMenu = document.getElementById('catalogListMiniMenu');

    if (openCatalogMenuBtn && catalogListMiniMenu && closeCatalogMenuBtn) {
        openCatalogMenuBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Impede a rolagem para o topo da página
            catalogListMiniMenu.classList.add('active');
            // Opcional: Se você quiser fechar o menu de contatos ao abrir o de catálogos
            if (contactMiniMenu && contactMiniMenu.classList.contains('active')) {
                contactMiniMenu.classList.remove('active');
            }
        });

        closeCatalogMenuBtn.addEventListener('click', () => {
            catalogListMiniMenu.classList.remove('active');
        });
    }
});

// Animação do fundo (partículas rosas)
window.addEventListener('load', () => {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');

    // Ajusta o tamanho do canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Partículas
    let particlesArray = [];
    const colors = ["rgba(255,192,203,0.7)", "rgba(255,182,193,0.7)"];
    const maxParticles = 100;

    function createParticles() {
        particlesArray = [];
        for (let i = 0; i < maxParticles; i++) {
            particlesArray.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 4 + 1,
                speedY: Math.random() * 1 + 0.5,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.y += p.speedY;
            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }
        });
        requestAnimationFrame(animateParticles);
    }

    createParticles();
    animateParticles();
});

// Funções do Modal (se você ainda estiver usando, não está no seu HTML atual)
function openCatalogModal() {
    document.getElementById('catalogModal').style.display = 'block';
}

function closeCatalogModal() {
    document.getElementById('catalogModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('catalogModal');
    if (modal && event.target === modal) {
        closeCatalogModal();
    }
};