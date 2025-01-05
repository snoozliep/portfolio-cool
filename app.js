// Smooth scroll behavior and highlight active link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the corresponding section
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Highlight the active link
        document.querySelectorAll('#navbar a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('#navbar a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
