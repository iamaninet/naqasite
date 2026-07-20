/* ===== NAQAA INITIATIVE – app.js ===== */
'use strict';

/* ---------- NAVBAR SCROLL ---------- */
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

/* ---------- HAMBURGER MENU ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

/* Close menu on link click */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity = '';
    });
  });
});

/* ---------- ACTIVE NAV LINK ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

const observerNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(sec => observerNav.observe(sec));

/* ---------- SCROLL ANIMATIONS ---------- */
const animateElements = document.querySelectorAll('.animate-on-scroll');

const observerAnim = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observerAnim.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

animateElements.forEach(el => observerAnim.observe(el));

/* ---------- COUNTER ANIMATION ---------- */
const statNumbers = document.querySelectorAll('.stat-number[data-target]');

const observerStats = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current);
      }, 16);

      observerStats.unobserve(el);
    }
  });
}, { threshold: 0.4 });

statNumbers.forEach(el => observerStats.observe(el));

/* ---------- PARTICLES ---------- */
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = window.innerWidth < 768 ? 15 : 30;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100 + 100}%;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * -15}s;
      opacity: ${Math.random() * 0.4 + 0.1};
    `;
    container.appendChild(p);
  }
}
createParticles();

/* ---------- CONTACT FORM ---------- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جارٍ الإرسال...';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      contactForm.reset();
      showToast('✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    }, 1800);
  });
}

/* ---------- PLEDGE BUTTON ---------- */
const pledgeBtn = document.querySelector('.btn-pledge');
if (pledgeBtn) {
  pledgeBtn.addEventListener('click', () => {
    pledgeBtn.textContent = '💚 شكراً لك!';
    pledgeBtn.disabled = true;
    pledgeBtn.style.background = '#c8f890';
    showToast('🌿 أحسنت! أنت الآن جزء من مبادرة نقاء. معاً نبني بيئة أنظف!');
  });
}

/* ---------- TOAST ---------- */
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* ---------- SMOOTH SCROLL (offset for fixed nav) ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ---------- CURSOR HOVER GLOW (desktop only) ---------- */
if (window.matchMedia('(hover: hover)').matches) {
  document.addEventListener('mousemove', (e) => {
    const glow = document.getElementById('cursorGlow');
    if (glow) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }
  });
}

/* ---------- ENTRANCE ANIMATION OBSERVER (stagger cards) ---------- */
const cardGroups = [
  '.about-card',
  '.problem-card',
  '.stat-card',
  '.tip-card',
  '.timeline-item',
  '.contact-item'
];

cardGroups.forEach(selector => {
  const cards = document.querySelectorAll(selector);
  cards.forEach((card, i) => {
    card.style.transitionDelay = (i * 0.08) + 's';
  });
});

/* ---------- DYNAMIC YEAR ---------- */
const yearEls = document.querySelectorAll('.current-year');
yearEls.forEach(el => {
  el.textContent = new Date().getFullYear();
});

/* ---------- HERO LOGO HOVER ---------- */
const heroLogo = document.querySelector('.logo-big-mark');
if (heroLogo) {
  heroLogo.addEventListener('mouseenter', () => {
    heroLogo.style.transform = 'scale(1.08) rotate(3deg)';
  });
  heroLogo.addEventListener('mouseleave', () => {
    heroLogo.style.transform = '';
  });
}

console.log('%c🌿 نقاء – مبادرة توعوية بيئية', 'font-size:18px;color:#00472a;font-weight:bold;');
console.log('%cمعاً نبني بيئة أنظف 💚', 'font-size:13px;color:#003a48;');

/* ========================================
   LEARN MODAL – Interactive Experience
   ======================================== */

(function () {
  var TOTAL = 4; // 4 steps inside modal
  var LABELS = ['١ / ٤', '٢ / ٤', '٣ / ٤', '٤ / ٤'];

  var overlay   = document.getElementById('learnModal');
  var openBtn   = document.getElementById('openLearnModal');
  var closeBtn  = document.getElementById('closeLearnModal');
  var fill      = document.getElementById('lmodalFill');
  var stepLbl   = document.getElementById('lmodalStepLbl');
  var quizOpts  = document.querySelectorAll('#lmsOpts .lms-opt');
  var feedback  = document.getElementById('lmsFeedback');
  var quizFooter = document.getElementById('lmsQuizFooter');
  var restartBtn = document.getElementById('lmsRestartBtn');
  var confCont  = document.getElementById('lmsCertConfetti');

  if (!overlay || !openBtn) return;

  /* ---------- Open / Close ---------- */
  function openModal() {
    goToStep(1);
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ---------- Step Navigation ---------- */
  function goToStep(n) {
    document.querySelectorAll('.lmodal-step').forEach(function(s) {
      s.classList.remove('active');
    });
    var target = document.querySelector('.lmodal-step[data-step="' + n + '"]');
    if (target) target.classList.add('active');

    // Progress bar
    if (fill) fill.style.width = ((n / TOTAL) * 100) + '%';
    if (stepLbl) stepLbl.textContent = LABELS[n - 1] || '';

    // Confetti on cert step
    if (n === 4) setTimeout(launchConfetti, 200);

    // Scroll modal body to top
    var body = document.querySelector('.lmodal-body');
    if (body) body.scrollTop = 0;
  }

  /* ---------- Next / Prev Buttons ---------- */
  document.querySelectorAll('.lms-next').forEach(function(btn) {
    btn.addEventListener('click', function() {
      goToStep(parseInt(this.dataset.next, 10));
    });
  });
  document.querySelectorAll('.lms-prev').forEach(function(btn) {
    btn.addEventListener('click', function() {
      goToStep(parseInt(this.dataset.prev, 10));
    });
  });

  /* ---------- Quiz ---------- */
  quizOpts.forEach(function(opt) {
    opt.addEventListener('click', function() {
      quizOpts.forEach(function(o) { o.setAttribute('disabled', true); });
      var correct = opt.dataset.correct === 'true';
      if (correct) {
        opt.classList.add('correct');
      } else {
        opt.classList.add('wrong');
        quizOpts.forEach(function(o) {
          if (o.dataset.correct === 'true') o.classList.add('correct');
        });
      }
      if (feedback) {
        feedback.innerHTML = correct
          ? '<span style="color:#00472a">✅ إجابة صحيحة! البطاريات والمكثفات أشد خطورة لاحتوائها على الرصاص والزئبق والليثيوم.</span>'
          : '<span style="color:#dc3545">❌ إجابة خاطئة. الصواب: البطاريات والمكثفات — تحتوي على مواد شديدة السمية تتسرب للتربة والمياه.</span>';
        feedback.style.display = 'block';
      }
      if (quizFooter) quizFooter.style.display = 'flex';
    });
  });

  /* ---------- Restart ---------- */
  if (restartBtn) {
    restartBtn.addEventListener('click', function() {
      // Reset quiz
      quizOpts.forEach(function(o) {
        o.removeAttribute('disabled');
        o.classList.remove('correct', 'wrong');
      });
      if (feedback)   { feedback.style.display = 'none'; feedback.innerHTML = ''; }
      if (quizFooter)   quizFooter.style.display = 'none';
      if (confCont)   confCont.innerHTML = '';
      goToStep(1);
    });
  }

  /* ---------- Confetti ---------- */
  function launchConfetti() {
    if (!confCont) return;
    confCont.innerHTML = '';
    var colors = ['#d3fca0','#b3c7fa','#f3f3f1','#00472a','#003a48','#ffffff'];
    for (var i = 0; i < 55; i++) {
      var c = document.createElement('div');
      c.className = 'confetti-piece';
      var size = Math.random() * 8 + 4;
      c.style.cssText =
        'left:' + (Math.random() * 100) + '%;' +
        'top:' + (-10 - Math.random() * 20) + 'px;' +
        'width:' + size + 'px;height:' + size + 'px;' +
        'background:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
        'border-radius:' + (Math.random() > .5 ? '50%' : '2px') + ';' +
        'animation:confetti-fall ' + (Math.random() * 2 + 1.5) + 's ' + (Math.random() * 1.2) + 's ease forwards;';
      confCont.appendChild(c);
    }
  }

}());

/* ---------- Share ---------- */
function shareAchievement(platform) {
  var text = 'أكملت التجربة التعليمية على موقع مبادرة نقاء 🌿 تعرفت على مخاطر النفايات الإلكترونية! #نقاء #مبادرة_نقاء';
  var url  = window.location.href;
  var link = '';
  if (platform === 'twitter')  link = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url);
  if (platform === 'whatsapp') link = 'https://wa.me/?text=' + encodeURIComponent(text + '\n' + url);
  if (platform === 'snap')     link = 'https://www.snapchat.com/scan?attachmentUrl=' + encodeURIComponent(url);
  if (link) window.open(link, '_blank', 'noopener');
}
window.shareAchievement = shareAchievement;
