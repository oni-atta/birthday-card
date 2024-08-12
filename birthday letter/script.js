document.getElementById('envelope').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    const card = document.getElementById('card');

    // Open the envelope
    envelope.style.transform = 'rotateX(-180deg)';
    envelope.style.opacity = '0';
    
    // Show the card
    setTimeout(function() {
        card.style.display = 'block';
    }, 500); // Delay to wait for the envelope to finish rotating
});

// Create hearts dynamically
const heartsContainer = document.querySelector('.hearts');
for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heartsContainer.appendChild(heart);
}
