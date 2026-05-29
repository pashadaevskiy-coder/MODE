class Search {
  constructor() {
    this.overlay = null;
    this.input = null;
    this.results = null;
    this.suggestions = null;
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.overlay = document.getElementById('search-overlay');
      this.input = document.getElementById('search-input');
      this.results = document.getElementById('search-results');
      this.suggestions = document.getElementById('search-suggestions');
      this.setupListeners();
    });
  }

  setupListeners() {
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-search]');
      if (trigger) {
        e.preventDefault();
        this.open();
      }
    });

    if (this.input) {
      this.input.addEventListener('input', () => this.handleInput());
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
      });
    }
  }

  open() {
    if (!this.overlay) return;
    this.overlay.classList.add('active');
    document.body.classList.add('no-scroll');
    setTimeout(() => {
      if (this.input) {
        this.input.focus();
        this.input.value = '';
      }
      this.clearResults();
      if (this.suggestions) this.suggestions.style.display = 'block';
    }, 100);
  }

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
    this.clearResults();
  }

  handleInput() {
    const query = this.input ? this.input.value.trim() : '';
    if (query.length < 2) {
      this.clearResults();
      if (this.suggestions) this.suggestions.style.display = 'block';
      return;
    }

    const results = searchProducts(query);
    this.renderResults(results);
    if (this.suggestions) this.suggestions.style.display = 'none';
  }

  renderResults(results) {
    if (!this.results) return;
    this.results.innerHTML = '';
    this.results.classList.add('active');

    if (results.length === 0) {
      this.results.innerHTML = '<p style="color:var(--text-muted);padding:20px 0;">No results found</p>';
      return;
    }

    results.forEach(p => {
      const el = document.createElement('div');
      el.className = 'search-result-item';
      el.innerHTML = `
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        <div class="search-result-info">
          <h4>${p.name}</h4>
          <p>${p.brand} — $${p.price}</p>
        </div>
      `;
      el.addEventListener('click', () => {
        window.location.href = `pages/product.html?id=${p.id}`;
      });
      this.results.appendChild(el);
    });
  }

  clearResults() {
    if (this.results) {
      this.results.innerHTML = '';
      this.results.classList.remove('active');
    }
  }
}

const search = new Search();
