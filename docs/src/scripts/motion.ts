// Interacciones de la web. Solo se activan si <html> tiene la clase .js
// (la añade un script en <head> cuando no se pide movimiento reducido).

const root = document.documentElement;
const motionOn = root.classList.contains('js');

/* ---------- Navegación: estado al hacer scroll ---------- */
const header = document.querySelector<HTMLElement>('.site-header');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

if (motionOn) {
  /* ---------- Aparición al hacer scroll ---------- */
  const REVEAL = [
    '.section-head',
    '.compare__title',
    '.compare',
    '.v360__head',
    '.v360__core',
    '.v360__principles',
    '.actions',
    '.audit__copy',
    '.report',
    '.band',
    '.about__copy',
    '.about__photo',
    '.faq-section__intro',
    '.contact__intro',
    '.contact__form',
    '.step',
    '.cover',
    '.post-card--featured',
    '.cta-band',
    '.contact__steps',
  ].join(',');
  const STAGGER = '.grid, .v360__grid, .steps, .faq';

  // Escalonado: cada hijo de una rejilla entra un poco después que el anterior
  document.querySelectorAll<HTMLElement>(STAGGER).forEach((group) => {
    [...group.children].forEach((child, i) => (child as HTMLElement).style.setProperty('--i', String(i % 6)));
  });

  const targets = [
    ...document.querySelectorAll<HTMLElement>(REVEAL),
    ...document.querySelectorAll<HTMLElement>(
      STAGGER.split(',')
        .map((s) => `${s.trim()} > *`)
        .join(','),
    ),
  ];

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    targets.forEach((el) => io.observe(el));
  } else {
    targets.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Contadores (+30%, 8+ años, -40%...) ---------- */
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

  const countUp = (el: HTMLElement) => {
    const finalText = el.textContent ?? '';
    const match = finalText.match(/^([+\-−]?)(\d+)(.*)$/);
    if (!match) return;
    const [, sign, digits, rest] = match;
    const target = Number(digits);
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      el.textContent = `${sign}${Math.round(target * easeOut(t))}${rest}`;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = finalText;
    };
    requestAnimationFrame(tick);
  };

  const counters = document.querySelectorAll<HTMLElement>('.metric__value, .case-card__value');
  counters.forEach((el) => {
    // El valor final queda disponible para lectores de pantalla y buscadores
    const label = document.createElement('span');
    label.className = 'visually-hidden';
    label.textContent = el.textContent ?? '';
    el.after(label);
    el.setAttribute('aria-hidden', 'true');
  });

  const counterIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        countUp(entry.target as HTMLElement);
        counterIo.unobserve(entry.target);
      });
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => counterIo.observe(el));

  /* ---------- Hero: parallax con el ratón ---------- */
  const visual = document.querySelector<HTMLElement>('.hero__visual');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)');
  if (visual && finePointer.matches) {
    const hero = visual.closest<HTMLElement>('.hero') ?? visual;
    let frame = 0;
    hero.addEventListener('pointermove', (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = visual.getBoundingClientRect();
        const x = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const y = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        visual.style.setProperty('--px', Math.max(-1, Math.min(1, x)).toFixed(3));
        visual.style.setProperty('--py', Math.max(-1, Math.min(1, y)).toFixed(3));
      });
    });
    hero.addEventListener('pointerleave', () => {
      visual.style.setProperty('--px', '0');
      visual.style.setProperty('--py', '0');
    });
  }


  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (canHover) {
    /* ---------- Botones magnéticos ---------- */
    document.querySelectorAll<HTMLElement>('.btn--primary, .btn--light, .btn--ink, .submit, .hero__submit').forEach((btn) => {
      btn.classList.add('is-magnetic');
      btn.addEventListener('pointermove', (event) => {
        const rect = btn.getBoundingClientRect();
        const x = (event.clientX - (rect.left + rect.width / 2)) * 0.18;
        const y = (event.clientY - (rect.top + rect.height / 2)) * 0.3;
        btn.style.setProperty('--mx', `${Math.max(-8, Math.min(8, x)).toFixed(1)}px`);
        btn.style.setProperty('--my', `${Math.max(-6, Math.min(6, y)).toFixed(1)}px`);
      });
      btn.addEventListener('pointerleave', () => {
        btn.style.removeProperty('--mx');
        btn.style.removeProperty('--my');
      });
    });

    /* ---------- Tarjetas con inclinación 3D ---------- */
    document
      .querySelectorAll<HTMLElement>('.icon-card, .case-card, .audience-card, .area, .post-card:not(.post-card--featured), .report')
      .forEach((card) => {
        card.classList.add('tilt');
        let frame = 0;
        card.addEventListener('pointermove', (event) => {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width;
            const py = (event.clientY - rect.top) / rect.height;
            const rx = (0.5 - py) * 7;
            const ry = (px - 0.5) * 9;
            card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-3px)`;
            card.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
            card.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
            card.classList.add('is-tilting');
          });
        });
        card.addEventListener('pointerleave', () => {
          cancelAnimationFrame(frame);
          card.style.transform = '';
          card.classList.remove('is-tilting');
        });
      });

    /* ---------- Navegación: píldora bajo el enlace señalado ---------- */
    const list = document.querySelector<HTMLElement>('.nav__list');
    if (list && window.matchMedia('(min-width: 1340px)').matches) {
      list.style.position = 'relative';
      list.style.isolation = 'isolate';
      const pill = document.createElement('span');
      pill.className = 'nav__hover';
      pill.setAttribute('aria-hidden', 'true');
      list.prepend(pill);
      list.querySelectorAll<HTMLElement>(':scope > li > .nav__link').forEach((link) => {
        link.addEventListener('pointerenter', () => {
          const lr = list.getBoundingClientRect();
          const r = link.getBoundingClientRect();
          pill.style.setProperty('--x', `${r.left - lr.left - 12}px`);
          pill.style.setProperty('--w', `${r.width + 24}px`);
          pill.classList.add('is-on');
        });
      });
      list.addEventListener('pointerleave', () => pill.classList.remove('is-on'));
    }
  }

  /* ---------- Foco de luz en tarjetas oscuras ---------- */
  document.querySelectorAll<HTMLElement>('.v360__card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  });
}
