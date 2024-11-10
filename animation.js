function animateProgressBar(){
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('style').match(/width:(\d+)%/)[1];
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 1000);
    });
}

function onscroll() {
    const techSections = document.querySelectorAll('.technologie');
    techSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            animateProgressBar();
            window.removeEventListener('scroll', onscroll);
        }
    });
}

window.addEventListener('scroll', onscroll);
