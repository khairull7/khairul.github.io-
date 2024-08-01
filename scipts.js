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
    document.addEventListener('DOMContentLoaded', () => {
        const texts = ["front and backend development", "web development"];
        let index = 0;
        const changingText = document.querySelector('.changing-text');
    
        setInterval(() => {
            index = (index + 1) % texts.length;
            changingText.textContent = texts[index];
        }, 3000);
    });
    
});


