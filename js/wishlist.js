class Wishlist {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('wishlist') || '[]');
  }

  toggle(productId) {
    const idx = this.items.indexOf(productId);
    if (idx > -1) {
      this.items.splice(idx, 1);
      showToast('Removed from wishlist');
    } else {
      this.items.push(productId);
      showToast('Saved to wishlist');
    }
    this.save();
    this.updateUI();
    return this.items.includes(productId);
  }

  has(productId) {
    return this.items.includes(productId);
  }

  remove(productId) {
    this.items = this.items.filter(id => id !== productId);
    this.save();
    this.updateUI();
  }

  save() {
    localStorage.setItem('wishlist', JSON.stringify(this.items));
  }

  updateUI() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      const id = parseInt(btn.dataset.productId);
      btn.classList.toggle('active', this.has(id));
    });
  }

  get count() {
    return this.items.length;
  }
}

const wishlist = new Wishlist();
