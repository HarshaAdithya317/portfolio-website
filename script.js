// script.js
const container = document.querySelector('.container');

// Add an event listener to the container for hover effect
container.addEventListener('mouseenter', () => {
    container.style.transform = 'scale(1.1)';
});

container.addEventListener('mouseleave', () => {
    container.style.transform = 'scale(1.0)';
});
// script.js
const profileImg = document.getElementById('profile-img');

profileImg.addEventListener('mouseover', () => {
    profileImg.style.opacity = 0.7;
    setTimeout(() => {
        profileImg.style.opacity = 1;
    }, 1000); // Set the duration in milliseconds (1000ms = 1 second)
});
