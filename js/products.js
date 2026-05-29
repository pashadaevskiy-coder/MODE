const products = [
  {
    id: 1,
    name: 'Oversized Denim Jacket',
    brand: 'Stussy',
    price: 245,
    oldPrice: null,
    category: 'new-arrivals',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Blue'],
    description: 'Premium oversized denim jacket with signature branding. Crafted from heavyweight Japanese denim.',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80'
    ],
    tags: ['new', 'trending']
  },
  {
    id: 2,
    name: 'Classic Hoodie',
    brand: 'Fear of God',
    price: 395,
    oldPrice: null,
    category: 'trending',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Cream'],
    description: 'Signature heavyweight fleece hoodie. Relaxed fit with dropped shoulders.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80'
    ],
    tags: ['trending']
  },
  {
    id: 3,
    name: 'Cargo Pants',
    brand: 'Carhartt WIP',
    price: 185,
    oldPrice: 230,
    category: 'sale',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Olive'],
    description: 'Relaxed-fit cargo pants in sturdy cotton canvas. Utility pockets throughout.',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80'
    ],
    tags: ['sale']
  },
  {
    id: 4,
    name: 'Vintage Tee',
    brand: 'Nike',
    price: 85,
    oldPrice: null,
    category: 'trending',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Grey'],
    description: 'Classic cotton tee with distressed logo graphic. Vintage wash for a worn-in feel.',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
    ],
    tags: ['trending']
  },
  {
    id: 5,
    name: 'Track Jacket',
    brand: 'Adidas',
    price: 165,
    oldPrice: null,
    category: 'new-arrivals',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    description: 'Sleek track jacket with signature stripe details. Lightweight and packable.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=800&q=80'
    ],
    tags: ['new']
  },
  {
    id: 6,
    name: 'Wool Coat',
    brand: 'Fear of God',
    price: 895,
    oldPrice: null,
    category: 'trending',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal'],
    description: 'Luxurious wool-blend overcoat. Oversized silhouette with notch lapels.',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80'
    ],
    tags: ['trending']
  },
  {
    id: 7,
    name: 'Leather Sneakers',
    brand: 'New Balance',
    price: 195,
    oldPrice: 250,
    category: 'sale',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Grey'],
    description: 'Premium leather sneakers with suede overlays. Encapsulated cushioning.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80'
    ],
    tags: ['sale']
  },
  {
    id: 8,
    name: 'Slim Fit Trousers',
    brand: 'COS',
    price: 145,
    oldPrice: null,
    category: 'new-arrivals',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Grey'],
    description: 'Tailored slim-fit trousers in stretch wool blend. Clean finish with no branding.',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80'
    ],
    tags: ['new']
  },
  {
    id: 9,
    name: 'Graphic Sweatshirt',
    brand: 'Stussy',
    price: 135,
    oldPrice: 175,
    category: 'sale',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red'],
    description: 'Heavyweight fleece sweatshirt with archival graphic print. Brushed interior.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80'
    ],
    tags: ['sale']
  },
  {
    id: 10,
    name: 'Baseball Cap',
    brand: 'Carhartt WIP',
    price: 55,
    oldPrice: null,
    category: 'new-arrivals',
    sizes: ['One Size'],
    colors: ['Black', 'Navy', 'Khaki'],
    description: 'Classic 6-panel cap in washed cotton twill. Adjustable strapback closure.',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80'
    ],
    tags: ['new']
  },
  {
    id: 11,
    name: 'Puffer Vest',
    brand: 'Nike',
    price: 225,
    oldPrice: null,
    category: 'trending',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Green', 'Orange'],
    description: 'Lightweight puffer vest with quilted construction. Packable into own pocket.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80'
    ],
    tags: ['trending']
  },
  {
    id: 12,
    name: 'Denim Jeans',
    brand: 'Fear of God',
    price: 325,
    oldPrice: null,
    category: 'new-arrivals',
    sizes: ['28', '29', '30', '31', '32', '33', '34'],
    colors: ['Black', 'Light Wash', 'Dark Wash'],
    description: 'Relaxed straight-leg jeans in premium selvedge denim. Five-pocket styling.',
    images: [
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80'
    ],
    tags: ['new']
  },
  {
    id: 13,
    name: 'Bomber Jacket',
    brand: 'Adidas',
    price: 275,
    oldPrice: 350,
    category: 'sale',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    description: 'Nylon bomber jacket with ribbed cuffs and hem. Signature branding on chest.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80'
    ],
    tags: ['sale']
  },
  {
    id: 14,
    name: 'Linen Shirt',
    brand: 'COS',
    price: 125,
    oldPrice: null,
    category: 'trending',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Beige', 'Black'],
    description: 'Relaxed linen shirt with camp collar. Mother-of-pearl buttons.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800&q=80'
    ],
    tags: ['trending']
  },
  {
    id: 15,
    name: 'Running Sneakers',
    brand: 'New Balance',
    price: 155,
    oldPrice: null,
    category: 'new-arrivals',
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    colors: ['Grey', 'Black', 'White'],
    description: 'Performance running shoes with Fresh Foam cushioning. Engineered mesh upper.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80'
    ],
    tags: ['new']
  },
  {
    id: 16,
    name: 'Trench Coat',
    brand: 'COS',
    price: 495,
    oldPrice: null,
    category: 'trending',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Khaki'],
    description: 'Minimalist trench coat in water-resistant cotton gabardine. Clean, unlined construction.',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80'
    ],
    tags: ['trending']
  }
];

const brands = [
  { id: 1, name: 'Nike', slug: 'nike' },
  { id: 2, name: 'Adidas', slug: 'adidas' },
  { id: 3, name: 'Stussy', slug: 'stussy' },
  { id: 4, name: 'Carhartt WIP', slug: 'carhartt' },
  { id: 5, name: 'Fear of God', slug: 'fear-of-god' },
  { id: 6, name: 'New Balance', slug: 'new-balance' },
  { id: 7, name: 'COS', slug: 'cos' }
];

const categories = [
  { id: 1, name: 'New Arrivals', slug: 'new-arrivals' },
  { id: 2, name: 'Trending', slug: 'trending' },
  { id: 3, name: 'Sale', slug: 'sale' }
];

function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

function getProductsByBrand(brandSlug) {
  return products.filter(p => p.brand.toLowerCase() === brandSlug.replace(/-/g, ' '));
}

function getProductById(id) {
  return products.find(p => p.id === id);
}

function getRecommendedProducts(excludeId, limit = 4) {
  return products
    .filter(p => p.id !== excludeId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
}

function getCompleteTheLook(productId) {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(p => p.id !== productId && (p.brand === product.brand || p.category === product.category))
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
}

function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );
}
