// ============================================================
//  GAIWI — Shared Components
//  Renders nav, footer, and card HTML from data.js
// ============================================================

// ── NAV ──────────────────────────────────────────────────────
function renderNav(activeLabel, rootPath) {
    rootPath = rootPath || '';
    const d = GAIWI_DATA.nav;
    const nav = document.getElementById('site-nav');

    nav.innerHTML = `
    <div class="container">
      <div class="nav-inner">
        <a href="${rootPath}index.html" class="nav-logo">
          <img src="./images/design_up/GAIWI_logo.png" alt="GAIWI Logo">
        </a>
        <button class="nav-burger" id="burger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="nav-links">
          ${d.links.map(l => {
        const id = l.href.split('#')[1];
        if (id == null){
            const root = l.href.split('#')[0];
            return `<li><a href="${root}" data-label="${l.label}" class="${l.label === activeLabel ? 'active' : ''}">${l.label}</a></li>`;
        }
        return `<li><a href="index.html#${id}" data-label="${l.label}" class="${l.label === activeLabel ? 'active' : ''}">${l.label}</a></li>`;
    }).join('')}
        </ul>
      </div>
    </div>
  `;

    // Sticky scroll
    const update = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', update, { passive: true });
    update();

    // Burger toggle — also close menu after tapping a link (mobile)
    const navLinksEl = document.getElementById('nav-links');
    document.getElementById('burger').addEventListener('click', () => {
        navLinksEl.classList.toggle('open');
    });
    navLinksEl.addEventListener('click', e => {
        if (e.target.tagName === 'A') navLinksEl.classList.remove('open');
    });

    // ── Scroll-spy: every nav link points to a section on this same page
    const navLinks = nav.querySelectorAll('.nav-links a[data-label]');
    const setActive = label => {
        navLinks.forEach(a => a.classList.toggle('active', a.dataset.label === label));
    };

    const sections = d.links
        .map(l => {
            const id = l.href.split('#')[1];
            const el = document.getElementById(id);
            return el ? { id, label: l.label, el } : null;
        })
        .filter(Boolean);

    if (sections.length) {
        const observer = new IntersectionObserver(
            entries => {
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible.length) {
                    const match = sections.find(s => s.el === visible[0].target);
                    if (match) setActive(match.label);
                }
            },
            {
                rootMargin: '-40% 0px -50% 0px', // trigger zone near vertical middle of viewport
                threshold: 0
            }
        );

        sections.forEach(s => observer.observe(s.el));
    }
}

// ── FOOTER ────────────────────────────────────────────────────
function renderFooter(rootPath) {
  rootPath = rootPath || '';
  const d = GAIWI_DATA;
  const footer = document.getElementById('site-footer');

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
<!--          <div class="footer-logo">-->
<!--            <img src="./images/design_up/GAIWI_logo.png" alt="GAIWI">-->
<!--          </div>-->
<!--          <p>A research and engagement hub dedicated to understanding how AI shapes human well-being in varied, situated contexts around the world — especially for the Global South.</p>-->
        
        <h4>Connect</h4>
          <ul>
            <li><a href="mailto:${d.footer.contact}">${d.footer.contact}</a></li>
          </ul>
        
        <h4 style="margin-top: 2rem;">Follow us</h4>
        <div class="footer-social">
            <a href="${d.footer.social.linkedin}" aria-label="LinkedIn" target="_blank" title="LinkedIn">in</a>
            <a href="${d.footer.social.twitter}" aria-label="X/Twitter" target="_blank" title="X/Twitter">𝕏</a>
            <a href="${d.footer.social.bluesky}" aria-label="Bluesky" target="_blank" title="Bluesky"><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.55208 1.20163C6.95953 2.947 9.54942 6.48542 10.5 8.38426V13.3996C10.5 13.2929 10.4573 13.4135 10.3655 13.6734C9.86934 15.0806 7.93144 20.5725 3.50011 16.1821C1.16681 13.8705 2.247 11.5589 6.49425 10.861C4.06448 11.2602 1.33284 10.6005 0.583406 8.01416C0.3675 7.27016 0 2.68742 0 2.06847C0 -1.03195 2.81498 -0.0574226 4.55208 1.20163ZM16.4479 1.20163C14.0405 2.947 11.4506 6.48542 10.5 8.38426V13.3996C10.5 13.2929 10.5427 13.4135 10.6345 13.6734C11.1307 15.0806 13.0686 20.5725 17.4999 16.1821C19.8332 13.8705 18.753 11.5589 14.5057 10.861C16.9355 11.2602 19.6672 10.6005 20.4166 8.01416C20.6325 7.27016 21 2.68742 21 2.06847C21 -1.03195 18.1853 -0.0574226 16.4479 1.20163Z" fill="#DCDCDD"/>
</svg></a>
<!-- 🦋-->
          </div>
        </div>
        <div class="footer-col">
            <h4>Affiliations</h4>
            <div class="footer-affils">
              ${d.hero.affiliations.map(a => `<span>${a}</span>`).join('')}
            </div>
            
          <h4 style="margin-top: 3rem;">Quick Links</h4>
          <ul>
            ${d.nav.links.map(l => {
              const href = rootPath ? l.href.replace(/^pages\//, '') : l.href;
              return `<li><a href="${rootPath}${href}">${l.label}</a></li>`;
            }).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Stay Connected</h4>
          <ul>
            <li><a class="btn-outline" href="${d.footer.mailingList}" style="color: white;">Join Mailing List</a></li>
          </ul>
          <!-- here was social-->
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Global AI Wellbeing Institute (GAIWI)</p>
        
      </div>
    </div>
  `;
}

// ── PERSON CARD ───────────────────────────────────────────────
function personCardHTML(p) {
  const initials = p.name.split(' ').map(w => w[0]).join('').slice(0,2);
  const photo = p.photo
    ? `<img src="${p.photo}" alt="${p.name}" loading="lazy">`
    : `<span class="placeholder-initials">${initials}</span>`;
  return `
    <div class="person-card">
      <div class="person-photo">${photo}</div>
      <div class="person-info-name" style="background-color: gold;">
        <div class="person-name">${p.name}</div>
      </div>
      <div class="person-info">
        <div class="person-title">${p.title}</div>
        <div class="person-institution">${p.institution}</div>
        <div class="person-links">
          ${p.links.website  ? `<a href="${p.links.website}"  target="_blank" rel="noopener">Web</a>` : ''}
          ${p.links.email    ? `<a href="mailto:${p.links.email}">Email</a>` : ''}
          ${p.links.linkedin ? `<a href="${p.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` : ''}
        </div>
      </div>
    </div>
  `;
}

function personCardHTMLPPage(p) {
    const initials = p.name.split(' ').map(w => w[0]).join('').slice(0,2);
    const photo = p.photo
        ? `<img src="./${p.photo}" alt="${p.name}" loading="lazy">`
        : `<span class="placeholder-initials">${initials}</span>`;
    return `
    <div class="person-card">
      <div class="person-photo">${photo}</div>
      <div class="person-info">
        <div class="person-name">${p.name}</div>
        <div class="person-title">${p.title}</div>
        <div class="person-institution">${p.institution}</div>
        <div class="person-links">
          ${p.links.website  ? `<a href="${p.links.website}"  target="_blank" rel="noopener">Web</a>` : ''}
          ${p.links.email    ? `<a href="mailto:${p.links.email}">Email</a>` : ''}
          ${p.links.linkedin ? `<a href="${p.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` : ''}
        </div>
      </div>
    </div>
  `;
}


// ── PUBLICATION ITEM ──────────────────────────────────────────
function pubItemHTML(p) {
  const award = p.award
    ? `<span class="pub-award">🏅 ${p.award}</span>`
    : '';
  return `
    <div class="pub-item">
      <div class="pub-year">${p.year}</div>
      <div class="pub-meta">
        <div class="pub-title">${p.title}${award}</div>
        <div class="pub-authors">${p.authors}</div>
        <div class="pub-venue">${p.venue}</div>
      </div>
      ${p.pdf ? `<a href="${p.pdf}" class="pub-pdf" target="_blank" rel="noopener">PDF ↗</a>` : ''}
    </div>
  `;
}


async function loadPublicationData() {
    const files = ['../data/Sharifa.json', '../data/Nusrat.json', "../data/Annie.json"];

    try {
        const fetchPromises = files.map(url => fetch(url).then(res => {
            if (!res.ok) throw new Error(`Failed to load ${url}`);
            return res.json();
        }));

        const results = await Promise.all(fetchPromises);

        // Merge all files into a single flat array
        const combinedData = results.flat();

        // console.log("Combined data:", combinedData);
        return combinedData;
    } catch (error) {
        console.error("One or more files failed to load:", error);
    }
}
