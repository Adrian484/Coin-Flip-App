const animationDuration = 2000;

const coin = document.querySelector('.coin');
const flipButton = document.getElementById('flip-button');

const flippingMessage = document.getElementById('flipping-message');
const resultMessage = document.getElementById('result-message'); // Reference the result message element

flipButton.addEventListener('click', () => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    const rotationDuration = 3.0; // Duration of the animation in seconds
    
    coin.style.animation = `flip-animation-${result} ${rotationDuration}s ease-out forwards`;
    
    setTimeout(() => {
        coin.style.animation = '';
        coin.setAttribute('data-side', result);
        updateCoinVisual(result);
    }, rotationDuration * 1000); // Convert seconds to milliseconds
});

function updateCoinVisual(side) {
    coin.style.transform = side === 'tails' ? 'rotateY(180deg)' : 'rotateY(0deg)';
}