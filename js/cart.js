class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart') || '[]');
    this.overlay = null;
    this.drawer = null;
    this.countEl = null;
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.overlay = document.getElementById('cart-overlay');
      this.drawer = document.getElementById('cart-drawer');
      this.countEl = document.getElementById('cart-count');
      this.render();
    });
  }

  add(product, size = 'M') {
    const existing = this.items.find(i => i.id === product.id && i.size === size);
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.images[0],
        size: size,
        qty: 1
      });
    }
    this.save();
    this.render();
    this.open();
    showToast('Added to cart');
  }

  remove(id, size) {
    this.items = this.items.filter(i => !(i.id === id && i.size === size));
    this.save();
    this.render();
  }

  updateQty(id, size, delta) {
    const item = this.items.find(i => i.id === id && i.size === size);
    if (item) {
      item.qty = Math.max(1, item.qty + delta);
      this.save();
      this.render();
    }
  }

  get total() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  get count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  }

  save() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  open() {
    if (this.overlay) this.overlay.classList.add('active');
    if (this.drawer) this.drawer.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  close() {
    if (this.overlay) this.overlay.classList.remove('active');
    if (this.drawer) this.drawer.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  render() {
    if (!this.drawer) return;
    const itemsEl = this.drawer.querySelector('.cart-items');
    const subtotalEl = this.drawer.querySelector('.cart-subtotal-value');
    const emptyEl = this.drawer.querySelector('.cart-empty');

    if (this.items.length === 0) {
      itemsEl.innerHTML = '';
      if (emptyEl) emptyEl.classList.remove('hidden');
      if (subtotalEl) subtotalEl.textContent = '$0';
    } else {
      if (emptyEl) emptyEl.classList.add('hidden');
      itemsEl.innerHTML = this.items.map(item => `
        <div class="cart-item" data-id="${item.id}" data-size="${item.size}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
          <div class="cart-item-info">
            <div class="cart-item-brand">${item.brand}</div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-size">Size: ${item.size}</div>
            <div class="cart-item-price">$${item.price}</div>
            <div class="cart-item-qty">
              <button onclick="cart.updateQty(${item.id},'${item.size}',-1)">−</button>
              <span>${item.qty}</span>
              <button onclick="cart.updateQty(${item.id},'${item.size}',1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="cart.remove(${item.id},'${item.size}')">✕</button>
        </div>
      `).join('');
      if (subtotalEl) subtotalEl.textContent = `$${this.total.toFixed(0)}`;
    }

    if (this.countEl) {
      if (this.count > 0) {
        this.countEl.textContent = this.count;
        this.countEl.classList.add('visible');
      } else {
        this.countEl.classList.remove('visible');
      }
    }
  }
}

const cart = new Cart();
