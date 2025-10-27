import { Product } from './products';

export const products2025: Product[] = [
  // iPhone 16 Series (2025)
  {
    id: 3001,
    name: "iPhone 16 128GB",
    brand: "Apple",
    category: "Smartphones",
    subcategory: "Low Range",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 1234,
    originalPrice: 79900,
    year: 2025,
    model: "A3289",
    prices: {
      amazon: { price: 76900, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 77900, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Apple Store", price: 79900, distance: 1.8, address: "UB City Mall", phone: "+91 98765 43001" },
        { name: "iStore", price: 75900, distance: 2.5, address: "Brigade Road", phone: "+91 98765 43002" }
      ]
    },
    specifications: {
      "Display": "6.1-inch Super Retina XDR",
      "Processor": "A18 chip",
      "Camera": "48MP Fusion Camera",
      "Storage": "128GB"
    },
    tags: ["iphone16", "apple", "2025", "low-range", "latest"]
  },
  {
    id: 3002,
    name: "iPhone 16 Plus 256GB",
    brand: "Apple",
    category: "Smartphones",
    subcategory: "Mid Range",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 987,
    originalPrice: 89900,
    year: 2025,
    model: "A3290",
    prices: {
      amazon: { price: 85900, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 86900, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Apple Store", price: 89900, distance: 1.8, address: "UB City Mall", phone: "+91 98765 43003" },
        { name: "Maple Store", price: 84900, distance: 2.1, address: "Phoenix Mall", phone: "+91 98765 43004" }
      ]
    },
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Processor": "A18 chip",
      "Camera": "48MP Fusion Camera System",
      "Storage": "256GB"
    },
    tags: ["iphone16", "iphone16plus", "apple", "2025", "mid-range", "large-screen"]
  },
  {
    id: 3003,
    name: "iPhone 16 Pro 512GB",
    brand: "Apple",
    category: "Smartphones",
    subcategory: "Flagship",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviews: 756,
    originalPrice: 154900,
    year: 2025,
    model: "A3291",
    prices: {
      amazon: { price: 149900, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 151900, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Apple Store", price: 154900, distance: 1.8, address: "UB City Mall", phone: "+91 98765 43005" },
        { name: "Premium Mobile", price: 148900, distance: 1.2, address: "Commercial Street", phone: "+91 98765 43006" }
      ]
    },
    specifications: {
      "Display": "6.3-inch ProMotion XDR",
      "Processor": "A18 Pro chip",
      "Camera": "48MP Pro Camera System with 5x Zoom",
      "Storage": "512GB"
    },
    tags: ["iphone16", "iphone16pro", "apple", "2025", "flagship", "pro-camera", "titanium"]
  },
  {
    id: 3004,
    name: "iPhone 16 Pro Max 1TB",
    brand: "Apple",
    category: "Smartphones",
    subcategory: "High Flagship",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviews: 432,
    originalPrice: 214900,
    year: 2025,
    model: "A3292",
    prices: {
      amazon: { price: 209900, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 211900, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Apple Store", price: 214900, distance: 1.8, address: "UB City Mall", phone: "+91 98765 43007" },
        { name: "Luxury Mobile", price: 207900, distance: 2.3, address: "Lavelle Road", phone: "+91 98765 43008" }
      ]
    },
    specifications: {
      "Display": "6.9-inch ProMotion XDR",
      "Processor": "A18 Pro chip with Neural Engine",
      "Camera": "48MP Pro Camera System with 10x Zoom",
      "Storage": "1TB"
    },
    tags: ["iphone16", "iphone16promax", "apple", "2025", "high-flagship", "premium", "1tb"]
  },

  // Samsung Galaxy S25 Series (2025)
  {
    id: 3005,
    name: "Samsung Galaxy S25 256GB",
    brand: "Samsung",
    category: "Smartphones",
    subcategory: "Flagship",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 2341,
    originalPrice: 89999,
    year: 2025,
    model: "SM-S931B",
    prices: {
      amazon: { price: 84999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 86999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Samsung Plaza", price: 83999, distance: 0.8, address: "Forum Mall", phone: "+91 98765 43009" },
        { name: "Galaxy Store", price: 85999, distance: 1.5, address: "Phoenix Mall", phone: "+91 98765 43010" }
      ]
    },
    specifications: {
      "Display": "6.2-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 4",
      "Camera": "50MP Triple Camera with AI",
      "Storage": "256GB"
    },
    tags: ["galaxy", "galaxys25", "samsung", "2025", "flagship", "amoled"]
  },
  {
    id: 3006,
    name: "Samsung Galaxy S25 Ultra 1TB",
    brand: "Samsung",
    category: "Smartphones",
    subcategory: "High Flagship",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 1876,
    originalPrice: 169999,
    year: 2025,
    model: "SM-S938B",
    prices: {
      amazon: { price: 159999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 162999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Samsung Experience", price: 157999, distance: 0.8, address: "Commercial Street", phone: "+91 98765 43011" },
        { name: "Mobile Universe", price: 161999, distance: 1.7, address: "UB City Mall", phone: "+91 98765 43012" }
      ]
    },
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED 2X 120Hz",
      "Processor": "Snapdragon 8 Gen 4",
      "Camera": "200MP Quad Camera with S Pen",
      "Storage": "1TB"
    },
    tags: ["galaxy", "galaxys25ultra", "samsung", "2025", "high-flagship", "s-pen", "200mp"]
  },

  // Google Pixel 9 Series (2025)
  {
    id: 3007,
    name: "Google Pixel 9 128GB",
    brand: "Google",
    category: "Smartphones",
    subcategory: "Mid Range",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 1234,
    originalPrice: 64999,
    year: 2025,
    model: "GP9",
    prices: {
      amazon: { price: 59999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 61999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Google Store", price: 58999, distance: 2.1, address: "Koramangala", phone: "+91 98765 43013" },
        { name: "Pixel Hub", price: 60999, distance: 1.8, address: "HSR Layout", phone: "+91 98765 43014" }
      ]
    },
    specifications: {
      "Display": "6.3-inch OLED 90Hz",
      "Processor": "Google Tensor G4",
      "Camera": "50MP Dual Camera with AI",
      "Storage": "128GB"
    },
    tags: ["pixel", "pixel9", "google", "2025", "mid-range", "ai-camera", "tensor"]
  },
  {
    id: 3008,
    name: "Google Pixel 9 Pro XL 512GB",
    brand: "Google",
    category: "Smartphones",
    subcategory: "Flagship",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 987,
    originalPrice: 124999,
    year: 2025,
    model: "GP9PXL",
    prices: {
      amazon: { price: 119999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 121999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Google Authorized", price: 117999, distance: 2.3, address: "Whitefield", phone: "+91 98765 43015" },
        { name: "Android Store", price: 120999, distance: 1.9, address: "Indiranagar", phone: "+91 98765 43016" }
      ]
    },
    specifications: {
      "Display": "6.8-inch LTPO OLED 120Hz",
      "Processor": "Google Tensor G4 Pro",
      "Camera": "50MP Triple Camera with Magic Eraser",
      "Storage": "512GB"
    },
    tags: ["pixel", "pixel9pro", "google", "2025", "flagship", "ai-features", "magic-eraser"]
  },

  // Laptops 2025
  {
    id: 3101,
    name: "MacBook Air M4 13-inch 2025",
    brand: "Apple",
    category: "Laptops",
    subcategory: "Flagship",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 756,
    originalPrice: 149900,
    year: 2025,
    model: "MBA13-M4",
    prices: {
      amazon: { price: 144900, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 146900, available: true, shipping: "Free", delivery: "3-4 days" },
      local: [
        { name: "Apple Store", price: 149900, distance: 1.8, address: "UB City Mall", phone: "+91 98765 43101" },
        { name: "Mac Center", price: 143900, distance: 2.1, address: "SP Road", phone: "+91 98765 43102" }
      ]
    },
    specifications: {
      "Display": "13.6-inch Liquid Retina",
      "Processor": "Apple M4 chip",
      "RAM": "16GB unified memory",
      "Storage": "512GB SSD"
    },
    tags: ["macbook", "macbookair", "apple", "2025", "m4-chip", "laptop", "flagship"]
  },
  {
    id: 3102,
    name: "Dell XPS 13 Plus 2025 OLED",
    brand: "Dell",
    category: "Laptops",
    subcategory: "Flagship",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 543,
    originalPrice: 169999,
    year: 2025,
    model: "XPS13-2025",
    prices: {
      amazon: { price: 159999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 162999, available: true, shipping: "Free", delivery: "5-7 days" },
      local: [
        { name: "Dell Exclusive", price: 157999, distance: 1.5, address: "Jayanagar", phone: "+91 98765 43103" },
        { name: "Laptop World", price: 161999, distance: 2.8, address: "Malleshwaram", phone: "+91 98765 43104" }
      ]
    },
    specifications: {
      "Display": "13.4-inch 3.5K OLED Touch",
      "Processor": "Intel Core Ultra 7 155H",
      "RAM": "32GB LPDDR5x",
      "Storage": "1TB SSD"
    },
    tags: ["dell", "xps", "2025", "oled", "laptop", "flagship", "touchscreen"]
  },

  // Gaming Laptops 2025
  {
    id: 3103,
    name: "ASUS ROG Strix G18 2025 RTX 5080",
    brand: "ASUS",
    category: "Laptops",
    subcategory: "Gaming",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 432,
    originalPrice: 289999,
    year: 2025,
    model: "G834JZ-2025",
    prices: {
      amazon: { price: 274999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 279999, available: true, shipping: "Free", delivery: "5-7 days" },
      local: [
        { name: "ASUS ROG Store", price: 289999, distance: 2.1, address: "Forum Mall", phone: "+91 98765 43105" },
        { name: "Gaming Zone", price: 269999, distance: 1.8, address: "Phoenix Mall", phone: "+91 98765 43106" }
      ]
    },
    specifications: {
      "Display": "18-inch QHD+ 240Hz",
      "Processor": "Intel Core i9-14900HX",
      "Graphics": "NVIDIA RTX 5080 16GB",
      "RAM": "32GB DDR5"
    },
    tags: ["asus", "rog", "gaming", "2025", "rtx5080", "laptop", "high-flagship"]
  },

  // Smartwatches 2025
  {
    id: 3201,
    name: "Apple Watch Series 10 49mm Ultra",
    brand: "Apple",
    category: "Smartwatches",
    subcategory: "Premium",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviews: 876,
    originalPrice: 89900,
    year: 2025,
    model: "AWU3",
    prices: {
      amazon: { price: 84900, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 86900, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Apple Store", price: 89900, distance: 1.8, address: "UB City Mall", phone: "+91 98765 43201" },
        { name: "Watch Gallery", price: 83900, distance: 1.4, address: "Brigade Road", phone: "+91 98765 43202" }
      ]
    },
    specifications: {
      "Display": "49mm Always-On Retina",
      "Health": "Advanced health monitoring",
      "Battery": "Up to 36 hours",
      "Features": "Action Button, Digital Crown"
    },
    tags: ["applewatch", "series10", "ultra", "2025", "health", "smartwatch", "premium"]
  },
  {
    id: 3202,
    name: "Samsung Galaxy Watch 7 Ultra 47mm",
    brand: "Samsung",
    category: "Smartwatches",
    subcategory: "Premium",
    image: "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 654,
    originalPrice: 54999,
    year: 2025,
    model: "SM-R965F",
    prices: {
      amazon: { price: 49999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 51999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Samsung Experience", price: 48999, distance: 0.8, address: "Forum Mall", phone: "+91 98765 43203" },
        { name: "Galaxy Watch Center", price: 50999, distance: 2.1, address: "Phoenix Mall", phone: "+91 98765 43204" }
      ]
    },
    specifications: {
      "Display": "1.5-inch Super AMOLED",
      "Health": "Advanced BioActive Sensor",
      "Battery": "590mAh, 4 days",
      "Features": "Rotating bezel, Wear OS 5"
    },
    tags: ["samsung", "galaxywatch7", "ultra", "2025", "rotating-bezel", "smartwatch"]
  },

  // Shoes 2025
  {
    id: 3301,
    name: "Nike Air Max 2025 Limited Edition",
    brand: "Nike",
    category: "Shoes",
    subcategory: "Running",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 1234,
    originalPrice: 18995,
    year: 2025,
    model: "AM2025-LE",
    prices: {
      amazon: { price: 16995, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 17495, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Nike Store", price: 18995, distance: 1.4, address: "Forum Mall", phone: "+91 98765 43301" },
        { name: "Sports Zone", price: 16495, distance: 2.1, address: "Phoenix Mall", phone: "+91 98765 43302" }
      ]
    },
    specifications: {
      "Type": "Running Shoes",
      "Technology": "Air Max 2025 cushioning",
      "Upper": "Flyknit 4.0",
      "Sole": "ZoomX foam with carbon plate"
    },
    tags: ["nike", "airmax", "2025", "running", "limited-edition", "shoes"]
  },
  {
    id: 3302,
    name: "Adidas Ultraboost 25",
    brand: "Adidas",
    category: "Shoes",
    subcategory: "Running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 987,
    originalPrice: 22999,
    year: 2025,
    model: "UB25",
    prices: {
      amazon: { price: 19999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 20999, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Adidas Originals", price: 19499, distance: 1.8, address: "Brigade Road", phone: "+91 98765 43303" },
        { name: "Foot Locker", price: 20499, distance: 2.3, address: "Commercial Street", phone: "+91 98765 43304" }
      ]
    },
    specifications: {
      "Type": "Running Shoes",
      "Technology": "Boost X midsole",
      "Upper": "Primeknit++",
      "Sole": "Continental Rubber with Torsion System"
    },
    tags: ["adidas", "ultraboost", "2025", "running", "boost", "shoes"]
  },

  // Home Appliances 2025
  {
    id: 3401,
    name: "LG OLED evo G5 77-inch 2025",
    brand: "LG",
    category: "Home Appliances",
    subcategory: "Televisions",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviews: 543,
    originalPrice: 459999,
    year: 2025,
    model: "OLED77G5PSA",
    prices: {
      amazon: { price: 429999, available: true, shipping: "Free", delivery: "5-7 days" },
      flipkart: { price: 439999, available: true, shipping: "Free", delivery: "7-10 days" },
      local: [
        { name: "LG Brand Store", price: 459999, distance: 2.1, address: "Electronics City", phone: "+91 98765 43401" },
        { name: "TV World", price: 424999, distance: 1.7, address: "HSR Layout", phone: "+91 98765 43402" }
      ]
    },
    specifications: {
      "Size": "77 inches",
      "Type": "OLED evo",
      "Resolution": "4K Ultra HD",
      "Features": "AI ThinQ, webOS 24"
    },
    tags: ["lg", "oled", "77inch", "2025", "smart-tv", "4k", "ai"]
  },
  {
    id: 3402,
    name: "Samsung Neo QLED 8K QN900D 85-inch",
    brand: "Samsung",
    category: "Home Appliances",
    subcategory: "Televisions",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 321,
    originalPrice: 899999,
    year: 2025,
    model: "QA85QN900DKLXL",
    prices: {
      amazon: { price: 849999, available: true, shipping: "Free", delivery: "7-10 days" },
      flipkart: { price: 869999, available: true, shipping: "Free", delivery: "10-14 days" },
      local: [
        { name: "Samsung Plaza", price: 899999, distance: 0.8, address: "Forum Mall", phone: "+91 98765 43403" },
        { name: "Premium Electronics", price: 839999, distance: 2.5, address: "UB City Mall", phone: "+91 98765 43404" }
      ]
    },
    specifications: {
      "Size": "85 inches",
      "Type": "Neo QLED 8K",
      "Resolution": "8K Ultra HD",
      "Features": "Quantum Matrix Technology Pro Max"
    },
    tags: ["samsung", "neo-qled", "8k", "85inch", "2025", "premium", "quantum"]
  },

  // Fashion 2025
  {
    id: 3501,
    name: "Zara Premium Wool Coat 2025 Collection",
    brand: "Zara",
    category: "Fashion",
    subcategory: "Winter Wear",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 876,
    originalPrice: 12999,
    year: 2025,
    model: "ZR-WC-2025",
    prices: {
      amazon: { price: 11999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 12299, available: true, shipping: "Free", delivery: "5-7 days" },
      local: [
        { name: "Zara Store", price: 12999, distance: 1.2, address: "UB City Mall", phone: "+91 98765 43501" },
        { name: "Fashion Central", price: 11699, distance: 2.1, address: "Brigade Road", phone: "+91 98765 43502" }
      ]
    },
    specifications: {
      "Material": "100% Virgin Wool",
      "Style": "Classic Long Coat",
      "Sizes": "XS to XXL",
      "Care": "Dry clean only"
    },
    tags: ["zara", "coat", "wool", "2025", "winter", "fashion", "premium"]
  },
  {
    id: 3502,
    name: "H&M Conscious Collection Organic Cotton Dress",
    brand: "H&M",
    category: "Fashion",
    subcategory: "Dresses",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2F4c0c73d9a4024fba8f4040a5252d2af3",
    rating: 4.2,
    reviews: 1234,
    originalPrice: 3999,
    year: 2025,
    model: "HM-OCD-2025",
    prices: {
      amazon: { price: 3599, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 3799, available: true, shipping: "Free", delivery: "3-4 days" },
      local: [
        { name: "H&M Store", price: 3999, distance: 1.5, address: "Phoenix Mall", phone: "+91 98765 43503" },
        { name: "Style Studio", price: 3499, distance: 1.8, address: "Forum Mall", phone: "+91 98765 43504" }
      ]
    },
    specifications: {
      "Material": "100% Organic Cotton",
      "Style": "A-line midi dress",
      "Sizes": "XS to XL",
      "Features": "Sustainable fashion"
    },
    tags: ["hm", "dress", "organic", "2025", "sustainable", "cotton", "midi"]
  },

  // Traditional Watches 2025
  {
    id: 3601,
    name: "Rolex Submariner Date 2025 Edition",
    brand: "Rolex",
    category: "Traditional Watches",
    subcategory: "Luxury",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2Fc55d79f8fb834cd0ae63a3941f448ae6",
    rating: 4.9,
    reviews: 123,
    originalPrice: 975000,
    year: 2025,
    model: "126610LN-2025",
    prices: {
      amazon: { price: 950000, available: false, shipping: "N/A", delivery: "Not available" },
      flipkart: { price: 965000, available: false, shipping: "N/A", delivery: "Not available" },
      local: [
        { name: "Rolex Boutique", price: 975000, distance: 2.1, address: "UB City Mall", phone: "+91 98765 43601" },
        { name: "Swiss Time Gallery", price: 970000, distance: 3.5, address: "Lavelle Road", phone: "+91 98765 43602" }
      ]
    },
    specifications: {
      "Movement": "Perpetual, mechanical, self-winding",
      "Power Reserve": "Approximately 70 hours",
      "Water Resistance": "Waterproof to 300m",
      "Material": "Oystersteel with new clasp"
    },
    tags: ["rolex", "submariner", "2025", "luxury", "diving", "swiss", "automatic"]
  },

  // Furniture 2025
  {
    id: 3701,
    name: "IKEA SÖDERHAMN 2025 Smart Sofa",
    brand: "IKEA",
    category: "Furniture",
    subcategory: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 654,
    originalPrice: 89999,
    year: 2025,
    model: "SÖDERHAMN-2025",
    prices: {
      amazon: { price: 82999, available: true, shipping: "₹2999", delivery: "7-10 days" },
      flipkart: { price: 85999, available: true, shipping: "₹3499", delivery: "10-14 days" },
      local: [
        { name: "IKEA Nagasandra", price: 89999, distance: 15.2, address: "Nagasandra", phone: "+91 98765 43701" },
        { name: "Modern Furniture", price: 81999, distance: 4.5, address: "Koramangala", phone: "+91 98765 43702" }
      ]
    },
    specifications: {
      "Dimensions": "225x99x83 cm",
      "Material": "Kiln-dried hardwood frame",
      "Features": "Smart fabric, easy assembly",
      "Warranty": "10 years"
    },
    tags: ["ikea", "sofa", "smart", "2025", "living-room", "scandinavian"]
  },

  // Cosmetics 2025
  {
    id: 3801,
    name: "L'Oreal Paris Revitalift Clinical Vitamin C 2025",
    brand: "L'Oreal",
    category: "Cosmetics",
    subcategory: "Skincare",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 2345,
    originalPrice: 2999,
    year: 2025,
    model: "RC-VC-2025",
    prices: {
      amazon: { price: 2699, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2799, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Beauty Store", price: 2999, distance: 0.5, address: "Commercial Street", phone: "+91 98765 43801" },
        { name: "Nykaa Store", price: 2599, distance: 1.2, address: "Brigade Road", phone: "+91 98765 43802" }
      ]
    },
    specifications: {
      "Type": "Anti-aging serum",
      "Active Ingredient": "12% Pure Vitamin C",
      "Volume": "30ml",
      "Features": "Clinically tested"
    },
    tags: ["loreal", "skincare", "vitamin-c", "2025", "anti-aging", "serum"]
  }
];

// Export functions for searching 2025 products
export const search2025Products = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products2025.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.subcategory?.toLowerCase().includes(searchTerm) ||
    product.tags?.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    // Enhanced search for common variations
    (searchTerm.includes('iphone') && product.tags?.some(tag => tag.includes('iphone'))) ||
    (searchTerm.includes('samsung') && product.brand.toLowerCase() === 'samsung') ||
    (searchTerm.includes('laptop') && product.category.toLowerCase() === 'laptops') ||
    (searchTerm.includes('watch') && (product.category.toLowerCase().includes('watch') || product.category.toLowerCase() === 'smartwatches'))
  );
};

export const get2025ProductsByCategory = (category: string): Product[] => {
  return products2025.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const get2025ProductsByRange = (range: string): Product[] => {
  const rangeConfig: Record<string, {min: number, max: number}> = {
    'low-range': { min: 500, max: 25000 },
    'mid-range': { min: 25000, max: 75000 },
    'flagship': { min: 75000, max: 200000 },
    'high-flagship': { min: 200000, max: 1000000 }
  };
  
  const config = rangeConfig[range.toLowerCase()];
  if (!config) return [];

  return products2025.filter(product => {
    const bestPrice = Math.min(
      product.prices.amazon.price,
      product.prices.flipkart.price,
      ...product.prices.local.map(store => store.price)
    );
    return bestPrice >= config.min && bestPrice <= config.max;
  });
};
