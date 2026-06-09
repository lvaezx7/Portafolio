/* ==========================================================================
   LUIS VAEZ — INTERACTIVE LAYER v2.0
   Modules: Neural Canvas · Typewriter · Counter · Scroll Reveal · Skill Bars
   ========================================================================== */

(function () {
  'use strict';

  /* -------------------------------------------------------------------------
     MODULE 1: NEURAL NETWORK CANVAS
     Draws animated nodes + edges resembling a neural net on #hero-canvas
     ------------------------------------------------------------------------- */

  function initNeuralCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H, nodes, RAF;
    const NODE_COUNT = 80;
    const MAX_DIST   = 160;
    const NODE_SPEED = 0.4;

    function isDark() {
      return document.documentElement.getAttribute('data-md-color-scheme') === 'slate';
    }

    function getColors() {
      return isDark()
        ? { node: 'rgba(56,189,248,0.75)', edge: 'rgba(56,189,248,', bg: 'transparent' }
        : { node: 'rgba(3,105,161,0.55)',  edge: 'rgba(3,105,161,',  bg: 'transparent' };
    }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      W = canvas.width  = rect.width;
      H = canvas.height = rect.height;
    }

    function createNodes() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * NODE_SPEED,
        vy: (Math.random() - 0.5) * NODE_SPEED,
        r:  Math.random() * 2 + 1.5,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const clr = getColors();

      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.45;
            ctx.beginPath();
            ctx.strokeStyle = clr.edge + alpha + ')';
            ctx.lineWidth   = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = clr.node;
        ctx.fill();
      });

      RAF = requestAnimationFrame(draw);
    }

    function init() {
      resize();
      createNodes();
      if (RAF) cancelAnimationFrame(RAF);
      draw();
    }

    window.addEventListener('resize', () => { resize(); });
    init();

    // Re-init when theme toggles
    const observer = new MutationObserver(() => init());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-md-color-scheme'] });
  }

  /* -------------------------------------------------------------------------
     MODULE 2: TYPEWRITER EFFECT
     Cycles through role strings in .hero-v2__typed-wrapper
     ------------------------------------------------------------------------- */

  function initTypewriter() {
    const el = document.getElementById('typed-text');
    if (!el) return;

    const strings = [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'NLP & LLMs',
      'MLOps & Producción',
      'Data Scientist',
    ];

    let sIdx = 0, cIdx = 0, deleting = false, paused = false;

    function tick() {
      const str = strings[sIdx];

      if (!deleting) {
        el.textContent = str.slice(0, cIdx + 1);
        cIdx++;
        if (cIdx === str.length) {
          paused = true;
          setTimeout(() => { paused = false; deleting = true; }, 2000);
          return;
        }
      } else {
        el.textContent = str.slice(0, cIdx - 1);
        cIdx--;
        if (cIdx === 0) {
          deleting = false;
          sIdx = (sIdx + 1) % strings.length;
        }
      }

      if (!paused) {
        setTimeout(tick, deleting ? 55 : 95);
      }
    }

    setTimeout(tick, 600);
  }

  /* -------------------------------------------------------------------------
     MODULE 3: COUNTER ANIMATION
     Targets elements with data-target="N" inside .stat-item__num
     ------------------------------------------------------------------------- */

  function initCounters() {
    const nums = document.querySelectorAll('.stat-item__num[data-target]');
    if (!nums.length) return;

    const observed = new Set();

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (observed.has(el)) return;
        observed.add(el);

        const target   = parseInt(el.dataset.target, 10);
        const suffix   = el.dataset.suffix || '';
        const duration = 1600;
        const start    = performance.now();

        function update(now) {
          const t    = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
          el.textContent = Math.round(ease * target) + suffix;
          if (t < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      });
    }, { threshold: 0.5 });

    nums.forEach(el => io.observe(el));
  }

  /* -------------------------------------------------------------------------
     MODULE 4: SCROLL REVEAL
     Adds .visible to .reveal and .stagger-children when they enter viewport
     ------------------------------------------------------------------------- */

  function initScrollReveal() {
    const targets = document.querySelectorAll('.reveal, .stagger-children');
    if (!targets.length) return;

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(el => io.observe(el));
  }

  /* -------------------------------------------------------------------------
     MODULE 5: SKILL BAR ANIMATION
     Reads data-level="N" (0-100) and animates .skill-card__bar-fill
     ------------------------------------------------------------------------- */

  function initSkillBars() {
    const bars = document.querySelectorAll('.skill-card__bar-fill[data-level]');
    if (!bars.length) return;

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el    = entry.target;
          const level = el.dataset.level;
          setTimeout(() => { el.style.width = level + '%'; }, 200);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    bars.forEach(el => io.observe(el));
  }

  /* -------------------------------------------------------------------------
     MODULE 6: HERO EFFECTS — parallax, cursor glow, float panels
     ------------------------------------------------------------------------- */

  function initHeroEffects() {
    const hero   = document.querySelector('.hero-v2');
    const inner  = document.querySelector('.hero-v2__inner');
    const floats = document.querySelectorAll('.hero-float');
    if (!hero || !inner) return;

    // Inject cursor glow element (once)
    let glow = hero.querySelector('.hero-cursor-glow');
    if (!glow) {
      glow = document.createElement('div');
      glow.className = 'hero-cursor-glow';
      hero.appendChild(glow);
    }

    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    let rafId;

    hero.addEventListener('mousemove', function (e) {
      const rect = hero.getBoundingClientRect();
      const cx   = rect.width  / 2;
      const cy   = rect.height / 2;
      const dx   = (e.clientX - rect.left - cx) / cx; // -1 … 1
      const dy   = (e.clientY - rect.top  - cy) / cy; // -1 … 1

      targetX = dx * -10;
      targetY = dy * -8;

      // Cursor glow follows mouse exactly
      glow.style.opacity = '1';
      glow.style.left    = (e.clientX - rect.left) + 'px';
      glow.style.top     = (e.clientY - rect.top)  + 'px';

      // Float panels: left moves with mouse, right moves opposite
      floats.forEach(function (f, i) {
        const sign = i === 0 ? 1 : -1;
        f.style.transform = 'translateY(-50%) translate(' +
          (dx * sign * 14) + 'px,' +
          (dy * 8) + 'px)';
      });
    });

    hero.addEventListener('mouseleave', function () {
      targetX = 0;
      targetY = 0;
      glow.style.opacity = '0';
      floats.forEach(function (f) {
        f.style.transform = 'translateY(-50%)';
      });
    });

    function lerp(a, b, t) { return a + (b - a) * t; }

    function animate() {
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);
      inner.style.transform = 'translate(' + currentX + 'px,' + currentY + 'px)';
      rafId = requestAnimationFrame(animate);
    }

    if (rafId) cancelAnimationFrame(rafId);
    animate();
  }

  /* -------------------------------------------------------------------------
     MODULE 8: CARD STAGGER ON LOAD
     Adds stagger reveal to all .cards-grid instances
     ------------------------------------------------------------------------- */

  function initCardStagger() {
    document.querySelectorAll('.cards-grid').forEach(grid => {
      grid.classList.add('stagger-children');
    });
  }

  /* -------------------------------------------------------------------------
     MODULE 9: PAGE CLASS — marks home page with .is-home on body
     Enables CSS overrides like hiding the sparse "Inicio" sidebar
     ------------------------------------------------------------------------- */

  function markPage() {
    const path = location.pathname;
    const isHome = path.endsWith('/Portafolio/') ||
                   path.endsWith('/Portafolio/index.html') ||
                   path === '/' ||
                   path === '/index.html';
    if (isHome) {
      document.body.classList.add('is-home');
    } else {
      document.body.classList.remove('is-home');
    }
  }

  /* -------------------------------------------------------------------------
     INIT — run after DOM ready, re-run on MkDocs page navigation
     ------------------------------------------------------------------------- */

  function boot() {
    markPage();
    initNeuralCanvas();
    initTypewriter();
    initCounters();
    initScrollReveal();
    initSkillBars();
    initCardStagger();
    initHeroEffects();
    // Re-trigger scroll reveal immediately for above-fold elements
    setTimeout(() => {
      document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) el.classList.add('visible');
      });
    }, 100);
  }

  // Initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // MkDocs Material instant navigation — document$ is the RxJS observable
  // exposed globally by MkDocs Material for SPA page changes
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () { boot(); });
  }

})();
