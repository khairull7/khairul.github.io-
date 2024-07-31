// JavaScript untuk toggle sidebar
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('toggle-sidebar');

    toggleButton.addEventListener('click', function() {
        if (sidebar.style.transform === 'translateX(-250px)') {
            sidebar.style.transform = 'translateX(0)';
            document.querySelector('.main-content').style.marginLeft = '250px';
            document.querySelector('footer').style.width = 'calc(100% - 250px)';
            document.querySelector('footer').style.left = '250px';
        } else {
            sidebar.style.transform = 'translateX(-250px)';
            document.querySelector('.main-content').style.marginLeft = '0';
            document.querySelector('footer').style.width = '100%';
            document.querySelector('footer').style.left = '0';
        }
    });
});

// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const texts = ['front and backend development', 'web development'];
    let currentIndex = 0;

    function changeText() {
        dynamicText.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(changeText, 3000); // Change text every 3 seconds
    }

    changeText();
});

