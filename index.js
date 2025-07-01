
// Import Swiper styles


// Update the year in the footer
document.getElementById("year").textContent = new Date().getFullYear();


// Animated Slogan
const slogans = [
    "TRUE CAPITALISM.",
    "FAIR TRADE. FREE MARKETS.",
    "EMPOWER BUSINESS."
];

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?";
const el = document.getElementById("animated-slogan");
let index = 0;
let interval;

function scramble(text, onComplete) {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        const scrambled = text.split("")
            .map((char, i) => {
                if (i < iteration) return char;
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

        el.textContent = scrambled;

        if (iteration >= text.length) {
            clearInterval(interval);
            setTimeout(() => {
                index = (index + 1) % slogans.length;
                scramble(slogans[index], onComplete);
            }, 1500);
        }

        iteration += 1 / 2;
    }, 40);
}

// Start the animation
scramble(slogans[index]);




document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    const menuLinks = document.querySelectorAll('.mobile-link');
    const closeButton = document.getElementById('menu-close'); // optional
  
    menuToggle?.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  
    closeButton?.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    });
  
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      });
    });
  });
  


// Initialize AOS (Animate On Scroll)
AOS.init();


