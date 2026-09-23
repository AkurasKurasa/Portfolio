// Scroll progress bar
const progressBar = document.getElementById('scrollProgress');
function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
}

// Header shadow on scroll
const header = document.getElementById('siteHeader');
function updateHeader() {
    if (window.scrollY > 8) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', () => {
    updateProgress();
    updateHeader();
}, { passive: true });
updateProgress();
updateHeader();

// Cursor spotlight in hero
const hero = document.getElementById('heroSection');
const spotlight = document.getElementById('heroSpotlight');
if (hero && spotlight) {
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlight.style.setProperty('--spot-x', x + 'px');
        spotlight.style.setProperty('--spot-y', y + 'px');
        spotlight.style.opacity = '1';
    });
    hero.addEventListener('mouseleave', () => {
        spotlight.style.opacity = '0';
    });
}

// Scroll-reveal animations, staggered within each container
const revealEls = document.querySelectorAll('.reveal');
const groups = new Map();
revealEls.forEach((el) => {
    const parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const siblings = groups.get(el.parentElement) || [el];
            const index = siblings.indexOf(el);
            el.style.transitionDelay = (index * 80) + 'ms';
            el.classList.add('in-view');
            observer.unobserve(el);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el) => observer.observe(el));
