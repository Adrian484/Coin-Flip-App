const animationDuration = 2000; // Set the duration in milliseconds

const coin = document.querySelector('.coin');
const flipButton = document.getElementById('flip-button');
const headsButton = document.getElementById('heads-button');
const tailsButton = document.getElementById('tails-button');
const flippingMessage = document.getElementById('flipping-message'); // Reference the message element

flipButton.addEventListener('click', () => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    
    // Show the flipping message when the button is clicked
    flippingMessage.style.display = 'block';
    
    coin.style.animation = `flip-animation ${animationDuration / 1000}s ${result}-animation forwards`;
    
    setTimeout(() => {
        coin.style.animation = '';
        coin.setAttribute('data-side', result);
        updateCoinVisual(result);
        
        // Hide the flipping message when the animation is complete
        flippingMessage.style.display = 'none';
    }, animationDuration); // Use the same duration
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