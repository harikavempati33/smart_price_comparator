import { Product } from './products';

export const watchesExpansion: Product[] = [
  // ===== TITAN WATCHES =====
  {
    id: 10001,
    name: "Titan Automatic Skeleton Watch for Men",
    brand: "Titan",
    category: "Traditional Watches",
    subcategory: "Men's Automatic",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center",
        alt: "Titan Automatic Watch - Front View",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=400&h=400&fit=crop&crop=center",
        alt: "Titan Watch - Side Profile",
        type: "side"
      },
      {
        url: "https://images.unsplash.com/photo-1594576722512-582bcd46fce4?w=400&h=400&fit=crop&crop=center",
        alt: "Titan Watch - Movement Detail",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center&hue=45",
        alt: "Titan Watch - Gold Variant",
        type: "color_variant",
        variant: "Gold"
      }
    ],
    rating: 4.4,
    reviews: 1876,
    originalPrice: 15999,
    year: 2024,
    model: "TITAN-AUTO-SKEL",
    prices: {
      amazon: { price: 12799, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 13299, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 12499, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 12699, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Titan Store", price: 15999, distance: 1.5, address: "Watch Gallery", phone: "+91 98765 10001" },
        { name: "Time Zone", price: 12299, distance: 2.1, address: "Premium Watches", phone: "+91 98765 10002" },
        { name: "Watch World", price: 12799, distance: 1.8, address: "Timepiece Center", phone: "+91 98765 10003" }
      ]
    },
    specifications: {
      "Movement": "Automatic Self-Winding",
      "Case Material": "Stainless Steel",
      "Dial": "Skeleton Display",
      "Water Resistance": "50 meters",
      "Strap": "Leather Band"
    },
    tags: ["titan", "automatic", "skeleton", "men", "premium"]
  },
  {
    id: 10002,
    name: "Titan Raga Ethnic Collection for Women",
    brand: "Titan",
    category: "Traditional Watches",
    subcategory: "Women's Ethnic",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
        alt: "Titan Raga Watch - Elegant Design",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&h=400&fit=crop&crop=center",
        alt: "Titan Raga - Side Angle",
        type: "side"
      },
      {
        url: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=400&h=400&fit=crop&crop=center",
        alt: "Titan Raga - Dial Detail",
        type: "detail"
      }
    ],
    rating: 4.6,
    reviews: 2345,
    originalPrice: 8999,
    year: 2024,
    model: "TITAN-RAGA-ETH",
    prices: {
      amazon: { price: 6999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 7299, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 6799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 6899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Titan Raga Store", price: 8999, distance: 1.2, address: "Women's Watches", phone: "+91 98765 10004" },
        { name: "Ethnic Timepieces", price: 6699, distance: 1.9, address: "Traditional Watches", phone: "+91 98765 10005" },
        { name: "Ladies Watch House", price: 6999, distance: 2.3, address: "Feminine Collection", phone: "+91 98765 10006" }
      ]
    },
    specifications: {
      "Movement": "Quartz",
      "Case Material": "Brass with Gold Plating",
      "Dial": "Traditional Indian Motifs",
      "Water Resistance": "30 meters",
      "Strap": "Stainless Steel Bracelet"
    },
    tags: ["titan", "raga", "women", "ethnic", "traditional"]
  },

  // ===== FASTRACK WATCHES =====
  {
    id: 10003,
    name: "Fastrack Analog Digital Combo Watch",
    brand: "Fastrack",
    category: "Traditional Watches",
    subcategory: "Youth Sports",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2F764bde1a411741578d0769cfc2d50c9a",
    images: [
      {
        url: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=400&h=400&fit=crop&crop=center",
        alt: "Fastrack Combo Watch - Sport Design",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1594576722512-582bcd46fce4?w=400&h=400&fit=crop&crop=center",
        alt: "Fastrack Watch - Digital Display",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center",
        alt: "Fastrack Watch - Profile View",
        type: "side"
      }
    ],
    rating: 4.3,
    reviews: 3456,
    originalPrice: 4999,
    year: 2024,
    model: "FAST-COMBO-SPT",
    prices: {
      amazon: { price: 3799, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 3999, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 3599, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3699, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Fastrack Store", price: 4999, distance: 1.7, address: "Youth Watches", phone: "+91 98765 10007" },
        { name: "Sports Time", price: 3499, distance: 2.2, address: "Active Lifestyle", phone: "+91 98765 10008" },
        { name: "Cool Watches", price: 3799, distance: 1.4, address: "Trendy Timepieces", phone: "+91 98765 10009" }
      ]
    },
    specifications: {
      "Display": "Analog + Digital",
      "Features": "Stopwatch, Alarm, Backlight",
      "Case Material": "Plastic Resin",
      "Water Resistance": "100 meters",
      "Target": "Youth and Sports"
    },
    tags: ["fastrack", "analog-digital", "sports", "youth", "water-resistant"]
  },
  {
    id: 10004,
    name: "Fastrack Reflex Beat Fitness Watch",
    brand: "Fastrack",
    category: "Traditional Watches",
    subcategory: "Fitness Tracker",
    image: "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 2876,
    originalPrice: 6999,
    year: 2024,
    model: "FAST-REFLEX-BEAT",
    prices: {
      amazon: { price: 5299, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 5599, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 4999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 5199, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Fastrack Reflex Store", price: 6999, distance: 2.1, address: "Fitness Watches", phone: "+91 98765 10010" },
        { name: "Health Trackers", price: 4899, distance: 1.8, address: "Wellness Tech", phone: "+91 98765 10011" },
        { name: "Fit Time", price: 5299, distance: 2.5, address: "Active Monitoring", phone: "+91 98765 10012" }
      ]
    },
    specifications: {
      "Features": "Heart Rate, Sleep Tracking",
      "Display": "Color AMOLED",
      "Battery": "7 Days",
      "Water Resistance": "5ATM",
      "Connectivity": "Bluetooth"
    },
    tags: ["fastrack", "fitness", "heart-rate", "sleep-tracking", "amoled"]
  },

  // ===== CASIO WATCHES =====
  {
    id: 10005,
    name: "Casio G-Shock DW-5600E Digital Watch",
    brand: "Casio",
    category: "Traditional Watches",
    subcategory: "Digital Sports",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2Ffed081c44a7945e0a617a335c6d6e0fc",
    images: [
      {
        url: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=400&h=400&fit=crop&crop=center",
        alt: "G-Shock DW-5600E - Classic Design",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1594576722512-582bcd46fce4?w=400&h=400&fit=crop&crop=center",
        alt: "G-Shock - Shock Resistant Build",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center",
        alt: "G-Shock - Side Profile",
        type: "side"
      }
    ],
    rating: 4.7,
    reviews: 4321,
    originalPrice: 10995,
    year: 2024,
    model: "CASIO-GSHOCK-DW",
    prices: {
      amazon: { price: 8999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 9299, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 8799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 8899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Casio G-Shock Store", price: 10995, distance: 2.3, address: "Shock Resistant Watches", phone: "+91 98765 10013" },
        { name: "Digital Time", price: 8699, distance: 1.9, address: "Tough Watches", phone: "+91 98765 10014" },
        { name: "Adventure Gear", price: 8999, distance: 2.7, address: "Outdoor Timepieces", phone: "+91 98765 10015" }
      ]
    },
    specifications: {
      "Shock Resistance": "G-Shock Protection",
      "Water Resistance": "200 meters",
      "Features": "Stopwatch, Timer, Alarm",
      "Battery Life": "2 years",
      "Backlight": "EL Backlight"
    },
    tags: ["casio", "g-shock", "digital", "shock-resistant", "sports"]
  },
  {
    id: 10006,
    name: "Casio Edifice Chronograph Steel Watch",
    brand: "Casio",
    category: "Traditional Watches",
    subcategory: "Men's Chronograph",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 1987,
    originalPrice: 18999,
    year: 2024,
    model: "CASIO-EDIFICE-CHR",
    prices: {
      amazon: { price: 15199, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 15799, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 14899, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 15099, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Casio Edifice Store", price: 18999, distance: 3.1, address: "Premium Chronographs", phone: "+91 98765 10016" },
        { name: "Racing Time", price: 14699, distance: 2.4, address: "Speed Inspired", phone: "+91 98765 10017" },
        { name: "Steel Watches", price: 15199, distance: 2.8, address: "Metal Timepieces", phone: "+91 98765 10018" }
      ]
    },
    specifications: {
      "Movement": "Quartz Chronograph",
      "Case Material": "Stainless Steel",
      "Features": "1/10 sec Stopwatch, Date",
      "Water Resistance": "100 meters",
      "Crystal": "Mineral Glass"
    },
    tags: ["casio", "edifice", "chronograph", "steel", "racing"]
  },

  // ===== SONATA WATCHES =====
  {
    id: 10007,
    name: "Sonata Analog Watch for Men Classic",
    brand: "Sonata",
    category: "Traditional Watches",
    subcategory: "Men's Analog",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2F8bd52e921047480eaadb6e27df3a6829",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
        alt: "Sonata Classic Watch - Elegant Design",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=400&h=400&fit=crop&crop=center",
        alt: "Sonata Watch - Dial Close-up",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&h=400&fit=crop&crop=center",
        alt: "Sonata Watch - Profile View",
        type: "side"
      }
    ],
    rating: 4.2,
    reviews: 3210,
    originalPrice: 3999,
    year: 2024,
    model: "SONATA-CLASSIC-MEN",
    prices: {
      amazon: { price: 2999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 3199, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Sonata Store", price: 3999, distance: 1.6, address: "Affordable Watches", phone: "+91 98765 10019" },
        { name: "Classic Time", price: 2699, distance: 2.0, address: "Traditional Timepieces", phone: "+91 98765 10020" },
        { name: "Budget Watches", price: 2999, distance: 1.3, address: "Value for Money", phone: "+91 98765 10021" }
      ]
    },
    specifications: {
      "Movement": "Quartz",
      "Case Material": "Alloy",
      "Dial": "Round Analog",
      "Strap": "Leather Band",
      "Water Resistance": "30 meters"
    },
    tags: ["sonata", "classic", "analog", "affordable", "men"]
  },
  {
    id: 10008,
    name: "Sonata Digital Watch for Kids Cartoon",
    brand: "Sonata",
    category: "Traditional Watches",
    subcategory: "Kids Digital",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2F48b2c35a67874bdfb7bfec2959308e91",
    rating: 4.0,
    reviews: 1543,
    originalPrice: 1999,
    year: 2024,
    model: "SONATA-KIDS-CART",
    prices: {
      amazon: { price: 1499, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 1599, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1399, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1449, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Kids Watch Store", price: 1999, distance: 1.8, address: "Children's Timepieces", phone: "+91 98765 10022" },
        { name: "Little Time", price: 1299, distance: 1.4, address: "Kids Accessories", phone: "+91 98765 10023" },
        { name: "Cartoon Watches", price: 1499, distance: 2.2, address: "Fun Timepieces", phone: "+91 98765 10024" }
      ]
    },
    specifications: {
      "Display": "Digital LCD",
      "Design": "Cartoon Characters",
      "Features": "Time, Date, Alarm",
      "Strap": "Rubber Band",
      "Age Group": "5-12 years"
    },
    tags: ["sonata", "kids", "digital", "cartoon", "children"]
  },

  // ===== TIMEX WATCHES =====
  {
    id: 10009,
    name: "Timex Expedition Military Field Watch",
    brand: "Timex",
    category: "Traditional Watches",
    subcategory: "Military Field",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2F079cc3ea550f4513b92f4764e5ecb6c9",
    images: [
      {
        url: "https://images.unsplash.com/photo-1594576722512-582bcd46fce4?w=400&h=400&fit=crop&crop=center",
        alt: "Timex Expedition - Military Design",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center",
        alt: "Timex Field Watch - Rugged Build",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=400&h=400&fit=crop&crop=center",
        alt: "Timex Watch - Side Profile",
        type: "side"
      }
    ],
    rating: 4.6,
    reviews: 2654,
    originalPrice: 8999,
    year: 2024,
    model: "TIMEX-EXP-FIELD",
    prices: {
      amazon: { price: 6999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 7299, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 6799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 6899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Timex Store", price: 8999, distance: 2.5, address: "Adventure Watches", phone: "+91 98765 10025" },
        { name: "Field Gear", price: 6599, distance: 1.9, address: "Military Style", phone: "+91 98765 10026" },
        { name: "Expedition Time", price: 6999, distance: 2.3, address: "Outdoor Timepieces", phone: "+91 98765 10027" }
      ]
    },
    specifications: {
      "Movement": "Quartz",
      "Case": "Resin with Metal Accents",
      "Indiglo": "Night Light",
      "Water Resistance": "100 meters",
      "Style": "Military Field"
    },
    tags: ["timex", "expedition", "military", "field", "indiglo"]
  },
  {
    id: 10010,
    name: "Timex Weekender Slip-Thru Watch",
    brand: "Timex",
    category: "Traditional Watches",
    subcategory: "Casual Analog",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 1876,
    originalPrice: 5999,
    year: 2024,
    model: "TIMEX-WEEKENDER",
    prices: {
      amazon: { price: 4599, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 4799, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 4399, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 4499, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Timex Weekender Store", price: 5999, distance: 1.7, address: "Casual Watches", phone: "+91 98765 10028" },
        { name: "Weekend Style", price: 4299, distance: 2.1, address: "Relaxed Timepieces", phone: "+91 98765 10029" },
        { name: "Easy Time", price: 4599, distance: 1.5, address: "Simple Watches", phone: "+91 98765 10030" }
      ]
    },
    specifications: {
      "Movement": "Quartz",
      "Case Material": "Brass",
      "Strap": "NATO Slip-Thru",
      "Water Resistance": "30 meters",
      "Style": "Casual Weekend"
    },
    tags: ["timex", "weekender", "nato", "casual", "slip-thru"]
  },

  // ===== HMT WATCHES (Indian Heritage Brand) =====
  {
    id: 10011,
    name: "HMT Pilot Vintage Indian Watch",
    brand: "HMT",
    category: "Traditional Watches",
    subcategory: "Vintage Indian",
    image: "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 987,
    originalPrice: 4999,
    year: 2024,
    model: "HMT-PILOT-VINT",
    prices: {
      amazon: { price: 3799, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 3999, available: true, shipping: "Free", delivery: "4-6 days" },
      myntra: { price: 3599, available: false, shipping: "N/A", delivery: "N/A" },
      ajio: { price: 3699, available: false, shipping: "N/A", delivery: "N/A" },
      local: [
        { name: "HMT Heritage Store", price: 4999, distance: 3.2, address: "Indian Watches", phone: "+91 98765 10031" },
        { name: "Vintage Time", price: 3499, distance: 2.8, address: "Retro Collection", phone: "+91 98765 10032" },
        { name: "Heritage Watches", price: 3799, distance: 2.4, address: "Classic Indian", phone: "+91 98765 10033" }
      ]
    },
    specifications: {
      "Movement": "Mechanical Hand-Wind",
      "Heritage": "Made in India",
      "Case": "Stainless Steel",
      "Dial": "Classic Pilot Design",
      "Legacy": "Discontinued Vintage Model"
    },
    tags: ["hmt", "vintage", "indian", "pilot", "heritage"]
  },

  // ===== CITIZEN WATCHES =====
  {
    id: 10012,
    name: "Citizen Eco-Drive Solar Watch",
    brand: "Citizen",
    category: "Traditional Watches",
    subcategory: "Solar Powered",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 1543,
    originalPrice: 22999,
    year: 2024,
    model: "CITIZEN-ECO-SOLAR",
    prices: {
      amazon: { price: 18399, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 19199, available: true, shipping: "Free", delivery: "4-6 days" },
      myntra: { price: 17999, available: true, shipping: "Free", delivery: "3-5 days" },
      ajio: { price: 18199, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "Citizen Store", price: 22999, distance: 3.8, address: "Eco-Drive Center", phone: "+91 98765 10034" },
        { name: "Solar Watches", price: 17799, distance: 2.9, address: "Green Technology", phone: "+91 98765 10035" },
        { name: "Eco Time", price: 18399, distance: 3.4, address: "Sustainable Timepieces", phone: "+91 98765 10036" }
      ]
    },
    specifications: {
      "Power": "Eco-Drive Solar",
      "Battery Life": "Never Needs Battery",
      "Case Material": "Stainless Steel",
      "Water Resistance": "200 meters",
      "Technology": "Light-Powered"
    },
    tags: ["citizen", "eco-drive", "solar", "sustainable", "light-powered"]
  },

  // ===== DIESEL WATCHES =====
  {
    id: 10013,
    name: "Diesel Mr. Daddy 2.0 Chronograph",
    brand: "Diesel",
    category: "Traditional Watches",
    subcategory: "Fashion Chronograph",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2Fc94c1c8d23504e30a0bb7d8428fdb46a",
    rating: 4.2,
    reviews: 876,
    originalPrice: 28999,
    year: 2024,
    model: "DIESEL-DADDY-CHR",
    prices: {
      amazon: { price: 23199, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 24199, available: true, shipping: "Free", delivery: "4-6 days" },
      myntra: { price: 22599, available: true, shipping: "Free", delivery: "3-5 days" },
      ajio: { price: 22999, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "Diesel Store", price: 28999, distance: 4.1, address: "Fashion Watches", phone: "+91 98765 10037" },
        { name: "Bold Time", price: 22399, distance: 3.2, address: "Statement Pieces", phone: "+91 98765 10038" },
        { name: "Fashion Chronos", price: 23199, distance: 3.7, address: "Designer Timepieces", phone: "+91 98765 10039" }
      ]
    },
    specifications: {
      "Size": "57mm Oversized Case",
      "Functions": "Chronograph, Date",
      "Material": "Stainless Steel",
      "Style": "Bold Fashion Statement",
      "Water Resistance": "100 meters"
    },
    tags: ["diesel", "chronograph", "oversized", "fashion", "bold"]
  },

  // ===== FOSSIL WATCHES =====
  {
    id: 10014,
    name: "Fossil Grant Automatic Skeleton Watch",
    brand: "Fossil",
    category: "Traditional Watches",
    subcategory: "Automatic Skeleton",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e4840dffbf749ae990869a03bd80636%2Fecf48fbfd0544381bee601401e0e7ba6",
    rating: 4.5,
    reviews: 1234,
    originalPrice: 19999,
    year: 2024,
    model: "FOSSIL-GRANT-AUTO",
    prices: {
      amazon: { price: 15999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 16599, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 15599, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 15799, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Fossil Store", price: 19999, distance: 2.7, address: "Automatic Collection", phone: "+91 98765 10040" },
        { name: "Skeleton Watches", price: 15399, distance: 2.1, address: "Mechanical Timepieces", phone: "+91 98765 10041" },
        { name: "Classic Auto", price: 15999, distance: 2.9, address: "Self-Winding Watches", phone: "+91 98765 10042" }
      ]
    },
    specifications: {
      "Movement": "Automatic Self-Winding",
      "Display": "Skeleton Dial",
      "Case": "Stainless Steel",
      "Strap": "Leather",
      "Water Resistance": "50 meters"
    },
    tags: ["fossil", "automatic", "skeleton", "self-winding", "classic"]
  },

  // ===== SEIKO WATCHES =====
  {
    id: 10015,
    name: "Seiko 5 Sports Automatic Watch",
    brand: "Seiko",
    category: "Traditional Watches",
    subcategory: "Sports Automatic",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 2987,
    originalPrice: 24999,
    year: 2024,
    model: "SEIKO-5-SPORTS",
    prices: {
      amazon: { price: 19999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 20799, available: true, shipping: "Free", delivery: "4-6 days" },
      myntra: { price: 19599, available: true, shipping: "Free", delivery: "3-5 days" },
      ajio: { price: 19799, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "Seiko Store", price: 24999, distance: 3.5, address: "Japanese Precision", phone: "+91 98765 10043" },
        { name: "Auto Sports", price: 19399, distance: 2.8, address: "Sports Automatics", phone: "+91 98765 10044" },
        { name: "Precision Time", price: 19999, distance: 3.2, address: "Quality Timepieces", phone: "+91 98765 10045" }
      ]
    },
    specifications: {
      "Movement": "Automatic 4R36",
      "Power Reserve": "41 hours",
      "Water Resistance": "100 meters",
      "Day-Date": "Day and Date Display",
      "Origin": "Made in Japan"
    },
    tags: ["seiko", "automatic", "sports", "japanese", "precision"]
  }
];
