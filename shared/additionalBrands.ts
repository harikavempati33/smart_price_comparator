import { Product } from './products';

export const additionalBrandProducts: Product[] = [
  // Vivo Smartphones (All ranges)
  {
    id: 4001,
    name: "Vivo Y36 128GB",
    brand: "Vivo",
    category: "Smartphones",
    subcategory: "Low Range",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 1543,
    originalPrice: 17999,
    year: 2024,
    model: "V2250",
    prices: {
      amazon: { price: 15999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 16299, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 16499, available: false, shipping: "N/A", delivery: "Fashion only" },
      ajio: { price: 16199, available: false, shipping: "N/A", delivery: "Fashion only" },
      local: [
        { name: "Vivo Store", price: 15799, distance: 1.2, address: "City Center", phone: "+91 98765 44001" },
        { name: "Mobile Zone", price: 16199, distance: 2.1, address: "Mall Road", phone: "+91 98765 44002" }
      ]
    },
    specifications: {
      "Display": "6.64-inch FHD+",
      "Processor": "Snapdragon 680",
      "Camera": "50MP + 2MP",
      "Battery": "5000mAh"
    },
    tags: ["vivo", "budget", "low-range", "long-battery"]
  },
  {
    id: 4002,
    name: "Vivo V30 Pro 256GB",
    brand: "Vivo",
    category: "Smartphones",
    subcategory: "Flagship",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 892,
    originalPrice: 49999,
    year: 2024,
    model: "V2329",
    prices: {
      amazon: { price: 44999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 46999, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 47499, available: false, shipping: "N/A", delivery: "Fashion only" },
      ajio: { price: 46799, available: false, shipping: "N/A", delivery: "Fashion only" },
      local: [
        { name: "Vivo Experience", price: 43999, distance: 0.8, address: "Premium Mall", phone: "+91 98765 44003" },
        { name: "Phone Palace", price: 45999, distance: 1.5, address: "Tech Street", phone: "+91 98765 44004" }
      ]
    },
    specifications: {
      "Display": "6.78-inch AMOLED 120Hz",
      "Processor": "MediaTek Dimensity 8200",
      "Camera": "50MP OIS + 50MP Ultra-wide",
      "Battery": "5000mAh with 80W"
    },
    tags: ["vivo", "flagship", "camera", "fast-charging", "amoled"]
  },

  // Oppo Smartphones
  {
    id: 4003,
    name: "Oppo A79 5G 128GB",
    brand: "Oppo",
    category: "Smartphones",
    subcategory: "Mid Range",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 2134,
    originalPrice: 19999,
    year: 2024,
    model: "CPH2473",
    prices: {
      amazon: { price: 17999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 18499, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 18799, available: false, shipping: "N/A", delivery: "Fashion only" },
      ajio: { price: 18299, available: false, shipping: "N/A", delivery: "Fashion only" },
      local: [
        { name: "Oppo Store", price: 17799, distance: 1.3, address: "Central Plaza", phone: "+91 98765 44005" },
        { name: "Smart Mobile", price: 18199, distance: 2.2, address: "Electronic City", phone: "+91 98765 44006" }
      ]
    },
    specifications: {
      "Display": "6.72-inch FHD+ 90Hz",
      "Processor": "MediaTek Dimensity 6020",
      "Camera": "50MP + 2MP + 2MP",
      "Battery": "5000mAh with 33W"
    },
    tags: ["oppo", "5g", "mid-range", "fast-charging"]
  },
  {
    id: 4004,
    name: "Oppo Find N3 Flip 256GB",
    brand: "Oppo",
    category: "Smartphones",
    subcategory: "High Flagship",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 567,
    originalPrice: 94999,
    year: 2024,
    model: "CPH2519",
    prices: {
      amazon: { price: 89999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 91999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 92999, available: false, shipping: "N/A", delivery: "Fashion only" },
      ajio: { price: 91499, available: false, shipping: "N/A", delivery: "Fashion only" },
      local: [
        { name: "Oppo Premium", price: 88999, distance: 1.8, address: "Luxury Mall", phone: "+91 98765 44007" },
        { name: "Foldable Zone", price: 90999, distance: 2.5, address: "Tech Hub", phone: "+91 98765 44008" }
      ]
    },
    specifications: {
      "Display": "6.8-inch LTPO AMOLED Foldable",
      "Processor": "MediaTek Dimensity 9200",
      "Camera": "50MP Triple Camera with Hasselblad",
      "Battery": "4300mAh with 44W"
    },
    tags: ["oppo", "foldable", "high-flagship", "hasselblad", "premium"]
  },

  // Realme Smartphones
  {
    id: 4005,
    name: "Realme C67 128GB",
    brand: "Realme",
    category: "Smartphones",
    subcategory: "Low Range",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 3421,
    originalPrice: 13999,
    year: 2024,
    model: "RMX3999",
    prices: {
      amazon: { price: 12499, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 12799, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 12999, available: false, shipping: "N/A", delivery: "Fashion only" },
      ajio: { price: 12699, available: false, shipping: "N/A", delivery: "Fashion only" },
      local: [
        { name: "Realme Store", price: 12299, distance: 1.1, address: "Budget Mall", phone: "+91 98765 44009" },
        { name: "Value Mobile", price: 12599, distance: 1.9, address: "Market Street", phone: "+91 98765 44010" }
      ]
    },
    specifications: {
      "Display": "6.72-inch HD+ 90Hz",
      "Processor": "UNISOC Tiger T612",
      "Camera": "108MP + 2MP",
      "Battery": "5000mAh with 33W"
    },
    tags: ["realme", "budget", "low-range", "108mp", "fast-charging"]
  },
  {
    id: 4006,
    name: "Realme GT 6 256GB",
    brand: "Realme",
    category: "Smartphones",
    subcategory: "Flagship",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 1234,
    originalPrice: 42999,
    year: 2024,
    model: "RMX3851",
    prices: {
      amazon: { price: 39999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 40999, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 41499, available: false, shipping: "N/A", delivery: "Fashion only" },
      ajio: { price: 40699, available: false, shipping: "N/A", delivery: "Fashion only" },
      local: [
        { name: "Realme Flagship", price: 38999, distance: 1.4, address: "Gaming Zone", phone: "+91 98765 44011" },
        { name: "Performance Hub", price: 40499, distance: 2.0, address: "Speed Street", phone: "+91 98765 44012" }
      ]
    },
    specifications: {
      "Display": "6.78-inch LTPO AMOLED 120Hz",
      "Processor": "Snapdragon 8s Gen 3",
      "Camera": "50MP Sony LYT-808 + 8MP + 2MP",
      "Battery": "5500mAh with 120W"
    },
    tags: ["realme", "flagship", "gaming", "120w-charging", "amoled"]
  },

  // Redmi/Xiaomi Smartphones
  {
    id: 4007,
    name: "Redmi 13C 128GB",
    brand: "Redmi",
    category: "Smartphones",
    subcategory: "Low Range",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.0,
    reviews: 4567,
    originalPrice: 10999,
    year: 2024,
    model: "23124RA7EI",
    prices: {
      amazon: { price: 9499, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 9799, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 9999, available: false, shipping: "N/A", delivery: "Fashion only" },
      ajio: { price: 9699, available: false, shipping: "N/A", delivery: "Fashion only" },
      local: [
        { name: "Mi Store", price: 9299, distance: 0.9, address: "Value Center", phone: "+91 98765 44013" },
        { name: "Budget Phone", price: 9599, distance: 1.7, address: "Economy Mall", phone: "+91 98765 44014" }
      ]
    },
    specifications: {
      "Display": "6.74-inch HD+ 90Hz",
      "Processor": "MediaTek Helio G85",
      "Camera": "50MP + 2MP",
      "Battery": "5000mAh with 18W"
    },
    tags: ["redmi", "budget", "low-range", "value", "xiaomi"]
  },
  {
    id: 4008,
    name: "Xiaomi 14 Ultra 512GB",
    brand: "Xiaomi",
    category: "Smartphones",
    subcategory: "High Flagship",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 789,
    originalPrice: 99999,
    year: 2024,
    model: "2405CPX3DG",
    prices: {
      amazon: { price: 94999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 96999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 97999, available: false, shipping: "N/A", delivery: "Fashion only" },
      ajio: { price: 96499, available: false, shipping: "N/A", delivery: "Fashion only" },
      local: [
        { name: "Mi Flagship", price: 93999, distance: 1.6, address: "Photography Hub", phone: "+91 98765 44015" },
        { name: "Camera Store", price: 95999, distance: 2.3, address: "Pro Zone", phone: "+91 98765 44016" }
      ]
    },
    specifications: {
      "Display": "6.73-inch LTPO AMOLED 120Hz",
      "Processor": "Snapdragon 8 Gen 3",
      "Camera": "50MP Leica Quad Camera System",
      "Battery": "5300mAh with 90W"
    },
    tags: ["xiaomi", "ultra", "high-flagship", "leica", "photography", "premium"]
  },

  // iQOO Smartphones
  {
    id: 4009,
    name: "iQOO Z9 5G 128GB",
    brand: "iQOO",
    category: "Smartphones",
    subcategory: "Mid Range",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 1876,
    originalPrice: 23999,
    year: 2024,
    model: "I2214",
    prices: {
      amazon: { price: 21999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 22499, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 22999, available: false, shipping: "N/A", delivery: "Fashion only" },
      ajio: { price: 22299, available: false, shipping: "N/A", delivery: "Fashion only" },
      local: [
        { name: "iQOO Store", price: 21799, distance: 1.5, address: "Gaming Center", phone: "+91 98765 44017" },
        { name: "Speed Mobile", price: 22199, distance: 2.1, address: "Performance Mall", phone: "+91 98765 44018" }
      ]
    },
    specifications: {
      "Display": "6.67-inch AMOLED 120Hz",
      "Processor": "MediaTek Dimensity 7200",
      "Camera": "50MP + 2MP",
      "Battery": "5000mAh with 44W"
    },
    tags: ["iqoo", "gaming", "mid-range", "5g", "amoled", "performance"]
  },
  {
    id: 4010,
    name: "iQOO 12 5G 256GB",
    brand: "iQOO",
    category: "Smartphones",
    subcategory: "Flagship",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 654,
    originalPrice: 54999,
    year: 2024,
    model: "V2307",
    prices: {
      amazon: { price: 51999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 52999, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 53499, available: false, shipping: "N/A", delivery: "Fashion only" },
      ajio: { price: 52699, available: false, shipping: "N/A", delivery: "Fashion only" },
      local: [
        { name: "iQOO Pro", price: 50999, distance: 1.2, address: "Elite Gaming", phone: "+91 98765 44019" },
        { name: "Flagship Zone", price: 52499, distance: 1.8, address: "Pro Street", phone: "+91 98765 44020" }
      ]
    },
    specifications: {
      "Display": "6.78-inch LTPO AMOLED 144Hz",
      "Processor": "Snapdragon 8 Gen 3",
      "Camera": "50MP + 64MP + 50MP",
      "Battery": "5000mAh with 120W"
    },
    tags: ["iqoo", "flagship", "gaming", "144hz", "snapdragon8gen3", "120w"]
  },

  // Nothing Smartphones
  {
    id: 4011,
    name: "Nothing Phone (2a) 128GB",
    brand: "Nothing",
    category: "Smartphones",
    subcategory: "Mid Range",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 1234,
    originalPrice: 25999,
    year: 2024,
    model: "A065",
    prices: {
      amazon: { price: 23999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 24499, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 24999, available: false, shipping: "N/A", delivery: "Fashion only" },
      ajio: { price: 24299, available: false, shipping: "N/A", delivery: "Fashion only" },
      local: [
        { name: "Nothing Store", price: 23799, distance: 2.1, address: "Design District", phone: "+91 98765 44021" },
        { name: "Unique Mobile", price: 24199, distance: 1.7, address: "Style Street", phone: "+91 98765 44022" }
      ]
    },
    specifications: {
      "Display": "6.7-inch AMOLED 120Hz",
      "Processor": "MediaTek Dimensity 7200 Pro",
      "Camera": "50MP + 50MP",
      "Battery": "5000mAh with 45W"
    },
    tags: ["nothing", "unique-design", "mid-range", "glyph-interface", "transparent"]
  },

  // Honor Smartphones
  {
    id: 4012,
    name: "Honor 90 5G 256GB",
    brand: "Honor",
    category: "Smartphones",
    subcategory: "Flagship",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 987,
    originalPrice: 39999,
    year: 2024,
    model: "FNE-LX9",
    prices: {
      amazon: { price: 36999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 37999, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 38499, available: false, shipping: "N/A", delivery: "Fashion only" },
      ajio: { price: 37699, available: false, shipping: "N/A", delivery: "Fashion only" },
      local: [
        { name: "Honor Store", price: 36799, distance: 1.3, address: "Premium Plaza", phone: "+91 98765 44023" },
        { name: "Elite Mobile", price: 37499, distance: 2.0, address: "Luxury Lane", phone: "+91 98765 44024" }
      ]
    },
    specifications: {
      "Display": "6.7-inch AMOLED 120Hz",
      "Processor": "Snapdragon 7 Gen 1",
      "Camera": "200MP + 12MP + 2MP",
      "Battery": "5000mAh with 66W"
    },
    tags: ["honor", "flagship", "200mp", "portrait", "fast-charging"]
  }
];

// Enhanced price comparison function
export const getBestPrice = (prices: any) => {
  const allPrices = [
    prices.amazon?.price || Infinity,
    prices.flipkart?.price || Infinity,
    prices.myntra?.price || Infinity,
    prices.ajio?.price || Infinity,
    ...prices.local?.map((store: any) => store.price) || []
  ];
  return Math.min(...allPrices.filter(price => price !== Infinity));
};

// Function to get lowest price source
export const getLowestPriceSource = (prices: any) => {
  const bestPrice = getBestPrice(prices);
  
  if (prices.amazon?.price === bestPrice) return { source: 'Amazon', price: bestPrice };
  if (prices.flipkart?.price === bestPrice) return { source: 'Flipkart', price: bestPrice };
  if (prices.myntra?.price === bestPrice) return { source: 'Myntra', price: bestPrice };
  if (prices.ajio?.price === bestPrice) return { source: 'Ajio', price: bestPrice };
  
  const localStore = prices.local?.find((store: any) => store.price === bestPrice);
  if (localStore) return { source: localStore.name, price: bestPrice, isLocal: true };
  
  return { source: 'Amazon', price: prices.amazon?.price || 0 };
};
