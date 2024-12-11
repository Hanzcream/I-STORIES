// Scroll Animation for Cards
const storyCards = document.querySelectorAll('.story-card');

window.addEventListener('scroll', () => {
    storyCards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
            card.classList.add('visible');
        }
    });
});

// Adding CSS Animation
document.styleSheets[0].insertRule(`
    .story-card {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }
`, 0);

document.styleSheets[0].insertRule(`
    .story-card.visible {
        opacity: 1;
        transform: translateY(0);
    }
`, 1);

