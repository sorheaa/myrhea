// ===================== CUSTOM CURSOR =====================
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  if (cursor) { cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px'; }
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  if (follower) { follower.style.left = followerX + 'px'; follower.style.top = followerY + 'px'; }
  requestAnimationFrame(animateFollower);
}
animateFollower();

// ===================== NAV SCROLL =====================
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) nav?.classList.add('scrolled');
  else nav?.classList.remove('scrolled');
});

// ===================== SCROLL REVEAL =====================
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) el.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));

// ===================== MAGNETIC CTA =====================
document.querySelectorAll('.btn-primary, .nav-cta').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

// ===================== CONTACT FORM =====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type=submit]');
    const origText = btn.innerHTML;
    btn.innerHTML = '<span>Pesan Terkirim ✓</span>';
    btn.style.background = '#2d5a2d';
    setTimeout(() => { btn.innerHTML = origText; btn.style.background = ''; }, 3500);
  });
}

// ===================== FILE UPLOAD =====================
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
if (uploadArea && fileInput) {
  uploadArea.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => {
    if (e.target.files[0]) {
      uploadArea.querySelector('.form-upload-text').innerHTML = `<strong style="color:var(--brass)">${e.target.files[0].name}</strong> siap dikirim`;
    }
  });
  uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.style.borderColor = 'var(--brass)'; });
  uploadArea.addEventListener('dragleave', () => { uploadArea.style.borderColor = ''; });
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault(); uploadArea.style.borderColor = '';
    if (e.dataTransfer.files[0]) {
      uploadArea.querySelector('.form-upload-text').innerHTML = `<strong style="color:var(--brass)">${e.dataTransfer.files[0].name}</strong> siap dikirim`;
    }
  });
}

// ===================== ANIMATE NUMBERS =====================
function animateNumber(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const isFloat = String(target).includes('.');
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;
    el.textContent = prefix + (isFloat ? current.toFixed(2) : Math.round(current)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
const numObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animateNumber(e.target); numObserver.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => numObserver.observe(el));
