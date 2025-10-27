import { Product } from './products';

// Worldwide brands for different categories
export const worldwideBrands = {
  electronics: ['Apple', 'Samsung', 'Sony', 'LG', 'Panasonic', 'Philips', 'Bosch', 'Whirlpool', 'Haier', 'Xiaomi', 'OnePlus', 'Google', 'Microsoft', 'Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'Canon', 'Nikon', 'JBL', 'Bose', 'Sennheiser'],
  shoes: ['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance', 'Asics', 'Under Armour', 'Converse', 'Vans', 'Timberland', 'Clarks', 'Sketchers', 'Fila', 'Jordan', 'Crocs', 'Dr. Martens', 'Bata', 'Liberty', 'Woodland', 'Red Chief'],
  watches: ['Rolex', 'Omega', 'Tag Heuer', 'Breitling', 'Cartier', 'Apple', 'Samsung', 'Garmin', 'Fitbit', 'Casio', 'Citizen', 'Seiko', 'Timex', 'Fossil', 'Daniel Wellington', 'Michael Kors', 'Titan', 'Fastrack', 'Noise', 'Amazfit'],
  homeAppliances: ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'IFB', 'Godrej', 'Haier', 'Voltas', 'Blue Star', 'Carrier', 'Daikin', 'Hitachi', 'Panasonic', 'Philips', 'Bajaj', 'Crompton', 'Orient', 'Usha', 'Prestige', 'Pigeon'],
  furniture: ['IKEA', 'Ashley', 'West Elm', 'Pottery Barn', 'Urban Ladder', 'Pepperfry', 'Godrej Interio', 'Durian', 'Nilkamal', 'Sleepwell', 'Kurlon', 'Wakefit', 'Sunday', 'Livspace', 'HomeTown', '@home', 'Fabindia', 'Pure Home'],
  cosmetics: ['L\'Oreal', 'Maybelline', 'MAC', 'Clinique', 'Estee Lauder', 'Chanel', 'Dior', 'Urban Decay', 'Too Faced', 'NARS', 'Lakme', 'Revlon', 'Colorbar', 'Sugar Cosmetics', 'Nykaa', 'Plum', 'Biotique', 'Himalaya', 'Lotus', 'Garnier']
};

// Product ranges
export const productRanges = {
  'Low Range': { min: 500, max: 5000 },
  'Mid Range': { min: 5000, max: 25000 },
  'Flagship': { min: 25000, max: 75000 },
  'High Flagship': { min: 75000, max: 300000 }
};

// Expanded product database
export const expandedProductDatabase: Product[] = [
  // Electronics - Smartphones (All Ranges)
  // Low Range Smartphones
  {
    id: 101,
    name: "Xiaomi Redmi 12C 64GB",
    brand: "Xiaomi",
    category: "Smartphones",
    subcategory: "Budget",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 2341,
    originalPrice: 8999,
    year: 2023,
    model: "22071219CG",
    prices: {
      amazon: { price: 7999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 8199, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Mi Store", price: 7799, distance: 1.2, address: "City Center", phone: "+91 98765 43301" },
        { name: "Mobile World", price: 8099, distance: 2.1, address: "Mall Road", phone: "+91 98765 43302" }
      ]
    },
    specifications: {
      "Display": "6.71-inch HD+",
      "Processor": "MediaTek Helio G85",
      "Camera": "50MP + 2MP",
      "Storage": "64GB"
    },
    tags: ["budget", "low-range", "xiaomi"]
  },
  {
    id: 102,
    name: "Realme C55 128GB",
    brand: "Realme",
    category: "Smartphones",
    subcategory: "Budget",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 1876,
    originalPrice: 11999,
    year: 2023,
    model: "RMX3710",
    prices: {
      amazon: { price: 10999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 11199, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Realme Store", price: 10799, distance: 1.5, address: "Phoenix Mall", phone: "+91 98765 43303" },
        { name: "Tech Zone", price: 11099, distance: 2.3, address: "Brigade Road", phone: "+91 98765 43304" }
      ]
    },
    specifications: {
      "Display": "6.72-inch FHD+",
      "Processor": "MediaTek Helio G88",
      "Camera": "64MP + 2MP",
      "Storage": "128GB"
    },
    tags: ["budget", "low-range", "realme"]
  },
  // Mid Range Smartphones
  {
    id: 103,
    name: "Samsung Galaxy A54 5G 256GB",
    brand: "Samsung",
    category: "Smartphones",
    subcategory: "Mid Range",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 3421,
    originalPrice: 42999,
    year: 2023,
    model: "SM-A546B",
    prices: {
      amazon: { price: 38999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 39999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Samsung Plaza", price: 38499, distance: 0.8, address: "Commercial Street", phone: "+91 98765 43305" },
        { name: "Galaxy Store", price: 39299, distance: 1.7, address: "UB City Mall", phone: "+91 98765 43306" }
      ]
    },
    specifications: {
      "Display": "6.4-inch Super AMOLED",
      "Processor": "Exynos 1380",
      "Camera": "50MP Triple Camera",
      "Storage": "256GB"
    },
    tags: ["mid-range", "5g", "samsung", "amoled"]
  },
  {
    id: 104,
    name: "OnePlus Nord CE 3 5G 256GB",
    brand: "OnePlus",
    category: "Smartphones",
    subcategory: "Mid Range",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 2187,
    originalPrice: 26999,
    year: 2023,
    model: "CPH2491",
    prices: {
      amazon: { price: 24999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 25499, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "OnePlus Experience", price: 24699, distance: 2.1, address: "Forum Mall", phone: "+91 98765 43307" },
        { name: "Never Settle Store", price: 25199, distance: 1.4, address: "Indiranagar", phone: "+91 98765 43308" }
      ]
    },
    specifications: {
      "Display": "6.7-inch AMOLED 120Hz",
      "Processor": "Snapdragon 782G",
      "Camera": "50MP Triple Camera",
      "Storage": "256GB"
    },
    tags: ["mid-range", "5g", "oneplus", "120hz"]
  },
  // Flagship Smartphones
  {
    id: 105,
    name: "Google Pixel 8 Pro 256GB",
    brand: "Google",
    category: "Smartphones",
    subcategory: "Flagship",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 1543,
    originalPrice: 106999,
    year: 2023,
    model: "GP8P",
    prices: {
      amazon: { price: 94999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 96999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Google Store", price: 93999, distance: 2.3, address: "Koramangala", phone: "+91 98765 43309" },
        { name: "Pixel Hub", price: 95999, distance: 3.1, address: "Whitefield", phone: "+91 98765 43310" }
      ]
    },
    specifications: {
      "Display": "6.7-inch LTPO OLED 120Hz",
      "Processor": "Google Tensor G3",
      "Camera": "50MP Pro Camera with AI",
      "Storage": "256GB"
    },
    tags: ["flagship", "ai", "google", "pro-camera"]
  },
  // High Flagship Smartphones
  {
    id: 106,
    name: "iPhone 15 Pro Max 1TB",
    brand: "Apple",
    category: "Smartphones",
    subcategory: "High Flagship",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviews: 987,
    originalPrice: 194900,
    year: 2023,
    model: "A3108",
    prices: {
      amazon: { price: 184900, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 186900, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Apple Store", price: 194900, distance: 1.8, address: "UB City Mall", phone: "+91 98765 43311" },
        { name: "iStore", price: 187900, distance: 2.5, address: "Brigade Road", phone: "+91 98765 43312" }
      ]
    },
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Processor": "A17 Pro chip with GPU",
      "Camera": "48MP Pro Camera System",
      "Storage": "1TB"
    },
    tags: ["high-flagship", "premium", "apple", "pro-max"]
  },

  // Shoes - All Major Brands and Types
  // Running Shoes
  {
    id: 201,
    name: "Nike Air Zoom Pegasus 40",
    brand: "Nike",
    category: "Shoes",
    subcategory: "Running",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 3421,
    originalPrice: 10995,
    year: 2023,
    model: "DV3853-100",
    prices: {
      amazon: { price: 9995, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 10295, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Nike Store", price: 10995, distance: 1.4, address: "Forum Mall", phone: "+91 98765 43401" },
        { name: "Sports Zone", price: 9795, distance: 2.1, address: "Phoenix Mall", phone: "+91 98765 43402" }
      ]
    },
    specifications: {
      "Type": "Running Shoes",
      "Technology": "Air Zoom cushioning",
      "Upper": "Engineered mesh",
      "Sole": "Rubber outsole"
    },
    tags: ["running", "nike", "air-zoom", "sports"]
  },
  {
    id: 202,
    name: "Adidas Ultraboost 23",
    brand: "Adidas",
    category: "Shoes",
    subcategory: "Running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 2876,
    originalPrice: 17999,
    year: 2023,
    model: "GX8925",
    prices: {
      amazon: { price: 14999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 15999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Adidas Originals", price: 14499, distance: 1.8, address: "Brigade Road", phone: "+91 98765 43403" },
        { name: "Foot Locker", price: 15499, distance: 2.3, address: "Commercial Street", phone: "+91 98765 43404" }
      ]
    },
    specifications: {
      "Type": "Running Shoes",
      "Technology": "Boost midsole",
      "Upper": "Primeknit+",
      "Sole": "Continental Rubber"
    },
    tags: ["running", "adidas", "boost", "primeknit"]
  },
  // Casual Shoes
  {
    id: 203,
    name: "Converse Chuck Taylor All Star",
    brand: "Converse",
    category: "Shoes",
    subcategory: "Casual",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 4532,
    originalPrice: 3999,
    year: 2023,
    model: "M9160C",
    prices: {
      amazon: { price: 3599, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 3799, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Converse Store", price: 3999, distance: 1.2, address: "Mall Road", phone: "+91 98765 43405" },
        { name: "Sneaker Street", price: 3499, distance: 2.5, address: "City Center", phone: "+91 98765 43406" }
      ]
    },
    specifications: {
      "Type": "Casual Sneakers",
      "Material": "Canvas upper",
      "Sole": "Rubber vulcanized",
      "Design": "Classic high-top"
    },
    tags: ["casual", "converse", "canvas", "classic"]
  },
  // Formal Shoes
  {
    id: 204,
    name: "Clarks Desert Boot",
    brand: "Clarks",
    category: "Shoes",
    subcategory: "Formal",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 1876,
    originalPrice: 12999,
    year: 2023,
    model: "26138221",
    prices: {
      amazon: { price: 10999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 11499, available: true, shipping: "Free", delivery: "3-4 days" },
      local: [
        { name: "Clarks Store", price: 12999, distance: 2.1, address: "UB City Mall", phone: "+91 98765 43407" },
        { name: "Formal Shoes Co", price: 10699, distance: 1.7, address: "Commercial Street", phone: "+91 98765 43408" }
      ]
    },
    specifications: {
      "Type": "Desert Boots",
      "Material": "Suede leather",
      "Sole": "Crepe rubber",
      "Construction": "Goodyear welted"
    },
    tags: ["formal", "clarks", "leather", "desert-boot"]
  },

  // Watches - All Types
  // Smartwatches
  {
    id: 301,
    name: "Apple Watch Series 9 GPS + Cellular 45mm",
    brand: "Apple",
    category: "Smartwatches",
    subcategory: "Premium Smartwatch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 2341,
    originalPrice: 50900,
    year: 2023,
    model: "MR933",
    prices: {
      amazon: { price: 45900, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 47900, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Apple Store", price: 50900, distance: 1.8, address: "UB City Mall", phone: "+91 98765 43501" },
        { name: "Watch Gallery", price: 44900, distance: 1.4, address: "Brigade Road", phone: "+91 98765 43502" }
      ]
    },
    specifications: {
      "Display": "45mm Always-On Retina",
      "Health": "ECG, Blood Oxygen, Temperature",
      "Battery": "Up to 18 hours",
      "Connectivity": "GPS + Cellular"
    },
    tags: ["smartwatch", "apple", "cellular", "health"]
  },
  {
    id: 302,
    name: "Samsung Galaxy Watch 6 Classic 47mm",
    brand: "Samsung",
    category: "Smartwatches",
    subcategory: "Android Smartwatch",
    image: "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 1876,
    originalPrice: 42999,
    year: 2023,
    model: "SM-R950",
    prices: {
      amazon: { price: 36999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 38999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Samsung Store", price: 35999, distance: 0.8, address: "Forum Mall", phone: "+91 98765 43503" },
        { name: "Galaxy Watch Center", price: 37500, distance: 2.1, address: "Phoenix Mall", phone: "+91 98765 43504" }
      ]
    },
    specifications: {
      "Display": "1.5-inch Super AMOLED",
      "Health": "BioActive Sensor, Sleep tracking",
      "Battery": "425mAh, 40 hours",
      "Features": "Rotating bezel, Wear OS"
    },
    tags: ["smartwatch", "samsung", "rotating-bezel", "wear-os"]
  },
  // Traditional Mechanical Watches
  {
    id: 303,
    name: "Rolex Submariner Date Automatic",
    brand: "Rolex",
    category: "Traditional Watches",
    subcategory: "Luxury Mechanical",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2F2fa303a984b942a3affd8883677b58ef",
    rating: 4.9,
    reviews: 234,
    originalPrice: 895000,
    year: 2024,
    model: "126610LN",
    prices: {
      amazon: { price: 875000, available: false, shipping: "N/A", delivery: "Not available" },
      flipkart: { price: 885000, available: false, shipping: "N/A", delivery: "Not available" },
      local: [
        { name: "Rolex Boutique", price: 895000, distance: 2.1, address: "UB City Mall", phone: "+91 98765 43505" },
        { name: "Swiss Time Gallery", price: 890000, distance: 3.5, address: "Lavelle Road", phone: "+91 98765 43506" }
      ]
    },
    specifications: {
      "Movement": "Perpetual, mechanical, self-winding",
      "Power Reserve": "Approximately 70 hours",
      "Water Resistance": "Waterproof to 300m",
      "Material": "Oystersteel"
    },
    tags: ["luxury", "mechanical", "diving", "swiss", "automatic"]
  },
  // Wall Clocks
  {
    id: 304,
    name: "Seiko Westminster Chime Wall Clock",
    brand: "Seiko",
    category: "Traditional Watches",
    subcategory: "Wall Clock",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2F43c4b7af5a6048ff8fbd51f708f984a5",
    rating: 4.4,
    reviews: 876,
    originalPrice: 18999,
    year: 2023,
    model: "QXH063B",
    prices: {
      amazon: { price: 15999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 16999, available: true, shipping: "Free", delivery: "3-4 days" },
      local: [
        { name: "Seiko Authorized Dealer", price: 18999, distance: 1.5, address: "Commercial Street", phone: "+91 98765 43507" },
        { name: "Time Gallery", price: 15499, distance: 2.3, address: "Chickpet", phone: "+91 98765 43508" }
      ]
    },
    specifications: {
      "Type": "Pendulum wall clock",
      "Chime": "Westminster melody",
      "Movement": "Quartz",
      "Size": "22.5 x 13.5 x 4.5 inches"
    },
    tags: ["wall-clock", "pendulum", "chime", "traditional"]
  },

  // Home Appliances - All Major Brands
  // Refrigerators
  {
    id: 401,
    name: "LG 687L Side by Side Refrigerator",
    brand: "LG",
    category: "Home Appliances",
    subcategory: "Refrigerators",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 1543,
    originalPrice: 89999,
    year: 2024,
    model: "GC-B247SLUV",
    prices: {
      amazon: { price: 79999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 82999, available: true, shipping: "Free", delivery: "5-7 days" },
      local: [
        { name: "LG Brand Store", price: 89999, distance: 2.1, address: "Electronics City", phone: "+91 98765 43601" },
        { name: "Appliance World", price: 78999, distance: 1.7, address: "HSR Layout", phone: "+91 98765 43602" }
      ]
    },
    specifications: {
      "Capacity": "687 Liters",
      "Type": "Side by Side",
      "Energy Rating": "3 Star",
      "Features": "Inverter Linear Compressor"
    },
    tags: ["refrigerator", "side-by-side", "inverter", "large-capacity"]
  },
  // Washing Machines
  {
    id: 402,
    name: "Bosch 8kg Front Loading Washing Machine",
    brand: "Bosch",
    category: "Home Appliances",
    subcategory: "Washing Machines",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 2187,
    originalPrice: 52999,
    year: 2024,
    model: "WAJ2846SIN",
    prices: {
      amazon: { price: 47999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 49999, available: true, shipping: "Free", delivery: "5-7 days" },
      local: [
        { name: "Bosch Service Center", price: 52999, distance: 3.2, address: "Koramangala", phone: "+91 98765 43603" },
        { name: "White Goods Store", price: 46999, distance: 2.8, address: "Marathahalli", phone: "+91 98765 43604" }
      ]
    },
    specifications: {
      "Capacity": "8 kg",
      "Type": "Front Loading",
      "Energy Rating": "5 Star",
      "Features": "i-DOS automatic dosing"
    },
    tags: ["washing-machine", "front-loading", "energy-efficient", "german"]
  },

  // Home Decor & Furniture
  {
    id: 501,
    name: "IKEA HEMNES 8-drawer Dresser",
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
        { name: "IKEA Nagasandra", price: 24999, distance: 15.2, address: "Nagasandra", phone: "+91 98765 43701" },
        { name: "Furniture Hub", price: 22499, distance: 4.5, address: "Koramangala", phone: "+91 98765 43702" }
      ]
    },
    specifications: {
      "Dimensions": "160x96x50 cm",
      "Material": "Solid pine",
      "Drawers": "8 with soft-closing mechanism",
      "Color": "White stain"
    },
    tags: ["storage", "scandinavian", "solid-wood", "drawers"]
  },

  // Cosmetics - All Major Brands
  {
    id: 601,
    name: "L'Oreal Paris Excellence Creme Hair Color",
    brand: "L'Oreal",
    category: "Cosmetics",
    subcategory: "Hair Care",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 3456,
    originalPrice: 649,
    year: 2024,
    model: "EXC-6.0",
    prices: {
      amazon: { price: 549, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 579, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Beauty Store", price: 649, distance: 0.5, address: "Commercial Street", phone: "+91 98765 43801" },
        { name: "Cosmetics Corner", price: 529, distance: 1.2, address: "Brigade Road", phone: "+91 98765 43802" }
      ]
    },
    specifications: {
      "Type": "Permanent Hair Color",
      "Shade": "Natural Dark Blonde",
      "Coverage": "100% grey coverage",
      "Features": "Triple protection system"
    },
    tags: ["hair-color", "permanent", "grey-coverage", "professional"]
  },

  // Add more products for each category...
  // Electronics - Laptops (All Ranges)
  {
    id: 107,
    name: "HP Pavilion 15 (Budget Laptop)",
    brand: "HP",
    category: "Laptops",
    subcategory: "Budget",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 2341,
    originalPrice: 42999,
    year: 2024,
    model: "15-eh1001AU",
    prices: {
      amazon: { price: 38999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 39999, available: true, shipping: "Free", delivery: "3-4 days" },
      local: [
        { name: "HP World", price: 42999, distance: 1.5, address: "SP Road", phone: "+91 98765 43313" },
        { name: "Laptop Store", price: 37999, distance: 2.2, address: "Nehru Place", phone: "+91 98765 43314" }
      ]
    },
    specifications: {
      "Display": "15.6-inch HD",
      "Processor": "AMD Ryzen 5 5500U",
      "RAM": "8GB DDR4",
      "Storage": "512GB SSD"
    },
    tags: ["budget", "laptop", "ryzen", "ssd"]
  },
  {
    id: 108,
    name: "ASUS ROG Strix G15 Gaming Laptop",
    brand: "ASUS",
    category: "Laptops",
    subcategory: "Gaming",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 1876,
    originalPrice: 124999,
    year: 2024,
    model: "G513RC-HN118W",
    prices: {
      amazon: { price: 114999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 117999, available: true, shipping: "Free", delivery: "3-4 days" },
      local: [
        { name: "ASUS ROG Store", price: 124999, distance: 2.1, address: "Forum Mall", phone: "+91 98765 43315" },
        { name: "Gaming Zone", price: 112999, distance: 1.8, address: "Phoenix Mall", phone: "+91 98765 43316" }
      ]
    },
    specifications: {
      "Display": "15.6-inch FHD 144Hz",
      "Processor": "AMD Ryzen 7 6800H",
      "Graphics": "NVIDIA RTX 3050",
      "RAM": "16GB DDR5"
    },
    tags: ["gaming", "rtx", "144hz", "high-performance"]
  }
];

// Function to get products by range
export const getProductsByRange = (range: string): Product[] => {
  const rangeConfig = productRanges[range as keyof typeof productRanges];
  if (!rangeConfig) return [];

  return expandedProductDatabase.filter(product => {
    const bestPrice = Math.min(
      product.prices.amazon.price,
      product.prices.flipkart.price,
      ...product.prices.local.map(store => store.price)
    );
    return bestPrice >= rangeConfig.min && bestPrice <= rangeConfig.max;
  });
};

// Function to get products by brand
export const getProductsByBrand = (brand: string): Product[] => {
  return expandedProductDatabase.filter(product => 
    product.brand.toLowerCase() === brand.toLowerCase()
  );
};

// Function to search across all expanded products
export const searchExpandedProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return expandedProductDatabase.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.subcategory?.toLowerCase().includes(searchTerm) ||
    product.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

// Function to get all available brands
export const getAllBrands = (): string[] => {
  return Array.from(new Set(expandedProductDatabase.map(p => p.brand))).sort();
};

// Function to get all categories
export const getAllCategories = (): string[] => {
  return Array.from(new Set(expandedProductDatabase.map(p => p.category))).sort();
};
