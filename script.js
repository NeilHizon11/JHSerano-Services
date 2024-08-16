
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

  
    const leftContainer = document.querySelector('.left-container');
    const rightContainer = document.querySelector('.right-container');

    const leftMove = (scrollPosition - windowHeight) * 0.1;  
    const rightMove = (scrollPosition - windowHeight) * -0.1;

   
    leftContainer.style.transform = `translateY(${leftMove}px)`;
    rightContainer.style.transform = `translateY(${rightMove}px)`;
    });
