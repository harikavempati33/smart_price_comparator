import { Product } from './products';

export const shoesExpansion: Product[] = [
  // ===== PREMIUM BRANDS (High-End) =====
  
  // Nike Premium
  {
    id: 9001,
    name: "Nike Air Jordan 1 Retro High OG",
    brand: "Nike",
    category: "Shoes",
    subcategory: "High-End Sneakers",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
        alt: "Air Jordan 1 - Side View",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
        alt: "Air Jordan 1 - Front View",
        type: "front"
      },
      {
        url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
        alt: "Air Jordan 1 - Detail View",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center&hue=240",
        alt: "Air Jordan 1 - Blue Colorway",
        type: "color_variant",
        variant: "Royal Blue"
      }
    ],
    rating: 4.8,
    reviews: 3456,
    originalPrice: 16995,
    year: 2024,
    model: "AJ1-RETRO-HIGH",
    prices: {
      amazon: { price: 14995, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 15495, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 14595, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 14795, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Nike Store", price: 16995, distance: 2.1, address: "Premium Sports Mall", phone: "+91 98765 90001" },
        { name: "Sneaker Street", price: 14295, distance: 1.8, address: "Footwear Hub", phone: "+91 98765 90002" },
        { name: "Elite Shoes", price: 14995, distance: 2.5, address: "Luxury Footwear", phone: "+91 98765 90003" }
      ]
    },
    specifications: {
      "Technology": "Air-Sole Unit in Heel",
      "Upper": "Premium Leather",
      "Sole": "Rubber Outsole",
      "Fit": "True to Size",
      "Style": "Basketball Heritage"
    },
    tags: ["nike", "jordan", "premium", "basketball", "retro"]
  },
  
  // Adidas Premium
  {
    id: 9002,
    name: "Adidas Yeezy Boost 350 V2",
    brand: "Adidas",
    category: "Shoes",
    subcategory: "High-End Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 2987,
    originalPrice: 19995,
    year: 2024,
    model: "YZY-BOOST-350",
    prices: {
      amazon: { price: 17995, available: false, shipping: "N/A", delivery: "Out of stock" },
      flipkart: { price: 18495, available: false, shipping: "N/A", delivery: "Out of stock" },
      myntra: { price: 17595, available: true, shipping: "Free", delivery: "3-5 days" },
      ajio: { price: 17795, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "Adidas Originals", price: 19995, distance: 2.3, address: "Designer Footwear", phone: "+91 98765 90004" },
        { name: "Yeezy Authorized", price: 17295, distance: 3.1, address: "Exclusive Sneakers", phone: "+91 98765 90005" },
        { name: "Premium Kicks", price: 17995, distance: 2.7, address: "Luxury Shoes", phone: "+91 98765 90006" }
      ]
    },
    specifications: {
      "Technology": "Boost Midsole",
      "Upper": "Primeknit",
      "Design": "Kanye West Collaboration",
      "Comfort": "Ultra Boost Technology",
      "Limited": "Limited Edition Release"
    },
    tags: ["adidas", "yeezy", "boost", "premium", "limited-edition"]
  },

  // ===== MID-RANGE BRANDS =====
  
  // Puma Mid-Range
  {
    id: 9003,
    name: "Puma RS-X3 Puzzle Running Shoes",
    brand: "Puma",
    category: "Shoes",
    subcategory: "Mid-Range Sneakers",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 1876,
    originalPrice: 8999,
    year: 2024,
    model: "PUMA-RSX3-PZL",
    prices: {
      amazon: { price: 6999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 7299, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 6799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 6899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Puma Store", price: 8999, distance: 1.9, address: "Sports Complex", phone: "+91 98765 90007" },
        { name: "Running World", price: 6599, distance: 2.4, address: "Athletic Footwear", phone: "+91 98765 90008" },
        { name: "Fitness Shoes", price: 6999, distance: 1.7, address: "Sports Store", phone: "+91 98765 90009" }
      ]
    },
    specifications: {
      "Technology": "RS Cushioning",
      "Upper": "Mesh and Synthetic",
      "Purpose": "Running/Lifestyle",
      "Comfort": "Padded Collar and Tongue",
      "Style": "Retro-Futuristic"
    },
    tags: ["puma", "running", "mid-range", "comfortable", "lifestyle"]
  },
  
  // Reebok Mid-Range
  {
    id: 9004,
    name: "Reebok Classic Leather Legacy",
    brand: "Reebok",
    category: "Shoes",
    subcategory: "Mid-Range Sneakers",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 2134,
    originalPrice: 7999,
    year: 2024,
    model: "RBK-CLASSIC-LEG",
    prices: {
      amazon: { price: 5999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 6299, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 5799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 5899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Reebok Store", price: 7999, distance: 2.1, address: "Classic Footwear", phone: "+91 98765 90010" },
        { name: "Retro Shoes", price: 5699, distance: 1.8, address: "Vintage Style", phone: "+91 98765 90011" },
        { name: "Sport Heritage", price: 5999, distance: 2.6, address: "Classic Sports", phone: "+91 98765 90012" }
      ]
    },
    specifications: {
      "Upper": "Soft Leather",
      "Sole": "High Abrasion Rubber",
      "Style": "Classic Retro",
      "Comfort": "Die-cut EVA Midsole",
      "Heritage": "1983 Original Design"
    },
    tags: ["reebok", "classic", "leather", "retro", "heritage"]
  },

  // ===== BUDGET BRANDS =====
  
  // Bata Budget
  {
    id: 9005,
    name: "Bata Red Label Casual Canvas Shoes",
    brand: "Bata",
    category: "Shoes",
    subcategory: "Budget Casual",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 4321,
    originalPrice: 2999,
    year: 2024,
    model: "BATA-RL-CANVAS",
    prices: {
      amazon: { price: 2199, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2399, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2099, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Bata Store", price: 2999, distance: 1.2, address: "Family Footwear", phone: "+91 98765 90013" },
        { name: "Budget Shoes", price: 1899, distance: 1.5, address: "Affordable Footwear", phone: "+91 98765 90014" },
        { name: "Value Footwear", price: 2199, distance: 2.1, address: "Quality Budget", phone: "+91 98765 90015" }
      ]
    },
    specifications: {
      "Upper": "Canvas Material",
      "Sole": "Rubber",
      "Style": "Casual Everyday",
      "Comfort": "Cushioned Insole",
      "Durability": "Long-lasting"
    },
    tags: ["bata", "canvas", "budget", "casual", "everyday"]
  },
  
  // Woodland Budget
  {
    id: 9006,
    name: "Woodland Outdoor Adventure Boots",
    brand: "Woodland",
    category: "Shoes",
    subcategory: "Budget Outdoor",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 1987,
    originalPrice: 4999,
    year: 2024,
    model: "WL-OUTDOOR-ADV",
    prices: {
      amazon: { price: 3699, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 3899, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 3499, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3599, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Woodland Store", price: 4999, distance: 2.3, address: "Outdoor Gear", phone: "+91 98765 90016" },
        { name: "Adventure Footwear", price: 3399, distance: 1.9, address: "Trekking Shoes", phone: "+91 98765 90017" },
        { name: "Outdoor World", price: 3699, distance: 2.7, address: "Nature Footwear", phone: "+91 98765 90018" }
      ]
    },
    specifications: {
      "Upper": "Leather and Fabric",
      "Sole": "Grip Outsole",
      "Purpose": "Outdoor/Trekking",
      "Features": "Water Resistant",
      "Comfort": "Cushioned Ankle Support"
    },
    tags: ["woodland", "outdoor", "boots", "trekking", "adventure"]
  },

  // ===== FORMAL SHOES =====
  
  // Premium Formal
  {
    id: 9007,
    name: "Clarks Formal Leather Oxford Shoes",
    brand: "Clarks",
    category: "Shoes",
    subcategory: "Formal Leather",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 876,
    originalPrice: 12999,
    year: 2024,
    model: "CLK-OXFORD-FRM",
    prices: {
      amazon: { price: 9999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 10499, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 9699, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 9899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Clarks Store", price: 12999, distance: 3.1, address: "Formal Footwear", phone: "+91 98765 90019" },
        { name: "Business Shoes", price: 9499, distance: 2.4, address: "Professional Wear", phone: "+91 98765 90020" },
        { name: "Dress Shoes", price: 9999, distance: 2.8, address: "Formal Collection", phone: "+91 98765 90021" }
      ]
    },
    specifications: {
      "Upper": "Premium Leather",
      "Style": "Oxford Lace-up",
      "Sole": "Leather Sole",
      "Comfort": "Cushion Plus Technology",
      "Occasion": "Business/Formal"
    },
    tags: ["clarks", "oxford", "formal", "leather", "business"]
  },
  
  // Mid-Range Formal
  {
    id: 9008,
    name: "Hush Puppies Formal Derby Shoes",
    brand: "Hush Puppies",
    category: "Shoes",
    subcategory: "Formal Leather",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 1234,
    originalPrice: 7999,
    year: 2024,
    model: "HP-DERBY-FRM",
    prices: {
      amazon: { price: 5999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 6299, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 5799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 5899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Hush Puppies Store", price: 7999, distance: 2.7, address: "Comfort Formal", phone: "+91 98765 90022" },
        { name: "Office Footwear", price: 5699, distance: 1.9, address: "Work Shoes", phone: "+91 98765 90023" },
        { name: "Comfort Formal", price: 5999, distance: 2.3, address: "Easy Wear", phone: "+91 98765 90024" }
      ]
    },
    specifications: {
      "Upper": "Genuine Leather",
      "Style": "Derby Lace-up",
      "Comfort": "Bounce Plus Technology",
      "Sole": "Rubber Sole",
      "Fit": "Wide Fit Available"
    },
    tags: ["hush-puppies", "derby", "formal", "comfort", "wide-fit"]
  },

  // ===== SPORTS SHOES =====
  
  // Nike Sports
  {
    id: 9009,
    name: "Nike React Infinity Run Flyknit 3",
    brand: "Nike",
    category: "Shoes",
    subcategory: "Running Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 2345,
    originalPrice: 13995,
    year: 2024,
    model: "NIKE-REACT-INF3",
    prices: {
      amazon: { price: 11195, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 11695, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 10895, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 11095, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Nike Running Store", price: 13995, distance: 2.1, address: "Running Specialists", phone: "+91 98765 90025" },
        { name: "Marathon Shoes", price: 10695, distance: 1.8, address: "Endurance Footwear", phone: "+91 98765 90026" },
        { name: "Run Club", price: 11195, distance: 2.5, address: "Runner's Paradise", phone: "+91 98765 90027" }
      ]
    },
    specifications: {
      "Technology": "React Foam + Zoom Air",
      "Upper": "Flyknit 3.0",
      "Purpose": "Long Distance Running",
      "Support": "Stability Features",
      "Breathability": "Engineered Mesh"
    },
    tags: ["nike", "running", "react", "flyknit", "marathon"]
  },
  
  // Adidas Sports
  {
    id: 9010,
    name: "Adidas Ultraboost 22 Running Shoes",
    brand: "Adidas",
    category: "Shoes",
    subcategory: "Running Sports",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 3210,
    originalPrice: 17999,
    year: 2024,
    model: "ADIDAS-UB22",
    prices: {
      amazon: { price: 14399, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 14999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 13999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 14199, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Adidas Performance", price: 17999, distance: 2.3, address: "Performance Store", phone: "+91 98765 90028" },
        { name: "Boost Technology", price: 13799, distance: 1.9, address: "Energy Running", phone: "+91 98765 90029" },
        { name: "Ultra Running", price: 14399, distance: 2.7, address: "Premium Sports", phone: "+91 98765 90030" }
      ]
    },
    specifications: {
      "Technology": "Boost Midsole",
      "Upper": "Primeknit+",
      "Outsole": "Continental Rubber",
      "Energy": "Energy Return Technology",
      "Fit": "Adaptive Cage Support"
    },
    tags: ["adidas", "ultraboost", "boost", "primeknit", "continental"]
  },

  // ===== WOMEN'S SHOES =====
  
  // Women's Heels
  {
    id: 9011,
    name: "Steve Madden Block Heel Sandals",
    brand: "Steve Madden",
    category: "Shoes",
    subcategory: "Women's Heels",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 1567,
    originalPrice: 8999,
    year: 2024,
    model: "SM-BLOCK-HEEL",
    prices: {
      amazon: { price: 6999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 7299, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 6699, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 6899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Steve Madden Store", price: 8999, distance: 3.2, address: "Women's Fashion", phone: "+91 98765 90031" },
        { name: "Heel Heaven", price: 6499, distance: 2.1, address: "Party Footwear", phone: "+91 98765 90032" },
        { name: "Elegant Steps", price: 6999, distance: 2.8, address: "Stylish Heels", phone: "+91 98765 90033" }
      ]
    },
    specifications: {
      "Heel Height": "3 inch Block Heel",
      "Material": "Synthetic Upper",
      "Closure": "Ankle Strap",
      "Comfort": "Cushioned Footbed",
      "Occasion": "Party/Office"
    },
    tags: ["steve-madden", "heels", "block-heel", "women", "party"]
  },
  
  // Women's Flats
  {
    id: 9012,
    name: "Tory Burch Ballet Flats Classic",
    brand: "Tory Burch",
    category: "Shoes",
    subcategory: "Women's Flats",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 987,
    originalPrice: 15999,
    year: 2024,
    model: "TB-BALLET-FLAT",
    prices: {
      amazon: { price: 12999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 13499, available: true, shipping: "Free", delivery: "4-6 days" },
      myntra: { price: 12599, available: true, shipping: "Free", delivery: "3-5 days" },
      ajio: { price: 12799, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "Tory Burch Store", price: 15999, distance: 4.1, address: "Luxury Fashion", phone: "+91 98765 90034" },
        { name: "Designer Flats", price: 12399, distance: 2.9, address: "Premium Women", phone: "+91 98765 90035" },
        { name: "Luxury Comfort", price: 12999, distance: 3.5, address: "Designer Footwear", phone: "+91 98765 90036" }
      ]
    },
    specifications: {
      "Style": "Classic Ballet Flat",
      "Material": "Leather Upper",
      "Logo": "Metal Logo Medallion",
      "Comfort": "Cushioned Sole",
      "Versatility": "Day to Night Wear"
    },
    tags: ["tory-burch", "ballet-flats", "luxury", "women", "designer"]
  },

  // ===== SANDALS & SLIPPERS =====
  
  // Premium Sandals
  {
    id: 9013,
    name: "Birkenstock Arizona Leather Sandals",
    brand: "Birkenstock",
    category: "Shoes",
    subcategory: "Comfort Sandals",
    image: "https://images.unsplash.com/photo-1506629905996-f61abb2a8cc2?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 2876,
    originalPrice: 12999,
    year: 2024,
    model: "BIRK-ARIZONA-LTH",
    prices: {
      amazon: { price: 10399, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 10899, available: true, shipping: "Free", delivery: "4-6 days" },
      myntra: { price: 9999, available: true, shipping: "Free", delivery: "3-5 days" },
      ajio: { price: 10199, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "Birkenstock Store", price: 12999, distance: 3.8, address: "Comfort Footwear", phone: "+91 98765 90037" },
        { name: "Orthopedic Shoes", price: 9799, distance: 2.4, address: "Health Footwear", phone: "+91 98765 90038" },
        { name: "Comfort Zone", price: 10399, distance: 3.1, address: "Foot Health", phone: "+91 98765 90039" }
      ]
    },
    specifications: {
      "Footbed": "Contoured Cork Footbed",
      "Material": "Oiled Leather",
      "Support": "Arch Support",
      "Sole": "EVA Sole",
      "Origin": "Made in Germany"
    },
    tags: ["birkenstock", "sandals", "comfort", "orthopedic", "german"]
  },
  
  // Budget Flip-Flops
  {
    id: 9014,
    name: "Havaianas Brazil Logo Flip Flops",
    brand: "Havaianas",
    category: "Shoes",
    subcategory: "Flip Flops",
    image: "https://images.unsplash.com/photo-1506629905996-f61abb2a8cc2?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 5432,
    originalPrice: 1999,
    year: 2024,
    model: "HAV-BRAZIL-LOGO",
    prices: {
      amazon: { price: 1599, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 1699, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1499, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1549, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Havaianas Store", price: 1999, distance: 1.8, address: "Beach Footwear", phone: "+91 98765 90040" },
        { name: "Flip Flop World", price: 1399, distance: 1.2, address: "Casual Footwear", phone: "+91 98765 90041" },
        { name: "Summer Shoes", price: 1599, distance: 2.1, address: "Beach & Pool", phone: "+91 98765 90042" }
      ]
    },
    specifications: {
      "Material": "100% Rubber",
      "Origin": "Made in Brazil",
      "Durability": "Non-slip Sole",
      "Design": "Classic Brazil Logo",
      "Comfort": "Textured Footbed"
    },
    tags: ["havaianas", "flip-flops", "brazil", "summer", "beach"]
  },

  // ===== KIDS SHOES =====
  
  // Kids Sneakers
  {
    id: 9015,
    name: "Converse Chuck Taylor All Star Kids",
    brand: "Converse",
    category: "Shoes",
    subcategory: "Kids Sneakers",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 1876,
    originalPrice: 3999,
    year: 2024,
    model: "CONV-ALLSTAR-KIDS",
    prices: {
      amazon: { price: 2999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 3199, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Converse Store", price: 3999, distance: 2.5, address: "Kids Fashion", phone: "+91 98765 90043" },
        { name: "Little Feet", price: 2699, distance: 1.7, address: "Children's Shoes", phone: "+91 98765 90044" },
        { name: "Kids Footwear", price: 2999, distance: 2.2, address: "School Shoes", phone: "+91 98765 90045" }
      ]
    },
    specifications: {
      "Style": "High-Top Classic",
      "Material": "Canvas Upper",
      "Closure": "Lace-up",
      "Sole": "Rubber Toe Cap",
      "Sizes": "Kids 10-6"
    },
    tags: ["converse", "kids", "all-star", "classic", "school"]
  }
];
