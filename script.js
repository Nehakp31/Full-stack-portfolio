// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact button animation
const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', () => {
    window.location.href = 'mailto:kpnehagowda20@gmail.com';
});

// Add animation to project cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

// Add hover effect to skill items
document.querySelectorAll('.skills-list li').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.transform = 'translateX(10px)';
        skill.style.transition = 'all 0.3s ease';
    });

    skill.addEventListener('mouseleave', () => {
        skill.style.transform = 'translateX(0)';
    });
});

// Animate header on load
window.addEventListener('load', () => {
    const header = document.querySelector('.header');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    header.style.transition = 'all 0.8s ease';
    
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);
});