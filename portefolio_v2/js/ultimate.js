/* ==========================================
   PORTFOLIO GABRIEL ERMACORA - JS ULTIME
   Animations Premium + Interactivité
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initThemeToggle();
  initFontSelector();
  initTypingEffect();
  initScrollAnimations();
  initScrollToTop();
  initCounters();
  initParallax();
  initTilt();
  initCursor();
  initMatrixRain();
});

// === NAVIGATION ===
function initNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navbar = document.getElementById('navbar');
  const links = navLinks?.querySelectorAll('.nav-link');
  
  // Toggle mobile menu
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks?.classList.toggle('active');
      document.body.style.overflow = navLinks?.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  // Close menu when clicking on a link
  links?.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle?.classList.remove('active');
      navLinks?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Navbar scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// === THEME TOGGLE ===
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  
  // Check for saved theme preference
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
  }
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    
    // Add burst animation
    createBurst(themeToggle);
  });
}

// === FONT SELECTOR (DYSLEXIE) ===
function initFontSelector() {
  const fontSelector = document.getElementById('fontSelector');
  if (!fontSelector) return;
  
  // Check for saved font preference
  const currentFont = localStorage.getItem('font') || 'default';
  fontSelector.value = currentFont;
  applyFont(currentFont);
  
  fontSelector.addEventListener('change', (e) => {
    const font = e.target.value;
    applyFont(font);
    localStorage.setItem('font', font);
    
    // Feedback animation
    fontSelector.style.transform = 'scale(1.1)';
    setTimeout(() => {
      fontSelector.style.transform = 'scale(1)';
    }, 200);
  });
}

function applyFont(font) {
  document.body.classList.remove('dyslexic-font', 'mono-font', 'lexend-font');
  
  switch(font) {
    case 'dyslexic':
      document.body.classList.add('dyslexic-font');
      break;
    case 'mono':
      document.body.style.setProperty('--font-primary', "'JetBrains Mono', monospace");
      break;
    case 'lexend':
      document.body.style.setProperty('--font-primary', "'Lexend', sans-serif");
      break;
    default:
      document.body.style.removeProperty('--font-primary');
  }
}

// === TYPING EFFECT ===
function initTypingEffect() {
  const typingText = document.getElementById('typingText');
  if (!typingText) return;
  
  const texts = [
    'Étudiant en cybersécurité',
    'Développeur passionné',
    'Spécialiste réseaux',
    'Électronicien créatif',
    'Innovateur technique'
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
  }
  
  setTimeout(type, 1000);
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.intro-card, .project-card, .skill-domain, .exp-card, .expertise-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) rotateX(0)';
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px) rotateX(10deg)';
    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(element);
  });
}

// === COUNTERS ===
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        
        const updateCount = () => {
          const count = +counter.textContent.replace('+', '');
          const increment = target / speed;
          
          if (count < target) {
            counter.textContent = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
          } else {
            counter.textContent = target + (target > 5 ? '+' : '');
          }
        };
        
        updateCount();
        observer.unobserve(counter);
      }
    });
  });
  
  counters.forEach(counter => observer.observe(counter));
}

// === PARALLAX EFFECT ===
function initParallax() {
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        
        // Parallax sur hero
        const hero = document.querySelector('.hero');
        if (hero) {
          hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        // Parallax sur les cartes
        document.querySelectorAll('.intro-card').forEach((card, index) => {
          const speed = 0.1 + (index * 0.05);
          const yPos = -(scrolled * speed);
          card.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
      });
      
      ticking = true;
    }
  });
}

// === TILT EFFECT ===
function initTilt() {
  const tiltElements = document.querySelectorAll('[data-tilt]');
  
  tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((centerX - x) / centerX) * 10;
      
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
}

// === CUSTOM CURSOR ===
function initCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.body.appendChild(cursorDot);
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let dotX = 0, dotY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dotX = e.clientX;
    dotY = e.clientY;
  });
  
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  // Hover effects
  const hoverables = document.querySelectorAll('a, button, .btn, .intro-card, .project-card');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.borderColor = 'var(--accent)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.borderColor = 'var(--accent)';
    });
  });
}

// === MATRIX RAIN ===
function initMatrixRain() {
  const canvas = document.createElement('canvas');
  canvas.className = 'matrix-rain';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const matrix = "01";
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const drops = [];
  
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height;
  }
  
  function draw() {
    ctx.fillStyle = 'rgba(10, 22, 18, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00e676';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      drops[i]++;
    }
  }
  
  setInterval(draw, 50);
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// === SCROLL TO TOP ===
function initScrollToTop() {
  const button = document.createElement('button');
  button.className = 'scroll-to-top';
  button.innerHTML = '↑';
  button.setAttribute('aria-label', 'Scroll to top');
  
  Object.assign(button.style, {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    background: 'var(--gradient-primary)',
    color: 'white',
    border: 'none',
    fontSize: '1.75rem',
    fontWeight: '700',
    cursor: 'pointer',
    opacity: '0',
    visibility: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    zIndex: '999',
    boxShadow: '0 10px 30px rgba(0, 230, 118, 0.4)'
  });
  
  document.body.appendChild(button);
  
  // Show/hide button
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  });
  
  // Scroll to top
  button.addEventListener('click', () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    
    // Add burst effect
    createBurst(button);
  });
  
  // Hover effect
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-10px) rotate(360deg) scale(1.1)';
    button.style.boxShadow = '0 20px 50px rgba(0, 230, 118, 0.6)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0) rotate(0deg) scale(1)';
    button.style.boxShadow = '0 10px 30px rgba(0, 230, 118, 0.4)';
  });
}

// === BURST EFFECT ===
function createBurst(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.className = 'burst-particle';
    particle.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: var(--accent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      left: ${centerX}px;
      top: ${centerY}px;
    `;
    
    document.body.appendChild(particle);
    
    const angle = (i / 12) * Math.PI * 2;
    const velocity = 100;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    let x = 0, y = 0;
    let opacity = 1;
    
    function animate() {
      x += vx * 0.1;
      y += vy * 0.1;
      opacity -= 0.02;
      
      particle.style.transform = `translate(${x}px, ${y}px)`;
      particle.style.opacity = opacity;
      
      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    }
    
    animate();
  }
}

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const navbarHeight = 80;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

// === CONSOLE MESSAGE ===
const styles = [
  'color: #00e676',
  'font-size: 24px',
  'font-weight: bold',
  'text-shadow: 0 0 10px rgba(0, 230, 118, 0.5)'
].join(';');

console.log('%c🌲 Bienvenue sur mon portfolio !', styles);
console.log('%cDéveloppé avec passion par Gabriel Ermacora', 'color: #69f0ae; font-size: 16px;');
console.log('%cContact: gabriel.ermacora.pro@gmail.com', 'color: #66bb6a; font-size: 14px;');
console.log('%cThème: Vert Forêt 🌿', 'color: #00c853; font-size: 14px;');

// === PAGE LOAD ANIMATION ===
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.6s ease';
    document.body.style.opacity = '1';
  }, 100);
});