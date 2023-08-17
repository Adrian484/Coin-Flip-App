const animationDuration = 2000;

const coin = document.querySelector('.coin');
const flipButton = document.getElementById('flip-button');

const flippingMessage = document.getElementById('flipping-message');
const resultMessage = document.getElementById('result-message');

flipButton.addEventListener('click', () => {
    // Hide the result message and show the flipping message
    resultMessage.style.display = 'none';
    flippingMessage.style.display = 'block';

    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    const rotationDuration = 3.0;
    
    coin.style.animation = `flip-animation-${result} ${rotationDuration}s ease-out forwards`;
    
    coin.addEventListener('animationend', () => {
        // Animation ended, update the coin visual and display result message
        coin.style.animation = '';
        coin.setAttribute('data-side', result);
        updateCoinVisual(result);
        flippingMessage.style.display = 'none';
        resultMessage.style.display = 'block';
        resultMessage.textContent = result === 'heads' ? 'Heads!' : 'Tails!';
    }, { once: true }); // Ensure the event listener is called only once
});

function updateCoinVisual(side) {
    coin.style.transform = side === 'tails' ? 'rotateY(180deg)' : 'rotateY(0deg)';
}