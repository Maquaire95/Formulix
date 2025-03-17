document.querySelectorAll('.photo-card img').forEach(img => {
    img.addEventListener('click', function () {
        document.getElementById('fullscreen-img').src = this.src;
        document.getElementById('fullscreen').style.display = 'flex';
    });
});

document.getElementById('fullscreen').addEventListener('click', function () {
    this.style.display = 'none';
});