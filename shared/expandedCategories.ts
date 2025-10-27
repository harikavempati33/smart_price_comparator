import { Product } from './products';

export const expandedCategoryProducts: Product[] = [
  // ===== LAPTOPS - ALL MAJOR BRANDS =====
  
  // HP Laptops
  {
    id: 5001,
    name: "HP Pavilion 15 AMD Ryzen 5 7530U",
    brand: "HP",
    category: "Laptops",
    subcategory: "Mid Range",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 1543,
    originalPrice: 58999,
    year: 2024,
    model: "15-eh3004AU",
    prices: {
      amazon: { price: 52999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 54999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 55999, available: false, shipping: "N/A", delivery: "Electronics not available" },
      ajio: { price: 55499, available: false, shipping: "N/A", delivery: "Electronics not available" },
      local: [
        { name: "HP World", price: 51999, distance: 2.1, address: "Tech Park", phone: "+91 98765 50001" },
        { name: "Laptop Store", price: 53999, distance: 1.8, address: "IT Hub", phone: "+91 98765 50002" }
      ]
    },
    specifications: {
      "Display": "15.6-inch FHD",
      "Processor": "AMD Ryzen 5 7530U",
      "RAM": "8GB DDR4",
      "Storage": "512GB SSD"
    },
    tags: ["hp", "pavilion", "ryzen", "mid-range", "ssd"]
  },
  {
    id: 5002,
    name: "HP Envy x360 15 Intel Core i7",
    brand: "HP",
    category: "Laptops",
    subcategory: "Flagship",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 987,
    originalPrice: 89999,
    year: 2024,
    model: "15-fe0123TX",
    prices: {
      amazon: { price: 82999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 84999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 85999, available: false, shipping: "N/A", delivery: "Electronics not available" },
      ajio: { price: 84499, available: false, shipping: "N/A", delivery: "Electronics not available" },
      local: [
        { name: "HP Store", price: 81999, distance: 1.5, address: "Premium Plaza", phone: "+91 98765 50003" },
        { name: "Tech World", price: 83999, distance: 2.3, address: "Electronics City", phone: "+91 98765 50004" }
      ]
    },
    specifications: {
      "Display": "15.6-inch FHD Touch 360°",
      "Processor": "Intel Core i7-1355U",
      "RAM": "16GB DDR4",
      "Storage": "1TB SSD"
    },
    tags: ["hp", "envy", "convertible", "touchscreen", "flagship"]
  },

  // Lenovo Laptops
  {
    id: 5003,
    name: "Lenovo ThinkPad E14 Gen 5",
    brand: "Lenovo",
    category: "Laptops",
    subcategory: "Business",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 2134,
    originalPrice: 67999,
    year: 2024,
    model: "21JR00HHIN",
    prices: {
      amazon: { price: 62999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 64999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 65999, available: false, shipping: "N/A", delivery: "Electronics not available" },
      ajio: { price: 64499, available: false, shipping: "N/A", delivery: "Electronics not available" },
      local: [
        { name: "Lenovo Store", price: 61999, distance: 1.2, address: "Business District", phone: "+91 98765 50005" },
        { name: "Corporate Tech", price: 63999, distance: 2.5, address: "Commercial Street", phone: "+91 98765 50006" }
      ]
    },
    specifications: {
      "Display": "14-inch FHD IPS",
      "Processor": "AMD Ryzen 5 7530U",
      "RAM": "8GB DDR4",
      "Storage": "512GB SSD"
    },
    tags: ["lenovo", "thinkpad", "business", "professional", "durable"]
  },
  {
    id: 5004,
    name: "Lenovo Legion 5 Pro Gaming",
    brand: "Lenovo",
    category: "Laptops",
    subcategory: "Gaming",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 1456,
    originalPrice: 134999,
    year: 2024,
    model: "16ARH7H",
    prices: {
      amazon: { price: 125999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 128999, available: true, shipping: "Free", delivery: "5-7 days" },
      myntra: { price: 129999, available: false, shipping: "N/A", delivery: "Electronics not available" },
      ajio: { price: 127999, available: false, shipping: "N/A", delivery: "Electronics not available" },
      local: [
        { name: "Gaming Zone", price: 124999, distance: 2.8, address: "Gaming Hub", phone: "+91 98765 50007" },
        { name: "Legion Store", price: 126999, distance: 1.9, address: "Tech Mall", phone: "+91 98765 50008" }
      ]
    },
    specifications: {
      "Display": "16-inch QHD 165Hz",
      "Processor": "AMD Ryzen 7 6800H",
      "Graphics": "RTX 4060 8GB",
      "RAM": "16GB DDR5"
    },
    tags: ["lenovo", "legion", "gaming", "rtx4060", "high-refresh"]
  },

  // ASUS Laptops
  {
    id: 5005,
    name: "ASUS VivoBook 15 Intel Core i5",
    brand: "ASUS",
    category: "Laptops",
    subcategory: "Budget",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 3421,
    originalPrice: 49999,
    year: 2024,
    model: "X1504VA-NJ541WS",
    prices: {
      amazon: { price: 43999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 45999, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 46999, available: false, shipping: "N/A", delivery: "Electronics not available" },
      ajio: { price: 45499, available: false, shipping: "N/A", delivery: "Electronics not available" },
      local: [
        { name: "ASUS Store", price: 42999, distance: 1.4, address: "Value Mall", phone: "+91 98765 50009" },
        { name: "Budget Laptops", price: 44999, distance: 2.1, address: "Economy Zone", phone: "+91 98765 50010" }
      ]
    },
    specifications: {
      "Display": "15.6-inch FHD",
      "Processor": "Intel Core i5-1235U",
      "RAM": "8GB DDR4",
      "Storage": "512GB SSD"
    },
    tags: ["asus", "vivobook", "budget", "student", "everyday"]
  },
  {
    id: 5006,
    name: "ASUS ROG Zephyrus G16 2024",
    brand: "ASUS",
    category: "Laptops",
    subcategory: "High Flagship",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 678,
    originalPrice: 189999,
    year: 2024,
    model: "GU605MI-QR089WS",
    prices: {
      amazon: { price: 179999, available: true, shipping: "Free", delivery: "5-7 days" },
      flipkart: { price: 182999, available: true, shipping: "Free", delivery: "7-10 days" },
      myntra: { price: 184999, available: false, shipping: "N/A", delivery: "Electronics not available" },
      ajio: { price: 181999, available: false, shipping: "N/A", delivery: "Electronics not available" },
      local: [
        { name: "ROG Store", price: 178999, distance: 3.2, address: "Gaming District", phone: "+91 98765 50011" },
        { name: "Elite Gaming", price: 180999, distance: 2.5, address: "Pro Zone", phone: "+91 98765 50012" }
      ]
    },
    specifications: {
      "Display": "16-inch OLED 240Hz",
      "Processor": "Intel Core Ultra 9 185H",
      "Graphics": "RTX 4080 12GB",
      "RAM": "32GB DDR5"
    },
    tags: ["asus", "rog", "oled", "240hz", "rtx4080", "premium"]
  },

  // Acer Laptops
  {
    id: 5007,
    name: "Acer Aspire 5 AMD Ryzen 7",
    brand: "Acer",
    category: "Laptops",
    subcategory: "Mid Range",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 1876,
    originalPrice: 59999,
    year: 2024,
    model: "A515-48M",
    prices: {
      amazon: { price: 54999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 56999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 57999, available: false, shipping: "N/A", delivery: "Electronics not available" },
      ajio: { price: 56499, available: false, shipping: "N/A", delivery: "Electronics not available" },
      local: [
        { name: "Acer Store", price: 53999, distance: 1.7, address: "Tech Center", phone: "+91 98765 50013" },
        { name: "Laptop Hub", price: 55999, distance: 2.3, address: "Digital Mall", phone: "+91 98765 50014" }
      ]
    },
    specifications: {
      "Display": "15.6-inch FHD IPS",
      "Processor": "AMD Ryzen 7 5700U",
      "RAM": "16GB DDR4",
      "Storage": "512GB SSD"
    },
    tags: ["acer", "aspire", "ryzen7", "mid-range", "productivity"]
  },

  // MSI Laptops
  {
    id: 5008,
    name: "MSI Katana 17 Gaming Laptop",
    brand: "MSI",
    category: "Laptops",
    subcategory: "Gaming",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 987,
    originalPrice: 94999,
    year: 2024,
    model: "B13VFK-1203IN",
    prices: {
      amazon: { price: 87999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 89999, available: true, shipping: "Free", delivery: "5-7 days" },
      myntra: { price: 91999, available: false, shipping: "N/A", delivery: "Electronics not available" },
      ajio: { price: 89499, available: false, shipping: "N/A", delivery: "Electronics not available" },
      local: [
        { name: "MSI Gaming", price: 86999, distance: 2.1, address: "Gaming Street", phone: "+91 98765 50015" },
        { name: "Dragon Store", price: 88999, distance: 1.8, address: "Gamer Zone", phone: "+91 98765 50016" }
      ]
    },
    specifications: {
      "Display": "17.3-inch FHD 144Hz",
      "Processor": "Intel Core i7-13620H",
      "Graphics": "RTX 4050 6GB",
      "RAM": "16GB DDR5"
    },
    tags: ["msi", "katana", "gaming", "144hz", "rtx4050"]
  },

  // ===== FASHION - MEN'S AND WOMEN'S =====

  // Men's Fashion
  {
    id: 5101,
    name: "Levi's 511 Slim Fit Jeans - Men",
    brand: "Levi's",
    category: "Fashion",
    subcategory: "Men's Clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 3456,
    originalPrice: 4999,
    year: 2024,
    model: "511-SLIM-BLUE",
    prices: {
      amazon: { price: 3999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 4199, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 3799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Levi's Store", price: 4999, distance: 1.2, address: "Fashion Street", phone: "+91 98765 51001" },
        { name: "Denim World", price: 3699, distance: 1.8, address: "Mall Road", phone: "+91 98765 51002" }
      ]
    },
    specifications: {
      "Fit": "Slim",
      "Material": "98% Cotton, 2% Elastane",
      "Wash": "Dark Blue",
      "Sizes": "28-38 waist"
    },
    tags: ["levis", "jeans", "men", "slim-fit", "denim"]
  },
  {
    id: 5102,
    name: "Nike Dri-FIT Training T-Shirt - Men",
    brand: "Nike",
    category: "Fashion",
    subcategory: "Men's Sportswear",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 2341,
    originalPrice: 2495,
    year: 2024,
    model: "DRI-FIT-TRAIN",
    prices: {
      amazon: { price: 1995, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2095, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1895, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1995, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Nike Store", price: 2495, distance: 0.8, address: "Sports Complex", phone: "+91 98765 51003" },
        { name: "Sports Zone", price: 1795, distance: 1.5, address: "Athletic Center", phone: "+91 98765 51004" }
      ]
    },
    specifications: {
      "Material": "100% Polyester Dri-FIT",
      "Fit": "Standard",
      "Features": "Moisture-wicking",
      "Sizes": "S-XXL"
    },
    tags: ["nike", "dri-fit", "men", "sportswear", "training"]
  },
  {
    id: 5103,
    name: "Arrow Formal Shirt - Men",
    brand: "Arrow",
    category: "Fashion",
    subcategory: "Men's Formal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2Fd0decc6d5ab84460a3f72412992f02c7",
    rating: 4.2,
    reviews: 1876,
    originalPrice: 3499,
    year: 2024,
    model: "ARROW-FORMAL-WHT",
    prices: {
      amazon: { price: 2799, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2899, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2599, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2699, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Arrow Store", price: 3499, distance: 1.1, address: "Business District", phone: "+91 98765 51005" },
        { name: "Formal Wear", price: 2499, distance: 2.0, address: "Corporate Plaza", phone: "+91 98765 51006" }
      ]
    },
    specifications: {
      "Material": "Cotton Blend",
      "Collar": "Spread Collar",
      "Cuff": "Barrel Cuff",
      "Sizes": "38-46"
    },
    tags: ["arrow", "formal", "men", "shirt", "office"]
  },

  // Women's Fashion
  {
    id: 5104,
    name: "Zara Floral Summer Dress - Women",
    brand: "Zara",
    category: "Fashion",
    subcategory: "Women's Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 2987,
    originalPrice: 4999,
    year: 2024,
    model: "ZARA-FLORAL-SUM",
    prices: {
      amazon: { price: 4299, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 4499, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 3999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 4199, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Zara Store", price: 4999, distance: 1.5, address: "Fashion Mall", phone: "+91 98765 51007" },
        { name: "Style Studio", price: 3899, distance: 1.2, address: "Designer Street", phone: "+91 98765 51008" }
      ]
    },
    specifications: {
      "Length": "Midi",
      "Material": "100% Viscose",
      "Pattern": "Floral Print",
      "Sizes": "XS-XL"
    },
    tags: ["zara", "dress", "women", "floral", "summer"]
  },
  {
    id: 5105,
    name: "H&M High Waisted Jeans - Women",
    brand: "H&M",
    category: "Fashion",
    subcategory: "Women's Clothing",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2F8374dfe9f4e74b36a1330ae0c070833f",
    rating: 4.1,
    reviews: 4321,
    originalPrice: 2999,
    year: 2024,
    model: "HM-HIGH-WAIST",
    prices: {
      amazon: { price: 2499, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 2599, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 2299, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2399, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "H&M Store", price: 2999, distance: 1.8, address: "Fashion Hub", phone: "+91 98765 51009" },
        { name: "Trendy Jeans", price: 2199, distance: 2.3, address: "Style Center", phone: "+91 98765 51010" }
      ]
    },
    specifications: {
      "Fit": "High Waisted Skinny",
      "Material": "99% Cotton, 1% Elastane",
      "Color": "Dark Blue",
      "Sizes": "24-34 waist"
    },
    tags: ["hm", "jeans", "women", "high-waist", "skinny"]
  },
  {
    id: 5106,
    name: "Forever 21 Crop Top - Women",
    brand: "Forever 21",
    category: "Fashion",
    subcategory: "Women's Tops",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop&crop=center",
    rating: 4.0,
    reviews: 1654,
    originalPrice: 1499,
    year: 2024,
    model: "F21-CROP-BASIC",
    prices: {
      amazon: { price: 1199, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 1299, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1099, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Forever 21", price: 1499, distance: 2.1, address: "Youth Mall", phone: "+91 98765 51011" },
        { name: "Trendy Tops", price: 899, distance: 1.7, address: "Fashion Street", phone: "+91 98765 51012" }
      ]
    },
    specifications: {
      "Style": "Crop Top",
      "Material": "95% Cotton, 5% Spandex",
      "Fit": "Regular",
      "Sizes": "XS-L"
    },
    tags: ["forever21", "crop-top", "women", "casual", "trendy"]
  },

  // ===== SHOES - ALL MAJOR BRANDS =====

  // Nike Shoes
  {
    id: 5201,
    name: "Nike Air Force 1 '07 White",
    brand: "Nike",
    category: "Shoes",
    subcategory: "Lifestyle",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 8765,
    originalPrice: 8995,
    year: 2024,
    model: "CW2288-111",
    prices: {
      amazon: { price: 7995, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 8295, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 7695, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 7895, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Nike Store", price: 8995, distance: 1.1, address: "Sports Complex", phone: "+91 98765 52001" },
        { name: "Sneaker Hub", price: 7495, distance: 1.8, address: "Shoe Street", phone: "+91 98765 52002" }
      ]
    },
    specifications: {
      "Type": "Lifestyle Sneakers",
      "Upper": "Leather",
      "Sole": "Rubber",
      "Sizes": "UK 6-12"
    },
    tags: ["nike", "air-force-1", "white", "lifestyle", "classic"]
  },
  {
    id: 5202,
    name: "Nike React Infinity Run Flyknit 3",
    brand: "Nike",
    category: "Shoes",
    subcategory: "Running",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 3456,
    originalPrice: 14995,
    year: 2024,
    model: "CT2357-002",
    prices: {
      amazon: { price: 12995, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 13495, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 12495, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 12795, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Nike Running", price: 14995, distance: 0.9, address: "Marathon Center", phone: "+91 98765 52003" },
        { name: "Run Store", price: 12295, distance: 1.6, address: "Athletic Zone", phone: "+91 98765 52004" }
      ]
    },
    specifications: {
      "Type": "Running Shoes",
      "Technology": "React Foam + Flyknit",
      "Drop": "9mm",
      "Weight": "289g"
    },
    tags: ["nike", "react", "running", "flyknit", "marathon"]
  },

  // Adidas Shoes
  {
    id: 5203,
    name: "Adidas Stan Smith Originals",
    brand: "Adidas",
    category: "Shoes",
    subcategory: "Lifestyle",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 6543,
    originalPrice: 8999,
    year: 2024,
    model: "FX5500",
    prices: {
      amazon: { price: 7999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 8299, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 7699, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 7899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Adidas Originals", price: 8999, distance: 1.3, address: "Fashion Street", phone: "+91 98765 52005" },
        { name: "Classic Shoes", price: 7599, distance: 2.1, address: "Retro Zone", phone: "+91 98765 52006" }
      ]
    },
    specifications: {
      "Type": "Lifestyle Sneakers",
      "Upper": "Synthetic Leather",
      "Sole": "Rubber",
      "Origin": "Tennis Heritage"
    },
    tags: ["adidas", "stan-smith", "white", "green", "classic"]
  },
  {
    id: 5204,
    name: "Adidas Ultraboost 23 Running",
    brand: "Adidas",
    category: "Shoes",
    subcategory: "Running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 2987,
    originalPrice: 19999,
    year: 2024,
    model: "ID8716",
    prices: {
      amazon: { price: 17999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 18499, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 17499, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 17799, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Adidas Performance", price: 19999, distance: 1.0, address: "Sports Hub", phone: "+91 98765 52007" },
        { name: "Boost Store", price: 17299, distance: 1.7, address: "Running Center", phone: "+91 98765 52008" }
      ]
    },
    specifications: {
      "Technology": "Boost Midsole",
      "Upper": "Primeknit+",
      "Outsole": "Continental Rubber",
      "Drop": "10mm"
    },
    tags: ["adidas", "ultraboost", "boost", "primeknit", "performance"]
  },

  // Puma Shoes
  {
    id: 5205,
    name: "Puma Suede Classic XXI",
    brand: "Puma",
    category: "Shoes",
    subcategory: "Lifestyle",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 4321,
    originalPrice: 6999,
    year: 2024,
    model: "374915-02",
    prices: {
      amazon: { price: 5999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 6299, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 5699, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 5899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Puma Store", price: 6999, distance: 1.5, address: "Cat Mall", phone: "+91 98765 52009" },
        { name: "Suede Shop", price: 5599, distance: 2.0, address: "Retro Street", phone: "+91 98765 52010" }
      ]
    },
    specifications: {
      "Type": "Lifestyle Sneakers",
      "Upper": "Suede Leather",
      "Sole": "Rubber",
      "Heritage": "1968 Classic"
    },
    tags: ["puma", "suede", "classic", "retro", "lifestyle"]
  },

  // Reebok Shoes
  {
    id: 5206,
    name: "Reebok Classic Leather White",
    brand: "Reebok",
    category: "Shoes",
    subcategory: "Lifestyle",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 3654,
    originalPrice: 7999,
    year: 2024,
    model: "49799",
    prices: {
      amazon: { price: 6999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 7299, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 6699, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 6899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Reebok Store", price: 7999, distance: 1.7, address: "Classic Corner", phone: "+91 98765 52011" },
        { name: "White Shoes", price: 6599, distance: 2.2, address: "Clean Street", phone: "+91 98765 52012" }
      ]
    },
    specifications: {
      "Type": "Lifestyle Sneakers",
      "Upper": "Soft Garment Leather",
      "Sole": "High Abrasion Rubber",
      "Legacy": "1983 Original"
    },
    tags: ["reebok", "classic-leather", "white", "vintage", "comfortable"]
  },

  // New Balance Shoes
  {
    id: 5207,
    name: "New Balance 990v5 Grey",
    brand: "New Balance",
    category: "Shoes",
    subcategory: "Running",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 2876,
    originalPrice: 19999,
    year: 2024,
    model: "M990GL5",
    prices: {
      amazon: { price: 17999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 18499, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 17699, available: true, shipping: "Free", delivery: "3-5 days" },
      ajio: { price: 17899, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "New Balance Store", price: 19999, distance: 2.3, address: "Premium Athletic", phone: "+91 98765 52013" },
        { name: "NB Specialist", price: 17599, distance: 1.9, address: "Made in USA Store", phone: "+91 98765 52014" }
      ]
    },
    specifications: {
      "Technology": "ENCAP Midsole",
      "Upper": "Pigskin/Mesh",
      "Made in": "USA",
      "Drop": "12mm"
    },
    tags: ["new-balance", "990v5", "made-in-usa", "premium", "grey"]
  },

  // ===== SMARTWATCHES - ALL MAJOR BRANDS =====

  // Garmin Smartwatches
  {
    id: 5301,
    name: "Garmin Fenix 7X Sapphire Solar",
    brand: "Garmin",
    category: "Smartwatches",
    subcategory: "Premium",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 1543,
    originalPrice: 89999,
    year: 2024,
    model: "010-02541-11",
    prices: {
      amazon: { price: 84999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 86999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 87999, available: false, shipping: "N/A", delivery: "Watches not available" },
      ajio: { price: 86499, available: false, shipping: "N/A", delivery: "Watches not available" },
      local: [
        { name: "Garmin Store", price: 89999, distance: 2.1, address: "Outdoor Gear", phone: "+91 98765 53001" },
        { name: "Adventure Watch", price: 83999, distance: 1.8, address: "Sports Complex", phone: "+91 98765 53002" }
      ]
    },
    specifications: {
      "Display": "1.4-inch Transflective MIP",
      "Battery": "Up to 28 days",
      "GPS": "Multi-band GPS",
      "Water": "10ATM"
    },
    tags: ["garmin", "fenix", "solar", "outdoor", "premium"]
  },
  {
    id: 5302,
    name: "Garmin Venu 3 AMOLED",
    brand: "Garmin",
    category: "Smartwatches",
    subcategory: "Fitness",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 2876,
    originalPrice: 54999,
    year: 2024,
    model: "010-02784-11",
    prices: {
      amazon: { price: 49999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 51999, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 52999, available: false, shipping: "N/A", delivery: "Watches not available" },
      ajio: { price: 51499, available: false, shipping: "N/A", delivery: "Watches not available" },
      local: [
        { name: "Garmin Fitness", price: 54999, distance: 1.2, address: "Health Hub", phone: "+91 98765 53003" },
        { name: "Smart Health", price: 48999, distance: 1.9, address: "Wellness Center", phone: "+91 98765 53004" }
      ]
    },
    specifications: {
      "Display": "1.4-inch AMOLED",
      "Battery": "Up to 14 days",
      "Health": "Body Battery, Sleep Score",
      "Music": "Music Storage"
    },
    tags: ["garmin", "venu", "amoled", "fitness", "health"]
  },

  // Fitbit Smartwatches
  {
    id: 5303,
    name: "Fitbit Versa 4 Health & Fitness",
    brand: "Fitbit",
    category: "Smartwatches",
    subcategory: "Fitness",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 4321,
    originalPrice: 22999,
    year: 2024,
    model: "FB523BKBK",
    prices: {
      amazon: { price: 19999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 20999, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 21999, available: false, shipping: "N/A", delivery: "Watches not available" },
      ajio: { price: 20499, available: false, shipping: "N/A", delivery: "Watches not available" },
      local: [
        { name: "Fitbit Store", price: 22999, distance: 1.5, address: "Fitness Mall", phone: "+91 98765 53005" },
        { name: "Health Track", price: 19499, distance: 2.0, address: "Wellness Street", phone: "+91 98765 53006" }
      ]
    },
    specifications: {
      "Display": "1.58-inch AMOLED",
      "Battery": "6+ days",
      "GPS": "Built-in GPS",
      "Health": "24/7 heart rate"
    },
    tags: ["fitbit", "versa", "fitness", "health", "gps"]
  },

  // Amazfit Smartwatches
  {
    id: 5304,
    name: "Amazfit GTR 4 Classic",
    brand: "Amazfit",
    category: "Smartwatches",
    subcategory: "Mid Range",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 3654,
    originalPrice: 16999,
    year: 2024,
    model: "A2174",
    prices: {
      amazon: { price: 14999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 15499, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 15999, available: false, shipping: "N/A", delivery: "Watches not available" },
      ajio: { price: 15299, available: false, shipping: "N/A", delivery: "Watches not available" },
      local: [
        { name: "Amazfit Store", price: 16999, distance: 1.7, address: "Smart Store", phone: "+91 98765 53007" },
        { name: "Value Watch", price: 14699, distance: 2.3, address: "Budget Zone", phone: "+91 98765 53008" }
      ]
    },
    specifications: {
      "Display": "1.43-inch AMOLED",
      "Battery": "14 days typical",
      "Sports": "150+ workout modes",
      "Navigation": "5 satellite systems"
    },
    tags: ["amazfit", "gtr4", "amoled", "sports", "long-battery"]
  },

  // ===== FURNITURE - ALL MAJOR BRANDS =====

  // IKEA Furniture
  {
    id: 5401,
    name: "IKEA KALLAX Shelf Unit 4x4",
    brand: "IKEA",
    category: "Furniture",
    subcategory: "Storage",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 8765,
    originalPrice: 12999,
    year: 2024,
    model: "403.057.88",
    prices: {
      amazon: { price: 11999, available: true, shipping: "₹999", delivery: "5-7 days" },
      flipkart: { price: 12299, available: true, shipping: "₹1299", delivery: "7-10 days" },
      myntra: { price: 12999, available: false, shipping: "N/A", delivery: "Furniture not available" },
      ajio: { price: 12599, available: false, shipping: "N/A", delivery: "Furniture not available" },
      local: [
        { name: "IKEA Nagasandra", price: 12999, distance: 15.2, address: "Nagasandra", phone: "+91 98765 54001" },
        { name: "Scandinavian Store", price: 11499, distance: 3.2, address: "Design District", phone: "+91 98765 54002" }
      ]
    },
    specifications: {
      "Dimensions": "147x147x39 cm",
      "Material": "Particleboard, Foil",
      "Compartments": "16 cube compartments",
      "Weight": "34 kg"
    },
    tags: ["ikea", "kallax", "storage", "modular", "scandinavian"]
  },
  {
    id: 5402,
    name: "IKEA FRIHETEN Corner Sofa Bed",
    brand: "IKEA",
    category: "Furniture",
    subcategory: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 4321,
    originalPrice: 45999,
    year: 2024,
    model: "504.489.59",
    prices: {
      amazon: { price: 42999, available: true, shipping: "₹2999", delivery: "7-10 days" },
      flipkart: { price: 44999, available: true, shipping: "₹3499", delivery: "10-14 days" },
      myntra: { price: 45999, available: false, shipping: "N/A", delivery: "Furniture not available" },
      ajio: { price: 44499, available: false, shipping: "N/A", delivery: "Furniture not available" },
      local: [
        { name: "IKEA Nagasandra", price: 45999, distance: 15.2, address: "Nagasandra", phone: "+91 98765 54003" },
        { name: "Sofa World", price: 41999, distance: 4.5, address: "Furniture Street", phone: "+91 98765 54004" }
      ]
    },
    specifications: {
      "Dimensions": "230x151x66 cm",
      "Seats": "3-seater with chaise",
      "Storage": "Under-seat storage",
      "Converts": "To double bed"
    },
    tags: ["ikea", "friheten", "sofa-bed", "corner", "storage"]
  },

  // Urban Ladder Furniture
  {
    id: 5403,
    name: "Urban Ladder Lisbon Office Chair",
    brand: "Urban Ladder",
    category: "Furniture",
    subcategory: "Office",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 2876,
    originalPrice: 15999,
    year: 2024,
    model: "UL-LISBON-BLK",
    prices: {
      amazon: { price: 13999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 14499, available: true, shipping: "Free", delivery: "5-7 days" },
      myntra: { price: 15499, available: false, shipping: "N/A", delivery: "Furniture not available" },
      ajio: { price: 14299, available: false, shipping: "N/A", delivery: "Furniture not available" },
      local: [
        { name: "Urban Ladder Store", price: 15999, distance: 2.1, address: "HSR Layout", phone: "+91 98765 54005" },
        { name: "Office Furniture", price: 13499, distance: 1.8, address: "IT Corridor", phone: "+91 98765 54006" }
      ]
    },
    specifications: {
      "Type": "Executive Office Chair",
      "Material": "Leatherette + Mesh",
      "Adjustable": "Height, Armrest, Tilt",
      "Warranty": "1 year"
    },
    tags: ["urban-ladder", "office-chair", "ergonomic", "executive", "adjustable"]
  },
  {
    id: 5404,
    name: "Urban Ladder Epsilon King Size Bed",
    brand: "Urban Ladder",
    category: "Furniture",
    subcategory: "Bedroom",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 1987,
    originalPrice: 34999,
    year: 2024,
    model: "UL-EPSILON-KING",
    prices: {
      amazon: { price: 31999, available: true, shipping: "₹1999", delivery: "5-7 days" },
      flipkart: { price: 32999, available: true, shipping: "₹2499", delivery: "7-10 days" },
      myntra: { price: 34499, available: false, shipping: "N/A", delivery: "Furniture not available" },
      ajio: { price: 32499, available: false, shipping: "N/A", delivery: "Furniture not available" },
      local: [
        { name: "Urban Ladder Store", price: 34999, distance: 2.1, address: "HSR Layout", phone: "+91 98765 54007" },
        { name: "Bedroom World", price: 30999, distance: 3.5, address: "Furniture Hub", phone: "+91 98765 54008" }
      ]
    },
    specifications: {
      "Size": "King Size (78x72 inches)",
      "Material": "Sheesham Wood",
      "Storage": "Hydraulic storage",
      "Finish": "Honey finish"
    },
    tags: ["urban-ladder", "king-bed", "storage", "sheesham", "hydraulic"]
  },

  // Pepperfry Furniture
  {
    id: 5405,
    name: "Pepperfry Crystal 6-Seater Dining Set",
    brand: "Pepperfry",
    category: "Furniture",
    subcategory: "Dining Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 3654,
    originalPrice: 52999,
    year: 2024,
    model: "PF-CRYSTAL-6S",
    prices: {
      amazon: { price: 47999, available: true, shipping: "₹2999", delivery: "7-10 days" },
      flipkart: { price: 49999, available: true, shipping: "₹3499", delivery: "10-14 days" },
      myntra: { price: 51999, available: false, shipping: "N/A", delivery: "Furniture not available" },
      ajio: { price: 49499, available: false, shipping: "N/A", delivery: "Furniture not available" },
      local: [
        { name: "Pepperfry Studio", price: 52999, distance: 4.1, address: "Koramangala", phone: "+91 98765 54009" },
        { name: "Dining Specialist", price: 46999, distance: 2.8, address: "Furniture Mall", phone: "+91 98765 54010" }
      ]
    },
    specifications: {
      "Set": "1 Table + 6 Chairs",
      "Table Size": "6ft x 3ft",
      "Material": "Solid Wood",
      "Finish": "Natural finish"
    },
    tags: ["pepperfry", "dining-set", "6-seater", "solid-wood", "family"]
  },

  // ===== GYM EQUIPMENT - ALL MAJOR BRANDS =====

  // PowerMax Fitness
  {
    id: 5501,
    name: "PowerMax Fitness TDM-125S Treadmill",
    brand: "PowerMax",
    category: "Gym Equipment",
    subcategory: "Cardio",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 2876,
    originalPrice: 45999,
    year: 2024,
    model: "TDM-125S",
    prices: {
      amazon: { price: 39999, available: true, shipping: "Free", delivery: "5-7 days" },
      flipkart: { price: 41999, available: true, shipping: "Free", delivery: "7-10 days" },
      myntra: { price: 43999, available: false, shipping: "N/A", delivery: "Fitness not available" },
      ajio: { price: 41499, available: false, shipping: "N/A", delivery: "Fitness not available" },
      local: [
        { name: "PowerMax Store", price: 45999, distance: 3.2, address: "Fitness Hub", phone: "+91 98765 55001" },
        { name: "Gym Equipment Pro", price: 38999, distance: 2.1, address: "Sports Complex", phone: "+91 98765 55002" }
      ]
    },
    specifications: {
      "Motor": "2.0 HP DC Motor",
      "Speed": "1-14 km/hr",
      "Running Area": "41x122 cm",
      "Programs": "12 preset programs"
    },
    tags: ["powermax", "treadmill", "cardio", "home-gym", "motorized"]
  },
  {
    id: 5502,
    name: "Cockatoo Professional Multi-Gym",
    brand: "Cockatoo",
    category: "Gym Equipment",
    subcategory: "Strength Training",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 1654,
    originalPrice: 65999,
    year: 2024,
    model: "CG-MG-450",
    prices: {
      amazon: { price: 58999, available: true, shipping: "Free", delivery: "7-10 days" },
      flipkart: { price: 61999, available: true, shipping: "Free", delivery: "10-14 days" },
      myntra: { price: 63999, available: false, shipping: "N/A", delivery: "Fitness not available" },
      ajio: { price: 60499, available: false, shipping: "N/A", delivery: "Fitness not available" },
      local: [
        { name: "Cockatoo Fitness", price: 65999, distance: 2.8, address: "Strength Zone", phone: "+91 98765 55003" },
        { name: "Multi-Gym Store", price: 57999, distance: 1.9, address: "Power Gym", phone: "+91 98765 55004" }
      ]
    },
    specifications: {
      "Stations": "4-in-1 Multi-station",
      "Weight Stack": "80kg plates",
      "Exercises": "40+ exercises",
      "Material": "Heavy-duty steel"
    },
    tags: ["cockatoo", "multi-gym", "strength", "4-station", "heavy-duty"]
  },
  {
    id: 5503,
    name: "Kore K-PVC-20KG Dumbbell Set",
    brand: "Kore",
    category: "Gym Equipment",
    subcategory: "Free Weights",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 4321,
    originalPrice: 3999,
    year: 2024,
    model: "K-PVC-20KG",
    prices: {
      amazon: { price: 2999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 3199, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 3499, available: false, shipping: "N/A", delivery: "Fitness not available" },
      ajio: { price: 3099, available: false, shipping: "N/A", delivery: "Fitness not available" },
      local: [
        { name: "Kore Fitness", price: 3999, distance: 1.5, address: "Gym Street", phone: "+91 98765 55005" },
        { name: "Weight World", price: 2799, distance: 2.3, address: "Fitness Mall", phone: "+91 98765 55006" }
      ]
    },
    specifications: {
      "Weight": "20kg total (2x10kg)",
      "Material": "PVC coated plates",
      "Includes": "2 Dumbell rods + plates",
      "Adjustable": "Yes, removable plates"
    },
    tags: ["kore", "dumbbell", "pvc", "adjustable", "home-workout"]
  },
  {
    id: 5504,
    name: "LifeLong FitPro Exercise Bike",
    brand: "LifeLong",
    category: "Gym Equipment",
    subcategory: "Cardio",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 2543,
    originalPrice: 12999,
    year: 2024,
    model: "LLEB-01",
    prices: {
      amazon: { price: 9999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 10499, available: true, shipping: "Free", delivery: "5-7 days" },
      myntra: { price: 11499, available: false, shipping: "N/A", delivery: "Fitness not available" },
      ajio: { price: 10299, available: false, shipping: "N/A", delivery: "Fitness not available" },
      local: [
        { name: "LifeLong Store", price: 12999, distance: 1.8, address: "Health Center", phone: "+91 98765 55007" },
        { name: "Cycle Fitness", price: 9699, distance: 2.5, address: "Cardio Zone", phone: "+91 98765 55008" }
      ]
    },
    specifications: {
      "Type": "Upright Exercise Bike",
      "Resistance": "8-level manual",
      "Display": "LCD monitor",
      "Weight Capacity": "110kg"
    },
    tags: ["lifelong", "exercise-bike", "cardio", "home-fitness", "lcd"]
  }
];

// Enhanced getBestPrice function with Myntra/Ajio support
export const getBestPriceWithAllPlatforms = (prices: any) => {
  const allPrices = [
    prices.amazon?.available ? prices.amazon.price : Infinity,
    prices.flipkart?.available ? prices.flipkart.price : Infinity,
    prices.myntra?.available ? prices.myntra.price : Infinity,
    prices.ajio?.available ? prices.ajio.price : Infinity,
    ...prices.local?.map((store: any) => store.price) || []
  ];
  return Math.min(...allPrices.filter(price => price !== Infinity));
};

// Function to get lowest price source with all platforms
export const getLowestPriceSourceWithAllPlatforms = (prices: any) => {
  const bestPrice = getBestPriceWithAllPlatforms(prices);
  
  if (prices.amazon?.available && prices.amazon.price === bestPrice) 
    return { source: 'Amazon', price: bestPrice, available: true };
  if (prices.flipkart?.available && prices.flipkart.price === bestPrice) 
    return { source: 'Flipkart', price: bestPrice, available: true };
  if (prices.myntra?.available && prices.myntra.price === bestPrice) 
    return { source: 'Myntra', price: bestPrice, available: true };
  if (prices.ajio?.available && prices.ajio.price === bestPrice) 
    return { source: 'Ajio', price: bestPrice, available: true };
  
  const localStore = prices.local?.find((store: any) => store.price === bestPrice);
  if (localStore) 
    return { source: localStore.name, price: bestPrice, isLocal: true, available: true };
  
  // Fallback to first available option
  if (prices.amazon?.available) return { source: 'Amazon', price: prices.amazon.price, available: true };
  if (prices.flipkart?.available) return { source: 'Flipkart', price: prices.flipkart.price, available: true };
  if (prices.myntra?.available) return { source: 'Myntra', price: prices.myntra.price, available: true };
  if (prices.ajio?.available) return { source: 'Ajio', price: prices.ajio.price, available: true };
  
  return { source: 'Not Available', price: 0, available: false };
};
