import { Product } from './products';

export const homeAppliancesExpansion: Product[] = [
  // ===== TELEVISIONS =====
  
  // Smart TVs
  {
    id: 11001,
    name: "Samsung 55-inch 4K Smart QLED TV",
    brand: "Samsung",
    category: "Home Appliances",
    subcategory: "Smart TVs",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&crop=center",
        alt: "Samsung QLED TV - Front View",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop&crop=center",
        alt: "Samsung TV - Side Profile",
        type: "side"
      },
      {
        url: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400&h=400&fit=crop&crop=center",
        alt: "Samsung TV - Remote and Interface",
        type: "detail"
      }
    ],
    rating: 4.6,
    reviews: 2876,
    originalPrice: 89999,
    year: 2024,
    model: "SAMSUNG-QLED-55",
    prices: {
      amazon: { price: 74999, available: true, shipping: "Free", delivery: "5-7 days" },
      flipkart: { price: 76999, available: true, shipping: "Free", delivery: "6-8 days" },
      myntra: { price: 73999, available: false, shipping: "N/A", delivery: "N/A" },
      ajio: { price: 74499, available: false, shipping: "N/A", delivery: "N/A" },
      local: [
        { name: "Samsung Store", price: 89999, distance: 2.1, address: "Electronics Mall", phone: "+91 98765 11001" },
        { name: "TV World", price: 72999, distance: 1.8, address: "Home Entertainment", phone: "+91 98765 11002" },
        { name: "Smart Electronics", price: 74999, distance: 2.5, address: "Digital Home", phone: "+91 98765 11003" }
      ]
    },
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "4K Ultra HD (3840x2160)",
      "Technology": "QLED Quantum Dot",
      "Smart OS": "Tizen with Netflix, Prime Video",
      "Connectivity": "WiFi, Bluetooth, 4 HDMI, 2 USB"
    },
    tags: ["samsung", "qled", "4k", "smart-tv", "55-inch"]
  },
  {
    id: 11002,
    name: "LG 43-inch Full HD Smart LED TV",
    brand: "LG",
    category: "Home Appliances",
    subcategory: "Smart TVs",
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 1987,
    originalPrice: 45999,
    year: 2024,
    model: "LG-LED-43-SMART",
    prices: {
      amazon: { price: 35999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 37299, available: true, shipping: "Free", delivery: "4-6 days" },
      local: [
        { name: "LG Store", price: 45999, distance: 1.9, address: "Appliance Center", phone: "+91 98765 11004" },
        { name: "Electronics Hub", price: 34999, distance: 2.3, address: "TV Specialists", phone: "+91 98765 11005" },
        { name: "Smart Home", price: 35999, distance: 1.7, address: "Digital Living", phone: "+91 98765 11006" }
      ]
    },
    specifications: {
      "Screen Size": "43 inches",
      "Resolution": "Full HD (1920x1080)",
      "Technology": "LED Backlit",
      "Smart OS": "webOS with Built-in Apps",
      "Audio": "20W Dolby Audio"
    },
    tags: ["lg", "led", "full-hd", "smart-tv", "43-inch"]
  },
  {
    id: 11003,
    name: "Sony 65-inch 4K Android TV OLED",
    brand: "Sony",
    category: "Home Appliances",
    subcategory: "Premium TVs",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 1234,
    originalPrice: 189999,
    year: 2024,
    model: "SONY-OLED-65",
    prices: {
      amazon: { price: 159999, available: true, shipping: "Free", delivery: "7-10 days" },
      flipkart: { price: 164999, available: true, shipping: "Free", delivery: "8-12 days" },
      local: [
        { name: "Sony Center", price: 189999, distance: 3.2, address: "Premium Electronics", phone: "+91 98765 11007" },
        { name: "OLED Specialists", price: 157999, distance: 2.8, address: "High-End TV Store", phone: "+91 98765 11008" },
        { name: "Home Cinema", price: 159999, distance: 3.5, address: "Theater Experience", phone: "+91 98765 11009" }
      ]
    },
    specifications: {
      "Screen Size": "65 inches",
      "Technology": "OLED Perfect Black",
      "Processor": "Cognitive Processor XR",
      "Audio": "Acoustic Surface Audio+",
      "Gaming": "Perfect for PS5"
    },
    tags: ["sony", "oled", "4k", "android-tv", "premium"]
  },

  // ===== WASHING MACHINES =====
  {
    id: 11004,
    name: "IFB 7.5kg Fully Automatic Front Load",
    brand: "IFB",
    category: "Home Appliances",
    subcategory: "Washing Machines",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop&crop=center",
        alt: "IFB Front Load Washing Machine",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop&crop=center",
        alt: "IFB Washing Machine - Control Panel",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop&crop=center",
        alt: "IFB Washing Machine - Side View",
        type: "side"
      }
    ],
    rating: 4.4,
    reviews: 3456,
    originalPrice: 42999,
    year: 2024,
    model: "IFB-FL-7.5",
    prices: {
      amazon: { price: 34999, available: true, shipping: "Free", delivery: "5-7 days" },
      flipkart: { price: 36499, available: true, shipping: "Free", delivery: "6-8 days" },
      local: [
        { name: "IFB Store", price: 42999, distance: 2.7, address: "Home Appliances", phone: "+91 98765 11010" },
        { name: "Washing Solutions", price: 33999, distance: 1.9, address: "Laundry Equipment", phone: "+91 98765 11011" },
        { name: "Clean Appliances", price: 34999, distance: 2.4, address: "Washing Machine Hub", phone: "+91 98765 11012" }
      ]
    },
    specifications: {
      "Capacity": "7.5 kg",
      "Type": "Fully Automatic Front Load",
      "Programs": "12 Wash Programs",
      "Features": "Steam Wash, Aqua Energie",
      "Warranty": "4 Years Comprehensive"
    },
    tags: ["ifb", "front-load", "7.5kg", "steam-wash", "automatic"]
  },
  {
    id: 11005,
    name: "LG 6.5kg Top Load Semi Automatic",
    brand: "LG",
    category: "Home Appliances",
    subcategory: "Washing Machines",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 2345,
    originalPrice: 18999,
    year: 2024,
    model: "LG-TL-6.5-SEMI",
    prices: {
      amazon: { price: 15999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 16499, available: true, shipping: "Free", delivery: "4-6 days" },
      local: [
        { name: "LG Appliances", price: 18999, distance: 1.8, address: "Home Solutions", phone: "+91 98765 11013" },
        { name: "Budget Wash", price: 15499, distance: 2.1, address: "Affordable Appliances", phone: "+91 98765 11014" },
        { name: "Top Load Center", price: 15999, distance: 1.5, address: "Traditional Washing", phone: "+91 98765 11015" }
      ]
    },
    specifications: {
      "Capacity": "6.5 kg",
      "Type": "Semi Automatic Top Load",
      "Tubs": "Wash Tub + Spin Tub",
      "Motor": "Wind Jet Dry Technology",
      "Power": "410 Watts"
    },
    tags: ["lg", "top-load", "6.5kg", "semi-automatic", "budget"]
  },

  // ===== MICROWAVE OVENS =====
  {
    id: 11006,
    name: "Samsung 28L Convection Microwave Oven",
    brand: "Samsung",
    category: "Home Appliances",
    subcategory: "Microwave Ovens",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=400&fit=crop&crop=center",
        alt: "Samsung Convection Microwave",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
        alt: "Samsung Microwave - Interior",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1628968100622-5b12e7ba7934?w=400&h=400&fit=crop&crop=center",
        alt: "Samsung Microwave - Control Panel",
        type: "detail"
      }
    ],
    rating: 4.5,
    reviews: 1876,
    originalPrice: 19999,
    year: 2024,
    model: "SAMSUNG-MW-28L",
    prices: {
      amazon: { price: 15999, available: true, shipping: "Free", delivery: "2-4 days" },
      flipkart: { price: 16499, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "Samsung Kitchen", price: 19999, distance: 2.2, address: "Kitchen Appliances", phone: "+91 98765 11016" },
        { name: "Microwave Center", price: 15599, distance: 1.7, address: "Cooking Solutions", phone: "+91 98765 11017" },
        { name: "Quick Cook", price: 15999, distance: 2.0, address: "Fast Cooking", phone: "+91 98765 11018" }
      ]
    },
    specifications: {
      "Capacity": "28 Liters",
      "Type": "Convection Microwave",
      "Power": "900 Watts Microwave, 1500 Watts Convection",
      "Features": "Auto Cook Menus, Ceramic Enamel",
      "Control": "Jog Dial"
    },
    tags: ["samsung", "convection", "28l", "microwave", "auto-cook"]
  },
  {
    id: 11007,
    name: "Panasonic 20L Solo Microwave Oven",
    brand: "Panasonic",
    category: "Home Appliances",
    subcategory: "Microwave Ovens",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 2654,
    originalPrice: 8999,
    year: 2024,
    model: "PANASONIC-SOLO-20L",
    prices: {
      amazon: { price: 6999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 7299, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Panasonic Store", price: 8999, distance: 1.9, address: "Japanese Appliances", phone: "+91 98765 11019" },
        { name: "Solo Microwave", price: 6799, distance: 2.3, address: "Basic Cooking", phone: "+91 98765 11020" },
        { name: "Simple Kitchen", price: 6999, distance: 1.6, address: "Essential Appliances", phone: "+91 98765 11021" }
      ]
    },
    specifications: {
      "Capacity": "20 Liters",
      "Type": "Solo Microwave",
      "Power": "700 Watts",
      "Features": "6 Auto Cook Menus",
      "Use": "Heating, Defrosting, Simple Cooking"
    },
    tags: ["panasonic", "solo", "20l", "basic", "affordable"]
  },

  // ===== REFRIGERATORS =====
  {
    id: 11008,
    name: "Whirlpool 340L Double Door Refrigerator",
    brand: "Whirlpool",
    category: "Home Appliances",
    subcategory: "Double Door Refrigerators",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop&crop=center",
        alt: "Whirlpool Double Door Fridge",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
        alt: "Whirlpool Fridge - Interior",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1628968100622-5b12e7ba7934?w=400&h=400&fit=crop&crop=center",
        alt: "Whirlpool Fridge - Freezer Section",
        type: "detail"
      }
    ],
    rating: 4.4,
    reviews: 3210,
    originalPrice: 45999,
    year: 2024,
    model: "WHIRLPOOL-DD-340L",
    prices: {
      amazon: { price: 37999, available: true, shipping: "Free", delivery: "5-7 days" },
      flipkart: { price: 39499, available: true, shipping: "Free", delivery: "6-8 days" },
      local: [
        { name: "Whirlpool Store", price: 45999, distance: 2.8, address: "Cooling Solutions", phone: "+91 98765 11022" },
        { name: "Fridge World", price: 36999, distance: 2.1, address: "Refrigeration Center", phone: "+91 98765 11023" },
        { name: "Cool Home", price: 37999, distance: 2.5, address: "Kitchen Cooling", phone: "+91 98765 11024" }
      ]
    },
    specifications: {
      "Capacity": "340 Liters",
      "Type": "Double Door Frost Free",
      "Energy Rating": "3 Star",
      "Compressor": "Intellisense Inverter",
      "Features": "6th Sense Technology"
    },
    tags: ["whirlpool", "double-door", "340l", "frost-free", "inverter"]
  },
  {
    id: 11009,
    name: "Haier 195L Single Door Refrigerator",
    brand: "Haier",
    category: "Home Appliances",
    subcategory: "Single Door Refrigerators",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 1987,
    originalPrice: 18999,
    year: 2024,
    model: "HAIER-SD-195L",
    prices: {
      amazon: { price: 15999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 16499, available: true, shipping: "Free", delivery: "4-6 days" },
      local: [
        { name: "Haier Store", price: 18999, distance: 2.4, address: "Compact Cooling", phone: "+91 98765 11025" },
        { name: "Single Door Specialist", price: 15599, distance: 1.8, address: "Small Fridges", phone: "+91 98765 11026" },
        { name: "Compact Home", price: 15999, distance: 2.1, address: "Space Saving", phone: "+91 98765 11027" }
      ]
    },
    specifications: {
      "Capacity": "195 Liters",
      "Type": "Single Door Direct Cool",
      "Energy Rating": "2 Star",
      "Suitable For": "Small Families (2-3 people)",
      "Features": "Stabilizer Free Operation"
    },
    tags: ["haier", "single-door", "195l", "compact", "budget"]
  },

  // ===== AIR CONDITIONERS =====
  {
    id: 11010,
    name: "Daikin 1.5 Ton Inverter Split AC",
    brand: "Daikin",
    category: "Home Appliances",
    subcategory: "Split Air Conditioners",
    image: "https://images.unsplash.com/photo-1631435924634-64f734d33db9?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1631435924634-64f734d33db9?w=400&h=400&fit=crop&crop=center",
        alt: "Daikin Split AC - Indoor Unit",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop&crop=center",
        alt: "Daikin AC - Outdoor Unit",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop&crop=center",
        alt: "Daikin AC - Remote Control",
        type: "detail"
      }
    ],
    rating: 4.7,
    reviews: 2876,
    originalPrice: 54999,
    year: 2024,
    model: "DAIKIN-INV-1.5T",
    prices: {
      amazon: { price: 44999, available: true, shipping: "Free", delivery: "7-10 days" },
      flipkart: { price: 46499, available: true, shipping: "Free", delivery: "8-12 days" },
      local: [
        { name: "Daikin Store", price: 54999, distance: 3.1, address: "AC Specialists", phone: "+91 98765 11028" },
        { name: "Cool Air", price: 43999, distance: 2.7, address: "Air Conditioning", phone: "+91 98765 11029" },
        { name: "Climate Control", price: 44999, distance: 3.0, address: "Cooling Solutions", phone: "+91 98765 11030" }
      ]
    },
    specifications: {
      "Capacity": "1.5 Ton (5 Star)",
      "Technology": "Inverter with R32 Refrigerant",
      "Coverage": "150-180 sq ft",
      "Features": "Copper Coil, Wi-Fi Enabled",
      "Installation": "Professional Installation Included"
    },
    tags: ["daikin", "inverter", "split-ac", "1.5-ton", "5-star"]
  },
  {
    id: 11011,
    name: "Voltas 1 Ton Window AC Non-Inverter",
    brand: "Voltas",
    category: "Home Appliances",
    subcategory: "Window Air Conditioners",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 3456,
    originalPrice: 28999,
    year: 2024,
    model: "VOLTAS-WIN-1T",
    prices: {
      amazon: { price: 23999, available: true, shipping: "Free", delivery: "5-7 days" },
      flipkart: { price: 24999, available: true, shipping: "Free", delivery: "6-8 days" },
      local: [
        { name: "Voltas Store", price: 28999, distance: 2.2, address: "Window AC Center", phone: "+91 98765 11031" },
        { name: "Window Cool", price: 22999, distance: 1.9, address: "Traditional AC", phone: "+91 98765 11032" },
        { name: "Budget AC", price: 23999, distance: 2.5, address: "Affordable Cooling", phone: "+91 98765 11033" }
      ]
    },
    specifications: {
      "Capacity": "1 Ton (3 Star)",
      "Type": "Window AC Fixed Speed",
      "Coverage": "90-120 sq ft",
      "Coil": "Copper Coil",
      "Remote": "Remote Control Included"
    },
    tags: ["voltas", "window-ac", "1-ton", "non-inverter", "budget"]
  },

  // ===== FANS =====
  {
    id: 11012,
    name: "Havells Ceiling Fan 1200mm Premium",
    brand: "Havells",
    category: "Home Appliances",
    subcategory: "Ceiling Fans",
    image: "https://images.unsplash.com/photo-1628968100622-5b12e7ba7934?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1628968100622-5b12e7ba7934?w=400&h=400&fit=crop&crop=center",
        alt: "Havells Ceiling Fan - Premium Design",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1631435924634-64f734d33db9?w=400&h=400&fit=crop&crop=center",
        alt: "Havells Fan - Motor Detail",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
        alt: "Havells Fan - Blade Design",
        type: "detail"
      }
    ],
    rating: 4.5,
    reviews: 4321,
    originalPrice: 4999,
    year: 2024,
    model: "HAVELLS-CEIL-1200",
    prices: {
      amazon: { price: 3799, available: true, shipping: "Free", delivery: "2-4 days" },
      flipkart: { price: 3999, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "Havells Store", price: 4999, distance: 1.7, address: "Electrical Appliances", phone: "+91 98765 11034" },
        { name: "Fan World", price: 3599, distance: 1.3, address: "Ceiling Fan Specialists", phone: "+91 98765 11035" },
        { name: "Air Circulation", price: 3799, distance: 2.0, address: "Home Ventilation", phone: "+91 98765 11036" }
      ]
    },
    specifications: {
      "Size": "1200mm (48 inches)",
      "Motor": "Double Ball Bearing",
      "Speed": "3 Speed Control",
      "Air Delivery": "220 CMM",
      "Warranty": "2 Years on Motor"
    },
    tags: ["havells", "ceiling-fan", "1200mm", "premium", "energy-efficient"]
  },
  {
    id: 11013,
    name: "Crompton Smart Fan with Remote & WiFi",
    brand: "Crompton",
    category: "Home Appliances",
    subcategory: "Smart Fans",
    image: "https://images.unsplash.com/photo-1631435924634-64f734d33db9?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 1876,
    originalPrice: 8999,
    year: 2024,
    model: "CROMPTON-SMART-FAN",
    prices: {
      amazon: { price: 6999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 7299, available: true, shipping: "Free", delivery: "4-6 days" },
      local: [
        { name: "Crompton Store", price: 8999, distance: 2.4, address: "Smart Home Appliances", phone: "+91 98765 11037" },
        { name: "Smart Fans", price: 6799, distance: 1.8, address: "Connected Home", phone: "+91 98765 11038" },
        { name: "WiFi Appliances", price: 6999, distance: 2.1, address: "IoT Devices", phone: "+91 98765 11039" }
      ]
    },
    specifications: {
      "Smart Features": "WiFi, App Control, Voice Control",
      "Motor": "BLDC Motor (Energy Saving)",
      "Control": "Remote + Mobile App",
      "Compatibility": "Alexa, Google Assistant",
      "Timer": "Sleep Timer, Schedule"
    },
    tags: ["crompton", "smart-fan", "wifi", "bldc", "voice-control"]
  },

  // ===== KITCHEN CHIMNEYS =====
  {
    id: 11014,
    name: "Faber 60cm Autoclean Kitchen Chimney",
    brand: "Faber",
    category: "Home Appliances",
    subcategory: "Kitchen Chimneys",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=400&fit=crop&crop=center",
        alt: "Faber Kitchen Chimney - Installed",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
        alt: "Faber Chimney - Control Panel",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1628968100622-5b12e7ba7934?w=400&h=400&fit=crop&crop=center",
        alt: "Faber Chimney - Filter System",
        type: "detail"
      }
    ],
    rating: 4.3,
    reviews: 2134,
    originalPrice: 24999,
    year: 2024,
    model: "FABER-AUTO-60CM",
    prices: {
      amazon: { price: 18999, available: true, shipping: "Free", delivery: "5-7 days" },
      flipkart: { price: 19999, available: true, shipping: "Free", delivery: "6-8 days" },
      local: [
        { name: "Faber Store", price: 24999, distance: 2.8, address: "Kitchen Solutions", phone: "+91 98765 11040" },
        { name: "Chimney World", price: 18499, distance: 2.1, address: "Kitchen Ventilation", phone: "+91 98765 11041" },
        { name: "Clean Kitchen", price: 18999, distance: 2.5, address: "Cooking Appliances", phone: "+91 98765 11042" }
      ]
    },
    specifications: {
      "Size": "60cm Width",
      "Suction": "1200 m³/hr",
      "Technology": "Autoclean Technology",
      "Filter": "Baffle Filter",
      "Noise": "58 dB (Low Noise)"
    },
    tags: ["faber", "chimney", "autoclean", "60cm", "kitchen"]
  },

  // ===== LIGHTS =====
  {
    id: 11015,
    name: "Philips LED Bulb 9W Cool White Pack of 4",
    brand: "Philips",
    category: "Home Appliances",
    subcategory: "LED Lights",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 5432,
    originalPrice: 999,
    year: 2024,
    model: "PHILIPS-LED-9W-4",
    prices: {
      amazon: { price: 699, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 749, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Philips Lighting", price: 999, distance: 1.5, address: "Electrical Store", phone: "+91 98765 11043" },
        { name: "LED World", price: 649, distance: 1.2, address: "Energy Saving Lights", phone: "+91 98765 11044" },
        { name: "Bright Lights", price: 699, distance: 1.8, address: "Home Lighting", phone: "+91 98765 11045" }
      ]
    },
    specifications: {
      "Wattage": "9 Watts (equivalent to 75W)",
      "Color": "Cool White (6500K)",
      "Life": "15,000 Hours",
      "Base": "B22 (Bayonet)",
      "Pack": "4 Bulbs"
    },
    tags: ["philips", "led", "9w", "cool-white", "energy-saving"]
  },
  {
    id: 11016,
    name: "Syska Smart WiFi LED Strip 5 Meters",
    brand: "Syska",
    category: "Home Appliances",
    subcategory: "Smart Lights",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 1543,
    originalPrice: 2999,
    year: 2024,
    model: "SYSKA-SMART-STRIP",
    prices: {
      amazon: { price: 2199, available: true, shipping: "Free", delivery: "2-4 days" },
      flipkart: { price: 2399, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "Syska Store", price: 2999, distance: 2.1, address: "Smart Lighting", phone: "+91 98765 11046" },
        { name: "LED Strip Specialists", price: 1999, distance: 1.7, address: "Decorative Lights", phone: "+91 98765 11047" },
        { name: "Smart Home Lights", price: 2199, distance: 2.4, address: "Connected Lighting", phone: "+91 98765 11048" }
      ]
    },
    specifications: {
      "Length": "5 Meters",
      "Colors": "16 Million Colors + White",
      "Control": "WiFi App Control",
      "Features": "Music Sync, Timer, Schedule",
      "Compatibility": "Alexa, Google Assistant"
    },
    tags: ["syska", "smart", "led-strip", "wifi", "rgb"]
  },
  {
    id: 11017,
    name: "Bajaj Panel Light 18W Square LED",
    brand: "Bajaj",
    category: "Home Appliances",
    subcategory: "Panel Lights",
    image: "https://images.unsplash.com/photo-1631435924634-64f734d33db9?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 987,
    originalPrice: 1499,
    year: 2024,
    model: "BAJAJ-PANEL-18W",
    prices: {
      amazon: { price: 1099, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 1199, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Bajaj Electricals", price: 1499, distance: 1.9, address: "Home Electricals", phone: "+91 98765 11049" },
        { name: "Panel Light Store", price: 999, distance: 1.4, address: "Ceiling Lights", phone: "+91 98765 11050" },
        { name: "Modern Lighting", price: 1099, distance: 2.2, address: "Contemporary Lights", phone: "+91 98765 11051" }
      ]
    },
    specifications: {
      "Wattage": "18 Watts",
      "Shape": "Square Panel",
      "Mounting": "Surface/Recessed",
      "Color Temperature": "Cool White (6500K)",
      "Coverage": "150-200 sq ft"
    },
    tags: ["bajaj", "panel-light", "18w", "square", "ceiling"]
  },
  {
    id: 11018,
    name: "Wipro Smart Bulb 12W Color Changing",
    brand: "Wipro",
    category: "Home Appliances",
    subcategory: "Smart Lights",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 2876,
    originalPrice: 1999,
    year: 2024,
    model: "WIPRO-SMART-12W",
    prices: {
      amazon: { price: 1499, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 1599, available: true, shipping: "Free", delivery: "2 days" },
      local: [
        { name: "Wipro Smart Store", price: 1999, distance: 2.3, address: "Smart Home", phone: "+91 98765 11052" },
        { name: "Color Bulbs", price: 1399, distance: 1.8, address: "Smart Lighting", phone: "+91 98765 11053" },
        { name: "WiFi Lights", price: 1499, distance: 2.0, address: "Connected Home", phone: "+91 98765 11054" }
      ]
    },
    specifications: {
      "Wattage": "12 Watts",
      "Colors": "16 Million Colors",
      "Control": "App + Voice Control",
      "Dimming": "1-100% Dimmable",
      "Life": "25,000 Hours"
    },
    tags: ["wipro", "smart-bulb", "color-changing", "12w", "dimming"]
  }
];
