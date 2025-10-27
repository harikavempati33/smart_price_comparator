export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  subcategory?: string;
  image: string;
  images?: Array<{
    url: string;
    alt: string;
    type: 'main' | 'front' | 'back' | 'side' | 'top' | 'detail' | 'color_variant' | 'style_variant';
    variant?: string; // For color/style variants like "Red", "Blue", "Slim Fit", etc.
  }>;
  rating: number;
  reviews: number;
  originalPrice: number;
  year: number;
  model?: string;
  prices: {
    amazon: { price: number; available: boolean; shipping: string; delivery: string };
    flipkart: { price: number; available: boolean; shipping: string; delivery: string };
    myntra?: { price: number; available: boolean; shipping: string; delivery: string };
    ajio?: { price: number; available: boolean; shipping: string; delivery: string };
    local: Array<{
      name: string;
      price: number;
      distance: number;
      address: string;
      phone: string;
    }>;
  };
  specifications: Record<string, string>;
  tags?: string[];
}

export const categories = [
  "Electronics",
  "Smartphones", 
  "Laptops",
  "Home Appliances",
  "Fashion",
  "Shoes",
  "Smartwatches",
  "Traditional Watches",
  "Furniture",
  "Bags",
  "Cosmetics",
  "Gym Equipment",
  "Travelling Bags",
  "Dresses",
  "Home Decor",
  "Student Accessories",
  "Desktops"
];

export const productDatabase: Product[] = [
  // Electronics & Smartphones (2020-2025)
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    brand: "Apple",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 2847,
    originalPrice: 159900,
    year: 2023,
    model: "A3108",
    prices: {
      amazon: { price: 144900, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 146900, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "TechWorld Store", price: 142900, distance: 1.2, address: "MG Road", phone: "+91 98765 43210" },
        { name: "Mobile Planet", price: 145900, distance: 2.1, address: "Brigade Road", phone: "+91 98765 43211" }
      ]
    },
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Processor": "A17 Pro chip",
      "Camera": "48MP Main camera",
      "Storage": "256GB"
    },
    tags: ["flagship", "latest", "premium"]
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra 512GB",
    brand: "Samsung",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 1923,
    originalPrice: 154999,
    year: 2024,
    model: "SM-S928B",
    prices: {
      amazon: { price: 139999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 141999, available: true, shipping: "Free", delivery: "3 days" },
      local: [
        { name: "Samsung Store", price: 138999, distance: 0.8, address: "Commercial Street", phone: "+91 98765 43212" },
        { name: "Electronics Hub", price: 142999, distance: 1.5, address: "Koramangala", phone: "+91 98765 43213" }
      ]
    },
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 3",
      "Camera": "200MP Main camera",
      "Storage": "512GB"
    },
    tags: ["android", "s-pen", "photography"]
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro 128GB",
    brand: "Google",
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 1456,
    originalPrice: 106999,
    year: 2023,
    model: "GP8P",
    prices: {
      amazon: { price: 94999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 96999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Pixel Store", price: 93999, distance: 2.3, address: "Forum Mall", phone: "+91 98765 43214" },
        { name: "Digital Dreams", price: 95999, distance: 3.1, address: "Indiranagar", phone: "+91 98765 43215" }
      ]
    },
    specifications: {
      "Display": "6.7-inch LTPO OLED",
      "Processor": "Google Tensor G3",
      "Camera": "50MP Main + AI features",
      "Storage": "128GB"
    },
    tags: ["ai", "photography", "pure-android"]
  },

  // Laptops (2020-2025)
  {
    id: 4,
    name: "MacBook Air M3 15-inch 2024",
    brand: "Apple",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 892,
    originalPrice: 134900,
    year: 2024,
    model: "MRYU3",
    prices: {
      amazon: { price: 129900, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 131900, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Apple Store", price: 128900, distance: 1.8, address: "UB City Mall", phone: "+91 98765 43216" },
        { name: "Laptop World", price: 130900, distance: 2.5, address: "SP Road", phone: "+91 98765 43217" }
      ]
    },
    specifications: {
      "Display": "15.3-inch Liquid Retina",
      "Processor": "Apple M3 chip",
      "RAM": "8GB unified memory",
      "Storage": "256GB SSD"
    },
    tags: ["ultrabook", "m3-chip", "silent"]
  },
  {
    id: 5,
    name: "Dell XPS 13 Plus 2024",
    brand: "Dell",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 756,
    originalPrice: 149999,
    year: 2024,
    model: "9320",
    prices: {
      amazon: { price: 139999, available: true, shipping: "Free", delivery: "2 days" },
      flipkart: { price: 141999, available: true, shipping: "Free", delivery: "3 days" },
      local: [
        { name: "Dell Exclusive Store", price: 138999, distance: 1.5, address: "Jayanagar", phone: "+91 98765 43218" },
        { name: "Laptop Center", price: 140999, distance: 2.8, address: "Malleshwaram", phone: "+91 98765 43219" }
      ]
    },
    specifications: {
      "Display": "13.4-inch OLED Touch",
      "Processor": "Intel Core i7-1360P",
      "RAM": "16GB LPDDR5",
      "Storage": "512GB SSD"
    },
    tags: ["oled", "touchscreen", "premium"]
  },

  // Desktops (2020-2025)
  {
    id: 6,
    name: "iMac 24-inch M3 2024",
    brand: "Apple",
    category: "Desktops",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 543,
    originalPrice: 134900,
    year: 2024,
    model: "MQRD3",
    prices: {
      amazon: { price: 129900, available: true, shipping: "Free", delivery: "3 days" },
      flipkart: { price: 131900, available: false, shipping: "N/A", delivery: "Out of stock" },
      local: [
        { name: "Apple Authorized", price: 128900, distance: 1.8, address: "Brigade Road", phone: "+91 98765 43220" },
        { name: "Mac Store", price: 130500, distance: 3.2, address: "Whitefield", phone: "+91 98765 43221" }
      ]
    },
    specifications: {
      "Display": "24-inch 4.5K Retina",
      "Processor": "Apple M3 chip",
      "RAM": "8GB unified memory",
      "Storage": "256GB SSD"
    },
    tags: ["all-in-one", "4k", "colorful"]
  },

  // Smartwatches (2020-2025)
  {
    id: 7,
    name: "Apple Watch Series 9 GPS 45mm",
    brand: "Apple",
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 1523,
    originalPrice: 45900,
    year: 2023,
    model: "MR933",
    prices: {
      amazon: { price: 40900, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 42900, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Watch Gallery", price: 39900, distance: 1.4, address: "Brigade Road", phone: "+91 98765 43222" },
        { name: "Smart Wear", price: 41500, distance: 1.9, address: "Commercial Street", phone: "+91 98765 43223" }
      ]
    },
    specifications: {
      "Display": "45mm Always-On Retina",
      "Health": "ECG, Blood Oxygen",
      "Battery": "Up to 18 hours",
      "Water": "50 meters"
    },
    tags: ["health", "fitness", "premium"]
  },
  {
    id: 8,
    name: "Samsung Galaxy Watch 6 Classic 47mm",
    brand: "Samsung",
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 987,
    originalPrice: 42999,
    year: 2023,
    model: "SM-R950",
    prices: {
      amazon: { price: 36999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 38999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Samsung Experience", price: 35999, distance: 0.8, address: "Forum Mall", phone: "+91 98765 43224" },
        { name: "Watch World", price: 37500, distance: 2.1, address: "Phoenix Mall", phone: "+91 98765 43225" }
      ]
    },
    specifications: {
      "Display": "1.5-inch Super AMOLED",
      "Health": "BioActive Sensor",
      "Battery": "425mAh, 40 hours",
      "Water": "5ATM + IP68"
    },
    tags: ["rotating-bezel", "android", "health"]
  },

  // Traditional Watches (2020-2025)
  {
    id: 9,
    name: "Rolex Submariner Date 2024",
    brand: "Rolex",
    category: "Traditional Watches",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2Fc55d79f8fb834cd0ae63a3941f448ae6",
    rating: 4.9,
    reviews: 234,
    originalPrice: 895000,
    year: 2024,
    model: "126610LN",
    prices: {
      amazon: { price: 875000, available: false, shipping: "N/A", delivery: "Not available" },
      flipkart: { price: 885000, available: false, shipping: "N/A", delivery: "Not available" },
      local: [
        { name: "Rolex Boutique", price: 895000, distance: 2.1, address: "UB City Mall", phone: "+91 98765 43226" },
        { name: "Swiss Time", price: 890000, distance: 3.5, address: "Lavelle Road", phone: "+91 98765 43227" }
      ]
    },
    specifications: {
      "Movement": "Perpetual, mechanical",
      "Power Reserve": "70 hours",
      "Water Resistance": "300m",
      "Material": "Oystersteel"
    },
    tags: ["luxury", "diving", "swiss"]
  },
  {
    id: 10,
    name: "Casio G-Shock GA-2100 2023",
    brand: "Casio",
    category: "Traditional Watches",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2F8e5927b15e924fbe98ec10bdb66b4428",
    rating: 4.7,
    reviews: 1876,
    originalPrice: 10995,
    year: 2023,
    model: "GA-2100-1A1",
    prices: {
      amazon: { price: 9995, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 10295, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Casio Store", price: 9795, distance: 1.7, address: "Commercial Street", phone: "+91 98765 43228" },
        { name: "Time Zone", price: 10195, distance: 2.3, address: "Chickpet", phone: "+91 98765 43229" }
      ]
    },
    specifications: {
      "Movement": "Quartz",
      "Water Resistance": "200m",
      "Features": "Shock resistant",
      "Battery": "3 years"
    },
    tags: ["sports", "durable", "affordable"]
  },

  // Furniture (2020-2025)
  {
    id: 11,
    name: "Urban Ladder Wakefit Orthopaedic Memory Foam Mattress",
    brand: "Urban Ladder",
    category: "Furniture",
    subcategory: "Bedroom",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 2341,
    originalPrice: 24999,
    year: 2024,
    model: "UL-WF-QUEEN",
    prices: {
      amazon: { price: 19999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 21999, available: true, shipping: "Free", delivery: "4-7 days" },
      local: [
        { name: "Urban Ladder Store", price: 18999, distance: 2.1, address: "HSR Layout", phone: "+91 98765 43230" },
        { name: "Furniture World", price: 20499, distance: 3.8, address: "Marathahalli", phone: "+91 98765 43231" }
      ]
    },
    specifications: {
      "Size": "Queen (78x60 inches)",
      "Thickness": "6 inches",
      "Material": "Memory foam",
      "Firmness": "Medium firm"
    },
    tags: ["orthopedic", "memory-foam", "queen-size"]
  },
  {
    id: 12,
    name: "IKEA HEMNES 8-drawer Dresser 2024",
    brand: "IKEA",
    category: "Furniture",
    subcategory: "Storage",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 876,
    originalPrice: 24999,
    year: 2024,
    model: "HEMNES-8D",
    prices: {
      amazon: { price: 22999, available: true, shipping: "₹499", delivery: "5-7 days" },
      flipkart: { price: 23999, available: true, shipping: "₹599", delivery: "6-8 days" },
      local: [
        { name: "IKEA Nagasandra", price: 24999, distance: 15.2, address: "Nagasandra", phone: "+91 98765 43232" },
        { name: "Furniture Hub", price: 22499, distance: 4.5, address: "Koramangala", phone: "+91 98765 43233" }
      ]
    },
    specifications: {
      "Dimensions": "160x96x50 cm",
      "Material": "Solid pine",
      "Drawers": "8 with soft-closing",
      "Color": "White stain"
    },
    tags: ["storage", "scandinavian", "solid-wood"]
  },

  // Bags (2020-2025)
  {
    id: 13,
    name: "Peak Design Everyday Backpack V2 30L",
    brand: "Peak Design",
    category: "Bags",
    subcategory: "Camera Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 1432,
    originalPrice: 28999,
    year: 2023,
    model: "BBP-30-BK-2",
    prices: {
      amazon: { price: 26999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 27999, available: true, shipping: "Free", delivery: "3-4 days" },
      local: [
        { name: "Camera Corner", price: 25999, distance: 1.8, address: "SP Road", phone: "+91 98765 43234" },
        { name: "Photo Plus", price: 27499, distance: 2.7, address: "Chickpet", phone: "+91 98765 43235" }
      ]
    },
    specifications: {
      "Capacity": "30 liters",
      "Material": "Weather-resistant exterior",
      "Laptop": "Fits 16-inch laptop",
      "Access": "Side and rear access"
    },
    tags: ["photography", "modular", "weatherproof"]
  },
  {
    id: 14,
    name: "Herschel Little America Backpack 2024",
    brand: "Herschel",
    category: "Bags",
    subcategory: "Lifestyle",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 987,
    originalPrice: 8999,
    year: 2024,
    model: "HL-LA-2024",
    prices: {
      amazon: { price: 7999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 8299, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Lifestyle Store", price: 7799, distance: 1.2, address: "Brigade Road", phone: "+91 98765 43236" },
        { name: "Bag World", price: 8199, distance: 2.1, address: "Commercial Street", phone: "+91 98765 43237" }
      ]
    },
    specifications: {
      "Capacity": "25 liters",
      "Material": "Classic fabric",
      "Laptop": "15-inch laptop sleeve",
      "Features": "Drawstring closure"
    },
    tags: ["casual", "vintage", "laptop-friendly"]
  },

  // Travelling Bags (2020-2025)
  {
    id: 15,
    name: "Samsonite Theoni 75cm Hard Suitcase 2024",
    brand: "Samsonite",
    category: "Travelling Bags",
    subcategory: "Hard Luggage",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 1234,
    originalPrice: 18999,
    year: 2024,
    model: "THEONI-75-BLK",
    prices: {
      amazon: { price: 16999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 17499, available: true, shipping: "Free", delivery: "3-4 days" },
      local: [
        { name: "Samsonite Store", price: 16499, distance: 1.9, address: "Forum Mall", phone: "+91 98765 43238" },
        { name: "Travel Gear", price: 17199, distance: 2.8, address: "Phoenix Mall", phone: "+91 98765 43239" }
      ]
    },
    specifications: {
      "Size": "75cm (Large)",
      "Weight": "4.2 kg",
      "Material": "Polypropylene",
      "Wheels": "4 spinner wheels"
    },
    tags: ["hard-case", "lightweight", "spinner"]
  },
  {
    id: 16,
    name: "VIP Skybags Brat 53cm Cabin Luggage",
    brand: "Skybags",
    category: "Travelling Bags",
    subcategory: "Cabin Luggage",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 2876,
    originalPrice: 4999,
    year: 2023,
    model: "STBRA53BLK",
    prices: {
      amazon: { price: 3999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 4199, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "VIP Store", price: 3799, distance: 1.5, address: "Commercial Street", phone: "+91 98765 43240" },
        { name: "Luggage Point", price: 4099, distance: 2.3, address: "Chickpet", phone: "+91 98765 43241" }
      ]
    },
    specifications: {
      "Size": "53cm (Cabin)",
      "Weight": "2.6 kg",
      "Material": "Polyester",
      "Wheels": "2 wheels"
    },
    tags: ["cabin-size", "affordable", "lightweight"]
  },

  // Cosmetics (2020-2025)
  {
    id: 17,
    name: "Dyson Supersonic Hair Dryer HD08 2024",
    brand: "Dyson",
    category: "Cosmetics",
    subcategory: "Hair Care",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 1876,
    originalPrice: 36900,
    year: 2024,
    model: "HD08",
    prices: {
      amazon: { price: 34900, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 35900, available: true, shipping: "Free", delivery: "3-4 days" },
      local: [
        { name: "Dyson Demo Store", price: 36900, distance: 2.1, address: "UB City Mall", phone: "+91 98765 43242" },
        { name: "Beauty World", price: 34499, distance: 1.7, address: "Brigade Road", phone: "+91 98765 43243" }
      ]
    },
    specifications: {
      "Technology": "Air Multiplier technology",
      "Heat Settings": "4 heat + cold shot",
      "Attachments": "5 styling attachments",
      "Cord": "2.5m cord"
    },
    tags: ["premium", "fast-drying", "ionic"]
  },
  {
    id: 18,
    name: "Lakme Absolute Perfect Radiance Kit 2024",
    brand: "Lakme",
    category: "Cosmetics",
    subcategory: "Makeup",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 3421,
    originalPrice: 2499,
    year: 2024,
    model: "APR-KIT-2024",
    prices: {
      amazon: { price: 1999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2099, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Lakme Salon", price: 1899, distance: 0.8, address: "Commercial Street", phone: "+91 98765 43244" },
        { name: "Nykaa Store", price: 2049, distance: 1.4, address: "Forum Mall", phone: "+91 98765 43245" }
      ]
    },
    specifications: {
      "Kit Includes": "Foundation, Concealer, Compact",
      "Skin Type": "All skin types",
      "Coverage": "Medium to full",
      "Finish": "Natural matte"
    },
    tags: ["makeup-kit", "indian-brand", "affordable"]
  },

  // Gym Equipment (2020-2025)
  {
    id: 19,
    name: "Bowflex SelectTech 552 Adjustable Dumbbells",
    brand: "Bowflex",
    category: "Gym Equipment",
    subcategory: "Strength Training",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 987,
    originalPrice: 45999,
    year: 2023,
    model: "ST552",
    prices: {
      amazon: { price: 41999, available: true, shipping: "Free", delivery: "5-7 days" },
      flipkart: { price: 43999, available: true, shipping: "Free", delivery: "7-10 days" },
      local: [
        { name: "Fitness First", price: 40999, distance: 3.2, address: "Koramangala", phone: "+91 98765 43246" },
        { name: "Gym Equipment Store", price: 42499, distance: 4.1, address: "HSR Layout", phone: "+91 98765 43247" }
      ]
    },
    specifications: {
      "Weight Range": "5-52.5 lbs per dumbbell",
      "Adjustments": "15 weight settings",
      "Space": "Replaces 30 dumbbells",
      "Material": "Steel and composite"
    },
    tags: ["adjustable", "space-saving", "professional"]
  },
  {
    id: 20,
    name: "Peloton Bike+ 2024 Generation",
    brand: "Peloton",
    category: "Gym Equipment",
    subcategory: "Cardio",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 756,
    originalPrice: 229999,
    year: 2024,
    model: "BIKE-PLUS-2024",
    prices: {
      amazon: { price: 215999, available: false, shipping: "N/A", delivery: "Not available" },
      flipkart: { price: 219999, available: false, shipping: "N/A", delivery: "Not available" },
      local: [
        { name: "Peloton Showroom", price: 229999, distance: 8.5, address: "Whitefield", phone: "+91 98765 43248" },
        { name: "Premium Fitness", price: 224999, distance: 6.7, address: "Indiranagar", phone: "+91 98765 43249" }
      ]
    },
    specifications: {
      "Screen": "23.8-inch HD touchscreen",
      "Resistance": "Magnetic resistance",
      "Classes": "Live and on-demand",
      "Metrics": "Real-time performance"
    },
    tags: ["interactive", "premium", "live-classes"]
  },

  // Shoes (2020-2025)
  {
    id: 21,
    name: "Nike Air Max 270 React 2024",
    brand: "Nike",
    category: "Shoes",
    subcategory: "Running",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 2341,
    originalPrice: 12995,
    year: 2024,
    model: "AO4971-100",
    prices: {
      amazon: { price: 10995, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 11495, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Nike Store", price: 10795, distance: 1.4, address: "Forum Mall", phone: "+91 98765 43250" },
        { name: "Sports Station", price: 11295, distance: 2.1, address: "Phoenix Mall", phone: "+91 98765 43251" }
      ]
    },
    specifications: {
      "Technology": "Air Max 270 + React foam",
      "Upper": "Breathable mesh",
      "Sole": "Durable rubber outsole",
      "Use": "Running and lifestyle"
    },
    tags: ["running", "comfort", "lifestyle"]
  },
  {
    id: 22,
    name: "Adidas Ultraboost 22 2023",
    brand: "Adidas",
    category: "Shoes",
    subcategory: "Running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 1987,
    originalPrice: 17999,
    year: 2023,
    model: "GX3191",
    prices: {
      amazon: { price: 14999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 15999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Adidas Originals", price: 14499, distance: 1.8, address: "Brigade Road", phone: "+91 98765 43252" },
        { name: "Foot Locker", price: 15499, distance: 2.3, address: "Commercial Street", phone: "+91 98765 43253" }
      ]
    },
    specifications: {
      "Technology": "Boost midsole",
      "Upper": "Primeknit+",
      "Outsole": "Continental Rubber",
      "Drop": "10mm heel-to-toe"
    },
    tags: ["boost", "primeknit", "performance"]
  },

  // Dresses (2020-2025)
  {
    id: 23,
    name: "Zara Floral Print Midi Dress 2024",
    brand: "Zara",
    category: "Dresses",
    subcategory: "Casual",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 876,
    originalPrice: 3999,
    year: 2024,
    model: "ZR-MIDI-FL24",
    prices: {
      amazon: { price: 3599, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 3799, available: true, shipping: "Free", delivery: "3-4 days" },
      local: [
        { name: "Zara Store", price: 3999, distance: 1.2, address: "UB City Mall", phone: "+91 98765 43254" },
        { name: "Fashion Central", price: 3499, distance: 2.1, address: "Brigade Road", phone: "+91 98765 43255" }
      ]
    },
    specifications: {
      "Length": "Midi (knee length)",
      "Material": "100% Viscose",
      "Pattern": "Floral print",
      "Fit": "Regular fit"
    },
    tags: ["midi", "floral", "casual"]
  },
  {
    id: 24,
    name: "H&M Elegant Evening Gown 2024",
    brand: "H&M",
    category: "Dresses",
    subcategory: "Formal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2Fe3c0f7d47397468ca7edc6090566d89a",
    rating: 4.1,
    reviews: 543,
    originalPrice: 4999,
    year: 2024,
    model: "HM-EG-2024",
    prices: {
      amazon: { price: 4299, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 4499, available: true, shipping: "Free", delivery: "3-4 days" },
      local: [
        { name: "H&M Store", price: 4999, distance: 1.5, address: "Phoenix Mall", phone: "+91 98765 43256" },
        { name: "Style Studio", price: 4199, distance: 1.8, address: "Forum Mall", phone: "+91 98765 43257" }
      ]
    },
    specifications: {
      "Length": "Floor length",
      "Material": "Polyester blend",
      "Occasion": "Evening/formal",
      "Features": "Side zip closure"
    },
    tags: ["evening", "formal", "elegant"]
  },

  // Home Decor (2020-2025)
  {
    id: 25,
    name: "Philips Hue White and Color Smart Bulb 2024",
    brand: "Philips",
    category: "Home Decor",
    subcategory: "Lighting",
    image: "https://images.unsplash.com/photo-1558618042-a5997b8c7a4c?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 1234,
    originalPrice: 4999,
    year: 2024,
    model: "929002468901",
    prices: {
      amazon: { price: 4199, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 4399, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Philips Store", price: 4999, distance: 2.1, address: "Commercial Street", phone: "+91 98765 43258" },
        { name: "Smart Home Store", price: 3999, distance: 1.7, address: "Koramangala", phone: "+91 98765 43259" }
      ]
    },
    specifications: {
      "Colors": "16 million colors",
      "Connectivity": "Bluetooth + Zigbee",
      "Brightness": "1100 lumens",
      "Life": "25,000 hours"
    },
    tags: ["smart-lighting", "color-changing", "app-control"]
  },

  // Student Accessories (2020-2025)
  {
    id: 26,
    name: "Apple iPad Pro 12.9-inch M2 2024",
    brand: "Apple",
    category: "Student Accessories",
    subcategory: "Tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 987,
    originalPrice: 112900,
    year: 2024,
    model: "MNXQ3",
    prices: {
      amazon: { price: 107900, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 109900, available: true, shipping: "Free", delivery: "3-4 days" },
      local: [
        { name: "Apple Store", price: 112900, distance: 1.8, address: "UB City Mall", phone: "+91 98765 43260" },
        { name: "iWorld", price: 106900, distance: 2.3, address: "Brigade Road", phone: "+91 98765 43261" }
      ]
    },
    specifications: {
      "Display": "12.9-inch Liquid Retina XDR",
      "Processor": "Apple M2 chip",
      "Storage": "128GB",
      "Features": "Apple Pencil support"
    },
    tags: ["study", "creative", "professional"]
  },
  {
    id: 27,
    name: "Logitech MX Master 3S Wireless Mouse",
    brand: "Logitech",
    category: "Student Accessories",
    subcategory: "Computer Accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 2341,
    originalPrice: 8995,
    year: 2023,
    model: "910-006559",
    prices: {
      amazon: { price: 7995, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 8295, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Logitech Store", price: 8995, distance: 1.5, address: "SP Road", phone: "+91 98765 43262" },
        { name: "Computer Point", price: 7795, distance: 2.2, address: "Nehru Place", phone: "+91 98765 43263" }
      ]
    },
    specifications: {
      "Sensor": "Darkfield 8000 DPI",
      "Battery": "70 days on full charge",
      "Connectivity": "USB-C, Bluetooth",
      "Buttons": "7 customizable buttons"
    },
    tags: ["productivity", "ergonomic", "professional"]
  }
];

// Function to get products by category (now includes expanded database)
export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product =>
    product.category.toLowerCase() === category.toLowerCase()
  );
};

// Import expanded products and 2025 products
import { expandedProductDatabase, searchExpandedProducts } from './expandedProducts';
import { products2025, search2025Products } from './products2025';
import { additionalBrandProducts } from './additionalBrands';
import { expandedCategoryProducts } from './expandedCategories';
import { fashionExpansion } from './fashionExpansion';
import { furnitureExpansion } from './furnitureExpansion';
import { cosmeticsExpansion } from './cosmeticsExpansion';
import { shoesExpansion } from './shoesExpansion';
import { watchesExpansion } from './watchesExpansion';
import { homeAppliancesExpansion } from './homeAppliancesExpansion';
import { bagsExpansion } from './bagsExpansion';

// Combine all products (original + expanded + 2025 + additional brands + expanded categories + fashion expansion + furniture expansion + cosmetics expansion + shoes expansion + watches expansion + home appliances expansion + bags expansion)
const allProducts = [...productDatabase, ...expandedProductDatabase, ...products2025, ...additionalBrandProducts, ...expandedCategoryProducts, ...fashionExpansion, ...furnitureExpansion, ...cosmeticsExpansion, ...shoesExpansion, ...watchesExpansion, ...homeAppliancesExpansion, ...bagsExpansion];

// Enhanced search function with flexible matching
export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return allProducts.slice(0, 20); // Return first 20 products if no query

  const searchTerm = query.toLowerCase().trim();

  // Enhanced search with multiple matching strategies
  return allProducts.filter(product => {
    const name = product.name.toLowerCase();
    const brand = product.brand.toLowerCase();
    const category = product.category.toLowerCase();
    const subcategory = product.subcategory?.toLowerCase() || '';
    const tags = product.tags?.map(tag => tag.toLowerCase()) || [];
    const year = product.year.toString();

    // Direct matches
    if (name.includes(searchTerm) ||
        brand.includes(searchTerm) ||
        category.includes(searchTerm) ||
        subcategory.includes(searchTerm) ||
        tags.some(tag => tag.includes(searchTerm)) ||
        year.includes(searchTerm)) {
      return true;
    }

    // Handle specific search patterns
    const searchWords = searchTerm.split(' ').filter(word => word.length > 0);

    // Check if all search words match (partial matching)
    const allWordsMatch = searchWords.every(word =>
      name.includes(word) ||
      brand.includes(word) ||
      category.includes(word) ||
      subcategory.includes(word) ||
      tags.some(tag => tag.includes(word))
    );

    if (allWordsMatch) return true;

    // Special handling for common search patterns
    if (searchTerm.includes('iphone') || searchTerm.includes('iphone16')) {
      return brand === 'apple' && (
        name.includes('iphone') ||
        tags.some(tag => tag.includes('iphone'))
      );
    }

    if (searchTerm.includes('samsung') && (searchTerm.includes('galaxy') || searchTerm.includes('s25'))) {
      return brand === 'samsung' && (
        name.includes('galaxy') ||
        tags.some(tag => tag.includes('galaxy'))
      );
    }

    if (searchTerm.includes('macbook') || (searchTerm.includes('mac') && searchTerm.includes('book'))) {
      return brand === 'apple' && (
        name.includes('macbook') ||
        tags.some(tag => tag.includes('macbook'))
      );
    }

    // Handle year-specific searches
    if (searchTerm.includes('2025') || searchTerm.includes('latest')) {
      return product.year >= 2025;
    }

    if (searchTerm.includes('2024')) {
      return product.year === 2024;
    }

    // Handle price range searches
    const bestPrice = Math.min(
      product.prices.amazon.price,
      product.prices.flipkart.price,
      ...product.prices.local.map(store => store.price)
    );

    if (searchTerm.includes('low range') || searchTerm.includes('budget') || searchTerm.includes('cheap')) {
      return bestPrice <= 25000;
    }

    if (searchTerm.includes('mid range') || searchTerm.includes('mid-range') || searchTerm.includes('medium')) {
      return bestPrice > 25000 && bestPrice <= 75000;
    }

    if (searchTerm.includes('flagship') && !searchTerm.includes('high flagship')) {
      return bestPrice > 75000 && bestPrice <= 200000;
    }

    if (searchTerm.includes('high flagship') || searchTerm.includes('premium') || searchTerm.includes('luxury')) {
      return bestPrice > 200000;
    }

    // Handle subcategory matches for price ranges
    if (product.subcategory) {
      const subcat = product.subcategory.toLowerCase();
      if (searchTerm.includes('low') && subcat.includes('low')) return true;
      if (searchTerm.includes('mid') && subcat.includes('mid')) return true;
      if (searchTerm.includes('flagship') && subcat.includes('flagship')) return true;
      if (searchTerm.includes('premium') && subcat.includes('high')) return true;
    }

    return false;
  }).slice(0, 100); // Limit to 100 results for performance
};

// Function to get latest products (2023-2025)
export const getLatestProducts = (): Product[] => {
  return allProducts.filter(product => product.year >= 2023)
    .sort((a, b) => b.year - a.year);
};

// Function to get products by year range
export const getProductsByYearRange = (startYear: number, endYear: number): Product[] => {
  return allProducts.filter(product =>
    product.year >= startYear && product.year <= endYear
  );
};

// Function to get products by price range
export const getProductsByRange = (range: string): Product[] => {
  const rangeConfig: Record<string, {min: number, max: number}> = {
    'low-range': { min: 0, max: 25000 },
    'budget': { min: 0, max: 25000 },
    'mid-range': { min: 25000, max: 75000 },
    'medium': { min: 25000, max: 75000 },
    'flagship': { min: 75000, max: 200000 },
    'high-flagship': { min: 200000, max: 10000000 },
    'premium': { min: 200000, max: 10000000 },
    'luxury': { min: 500000, max: 10000000 }
  };

  const config = rangeConfig[range.toLowerCase()];
  if (!config) return [];

  return allProducts.filter(product => {
    const bestPrice = Math.min(
      product.prices.amazon.price,
      product.prices.flipkart.price,
      ...product.prices.local.map(store => store.price)
    );
    return bestPrice >= config.min && bestPrice <= config.max;
  });
};

// Function to get products by brand
export const getProductsByBrand = (brand: string): Product[] => {
  return allProducts.filter(product =>
    product.brand.toLowerCase() === brand.toLowerCase()
  );
};

// Export the combined product database
export const getAllProducts = (): Product[] => allProducts;
