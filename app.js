const animationDuration = 2000;

const coin = document.querySelector('.coin');
const flipButton = document.getElementById('flip-button');
const headsButton = document.getElementById('heads-button');
const tailsButton = document.getElementById('tails-button');
const flippingMessage = document.getElementById('flipping-message');
const resultMessage = document.getElementById('result-message'); // Reference the result message element

flipButton.addEventListener('click', () => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    
    flippingMessage.style.display = 'block';
    resultMessage.style.display = 'none'; // Hide the result message on button click
    
    coin.style.animation = `flip-animation ${animationDuration / 1000}s ${result}-animation forwards`;
    
    setTimeout(() => {
        coin.style.animation = '';
        coin.setAttribute('data-side', result);
        updateCoinVisual(result);
        
        flippingMessage.style.display = 'none';
        resultMessage.style.display = 'block'; // Show the result message
        
        // Set the content of the result message based on the outcome
        resultMessage.textContent = result === 'heads' ? 'Heads!' : 'Tails!';
    }, animationDuration);
});

headsButton.addEventListener('click', () => {
    coin.style.animation = '';
    coin.setAttribute('data-side', 'heads');
    updateCoinVisual('heads');
});

tailsButton.addEventListener('click', () => {
    coin.style.animation = '';
    coin.setAttribute('data-side', 'tails');
    updateCoinVisual('tails');
});

function updateCoinVisual(side) {
    coin.style.transform = side === 'tails' ? 'rotateY(180deg)' : 'rotateY(0deg)';
}