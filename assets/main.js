(function () {
  const d = document;
  d.documentElement.classList.add('js');
  const page = d.body.dataset.page || 'home';
  const arrow = '<svg viewBox="0 0 20 20" fill="none"><path d="M3 10h13m0 0-5-5m5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  window.VT_ARROW = arrow;
  const years = new Date().getFullYear() - 1989;

  /* ---------- layout ---------- */
  const links = [
    ['izdelki.html', 'Izdelki', 'izdelki'],
    ['index.html#programi', 'Programi', ''],
    ['index.html#zgodovina', 'O nas', ''],
    ['index.html#kakovost', 'Kakovost', ''],
    ['kontakt.html', 'Kontakt', 'kontakt']
  ];
  const nav = links.map(l => `<a href="${l[0]}" class="${l[2] === page ? 'on' : ''}">${l[1]}</a>`).join('');
  const hdr = d.getElementById('hdr');
  if (hdr) hdr.outerHTML = `
  <header class="hdr" id="hdrEl">
    <a class="logo" href="index.html" aria-label="Vodotehnik, domov"><img src="assets/img/logo.png" alt="Vodotehnik"></a>
    <nav class="nav">${nav}</nav>
    <a class="btn btn-dark" href="kontakt.html">Povpraševanje ${arrow}</a>
    <button class="burger" aria-label="Meni"><span></span><span></span></button>
  </header>
  <div class="mmenu"><nav>${links.map(l => `<a href="${l[0]}">${l[1]}</a>`).join('')}</nav>
    <div><p class="lead">03 713 36 90<br>info@vodotehnik.si</p></div></div>`;

  const ftr = d.getElementById('ftr');
  if (ftr) ftr.outerHTML = `
  <footer class="ftr">
    <div class="ftr-grid">
      <div><h5>Osnovna dejavnost</h5><p class="d4" style="max-width:24ch">Proizvodnja armatur, fazonskih kosov in jaškov za vodovodne in kanalizacijske sisteme.</p></div>
      <div><h5>Stran</h5><a href="index.html">Domov</a><a href="izdelki.html">Izdelki</a><a href="index.html#zgodovina">O nas</a><a href="kontakt.html">Kontakt</a></div>
      <div><h5>Informacije</h5><a href="https://www.vodotehnik.si/splosni-pogoji/">Splošni pogoji</a><a href="https://www.vodotehnik.si/dostava/">Dostava</a><a href="kontakt.html#rezervacija">Rezervacija</a></div>
      <div><h5>Kontakt</h5><a href="tel:+38637133690">03 713 36 90</a><a href="mailto:info@vodotehnik.si">info@vodotehnik.si</a><p>Vrbje 80<br>3310 Žalec</p></div>
    </div>
    <a class="ftr-logo" href="index.html"><img src="assets/img/logo.png" alt="Vodotehnik"></a>
    <div class="ftr-eu"><img src="assets/img/eu.png" alt="Evropski sklad za regionalni razvoj"><p>Vavčer za digitalni marketing, naložbo izdelave spletne strani, spletne trgovine in rezervacijske platforme, sofinancirata Republika Slovenija in Evropska unija iz Evropskega sklada za regionalni razvoj.</p></div>
    <div class="ftr-bot"><span>© ${new Date().getFullYear()} Vodotehnik d.o.o. Vse pravice pridržane.</span><span>Vodo vodimo od leta 1989</span></div>
  </footer>`;

  d.querySelectorAll('[data-years]').forEach(el => { el.textContent = years; el.dataset.to = years; });

  const hdrEl = d.getElementById('hdrEl');
  const burger = d.querySelector('.burger');
  burger && burger.addEventListener('click', () => d.body.classList.toggle('menu-open'));
  d.querySelectorAll('.mmenu a').forEach(a => a.addEventListener('click', () => d.body.classList.remove('menu-open')));

  /* ---------- product cards ---------- */
  const P = window.VT_PRODUCTS || [];
  window.VT_card = (p, feat) => feat ? `
    <a class="pcard feat" href="izdelek.html?id=${p.id}" data-cat="${p.cat}">
      <img src="${p.hero}" alt="${p.name}" loading="lazy">
      <div class="t"><h3>${p.name}</h3><span class="rng">${p.range}</span></div>
      <div class="b"><span>Narejeno v Sloveniji</span><span class="go">${arrow}</span></div>
    </a>` : `
    <a class="pcard" href="izdelek.html?id=${p.id}" data-cat="${p.cat}">
      <div class="t"><h3>${p.short || p.name}</h3><span class="rng">${p.range}</span></div>
      <div class="im"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="b"><span>${p.price ? 'od ' + p.price : 'Cena na povpraševanje'}</span><span class="go">${arrow}</span></div>
    </a>`;

  const home = d.getElementById('homeProducts');
  if (home) {
    const order = ['nadzemni-hidrant', 'navrtni-zasun', 'ev-zasun', 'podzemni-zracnik', 'prikljucna-kolena', 'termo-jasek', 'plombe', 'jasek-1200', 'jasek-lezeci'];
    home.innerHTML = order.map((id, i) => VT_card(P.find(p => p.id === id), i === 0)).join('');
  }

  /* ---------- catalogue ---------- */
  const cat = d.getElementById('catalogue');
  if (cat) {
    cat.innerHTML = P.map(p => VT_card(p)).join('');
    const cats = ['Vse', ...new Set(P.map(p => p.cat))];
    const f = d.getElementById('filters');
    f.innerHTML = cats.map((c, i) => `<button class="${i ? '' : 'on'}" data-c="${c}">${c}<i>${c === 'Vse' ? P.length : P.filter(p => p.cat === c).length}</i></button>`).join('');
    f.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      f.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
      cat.querySelectorAll('.pcard').forEach(c => c.classList.toggle('hidden', b.dataset.c !== 'Vse' && c.dataset.cat !== b.dataset.c));
      window.ScrollTrigger && ScrollTrigger.refresh();
    });
  }

  /* ---------- product detail ---------- */
  const pd = d.getElementById('product');
  if (pd) {
    const id = new URLSearchParams(location.search).get('id') || 'nadzemni-hidrant';
    const p = P.find(x => x.id === id) || P[0];
    d.title = p.name + ' | Vodotehnik';
    const gal = [p.img, ...(p.hero ? [p.hero] : []), ...(p.gallery || []).filter(g => g !== p.img)];
    const check = '<svg viewBox="0 0 20 20" fill="none"><path d="m4 10.5 4 4 8-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const isCover = s => /\.jpe?g$/.test(s);
    pd.innerHTML = `
      <div class="pd-gal">
        <div class="pd-main"><img id="pdMain" src="${gal[0]}" alt="${p.name}"></div>
        ${gal.length > 1 ? `<div class="pd-thumbs">${gal.map((g, i) => `<button class="${i ? '' : 'on'}" data-src="${g}"><img src="${g}" alt=""></button>`).join('')}</div>` : ''}
      </div>
      <div class="pd-info">
        <div class="crumb"><a href="izdelki.html">Izdelki</a> / ${p.cat}</div>
        <h1 class="d2">${p.name}</h1>
        <p class="lead">${p.lead}</p>
        <div class="pd-buy">
          <div class="pd-price">${p.price ? p.price + '<small>Cena brez DDV, izvedba ' + p.range + '</small>' : 'Po povpraševanju<small>Izvedba in oprema po želji naročnika</small>'}</div>
          <a class="btn btn-blue" href="kontakt.html?izdelek=${encodeURIComponent(p.name)}">Pošlji povpraševanje ${arrow}</a>
        </div>
        <div class="pd-body">${p.body.map(t => `<p>${t}</p>`).join('')}</div>
        <h2 class="d4">Prednosti</h2>
        <ul class="pros">${p.pros.map(t => `<li>${check}<span>${t}</span></li>`).join('')}</ul>
        ${p.tables ? `<h2 class="d4">Tehnični podatki</h2>${p.tables.map(t => `
          <div class="tbl"><h4>${t.title}</h4><table><thead><tr>${t.head.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${t.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`).join('')}` : ''}
      </div>`;
    const main = d.getElementById('pdMain');
    const setMain = s => { main.src = s; main.classList.toggle('cover', isCover(s)); };
    setMain(gal[0]);
    pd.querySelectorAll('.pd-thumbs button').forEach(b => b.addEventListener('click', () => {
      pd.querySelectorAll('.pd-thumbs button').forEach(x => x.classList.toggle('on', x === b)); setMain(b.dataset.src);
    }));
    const rel = d.getElementById('related');
    rel && (rel.innerHTML = P.filter(x => x.id !== p.id).slice(0, 4).map(x => VT_card(x)).join(''));
  }

  /* ---------- contact ---------- */
  const form = d.querySelector('.form');
  if (form) {
    const q = new URLSearchParams(location.search).get('izdelek');
    if (q) { const m = form.querySelector('textarea'); m.value = 'Zanima me: ' + q + '\n\n'; }
    form.querySelectorAll('.tabs button').forEach(b => b.addEventListener('click', () => {
      form.querySelectorAll('.tabs button').forEach(x => x.classList.toggle('on', x === b));
      form.querySelectorAll('[data-mode]').forEach(x => x.style.display = x.dataset.mode === b.dataset.t ? '' : 'none');
    }));
    if (location.hash === '#rezervacija') form.querySelector('.tabs button[data-t="rez"]').click();
    form.querySelector('form').addEventListener('submit', e => { e.preventDefault(); form.classList.add('sent'); });
  }

  /* ---------- hero lineup labels follow the cropped image ---------- */
  const stage = d.querySelector('.stage'), sImg = d.querySelector('.stage-img');
  const LX = [.15, .335, .5, .68, .87], LY = .815;
  const placeLabels = () => {
    if (!stage || !sImg.naturalWidth) return;
    const W = stage.clientWidth, H = stage.clientHeight, iw = sImg.naturalWidth, ih = sImg.naturalHeight;
    const s = Math.max(W / iw, H / ih), rw = iw * s, rh = ih * s;
    const ox = (W - rw) * .5, oy = (H - rh) * .7;
    stage.querySelectorAll('.lineup a').forEach((a, i) => { a.style.left = (ox + LX[i] * rw) + 'px'; a.style.top = Math.min(oy + LY * rh, H - 56) + 'px'; });
  };
  if (stage) { sImg.complete ? placeLabels() : sImg.addEventListener('load', placeLabels); addEventListener('resize', placeLabels); }

  /* ---------- programs accordion ---------- */
  d.querySelectorAll('.prog').forEach(p => {
    const on = () => { d.querySelectorAll('.prog').forEach(x => x.classList.remove('on')); p.classList.add('on'); };
    p.addEventListener('mouseenter', on); p.addEventListener('click', on); p.addEventListener('focus', on);
  });

  /* ---------- hotspots ---------- */
  const hots = d.querySelectorAll('.hot');
  const legend = d.querySelectorAll('.net-legend button');
  const setHot = i => {
    hots.forEach((h, j) => h.classList.toggle('on', j === i));
    legend.forEach((b, j) => b.classList.toggle('on', j === i));
  };
  hots.forEach((h, i) => h.querySelector('button').addEventListener('click', e => { e.stopPropagation(); setHot(h.classList.contains('on') ? -1 : i); }));
  legend.forEach((b, i) => b.addEventListener('click', () => setHot(i)));

  /* ---------- motion ---------- */
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasG = window.gsap && window.ScrollTrigger;
  const loader = d.querySelector('.loader');

  let lastY = 0;
  const onScroll = y => {
    if (!hdrEl) return;
    hdrEl.classList.toggle('scrolled', y > 30);
    hdrEl.classList.toggle('hide', y > 500 && y > lastY && !d.body.classList.contains('menu-open'));
    lastY = y;
  };

  if (!hasG || reduce) {
    d.documentElement.classList.remove('js');
    loader && loader.remove();
    addEventListener('scroll', () => onScroll(scrollY), { passive: true });
    statsFinal();
    initHistory();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  let lenis;
  if (window.Lenis) {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on('scroll', e => { ScrollTrigger.update(); onScroll(e.scroll); });
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    d.querySelectorAll('a[href^="#"], a[href^="index.html#"]').forEach(a => a.addEventListener('click', e => {
      const id = a.getAttribute('href').split('#')[1];
      const t = id && d.getElementById(id);
      if (t && (page === 'home' || a.getAttribute('href').startsWith('#'))) { e.preventDefault(); lenis.scrollTo(t, { offset: -40 }); d.body.classList.remove('menu-open'); }
    }));
  } else addEventListener('scroll', () => onScroll(scrollY), { passive: true });

  // loader
  const intro = gsap.timeline();
  if (loader) {
    intro.to('.loader .bar i', { scaleX: 1, duration: .9, ease: 'power2.inOut' })
      .to('.loader .drop', { y: 30, opacity: 0, duration: .45, ease: 'power2.in' }, '-=.15')
      .to(loader, { clipPath: 'inset(0 0 100% 0)', duration: .9, ease: 'expo.inOut' }, '-=.1')
      .set(loader, { display: 'none' });
  }
  // hero
  const h1 = d.querySelectorAll('.hero .hl');
  if (h1.length) {
    intro.from(h1, { yPercent: 40, opacity: 0, duration: 1.2, stagger: .1, ease: 'expo.out' }, loader ? '-=.55' : 0)
      .from('.stage-side > *', { y: 24, opacity: 0, duration: 1, stagger: .08, ease: 'expo.out' }, '-=1')
      .from('.stage-img', { scale: 1.12, duration: 2.4, ease: 'expo.out' }, loader ? '-=1.6' : 0)
      .from('.lineup a', { y: 16, opacity: 0, duration: .9, stagger: .07, ease: 'expo.out' }, '-=1.6')
      .from('.strip > div', { y: 20, opacity: 0, duration: .9, stagger: .06, ease: 'expo.out' }, '-=1.2');
    gsap.to('.stage-img', { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '.stage', start: 'top top', end: 'bottom top', scrub: true } });
  }

  // reveals
  d.querySelectorAll('.rv').forEach(el => {
    gsap.to(el, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', delay: (+el.dataset.d || 0), scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
  d.querySelectorAll('.rv-img').forEach(el => {
    gsap.to(el, { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
  });
  // staggered grids
  d.querySelectorAll('[data-stagger]').forEach(g => {
    gsap.from(g.children, { y: 60, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: .07, scrollTrigger: { trigger: g, start: 'top 85%' } });
  });
  // parallax images
  d.querySelectorAll('[data-par]').forEach(img => {
    gsap.fromTo(img, { yPercent: -(+img.dataset.par) }, { yPercent: +img.dataset.par, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  // CTA zoom
  const ctaImg = d.querySelector('.cta > img');
  ctaImg && gsap.to(ctaImg, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'bottom bottom', scrub: true } });

  // stats
  d.querySelectorAll('.stat .n b').forEach(b => {
    const end = +b.dataset.to; const o = { v: 0 };
    gsap.to(o, { v: end, duration: 2, ease: 'power3.out', scrollTrigger: { trigger: b, start: 'top 90%' }, onUpdate: () => b.textContent = Math.round(o.v), onComplete: () => b.textContent = end });
  });

  initHistory();

  function statsFinal() { d.querySelectorAll('.stat .n b').forEach(b => b.textContent = b.dataset.to); }

  function initHistory() {
    const chaps = d.querySelectorAll('.chap');
    if (!chaps.length) return;
    const imgs = d.querySelectorAll('.hist-media img');
    const yr = d.querySelector('.hist-year');
    const set = i => {
      chaps.forEach((c, j) => c.classList.toggle('on', j === i));
      imgs.forEach((m, j) => m.classList.toggle('on', j === i));
      if (yr) yr.textContent = chaps[i].dataset.y;
    };
    set(0);
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) set([...chaps].indexOf(e.target)); }), { rootMargin: '-45% 0px -45% 0px' });
    chaps.forEach(c => io.observe(c));
  }

  addEventListener('load', () => ScrollTrigger.refresh());
})();
