function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('active');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 2500);
}

function renderProductCard(product, options = {}) {
  const { showBrand = true, showWishlist = true, priority = false } = options;
  const isWishlisted = wishlist.has(product.id);
  return `
    <div class="product-card" onclick="window.location.href='pages/product.html?id=${product.id}'">
      <div class="card-image-wrap">
        <img class="main-img" src="${product.images[0]}" alt="${product.name}" ${priority ? '' : 'loading="lazy"'}>
        ${product.images[1] ? `<img class="hover-img" src="${product.images[1]}" alt="${product.name}" loading="lazy">` : ''}
        ${showWishlist ? `
          <button class="btn-icon wishlist-btn ${isWishlisted ? 'active' : ''}" data-product-id="${product.id}" onclick="event.stopPropagation();wishlist.toggle(${product.id})">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        ` : ''}
        ${product.oldPrice ? `<span style="position:absolute;top:12px;left:12px;background:#cc3333;color:#fff;font-size:0.625rem;font-weight:600;padding:4px 8px;border-radius:4px;letter-spacing:0.05em;z-index:2;">SALE</span>` : ''}
      </div>
      <div class="card-body" style="padding:12px 0;">
        ${showBrand ? `<div class="card-brand">${product.brand}</div>` : ''}
        <div class="card-title">${product.name}</div>
        <div>
          ${product.oldPrice ? `<span class="card-price-old">$${product.oldPrice}</span>` : ''}
          <span class="card-price">$${product.price}</span>
        </div>
      </div>
    </div>
  `;
}

function renderProductSlider(products, containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container || !products.length) return;
  container.innerHTML = products.map(p => renderProductCard(p, options)).join('');
}

function renderGrid(products, containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container || !products.length) {
    if (container) container.innerHTML = '<p style="color:var(--text-muted);padding:40px 0;text-align:center;">No products found</p>';
    return;
  }
  container.innerHTML = products.map(p => renderProductCard(p, options)).join('');
}

const brandLogos = {
  'nike': '<svg viewBox="0 0 60 40" fill="none"><path d="M0 38L45 2l-5 30L60 0 20 40 0 38z" fill="currentColor"/></svg>',
  'adidas': '<svg viewBox="0 0 60 40" fill="none"><rect x="2" y="22" width="6" height="18" rx="1" fill="currentColor"/><rect x="12" y="14" width="6" height="26" rx="1" fill="currentColor"/><rect x="22" y="6" width="6" height="34" rx="1" fill="currentColor"/></svg>',
  'stussy': '<svg viewBox="0 0 60 40" fill="none"><circle cx="30" cy="20" r="18" stroke="currentColor" stroke-width="2"/><text x="30" y="26" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor" font-family="Inter">S</text></svg>',
  'carhartt': '<svg viewBox="0 0 60 40" fill="none"><rect x="6" y="4" width="48" height="32" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><text x="30" y="27" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor" font-family="Inter">C</text></svg>',
  'fear-of-god': '<svg viewBox="0 0 60 40" fill="none"><path d="M30 2L48 20L30 38L12 20L30 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/><text x="30" y="26" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor" font-family="Inter">FOG</text></svg>',
  'new-balance': '<svg viewBox="0 0 60 40" fill="none"><rect x="4" y="8" width="52" height="24" rx="3" stroke="currentColor" stroke-width="2"/><text x="30" y="26" text-anchor="middle" font-size="16" font-weight="700" fill="currentColor" font-family="Inter">NB</text></svg>',
  'cos': '<svg viewBox="0 0 60 40" fill="none"><circle cx="30" cy="20" r="16" stroke="currentColor" stroke-width="2"/><text x="30" y="26" text-anchor="middle" font-size="16" font-weight="600" fill="currentColor" font-family="Inter">COS</text></svg>'
};

function renderBrandGrid(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = brands.map(b => `
    <div class="brand-card" onclick="window.location.href='pages/brand.html?brand=${b.slug}'" title="${b.name}">
      <div class="brand-card-logo">${brandLogos[b.slug] || ''}</div>
      <span class="brand-card-name">${b.name}</span>
    </div>
  `).join('');
}

function setupQuantityInput() {
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.parentElement.querySelector('.qty-input');
      let val = parseInt(input.value) || 1;
      if (this.classList.contains('qty-minus') && val > 1) val--;
      if (this.classList.contains('qty-plus')) val++;
      input.value = val;
      input.dispatchEvent(new Event('change'));
    });
  });
}

function initImageReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.img-reveal').forEach(el => observer.observe(el));
}

function initFadeInAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.visibility = 'visible';
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.visibility = 'hidden';
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function populateTrendingSearches() {
  const terms = ['Oversized Denim', 'Leather Sneakers', 'Puffer Vest', 'Trench Coat', 'Cargo Pants', 'Wool Coat', 'Graphic Hoodie'];
  const container = document.getElementById('search-trending');
  if (!container) return;
  container.innerHTML = terms.map(t => `<span onclick="document.getElementById('search-input').value='${t}';search.handleInput();">${t}</span>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-cart-toggle]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      cart.open();
    });
  });

  document.getElementById('cart-overlay')?.addEventListener('click', () => cart.close());
  document.getElementById('search-overlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) search.close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cart.close();
      search.close();
    }
  });

  initImageReveal();
  initFadeInAnimations();
  populateTrendingSearches();
});

function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.bottom-nav a, .header-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && path.endsWith(href)) {
      a.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveNav);
window.addEventListener('popstate', setActiveNav);
