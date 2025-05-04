document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.interactive');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const closeBtn = document.querySelector('.popup-close');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const info = this.parentElement.getAttribute('data-info');
            popupText.textContent = info;
            popup.classList.add('show');
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.classList.remove('show');
    });

    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.classList.remove('show');
        }
    });
});
