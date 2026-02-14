/* ==========================================
   PORTFOLIO GABRIEL ERMACORA - JAVASCRIPT
   ========================================== */

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact"
    },
    hero: {
      label: "Bonjour, je suis",
      description: "Étudiant en Bac Pro CIEL passionné par le développement logiciel, la cybersécurité et l'électronique. Je crée des solutions techniques innovantes et pratiques.",
      stat_projects: "Projets",
      stat_langs: "Langages",
      stat_internships: "Stages",
      btn_projects: "Voir mes projets",
      btn_cv: "Télécharger CV"
    },
    intro: {
      education_title: "Formation",
      education_desc: "Bac Pro CIEL au Lycée Notre-Dame La Riche",
      education_link: "En savoir plus",
      experience_title: "Expérience",
      experience_desc: "Stages en robotique et informatique",
      experience_link: "Voir mon parcours",
      projects_title: "Projets",
      projects_desc: "Applications, web, électronique",
      projects_link: "Découvrir"
    },
    cta: {
      title: "Travaillons ensemble",
      desc: "Ouvert aux stages et projets collaboratifs",
      btn_contact: "Me contacter",
      btn_cv: "Télécharger CV"
    },
    footer: {
      desc: "Étudiant en cybersécurité, informatique, réseaux et électronique",
      nav_title: "Navigation",
      contact_title: "Contact",
      rights: "Tous droits réservés."
    },
    // Page: About
    about: {
      title: "À propos de moi",
      subtitle: "Passionné par la technologie et l'innovation",
      who_title: "Qui suis-je ?",
      who_p1: "Étudiant en <strong>Bac professionnel CIEL</strong> (Cybersécurité, Informatique et réseaux, ÉLectronique) au Lycée Notre-Dame La Riche à Tours.",
      who_p2: "Passionné par la technologie depuis toujours, je développe mes compétences à travers des projets concrets alliant cybersécurité, développement logiciel et systèmes embarqués.",
      who_p3: "Mon approche est orientée <strong>pratique et technique</strong> : de la programmation de robots autonomes à la création d'applications professionnelles, en passant par la configuration de réseaux sécurisés.",
      info_title: "Informations",
      label_name: "Nom",
      label_loc: "Localisation",
      label_edu: "Formation",
      label_email: "Email",
      lang_title: "Langues",
      lang_fr: "Français",
      lang_en: "Anglais",
      lang_de: "Allemand",
      level_native: "Natif",
      edu_title: "Formation",
      edu_hs_role: "Bac professionnel CIEL",
      edu_hs_desc: "Cybersécurité, Informatique et réseaux, ÉLectronique",
      edu_hs_badge: "Tableau d'honneur 2025",
      edu_coll_role: "Diplôme National du Brevet",
      edu_coll_badge: "Mention Bien",
      exp_title: "Expériences",
      exp_intern_title: "Stage Ingénieur",
      exp_intern_desc: "Programmation de robots mBot et Boe-Bot, tests de déplacements autonomes, projet podium automatisé.",
      exp_it_title: "Stage Service Informatique",
      exp_it_desc: "Mise à jour Apple TV et imprimantes, démontage et diagnostic PC, gestion MDM iPads."
    },
    // Page: Projects
    projects: {
      title: "Mes Projets",
      subtitle: "Réalisations techniques concrètes",
      cat_mobile: "Mobile",
      cat_electro: "Électronique",
      cat_web: "Web",
      cat_arduino: "Arduino",
      cat_net: "Réseau",
      cat_auto: "Automatisation",
      p1_title: "App Pro iPad",
      p1_desc: "Application professionnelle en Swift pour gestion des réparations smartphones. Base de données locale, génération de devis PDF.",
      p2_title: "Kart Électrique",
      p2_desc: "Kart avec moteur brushless, transmission optimisée et récupération d'énergie au freinage.",
      p3_title: "Sites Web Responsives",
      p3_desc: "Sites multi-pages en HTML, CSS et JavaScript. Design moderne, animations, 100% responsive.",
      p4_title: "Projets Embarqués",
      p4_desc: "LED RGB, feux tricolores, systèmes d'automatisation avec capteurs et servomoteurs.",
      p5_title: "Infrastructure Réseau",
      p5_desc: "Configuration VLANs, routage, sécurisation ACL sur Packet Tracer.",
      p6_title: "Scripts Python",
      p6_desc: "Automatisation, traitement de données, outils système et applications Tkinter."
    },
    // Page: Skills
    skills: {
      title: "Compétences",
      subtitle: "Technologies et domaines d'expertise",
      prog_title: "Langages de Programmation",
      tools_title: "Outils & Technologies",
      expert_title: "Domaines d'expertise",
      expert_net: "Réseau & Cybersécurité",
      expert_elec: "Électronique",
      expert_apple: "Apple Ecosystem"
    },
    // Page: Contact
    contact: {
      title: "Contact",
      subtitle: "Discutons de vos projets",
      info_title: "Informations",
      info_desc: "Je suis ouvert aux opportunités de stage et projets collaboratifs.",
      label_email: "Email",
      label_phone: "Téléphone",
      label_loc: "Localisation",
      cv_title: "Curriculum Vitae",
      cv_desc: "Téléchargez mon CV pour plus de détails",
      btn_cv: "Télécharger CV",
      form_title: "Envoyez un message",
      label_name: "Nom complet *",
      label_user_email: "Email *",
      label_subject: "Sujet *",
      opt_select: "Sélectionnez",
      opt_stage: "Opportunité de stage",
      opt_project: "Collaboration projet",
      opt_question: "Question technique",
      opt_other: "Autre",
      label_msg: "Message *",
      btn_send: "Envoyer le message",
      required: "* Champs obligatoires"
    },
    // Page: Merci
    merci: {
      title: "Message envoyé !",
      subtitle: "Merci de m'avoir contacté",
      body_title: "Votre message a bien été envoyé",
      body_text: "Je vous remercie pour votre message. Je m'efforce de répondre à tous les messages dans les <strong>24 heures</strong>.",
      btn_home: "Retour à l'accueil",
      btn_projects: "Voir mes projets"
    },
    typing: [
      'Étudiant en cybersécurité',
      'Développeur passionné',
      'Spécialiste réseaux',
      'Électronicien créatif',
      'Innovateur technique'
    ]
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      label: "Hello, I am",
      description: "Bac Pro CIEL student passionate about software development, cybersecurity, and electronics. I create innovative and practical technical solutions.",
      stat_projects: "Projects",
      stat_langs: "Languages",
      stat_internships: "Internships",
      btn_projects: "View my projects",
      btn_cv: "Download CV"
    },
    intro: {
      education_title: "Education",
      education_desc: "Bac Pro CIEL at Notre-Dame La Riche High School",
      education_link: "Read more",
      experience_title: "Experience",
      experience_desc: "Internships in robotics and IT",
      experience_link: "See my path",
      projects_title: "Projects",
      projects_desc: "Apps, web, electronics",
      projects_link: "Discover"
    },
    cta: {
      title: "Let's work together",
      desc: "Open to internships and collaborative projects",
      btn_contact: "Contact me",
      btn_cv: "Download CV"
    },
    footer: {
      desc: "Student in cybersecurity, IT, networks, and electronics",
      nav_title: "Navigation",
      contact_title: "Contact",
      rights: "All rights reserved."
    },
    // Page: About
    about: {
      title: "About Me",
      subtitle: "Passionate about technology and innovation",
      who_title: "Who am I?",
      who_p1: "Student in <strong>Bac Pro CIEL</strong> (Cybersecurity, IT and Networks, Electronics) at Notre-Dame La Riche High School in Tours, France.",
      who_p2: "Passionate about technology since always, I develop my skills through concrete projects combining cybersecurity, software development, and embedded systems.",
      who_p3: "My approach is <strong>practical and technical</strong>: from programming autonomous robots to creating professional applications, including secure network configuration.",
      info_title: "Information",
      label_name: "Name",
      label_loc: "Location",
      label_edu: "Education",
      label_email: "Email",
      lang_title: "Languages",
      lang_fr: "French",
      lang_en: "English",
      lang_de: "German",
      level_native: "Native",
      edu_title: "Education",
      edu_hs_role: "Bac Pro CIEL",
      edu_hs_desc: "Cybersecurity, IT and Networks, Electronics",
      edu_hs_badge: "Honor Roll 2025",
      edu_coll_role: "National Diploma (Brevet)",
      edu_coll_badge: "With Honors",
      exp_title: "Experience",
      exp_intern_title: "Engineering Intern",
      exp_intern_desc: "Programming mBot and Boe-Bot robots, autonomous movement tests, automated podium project.",
      exp_it_title: "IT Service Intern",
      exp_it_desc: "Apple TV and printer updates, PC disassembly and diagnosis, iPad MDM management."
    },
    // Page: Projects
    projects: {
      title: "My Projects",
      subtitle: "Concrete technical achievements",
      cat_mobile: "Mobile",
      cat_electro: "Electronics",
      cat_web: "Web",
      cat_arduino: "Arduino",
      cat_net: "Network",
      cat_auto: "Automation",
      p1_title: "Pro iPad App",
      p1_desc: "Professional Swift application for smartphone repair management. Local database, PDF quote generation.",
      p2_title: "Electric Kart",
      p2_desc: "Kart with brushless motor, optimized transmission, and regenerative braking.",
      p3_title: "Responsive Websites",
      p3_desc: "Multi-page sites in HTML, CSS, and JavaScript. Modern design, animations, 100% responsive.",
      p4_title: "Embedded Projects",
      p4_desc: "RGB LEDs, traffic lights, automation systems with sensors and servos.",
      p5_title: "Network Infrastructure",
      p5_desc: "VLAN configuration, routing, ACL security on Packet Tracer.",
      p6_title: "Python Scripts",
      p6_desc: "Automation, data processing, system tools, and Tkinter applications."
    },
    // Page: Skills
    skills: {
      title: "Skills",
      subtitle: "Technologies and fields of expertise",
      prog_title: "Programming Languages",
      tools_title: "Tools & Technologies",
      expert_title: "Fields of Expertise",
      expert_net: "Network & Cybersecurity",
      expert_elec: "Electronics",
      expert_apple: "Apple Ecosystem"
    },
    // Page: Contact
    contact: {
      title: "Contact",
      subtitle: "Let's discuss your projects",
      info_title: "Information",
      info_desc: "I am open to internship opportunities and collaborative projects.",
      label_email: "Email",
      label_phone: "Phone",
      label_loc: "Location",
      cv_title: "Curriculum Vitae",
      cv_desc: "Download my CV for more details",
      btn_cv: "Download CV",
      form_title: "Send a message",
      label_name: "Full Name *",
      label_user_email: "Email *",
      label_subject: "Subject *",
      opt_select: "Select",
      opt_stage: "Internship Opportunity",
      opt_project: "Project Collaboration",
      opt_question: "Technical Question",
      opt_other: "Other",
      label_msg: "Message *",
      btn_send: "Send Message",
      required: "* Required fields"
    },
    // Page: Merci
    merci: {
      title: "Message sent!",
      subtitle: "Thank you for contacting me",
      body_title: "Your message has been sent successfully",
      body_text: "Thank you for your message. I strive to reply to all messages within <strong>24 hours</strong>.",
      btn_home: "Back to Home",
      btn_projects: "View my projects"
    },
    typing: [
      'Cybersecurity Student',
      'Passionate Developer',
      'Network Specialist',
      'Creative Electronics',
      'Technical Innovator'
    ]
  }
};

let currentLang = 'fr';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initThemeToggle();
  initLanguageToggle(); // New
  initTypingEffect();
  initScrollAnimations();
  initScrollToTop();
  
  // Initialize language from storage
  const savedLang = localStorage.getItem('lang') || 'fr';
  if (savedLang !== 'fr') {
    setLanguage(savedLang);
  }
});

// === LANGUAGE TOGGLE ===
function initLanguageToggle() {
  const langToggle = document.getElementById('langToggle');
  if (!langToggle) return;

  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  // Update toggle text
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
  }

  // Update text content
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      if (value) value = value[k];
    }
    
    if (value) {
      // Handle HTML content safely if needed, or just text
      if (el.tagName === 'P' && value.includes('<strong>')) {
         el.innerHTML = value;
      } else {
         el.textContent = value;
      }
    }
  });

  // Restart typing effect with new language
  const typingText = document.getElementById('typingText');
  if (typingText) {
      // We need to reset the typing effect. 
      // The easiest way is to let the loop pick up the new array next time, 
      // but to force immediate change we can clear the timeout.
      // For simplicity, we just let the global `texts` variable in initTypingEffect handle it.
      // However, since initTypingEffect defines `texts` locally, we need to refactor it slightly.
      // See initTypingEffect below.
  }
}

// === NAVIGATION ===
function initNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const links = navLinks.querySelectorAll('.nav-link');
  
  // Toggle mobile menu
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Close menu when clicking on a link
  links.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle?.classList.remove('active');
      navLinks?.classList.remove('active');
    });
  });
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 80) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
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
    
    // Add rotation effect
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
  });
}

// === TYPING EFFECT ===
let typingTimeout; // Global to control the timeout

function initTypingEffect() {
  const typingText = document.getElementById('typingText');
  if (!typingText) return;
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    // Get current texts based on language
    const texts = translations[currentLang].typing;
    
    // Safety check if index out of bounds after language switch
    if (textIndex >= texts.length) textIndex = 0;
    
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
    
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(type, typingSpeed);
  }
  
  type();
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.intro-card, .project-featured, .skill-domain');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
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
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
}

// === SCROLL TO TOP ===
function initScrollToTop() {
  const button = document.createElement('button');
  button.className = 'scroll-to-top';
  button.setAttribute('aria-label', 'Scroll to top');
  button.innerHTML = '↑';
  
  Object.assign(button.style, {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'var(--accent)',
    color: 'white',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    opacity: '0',
    visibility: 'hidden',
    transition: 'all 0.3s ease',
    zIndex: '999',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Hover effect
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-5px)';
    button.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.5)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = '';
    button.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
  });
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
console.log('%c👋 Bienvenue sur mon portfolio !', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%cDéveloppé avec passion par Gabriel Ermacora', 'color: #10b981; font-size: 14px;');
console.log('%cContact: gabriel.ermacora.pro@gmail.com', 'color: #6b6b78; font-size: 12px;');