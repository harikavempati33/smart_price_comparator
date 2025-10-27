import { Product } from './products';

export const cosmeticsExpansion: Product[] = [
  // ===== MAKEUP KITS =====
  {
    id: 8001,
    name: "Complete Makeup Kit Professional 24-Piece Set",
    brand: "Lakme",
    category: "Cosmetics",
    subcategory: "Makeup Kits",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
        alt: "Complete Makeup Kit - Full Set",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400&h=400&fit=crop&crop=center",
        alt: "Makeup Kit Open View",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
        alt: "Individual Makeup Products",
        type: "detail"
      }
    ],
    rating: 4.4,
    reviews: 2876,
    originalPrice: 8999,
    year: 2024,
    model: "LAK-MK-PRO24",
    prices: {
      amazon: { price: 6999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 7499, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 6499, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 6799, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Lakme Salon", price: 8999, distance: 1.2, address: "Beauty Plaza", phone: "+91 98765 80001" },
        { name: "Nykaa Store", price: 6299, distance: 1.8, address: "Cosmetics Hub", phone: "+91 98765 80002" },
        { name: "Beauty World", price: 6999, distance: 2.1, address: "Makeup Center", phone: "+91 98765 80003" }
      ]
    },
    specifications: {
      "Kit Contents": "Foundation, Concealer, Compact, Lipsticks, Eyeshadows",
      "Pieces": "24 Professional Makeup Items",
      "Skin Type": "All Skin Types",
      "Finish": "Matte & Glossy Options",
      "Includes": "Makeup Brushes & Mirror"
    },
    tags: ["makeup-kit", "professional", "complete", "lakme", "24-piece"]
  },
  {
    id: 8002,
    name: "Bridal Makeup Kit Deluxe Edition",
    brand: "MAC",
    category: "Cosmetics",
    subcategory: "Makeup Kits",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 1234,
    originalPrice: 24999,
    year: 2024,
    model: "MAC-BRIDAL-DLX",
    prices: {
      amazon: { price: 19999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 21999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 18999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 19499, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "MAC Store", price: 24999, distance: 2.5, address: "Premium Beauty", phone: "+91 98765 80004" },
        { name: "Bridal Makeup Studio", price: 18499, distance: 1.7, address: "Wedding Beauty", phone: "+91 98765 80005" }
      ]
    },
    specifications: {
      "Occasion": "Bridal & Special Events",
      "Coverage": "Full Coverage Foundation",
      "Longevity": "12+ Hour Wear",
      "Shades": "15 Eyeshadow Shades, 8 Lip Colors",
      "Premium": "High-End Professional Quality"
    },
    tags: ["makeup-kit", "bridal", "premium", "mac", "long-wear"]
  },
  {
    id: 8003,
    name: "Beginners Makeup Kit Essentials",
    brand: "Maybelline",
    category: "Cosmetics",
    subcategory: "Makeup Kits",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 3456,
    originalPrice: 3999,
    year: 2024,
    model: "MAY-BEGIN-ESS",
    prices: {
      amazon: { price: 2999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 3299, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2999, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Maybelline Store", price: 3999, distance: 1.4, address: "Beauty Mall", phone: "+91 98765 80006" },
        { name: "Beginner Beauty", price: 2699, distance: 2.0, address: "Starter Cosmetics", phone: "+91 98765 80007" },
        { name: "Easy Makeup", price: 2899, distance: 1.9, address: "Simple Beauty", phone: "+91 98765 80008" }
      ]
    },
    specifications: {
      "Target": "Makeup Beginners",
      "Ease": "Easy Application",
      "Essential Items": "Foundation, Mascara, Lipstick, Blush",
      "Tutorial": "Step-by-Step Guide Included",
      "Budget": "Affordable Quality"
    },
    tags: ["makeup-kit", "beginner", "essential", "maybelline", "affordable"]
  },

  // ===== MAKEUP ACCESSORIES =====
  {
    id: 8004,
    name: "Professional Makeup Brush Set 32 Pieces",
    brand: "Real Techniques",
    category: "Cosmetics",
    subcategory: "Makeup Brushes",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 1876,
    originalPrice: 4999,
    year: 2024,
    model: "RT-BRUSH-32",
    prices: {
      amazon: { price: 3999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 4199, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 3799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Real Techniques Store", price: 4999, distance: 2.3, address: "Brush Specialists", phone: "+91 98765 80009" },
        { name: "Professional Brushes", price: 3699, distance: 1.8, address: "Makeup Tools", phone: "+91 98765 80010" },
        { name: "Beauty Tools Hub", price: 3999, distance: 2.1, address: "Cosmetic Accessories", phone: "+91 98765 80011" }
      ]
    },
    specifications: {
      "Pieces": "32 Professional Brushes",
      "Material": "Synthetic Bristles",
      "Usage": "Face, Eyes, Lips Application",
      "Case": "Leather Travel Case Included",
      "Care": "Easy to Clean"
    },
    tags: ["brushes", "professional", "32-piece", "synthetic", "travel-case"]
  },
  {
    id: 8005,
    name: "LED Makeup Mirror with Touch Control",
    brand: "Conair",
    category: "Cosmetics",
    subcategory: "Makeup Mirrors",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 987,
    originalPrice: 6999,
    year: 2024,
    model: "CON-LED-TOUCH",
    prices: {
      amazon: { price: 5499, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 5799, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 5299, available: false, shipping: "N/A", delivery: "N/A" },
      ajio: { price: 5599, available: false, shipping: "N/A", delivery: "N/A" },
      local: [
        { name: "Conair Store", price: 6999, distance: 3.1, address: "Beauty Appliances", phone: "+91 98765 80012" },
        { name: "Mirror World", price: 5199, distance: 2.4, address: "Lighting Solutions", phone: "+91 98765 80013" },
        { name: "Vanity Setup", price: 5699, distance: 1.9, address: "Makeup Stations", phone: "+91 98765 80014" }
      ]
    },
    specifications: {
      "Lighting": "LED with 3 Light Settings",
      "Control": "Touch Sensitive Controls",
      "Magnification": "1x and 10x Zoom",
      "Power": "USB Rechargeable",
      "Design": "360° Rotation"
    },
    tags: ["mirror", "led", "touch-control", "magnification", "rechargeable"]
  },
  {
    id: 8006,
    name: "Beauty Blender Set with Cleanser",
    brand: "Beauty Blender",
    category: "Cosmetics",
    subcategory: "Makeup Sponges",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 2345,
    originalPrice: 2999,
    year: 2024,
    model: "BB-SPONGE-SET",
    prices: {
      amazon: { price: 2299, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2499, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2199, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2399, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Beauty Blender Store", price: 2999, distance: 1.7, address: "Sponge Specialists", phone: "+91 98765 80015" },
        { name: "Blending Tools", price: 2099, distance: 2.2, address: "Foundation Helpers", phone: "+91 98765 80016" },
        { name: "Smooth Finish", price: 2299, distance: 1.5, address: "Makeup Blending", phone: "+91 98765 80017" }
      ]
    },
    specifications: {
      "Set": "3 Beauty Blenders + Cleanser",
      "Material": "Latex-Free Foam",
      "Usage": "Foundation, Concealer Blending",
      "Shape": "Teardrop Design",
      "Cleanser": "Deep Cleaning Solution"
    },
    tags: ["beauty-blender", "sponge", "cleanser", "latex-free", "blending"]
  },

  // ===== SKINCARE ACCESSORIES =====
  {
    id: 8007,
    name: "Facial Cleansing Brush Electric",
    brand: "Foreo",
    category: "Cosmetics",
    subcategory: "Skincare Tools",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 1543,
    originalPrice: 18999,
    year: 2024,
    model: "FOR-LUNA-MINI",
    prices: {
      amazon: { price: 14999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 15999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 14499, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 14799, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Foreo Store", price: 18999, distance: 4.2, address: "Premium Skincare", phone: "+91 98765 80018" },
        { name: "Skincare Tech", price: 14299, distance: 2.8, address: "Beauty Devices", phone: "+91 98765 80019" },
        { name: "Facial Care Hub", price: 15199, distance: 3.1, address: "Advanced Skincare", phone: "+91 98765 80020" }
      ]
    },
    specifications: {
      "Technology": "T-Sonic Pulsations",
      "Material": "Medical Grade Silicone",
      "Battery": "USB Rechargeable, 450 Uses",
      "Waterproof": "100% Waterproof",
      "Gentle": "Suitable for All Skin Types"
    },
    tags: ["cleansing-brush", "electric", "sonic", "waterproof", "premium"]
  },
  {
    id: 8008,
    name: "Jade Roller and Gua Sha Set",
    brand: "Mount Lai",
    category: "Cosmetics",
    subcategory: "Facial Tools",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 876,
    originalPrice: 2999,
    year: 2024,
    model: "ML-JADE-SET",
    prices: {
      amazon: { price: 2199, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2399, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2099, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Natural Beauty Tools", price: 2999, distance: 2.1, address: "Wellness Store", phone: "+91 98765 80021" },
        { name: "Jade Therapy", price: 1899, distance: 1.7, address: "Natural Skincare", phone: "+91 98765 80022" },
        { name: "Face Massage Tools", price: 2199, distance: 2.5, address: "Beauty Wellness", phone: "+91 98765 80023" }
      ]
    },
    specifications: {
      "Material": "Authentic Jade Stone",
      "Set Includes": "Jade Roller + Gua Sha Tool",
      "Benefits": "Reduces Puffiness, Improves Circulation",
      "Care": "Easy to Clean",
      "Natural": "100% Natural Stone"
    },
    tags: ["jade-roller", "gua-sha", "facial-massage", "natural", "wellness"]
  },

  // ===== NAIL CARE ACCESSORIES =====
  {
    id: 8009,
    name: "Professional Nail Art Kit 36 Pieces",
    brand: "Sally Hansen",
    category: "Cosmetics",
    subcategory: "Nail Care",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 1654,
    originalPrice: 4999,
    year: 2024,
    model: "SH-NAIL-ART36",
    prices: {
      amazon: { price: 3799, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 3999, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 3599, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3699, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Sally Hansen Store", price: 4999, distance: 2.4, address: "Nail Care Center", phone: "+91 98765 80024" },
        { name: "Nail Art Studio", price: 3499, distance: 1.9, address: "Manicure Hub", phone: "+91 98765 80025" },
        { name: "Beauty Nails", price: 3799, distance: 2.7, address: "Nail Salon Supplies", phone: "+91 98765 80026" }
      ]
    },
    specifications: {
      "Kit Contents": "Nail Polishes, Art Brushes, Stickers, Gems",
      "Colors": "24 Nail Polish Colors",
      "Tools": "Dotting Tools, Striper Brushes",
      "Quality": "Salon Professional Grade",
      "Case": "Organized Storage Case"
    },
    tags: ["nail-art", "professional", "36-piece", "sally-hansen", "manicure"]
  },
  {
    id: 8010,
    name: "Electric Nail File and Buffer Set",
    brand: "Beurer",
    category: "Cosmetics",
    subcategory: "Nail Tools",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 743,
    originalPrice: 3999,
    year: 2024,
    model: "BEU-NAIL-ELEC",
    prices: {
      amazon: { price: 2999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 3199, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 2799, available: false, shipping: "N/A", delivery: "N/A" },
      ajio: { price: 2899, available: false, shipping: "N/A", delivery: "N/A" },
      local: [
        { name: "Beurer Store", price: 3999, distance: 3.8, address: "Personal Care", phone: "+91 98765 80027" },
        { name: "Electric Beauty Tools", price: 2699, distance: 2.3, address: "Nail Care Tech", phone: "+91 98765 80028" },
        { name: "Manicure Machines", price: 2999, distance: 2.9, address: "Nail Equipment", phone: "+91 98765 80029" }
      ]
    },
    specifications: {
      "Power": "Electric with Speed Control",
      "Attachments": "4 Different Attachments",
      "Usage": "Filing, Buffing, Polishing",
      "Portable": "Compact Design",
      "Battery": "Rechargeable"
    },
    tags: ["nail-file", "electric", "buffer", "rechargeable", "professional"]
  },

  // ===== HAIR STYLING ACCESSORIES =====
  {
    id: 8011,
    name: "Hair Styling Tools Complete Set",
    brand: "Philips",
    category: "Cosmetics",
    subcategory: "Hair Styling",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 1987,
    originalPrice: 12999,
    year: 2024,
    model: "PHI-HAIR-COMP",
    prices: {
      amazon: { price: 9999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 10499, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 9699, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 9899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Philips Store", price: 12999, distance: 2.7, address: "Hair Care Center", phone: "+91 98765 80030" },
        { name: "Hair Styling Hub", price: 9499, distance: 1.8, address: "Beauty Appliances", phone: "+91 98765 80031" },
        { name: "Style Solutions", price: 9999, distance: 3.2, address: "Hair Tools", phone: "+91 98765 80032" }
      ]
    },
    specifications: {
      "Set Includes": "Hair Dryer, Straightener, Curler",
      "Technology": "Ceramic Coating, Ionic",
      "Heat Settings": "Multiple Temperature Controls",
      "Safety": "Auto Shut-off Feature",
      "Accessories": "Heat Resistant Glove, Clips"
    },
    tags: ["hair-styling", "complete-set", "ceramic", "ionic", "multi-tool"]
  },
  {
    id: 8012,
    name: "Professional Hair Brush Set Boar Bristle",
    brand: "Mason Pearson",
    category: "Cosmetics",
    subcategory: "Hair Brushes",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 456,
    originalPrice: 8999,
    year: 2024,
    model: "MP-BOAR-SET",
    prices: {
      amazon: { price: 7499, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 7999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 7299, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 7599, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Mason Pearson Store", price: 8999, distance: 4.5, address: "Premium Hair Care", phone: "+91 98765 80033" },
        { name: "Luxury Hair Tools", price: 7199, distance: 3.1, address: "High-End Beauty", phone: "+91 98765 80034" },
        { name: "Professional Brushes", price: 7699, distance: 2.8, address: "Hair Styling Pro", phone: "+91 98765 80035" }
      ]
    },
    specifications: {
      "Material": "100% Boar Bristle",
      "Set": "3 Different Sizes",
      "Quality": "Handcrafted Premium",
      "Benefits": "Natural Oil Distribution",
      "Durability": "Long-lasting Professional Grade"
    },
    tags: ["hair-brush", "boar-bristle", "premium", "handcrafted", "professional"]
  },

  // ===== PERFUMES & FRAGRANCES =====
  {
    id: 8013,
    name: "Designer Perfume Collection Gift Set",
    brand: "Calvin Klein",
    category: "Cosmetics",
    subcategory: "Perfumes",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 2134,
    originalPrice: 15999,
    year: 2024,
    model: "CK-PERF-GIFT",
    prices: {
      amazon: { price: 12999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 13499, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 12599, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 12799, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Calvin Klein Store", price: 15999, distance: 3.7, address: "Luxury Fragrances", phone: "+91 98765 80036" },
        { name: "Perfume Palace", price: 12299, distance: 2.1, address: "Designer Scents", phone: "+91 98765 80037" },
        { name: "Fragrance World", price: 12999, distance: 2.9, address: "Premium Perfumes", phone: "+91 98765 80038" }
      ]
    },
    specifications: {
      "Set": "3 Mini Perfumes + 1 Full Size",
      "Scents": "CK One, Eternity, Euphoria",
      "Volume": "100ml + 3x15ml",
      "Type": "Eau de Toilette",
      "Gift Box": "Premium Presentation Box"
    },
    tags: ["perfume", "designer", "gift-set", "calvin-klein", "luxury"]
  },
  {
    id: 8014,
    name: "Organic Essential Oils Aromatherapy Set",
    brand: "Kama Ayurveda",
    category: "Cosmetics",
    subcategory: "Essential Oils",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 1876,
    originalPrice: 6999,
    year: 2024,
    model: "KA-ESS-AROMA",
    prices: {
      amazon: { price: 5299, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 5599, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 4999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 5199, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Kama Ayurveda Store", price: 6999, distance: 2.4, address: "Ayurvedic Beauty", phone: "+91 98765 80039" },
        { name: "Natural Essentials", price: 4899, distance: 1.9, address: "Organic Wellness", phone: "+91 98765 80040" },
        { name: "Aromatherapy Hub", price: 5299, distance: 2.7, address: "Essential Oils", phone: "+91 98765 80041" }
      ]
    },
    specifications: {
      "Set": "8 Pure Essential Oils",
      "Oils": "Lavender, Tea Tree, Eucalyptus, Rose",
      "Volume": "10ml each",
      "Purity": "100% Organic Certified",
      "Uses": "Aromatherapy, Skincare, Massage"
    },
    tags: ["essential-oils", "organic", "aromatherapy", "natural", "wellness"]
  },

  // ===== BEAUTY ORGANIZERS =====
  {
    id: 8015,
    name: "Acrylic Makeup Organizer 6-Tier",
    brand: "SONGMICS",
    category: "Cosmetics",
    subcategory: "Beauty Storage",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 987,
    originalPrice: 4999,
    year: 2024,
    model: "SONG-ORG-6T",
    prices: {
      amazon: { price: 3599, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 3799, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 3399, available: false, shipping: "N/A", delivery: "N/A" },
      ajio: { price: 3499, available: false, shipping: "N/A", delivery: "N/A" },
      local: [
        { name: "Organization Store", price: 4999, distance: 2.8, address: "Storage Solutions", phone: "+91 98765 80042" },
        { name: "Beauty Storage", price: 3299, distance: 2.1, address: "Makeup Organization", phone: "+91 98765 80043" },
        { name: "Clear Storage", price: 3599, distance: 3.5, address: "Acrylic Organizers", phone: "+91 98765 80044" }
      ]
    },
    specifications: {
      "Material": "High-Quality Acrylic",
      "Tiers": "6 Compartments",
      "Capacity": "Large Storage Space",
      "Transparency": "Crystal Clear",
      "Assembly": "Easy Setup"
    },
    tags: ["organizer", "acrylic", "6-tier", "transparent", "storage"]
  }
];
