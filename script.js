document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('Semua kolom wajib diisi.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Harap masukkan format email yang valid.');
        return;
    }

    alert('Formulir berhasil disubmit!');
});

document.querySelectorAll('.tooltip').forEach(element => {
    element.addEventListener('mouseover', function() {
        const tooltipText = document.createElement('span');
        tooltipText.classList.add('tooltip-text');
        tooltipText.textContent = this.dataset.tooltip;
        this.appendChild(tooltipText);
    });

    element.addEventListener('mouseout', function() {
        this.querySelector('.tooltip-text').remove();
    });
});
document.getElementById('animateImg').addEventListener('click', function() {
    this.style.transform = 'scale(1.2)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 500); 
});
