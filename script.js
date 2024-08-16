
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate the new positions for left and right containers
    const leftContainer = document.querySelector('.left-container');
    const rightContainer = document.querySelector('.right-container');

    const leftMove = (scrollPosition - windowHeight) * 0.1;  // Change 0.1 to adjust speed/delay
    const rightMove = (scrollPosition - windowHeight) * -0.1;

    // Apply the transformations with smooth animation
    leftContainer.style.transform = `translateY(${leftMove}px)`;
    rightContainer.style.transform = `translateY(${rightMove}px)`;
    });