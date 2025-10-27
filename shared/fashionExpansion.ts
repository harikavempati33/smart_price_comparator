import { Product } from './products';

export const fashionExpansion: Product[] = [
  // ===== MEN'S WEAR =====
  
  // Men's Shirts - Formal
  {
    id: 6001,
    name: "Arrow Formal White Shirt - Regular Fit",
    brand: "Arrow",
    category: "Fashion",
    subcategory: "Men's Formal Shirts",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2Fd824d16b4136465eb29b3dd76a2a9bcd",
    images: [
      {
        url: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=400&fit=crop&crop=center",
        alt: "Arrow Formal White Shirt - Front View",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&crop=center",
        alt: "Arrow Formal White Shirt - Side View",
        type: "side"
      },
      {
        url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=center",
        alt: "Arrow Formal White Shirt - Detail View",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=400&fit=crop&crop=center&sat=-100",
        alt: "Arrow Formal Shirt - Blue Variant",
        type: "color_variant",
        variant: "Blue"
      }
    ],
    rating: 4.3,
    reviews: 2876,
    originalPrice: 2999,
    year: 2024,
    model: "ARROW-WHT-REG",
    prices: {
      amazon: { price: 2399, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2499, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2199, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2299, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Arrow Store", price: 2999, distance: 1.2, address: "Business District", phone: "+91 98765 60001" },
        { name: "Formal Wear House", price: 2099, distance: 1.8, address: "Commercial Street", phone: "+91 98765 60002" }
      ]
    },
    specifications: {
      "Fit": "Regular Fit",
      "Material": "100% Cotton",
      "Collar": "Spread Collar",
      "Sizes": "38-46"
    },
    tags: ["formal", "shirt", "cotton", "office", "men"]
  },
  {
    id: 6002,
    name: "Van Heusen Slim Fit Blue Formal Shirt",
    brand: "Van Heusen",
    category: "Fashion",
    subcategory: "Men's Formal Shirts",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2F896b0a8b76d7406481893260f1bbf4e1",
    rating: 4.2,
    reviews: 1987,
    originalPrice: 2799,
    year: 2024,
    model: "VH-SLIM-BLUE",
    prices: {
      amazon: { price: 2299, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2399, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2099, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2199, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Van Heusen Store", price: 2799, distance: 0.9, address: "Premium Mall", phone: "+91 98765 60003" },
        { name: "Shirt Studio", price: 2049, distance: 2.1, address: "Fashion Street", phone: "+91 98765 60004" }
      ]
    },
    specifications: {
      "Fit": "Slim Fit",
      "Material": "Cotton Blend",
      "Collar": "Button Down",
      "Sizes": "38-44"
    },
    tags: ["formal", "shirt", "slim-fit", "blue", "men"]
  },
  {
    id: 6003,
    name: "Peter England Checkered Formal Shirt",
    brand: "Peter England",
    category: "Fashion",
    subcategory: "Men's Formal Shirts",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 3421,
    originalPrice: 1999,
    year: 2024,
    model: "PE-CHECK-FORM",
    prices: {
      amazon: { price: 1599, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 1699, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1449, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1549, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Peter England Store", price: 1999, distance: 1.5, address: "City Center", phone: "+91 98765 60005" },
        { name: "Value Fashion", price: 1399, distance: 2.3, address: "Budget Mall", phone: "+91 98765 60006" }
      ]
    },
    specifications: {
      "Pattern": "Checkered",
      "Material": "Cotton Poly Blend",
      "Fit": "Regular Fit",
      "Sizes": "38-46"
    },
    tags: ["formal", "shirt", "checkered", "affordable", "men"]
  },

  // Men's Casual Shirts
  {
    id: 6004,
    name: "United Colors of Benetton Casual Shirt",
    brand: "United Colors of Benetton",
    category: "Fashion",
    subcategory: "Men's Casual Shirts",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 1654,
    originalPrice: 3499,
    year: 2024,
    model: "UCB-CAS-SHT",
    prices: {
      amazon: { price: 2799, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2899, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2599, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2699, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Benetton Store", price: 3499, distance: 1.1, address: "Fashion Mall", phone: "+91 98765 60007" },
        { name: "Casual Wear Hub", price: 2549, distance: 1.9, address: "Style Street", phone: "+91 98765 60008" }
      ]
    },
    specifications: {
      "Style": "Casual",
      "Material": "100% Cotton",
      "Fit": "Regular Fit",
      "Pattern": "Solid"
    },
    tags: ["casual", "shirt", "cotton", "solid", "men"]
  },

  // Men's Jeans
  {
    id: 6005,
    name: "Levi's 511 Slim Fit Dark Blue Jeans",
    brand: "Levi's",
    category: "Fashion",
    subcategory: "Men's Jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
        alt: "Levi's 511 Dark Blue Jeans - Front View",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=400&h=400&fit=crop&crop=center",
        alt: "Levi's 511 Jeans - Back View",
        type: "back"
      },
      {
        url: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=400&fit=crop&crop=center",
        alt: "Levi's 511 Jeans - Side View",
        type: "side"
      },
      {
        url: "https://images.unsplash.com/photo-1541840031508-326b77c9a18a?w=400&h=400&fit=crop&crop=center",
        alt: "Levi's 511 Jeans - Light Blue Variant",
        type: "color_variant",
        variant: "Light Blue"
      },
      {
        url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=center",
        alt: "Levi's Label Detail",
        type: "detail"
      }
    ],
    rating: 4.5,
    reviews: 5432,
    originalPrice: 4999,
    year: 2024,
    model: "LEVI-511-DARK",
    prices: {
      amazon: { price: 3999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 4199, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 3799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Levi's Store", price: 4999, distance: 1.3, address: "Denim Street", phone: "+91 98765 60009" },
        { name: "Jeans World", price: 3699, distance: 2.0, address: "Fashion Hub", phone: "+91 98765 60010" }
      ]
    },
    specifications: {
      "Fit": "Slim Fit",
      "Material": "98% Cotton, 2% Elastane",
      "Wash": "Dark Blue",
      "Sizes": "28-38 waist"
    },
    tags: ["jeans", "denim", "slim-fit", "dark-blue", "men"]
  },
  {
    id: 6006,
    name: "Wrangler Regular Fit Black Jeans",
    brand: "Wrangler",
    category: "Fashion",
    subcategory: "Men's Jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 3876,
    originalPrice: 3499,
    year: 2024,
    model: "WRANG-REG-BLK",
    prices: {
      amazon: { price: 2799, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2899, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2599, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2699, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Wrangler Store", price: 3499, distance: 1.7, address: "Western Wear", phone: "+91 98765 60011" },
        { name: "Denim Factory", price: 2549, distance: 2.4, address: "Outlet Mall", phone: "+91 98765 60012" }
      ]
    },
    specifications: {
      "Fit": "Regular Fit",
      "Material": "100% Cotton",
      "Color": "Jet Black",
      "Sizes": "28-36 waist"
    },
    tags: ["jeans", "denim", "regular-fit", "black", "men"]
  },

  // Men's T-Shirts
  {
    id: 6007,
    name: "Nike Dri-FIT Training T-Shirt Black",
    brand: "Nike",
    category: "Fashion",
    subcategory: "Men's T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 4321,
    originalPrice: 2495,
    year: 2024,
    model: "NIKE-DRIFIT-BLK",
    prices: {
      amazon: { price: 1995, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2095, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1895, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1995, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Nike Store", price: 2495, distance: 0.8, address: "Sports Complex", phone: "+91 98765 60013" },
        { name: "Athletic Wear", price: 1795, distance: 1.5, address: "Fitness Street", phone: "+91 98765 60014" }
      ]
    },
    specifications: {
      "Material": "100% Polyester Dri-FIT",
      "Fit": "Regular Fit",
      "Technology": "Moisture-wicking",
      "Sizes": "S-XXL"
    },
    tags: ["t-shirt", "sportswear", "dri-fit", "black", "men"]
  },
  {
    id: 6008,
    name: "Adidas Originals Trefoil T-Shirt White",
    brand: "Adidas",
    category: "Fashion",
    subcategory: "Men's T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 2987,
    originalPrice: 2299,
    year: 2024,
    model: "ADIDAS-TREFOIL",
    prices: {
      amazon: { price: 1799, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 1899, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1699, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1799, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Adidas Originals", price: 2299, distance: 1.2, address: "Brand Street", phone: "+91 98765 60015" },
        { name: "Sports Fashion", price: 1649, distance: 1.8, address: "Athletic Zone", phone: "+91 98765 60016" }
      ]
    },
    specifications: {
      "Material": "100% Cotton",
      "Logo": "Trefoil Print",
      "Fit": "Regular Fit",
      "Color": "White"
    },
    tags: ["t-shirt", "originals", "trefoil", "white", "men"]
  },

  // Men's Hoodies & Sweatshirts
  {
    id: 6009,
    name: "Champion Powerblend Fleece Hoodie",
    brand: "Champion",
    category: "Fashion",
    subcategory: "Men's Hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 1876,
    originalPrice: 4999,
    year: 2024,
    model: "CHAMP-HOOD-FLC",
    prices: {
      amazon: { price: 3999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 4199, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 3799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Champion Store", price: 4999, distance: 2.1, address: "Sports Mall", phone: "+91 98765 60017" },
        { name: "Hoodie Heaven", price: 3699, distance: 1.7, address: "Streetwear Hub", phone: "+91 98765 60018" }
      ]
    },
    specifications: {
      "Material": "Cotton Polyester Blend",
      "Type": "Pullover Hoodie",
      "Features": "Kangaroo Pocket",
      "Sizes": "S-XXL"
    },
    tags: ["hoodie", "fleece", "streetwear", "casual", "men"]
  },

  // Men's Trousers
  {
    id: 6010,
    name: "Arrow Formal Black Trousers Slim Fit",
    brand: "Arrow",
    category: "Fashion",
    subcategory: "Men's Trousers",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 2543,
    originalPrice: 2999,
    year: 2024,
    model: "ARROW-TROUS-BLK",
    prices: {
      amazon: { price: 2399, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2499, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2199, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2299, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Arrow Store", price: 2999, distance: 1.2, address: "Business Plaza", phone: "+91 98765 60019" },
        { name: "Formal Wear", price: 2099, distance: 1.9, address: "Office Street", phone: "+91 98765 60020" }
      ]
    },
    specifications: {
      "Fit": "Slim Fit",
      "Material": "Poly Viscose",
      "Color": "Black",
      "Sizes": "28-38 waist"
    },
    tags: ["trousers", "formal", "slim-fit", "black", "men"]
  },

  // ===== WOMEN'S WEAR =====

  // Women's Dresses
  {
    id: 6011,
    name: "Zara Floral Print Midi Dress Summer Collection",
    brand: "Zara",
    category: "Fashion",
    subcategory: "Women's Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center",
        alt: "Zara Floral Midi Dress - Front View",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1566479179817-0ae9fb3a2a75?w=400&h=400&fit=crop&crop=center",
        alt: "Zara Floral Midi Dress - Side View",
        type: "side"
      },
      {
        url: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center",
        alt: "Zara Floral Midi Dress - Back View",
        type: "back"
      },
      {
        url: "https://images.unsplash.com/photo-1583496661160-fb5886a13d4e?w=400&h=400&fit=crop&crop=center",
        alt: "Zara Dress - Blue Floral Variant",
        type: "color_variant",
        variant: "Blue Floral"
      },
      {
        url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center",
        alt: "Zara Dress - Pattern Detail",
        type: "detail"
      }
    ],
    rating: 4.5,
    reviews: 3876,
    originalPrice: 4999,
    year: 2024,
    model: "ZARA-FLORAL-MIDI",
    prices: {
      amazon: { price: 4299, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 4499, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 3999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 4199, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Zara Store", price: 4999, distance: 1.5, address: "Fashion Mall", phone: "+91 98765 60021" },
        { name: "Designer Dresses", price: 3899, distance: 1.2, address: "Style Center", phone: "+91 98765 60022" }
      ]
    },
    specifications: {
      "Length": "Midi",
      "Material": "100% Viscose",
      "Pattern": "Floral Print",
      "Sizes": "XS-XL"
    },
    tags: ["dress", "midi", "floral", "summer", "women"]
  },
  {
    id: 6012,
    name: "H&M Elegant Black Evening Dress",
    brand: "H&M",
    category: "Fashion",
    subcategory: "Women's Dresses",
    image: "https://images.unsplash.com/photo-1566479179817-0ae9fb3a2a75?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 2654,
    originalPrice: 3999,
    year: 2024,
    model: "HM-EVE-BLK",
    prices: {
      amazon: { price: 3299, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 3499, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 2999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3199, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "H&M Store", price: 3999, distance: 1.8, address: "Mall of Fashion", phone: "+91 98765 60023" },
        { name: "Evening Wear", price: 2899, distance: 2.1, address: "Formal Street", phone: "+91 98765 60024" }
      ]
    },
    specifications: {
      "Style": "Evening Dress",
      "Material": "Polyester Blend",
      "Color": "Black",
      "Occasion": "Formal/Party"
    },
    tags: ["dress", "evening", "black", "formal", "women"]
  },
  {
    id: 6013,
    name: "Mango Casual A-Line Dress Blue",
    brand: "Mango",
    category: "Fashion",
    subcategory: "Women's Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 1987,
    originalPrice: 3499,
    year: 2024,
    model: "MANGO-ALINE-BLU",
    prices: {
      amazon: { price: 2799, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 2999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 2599, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2699, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Mango Store", price: 3499, distance: 1.4, address: "European Fashion", phone: "+91 98765 60025" },
        { name: "Casual Dresses", price: 2499, distance: 1.9, address: "Day Wear Hub", phone: "+91 98765 60026" }
      ]
    },
    specifications: {
      "Silhouette": "A-Line",
      "Material": "Cotton Blend",
      "Color": "Sky Blue",
      "Style": "Casual"
    },
    tags: ["dress", "a-line", "blue", "casual", "women"]
  },

  // Women's Tops & Blouses
  {
    id: 6014,
    name: "Forever 21 Crop Top White Basic",
    brand: "Forever 21",
    category: "Fashion",
    subcategory: "Women's Tops",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 4321,
    originalPrice: 1499,
    year: 2024,
    model: "F21-CROP-WHT",
    prices: {
      amazon: { price: 1199, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 1299, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1099, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Forever 21", price: 1499, distance: 2.1, address: "Youth Fashion", phone: "+91 98765 60027" },
        { name: "Trendy Tops", price: 899, distance: 1.7, address: "Style Street", phone: "+91 98765 60028" }
      ]
    },
    specifications: {
      "Style": "Crop Top",
      "Material": "95% Cotton, 5% Spandex",
      "Color": "White",
      "Fit": "Regular"
    },
    tags: ["crop-top", "basic", "white", "trendy", "women"]
  },
  {
    id: 6015,
    name: "Vero Moda Printed Chiffon Blouse",
    brand: "Vero Moda",
    category: "Fashion",
    subcategory: "Women's Blouses",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 2156,
    originalPrice: 2999,
    year: 2024,
    model: "VM-CHIFFON-PRINT",
    prices: {
      amazon: { price: 2399, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 2499, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 2199, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2299, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Vero Moda Store", price: 2999, distance: 1.3, address: "Premium Mall", phone: "+91 98765 60029" },
        { name: "Elegant Blouses", price: 2099, distance: 2.0, address: "Women's Fashion", phone: "+91 98765 60030" }
      ]
    },
    specifications: {
      "Material": "100% Polyester Chiffon",
      "Pattern": "Printed",
      "Style": "Office/Casual",
      "Sizes": "XS-L"
    },
    tags: ["blouse", "chiffon", "printed", "elegant", "women"]
  },

  // Women's Jeans
  {
    id: 6016,
    name: "H&M High Waisted Skinny Jeans Dark Blue",
    brand: "H&M",
    category: "Fashion",
    subcategory: "Women's Jeans",
    image: "https://images.unsplash.com/photo-1541840031508-326b77c9a18a?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 5432,
    originalPrice: 2999,
    year: 2024,
    model: "HM-HW-SKINNY",
    prices: {
      amazon: { price: 2499, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 2599, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 2299, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2399, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "H&M Store", price: 2999, distance: 1.8, address: "Fashion Hub", phone: "+91 98765 60031" },
        { name: "Denim for Her", price: 2199, distance: 1.5, address: "Women's Denim", phone: "+91 98765 60032" }
      ]
    },
    specifications: {
      "Fit": "High Waisted Skinny",
      "Material": "99% Cotton, 1% Elastane",
      "Color": "Dark Blue",
      "Sizes": "24-34 waist"
    },
    tags: ["jeans", "high-waist", "skinny", "dark-blue", "women"]
  },
  {
    id: 6017,
    name: "Only Mom Fit Light Blue Jeans",
    brand: "Only",
    category: "Fashion",
    subcategory: "Women's Jeans",
    image: "https://images.unsplash.com/photo-1541840031508-326b77c9a18a?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 3654,
    originalPrice: 3499,
    year: 2024,
    model: "ONLY-MOM-LIGHT",
    prices: {
      amazon: { price: 2799, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 2899, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 2599, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2699, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Only Store", price: 3499, distance: 1.6, address: "Denim District", phone: "+91 98765 60033" },
        { name: "Mom Jeans Shop", price: 2499, distance: 2.2, address: "Retro Fashion", phone: "+91 98765 60034" }
      ]
    },
    specifications: {
      "Fit": "Mom Fit",
      "Material": "100% Cotton",
      "Wash": "Light Blue",
      "Style": "Vintage"
    },
    tags: ["jeans", "mom-fit", "light-blue", "vintage", "women"]
  },

  // Women's Ethnic Wear
  {
    id: 6018,
    name: "Fabindia Cotton Kurta Set Pink",
    brand: "Fabindia",
    category: "Fashion",
    subcategory: "Women's Ethnic Wear",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 2876,
    originalPrice: 4999,
    year: 2024,
    model: "FAB-KURTA-PINK",
    prices: {
      amazon: { price: 3999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 4199, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 3799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Fabindia Store", price: 4999, distance: 1.9, address: "Ethnic Wear Hub", phone: "+91 98765 60035" },
        { name: "Traditional Attire", price: 3699, distance: 1.4, address: "Heritage Street", phone: "+91 98765 60036" }
      ]
    },
    specifications: {
      "Type": "Kurta with Palazzo Set",
      "Material": "100% Cotton",
      "Color": "Pink",
      "Occasion": "Casual/Festive"
    },
    tags: ["kurta", "ethnic", "cotton", "pink", "women"]
  },
  {
    id: 6019,
    name: "W for Woman Printed Anarkali Dress",
    brand: "W for Woman",
    category: "Fashion",
    subcategory: "Women's Ethnic Wear",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 1987,
    originalPrice: 3999,
    year: 2024,
    model: "W-ANARKALI-PRINT",
    prices: {
      amazon: { price: 3199, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 3399, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 2999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3099, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "W Store", price: 3999, distance: 1.7, address: "Women's Ethnic", phone: "+91 98765 60037" },
        { name: "Anarkali Palace", price: 2899, distance: 2.3, address: "Festive Wear", phone: "+91 98765 60038" }
      ]
    },
    specifications: {
      "Style": "Anarkali",
      "Material": "Polyester",
      "Pattern": "Printed",
      "Length": "Knee Length"
    },
    tags: ["anarkali", "ethnic", "printed", "festive", "women"]
  },

  // Women's Sarees
  {
    id: 6020,
    name: "Saree Mall Silk Saree with Blouse Red",
    brand: "Saree Mall",
    category: "Fashion",
    subcategory: "Women's Sarees",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 3456,
    originalPrice: 6999,
    year: 2024,
    model: "SM-SILK-RED",
    prices: {
      amazon: { price: 5499, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 5799, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 5199, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 5399, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Silk Saree Center", price: 6999, distance: 2.1, address: "Saree Market", phone: "+91 98765 60039" },
        { name: "Traditional Silks", price: 4999, distance: 1.8, address: "Heritage Mall", phone: "+91 98765 60040" }
      ]
    },
    specifications: {
      "Material": "Pure Silk",
      "Color": "Red with Gold Border",
      "Includes": "Matching Blouse Piece",
      "Occasion": "Wedding/Festival"
    },
    tags: ["saree", "silk", "red", "traditional", "women"]
  },

  // Women's Leggings & Palazzo
  {
    id: 6021,
    name: "Go Colors Cotton Leggings Black",
    brand: "Go Colors",
    category: "Fashion",
    subcategory: "Women's Leggings",
    image: "https://images.unsplash.com/photo-1506629905996-f61abb2a8cc2?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 6543,
    originalPrice: 999,
    year: 2024,
    model: "GC-LEG-BLK",
    prices: {
      amazon: { price: 699, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 799, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 599, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 649, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Go Colors Store", price: 999, distance: 1.1, address: "Women's Store", phone: "+91 98765 60041" },
        { name: "Comfort Wear", price: 549, distance: 1.6, address: "Basic Fashion", phone: "+91 98765 60042" }
      ]
    },
    specifications: {
      "Material": "95% Cotton, 5% Elastane",
      "Fit": "Ankle Length",
      "Color": "Black",
      "Sizes": "XS-XXL"
    },
    tags: ["leggings", "cotton", "black", "comfortable", "women"]
  },

  // Women's Skirts
  {
    id: 6022,
    name: "AND Pleated Mini Skirt Navy Blue",
    brand: "AND",
    category: "Fashion",
    subcategory: "Women's Skirts",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d4e?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 1876,
    originalPrice: 2499,
    year: 2024,
    model: "AND-PLEAT-NAVY",
    prices: {
      amazon: { price: 1999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 2099, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 1799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "AND Store", price: 2499, distance: 1.5, address: "Professional Wear", phone: "+91 98765 60043" },
        { name: "Skirt Studio", price: 1699, distance: 2.0, address: "Modern Fashion", phone: "+91 98765 60044" }
      ]
    },
    specifications: {
      "Style": "Pleated Mini",
      "Material": "Polyester Blend",
      "Color": "Navy Blue",
      "Length": "Above Knee"
    },
    tags: ["skirt", "pleated", "mini", "navy-blue", "women"]
  },

  // Women's Jackets & Blazers
  {
    id: 6023,
    name: "Marks & Spencer Wool Blend Blazer Black",
    brand: "Marks & Spencer",
    category: "Fashion",
    subcategory: "Women's Blazers",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 1234,
    originalPrice: 7999,
    year: 2024,
    model: "MS-BLAZER-BLK",
    prices: {
      amazon: { price: 6399, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 6799, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 5999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 6199, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "M&S Store", price: 7999, distance: 2.2, address: "Business District", phone: "+91 98765 60045" },
        { name: "Professional Wear", price: 5799, distance: 1.9, address: "Corporate Style", phone: "+91 98765 60046" }
      ]
    },
    specifications: {
      "Material": "Wool Blend",
      "Style": "Professional Blazer",
      "Color": "Black",
      "Fit": "Tailored"
    },
    tags: ["blazer", "wool", "professional", "black", "women"]
  },

  // Unisex/Additional Items
  {
    id: 6024,
    name: "Puma Unisex Track Jacket Black",
    brand: "Puma",
    category: "Fashion",
    subcategory: "Unisex Jackets",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 2987,
    originalPrice: 4999,
    year: 2024,
    model: "PUMA-TRACK-BLK",
    prices: {
      amazon: { price: 3999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 4199, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 3799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Puma Store", price: 4999, distance: 1.4, address: "Sports Complex", phone: "+91 98765 60047" },
        { name: "Athletic Gear", price: 3699, distance: 1.8, address: "Fitness Hub", phone: "+91 98765 60048" }
      ]
    },
    specifications: {
      "Type": "Track Jacket",
      "Material": "Polyester",
      "Features": "Full Zip",
      "Gender": "Unisex"
    },
    tags: ["jacket", "track", "unisex", "sports", "puma"]
  },

  // More Men's Casual Wear
  {
    id: 6025,
    name: "Tommy Hilfiger Polo Shirt Navy",
    brand: "Tommy Hilfiger",
    category: "Fashion",
    subcategory: "Men's Polo Shirts",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 1876,
    originalPrice: 4999,
    year: 2024,
    model: "TH-POLO-NAVY",
    prices: {
      amazon: { price: 3999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 4199, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 3799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Tommy Hilfiger Store", price: 4999, distance: 2.1, address: "Premium Brands", phone: "+91 98765 60049" },
        { name: "Designer Wear", price: 3699, distance: 1.7, address: "Luxury Mall", phone: "+91 98765 60050" }
      ]
    },
    specifications: {
      "Style": "Classic Polo",
      "Material": "100% Cotton Pique",
      "Color": "Navy Blue",
      "Fit": "Regular"
    },
    tags: ["polo", "tommy-hilfiger", "navy", "premium", "men"]
  },

  // Continue with more items to reach 50+ models...
  // Women's Additional Items
  {
    id: 6026,
    name: "Globus Women's Printed Palazzo Pants",
    brand: "Globus",
    category: "Fashion",
    subcategory: "Women's Palazzo",
    image: "https://images.unsplash.com/photo-1506629905996-f61abb2a8cc2?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 2543,
    originalPrice: 1999,
    year: 2024,
    model: "GLOB-PAL-PRINT",
    prices: {
      amazon: { price: 1599, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 1699, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1399, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1499, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Globus Store", price: 1999, distance: 1.3, address: "Women's Fashion", phone: "+91 98765 60051" },
        { name: "Palazzo Paradise", price: 1299, distance: 1.8, address: "Comfort Wear", phone: "+91 98765 60052" }
      ]
    },
    specifications: {
      "Style": "Wide Leg Palazzo",
      "Material": "Rayon",
      "Pattern": "Printed",
      "Fit": "Flowy"
    },
    tags: ["palazzo", "printed", "rayon", "comfortable", "women"]
  },

  // More Men's Wear - reaching 50+ fashion models
  {
    id: 6027,
    name: "Lee Cooper Regular Fit Chinos Khaki",
    brand: "Lee Cooper",
    category: "Fashion",
    subcategory: "Men's Chinos",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 1987,
    originalPrice: 2499,
    year: 2024,
    model: "LC-CHINO-KHAKI",
    prices: {
      amazon: { price: 1999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2099, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Lee Cooper Store", price: 2499, distance: 1.6, address: "Casual Wear Street", phone: "+91 98765 60053" },
        { name: "Chinos World", price: 1699, distance: 2.0, address: "Men's Fashion", phone: "+91 98765 60054" }
      ]
    },
    specifications: {
      "Fit": "Regular Fit",
      "Material": "Cotton Twill",
      "Color": "Khaki",
      "Style": "Casual"
    },
    tags: ["chinos", "khaki", "casual", "cotton", "men"]
  },

  {
    id: 6028,
    name: "Roadster Men's Printed Sweatshirt Grey",
    brand: "Roadster",
    category: "Fashion",
    subcategory: "Men's Sweatshirts",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 3654,
    originalPrice: 2499,
    year: 2024,
    model: "ROAD-SWEAT-GREY",
    prices: {
      amazon: { price: 1999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2099, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Roadster Store", price: 2499, distance: 1.2, address: "Youth Fashion Hub", phone: "+91 98765 60055" },
        { name: "Casual Kings", price: 1699, distance: 1.9, address: "Streetwear Zone", phone: "+91 98765 60056" }
      ]
    },
    specifications: {
      "Material": "Cotton Fleece",
      "Pattern": "Printed",
      "Color": "Grey",
      "Fit": "Regular"
    },
    tags: ["sweatshirt", "printed", "grey", "casual", "men"]
  },

  {
    id: 6029,
    name: "Flying Machine Skinny Fit Jeans Blue",
    brand: "Flying Machine",
    category: "Fashion",
    subcategory: "Men's Jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 4321,
    originalPrice: 3999,
    year: 2024,
    model: "FM-SKINNY-BLUE",
    prices: {
      amazon: { price: 2999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 3199, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Flying Machine Store", price: 3999, distance: 1.4, address: "Denim District", phone: "+91 98765 60057" },
        { name: "Skinny Jeans Hub", price: 2699, distance: 2.1, address: "Modern Denim", phone: "+91 98765 60058" }
      ]
    },
    specifications: {
      "Fit": "Skinny Fit",
      "Material": "Stretch Denim",
      "Color": "Medium Blue",
      "Sizes": "28-36"
    },
    tags: ["jeans", "skinny", "blue", "stretch", "men"]
  },

  {
    id: 6030,
    name: "Max Fashion Floral Jumpsuit Multi",
    brand: "Max Fashion",
    category: "Fashion",
    subcategory: "Women's Jumpsuits",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 2156,
    originalPrice: 2999,
    year: 2024,
    model: "MAX-JUMP-FLORAL",
    prices: {
      amazon: { price: 2399, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 2499, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 2199, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2299, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Max Fashion Store", price: 2999, distance: 1.7, address: "Fashion Central", phone: "+91 98765 60059" },
        { name: "Jumpsuit Junction", price: 2099, distance: 1.3, address: "Trendy Wear", phone: "+91 98765 60060" }
      ]
    },
    specifications: {
      "Style": "Floral Jumpsuit",
      "Material": "Viscose",
      "Pattern": "Floral Print",
      "Length": "Full Length"
    },
    tags: ["jumpsuit", "floral", "viscose", "trendy", "women"]
  },

  {
    id: 6031,
    name: "Blackberrys Formal Blazer Navy",
    brand: "Blackberrys",
    category: "Fashion",
    subcategory: "Men's Blazers",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 987,
    originalPrice: 8999,
    year: 2024,
    model: "BB-BLAZER-NAVY",
    prices: {
      amazon: { price: 7199, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 7499, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 6999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 7199, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Blackberrys Store", price: 8999, distance: 2.1, address: "Formal Wear Plaza", phone: "+91 98765 60065" },
        { name: "Business Attire", price: 6799, distance: 1.8, address: "Corporate Center", phone: "+91 98765 60066" }
      ]
    },
    specifications: {
      "Material": "Wool Blend",
      "Style": "Two Button Blazer",
      "Color": "Navy Blue",
      "Fit": "Slim Fit"
    },
    tags: ["blazer", "formal", "navy", "wool", "men"]
  }
];
