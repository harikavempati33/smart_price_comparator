import { Product } from './products';

export const furnitureExpansion: Product[] = [
  // ===== CRADLES =====
  {
    id: 7001,
    name: "Wooden Baby Cradle with Mosquito Net",
    brand: "Little Angle",
    category: "Furniture",
    subcategory: "Baby Cradles",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        alt: "Wooden Baby Cradle - Front View",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center",
        alt: "Baby Cradle - Side View",
        type: "side"
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop&crop=center",
        alt: "Baby Cradle with Net - Detail",
        type: "detail"
      }
    ],
    rating: 4.4,
    reviews: 892,
    originalPrice: 12999,
    year: 2024,
    model: "LA-CRADLE-001",
    prices: {
      amazon: { price: 9999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 10499, available: true, shipping: "Free", delivery: "4-6 days" },
      myntra: { price: 9799, available: false, shipping: "N/A", delivery: "N/A" },
      ajio: { price: 10199, available: false, shipping: "N/A", delivery: "N/A" },
      local: [
        { name: "Baby World Store", price: 9599, distance: 2.1, address: "Children's Plaza", phone: "+91 98765 70001" },
        { name: "Little Ones Furniture", price: 10199, distance: 1.8, address: "Family Mall", phone: "+91 98765 70002" },
        { name: "Kids Corner", price: 9899, distance: 3.2, address: "Mother & Baby Center", phone: "+91 98765 70003" }
      ]
    },
    specifications: {
      "Material": "Sheesham Wood",
      "Dimensions": "100cm x 60cm x 80cm",
      "Weight Capacity": "15 kg",
      "Features": "Mosquito Net, Rocking Motion, Storage Drawer",
      "Safety": "Non-toxic finish, Rounded edges"
    },
    tags: ["baby", "cradle", "wooden", "mosquito-net", "rocking"]
  },
  {
    id: 7002,
    name: "Modern Steel Cradle with Swing",
    brand: "Mothercare",
    category: "Furniture",
    subcategory: "Baby Cradles",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 654,
    originalPrice: 8999,
    year: 2024,
    model: "MC-SWING-CRADLE",
    prices: {
      amazon: { price: 7499, available: true, shipping: "Free", delivery: "2-4 days" },
      flipkart: { price: 7799, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "Mothercare Store", price: 8999, distance: 1.5, address: "Kids Mall", phone: "+91 98765 70004" },
        { name: "Baby Care Center", price: 7299, distance: 2.7, address: "Child World", phone: "+91 98765 70005" }
      ]
    },
    specifications: {
      "Material": "Powder Coated Steel",
      "Dimensions": "95cm x 55cm x 75cm",
      "Weight Capacity": "12 kg",
      "Features": "Gentle Swing Motion, Foldable",
      "Color": "White with Blue Accents"
    },
    tags: ["baby", "cradle", "steel", "swing", "foldable"]
  },

  // ===== SOFA SETS =====
  {
    id: 7003,
    name: "3+2+1 Fabric Sofa Set - Modern Design",
    brand: "Urban Ladder",
    category: "Furniture",
    subcategory: "Sofa Sets",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        alt: "3+2+1 Sofa Set - Living Room Setup",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center",
        alt: "Sofa Set - Side Angle",
        type: "side"
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop&crop=center",
        alt: "Sofa Cushion Detail",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center&hue=120",
        alt: "Sofa Set - Green Variant",
        type: "color_variant",
        variant: "Green"
      }
    ],
    rating: 4.5,
    reviews: 1876,
    originalPrice: 89999,
    year: 2024,
    model: "UL-SOFA-321",
    prices: {
      amazon: { price: 69999, available: true, shipping: "Free", delivery: "7-10 days" },
      flipkart: { price: 72999, available: true, shipping: "Free", delivery: "8-12 days" },
      local: [
        { name: "Urban Ladder Store", price: 67999, distance: 3.5, address: "Furniture Hub", phone: "+91 98765 70006" },
        { name: "Home Comfort", price: 71999, distance: 2.8, address: "Living Solutions", phone: "+91 98765 70007" },
        { name: "Sofa World", price: 69499, distance: 4.2, address: "Furniture Street", phone: "+91 98765 70008" }
      ]
    },
    specifications: {
      "Material": "Premium Fabric with Wooden Frame",
      "Seating": "3-Seater + 2-Seater + 1-Seater",
      "Cushioning": "High Density Foam",
      "Warranty": "2 Years Manufacturing Warranty",
      "Assembly": "Professional Assembly Included"
    },
    tags: ["sofa", "3+2+1", "fabric", "modern", "living-room"]
  },
  {
    id: 7004,
    name: "L-Shape Leather Sofa with Recliner",
    brand: "Durian",
    category: "Furniture",
    subcategory: "Sofa Sets",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 1234,
    originalPrice: 124999,
    year: 2024,
    model: "DUR-LSHAPE-REC",
    prices: {
      amazon: { price: 99999, available: true, shipping: "Free", delivery: "10-14 days" },
      flipkart: { price: 104999, available: true, shipping: "Free", delivery: "12-16 days" },
      local: [
        { name: "Durian Furniture", price: 124999, distance: 5.1, address: "Premium Furniture Mall", phone: "+91 98765 70009" },
        { name: "Luxury Living", price: 97999, distance: 3.9, address: "Elite Furniture", phone: "+91 98765 70010" }
      ]
    },
    specifications: {
      "Material": "Genuine Leather",
      "Type": "L-Shape with Electric Recliner",
      "Seating Capacity": "6 People",
      "Features": "USB Charging Ports, Cup Holders",
      "Color": "Brown/Black Available"
    },
    tags: ["sofa", "l-shape", "leather", "recliner", "premium"]
  },

  // ===== DIVAN SETS =====
  {
    id: 7005,
    name: "King Size Divan Set with Storage",
    brand: "Sleepwell",
    category: "Furniture",
    subcategory: "Divan Sets",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 987,
    originalPrice: 35999,
    year: 2024,
    model: "SW-DIVAN-KING",
    prices: {
      amazon: { price: 28999, available: true, shipping: "Free", delivery: "5-7 days" },
      flipkart: { price: 30999, available: true, shipping: "Free", delivery: "6-8 days" },
      local: [
        { name: "Sleepwell Store", price: 35999, distance: 2.3, address: "Sleep Center", phone: "+91 98765 70011" },
        { name: "Mattress World", price: 27999, distance: 1.9, address: "Bedding Plaza", phone: "+91 98765 70012" },
        { name: "Dream Sleep", price: 29499, distance: 3.4, address: "Comfort Zone", phone: "+91 98765 70013" }
      ]
    },
    specifications: {
      "Size": "King Size (78x72 inches)",
      "Storage": "4 Drawer Storage Base",
      "Material": "Bonded Foam Mattress",
      "Thickness": "6 inches",
      "Color": "Maroon/Navy Blue Available"
    },
    tags: ["divan", "king-size", "storage", "mattress", "bedroom"]
  },
  {
    id: 7006,
    name: "Queen Size Divan with Headboard",
    brand: "Kurlon",
    category: "Furniture",
    subcategory: "Divan Sets",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center",
    rating: 4.1,
    reviews: 765,
    originalPrice: 28999,
    year: 2024,
    model: "KUR-QUEEN-HB",
    prices: {
      amazon: { price: 23999, available: true, shipping: "Free", delivery: "4-6 days" },
      flipkart: { price: 25499, available: true, shipping: "Free", delivery: "5-7 days" },
      local: [
        { name: "Kurlon Store", price: 28999, distance: 1.7, address: "Bedroom Solutions", phone: "+91 98765 70014" },
        { name: "Sleep Comfort", price: 22999, distance: 2.5, address: "Rest Easy", phone: "+91 98765 70015" }
      ]
    },
    specifications: {
      "Size": "Queen Size (78x60 inches)",
      "Headboard": "Upholstered Tufted Headboard",
      "Material": "Coir and Foam",
      "Thickness": "5 inches",
      "Warranty": "5 Years on Mattress"
    },
    tags: ["divan", "queen-size", "headboard", "coir", "bedroom"]
  },

  // ===== BEDS =====
  {
    id: 7007,
    name: "Solid Wood Double Bed with Storage",
    brand: "Hometown",
    category: "Furniture",
    subcategory: "Double Beds",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        alt: "Solid Wood Double Bed - Complete Setup",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center",
        alt: "Bed Storage Compartment",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop&crop=center",
        alt: "Bed Frame Side View",
        type: "side"
      }
    ],
    rating: 4.4,
    reviews: 1543,
    originalPrice: 45999,
    year: 2024,
    model: "HT-WOOD-DBL",
    prices: {
      amazon: { price: 36999, available: true, shipping: "Free", delivery: "7-10 days" },
      flipkart: { price: 38999, available: true, shipping: "Free", delivery: "8-12 days" },
      local: [
        { name: "Hometown Store", price: 45999, distance: 4.1, address: "Furniture Mega Store", phone: "+91 98765 70016" },
        { name: "Wood Craft", price: 35999, distance: 2.7, address: "Wooden Furniture Hub", phone: "+91 98765 70017" },
        { name: "Bedroom Kings", price: 37499, distance: 3.8, address: "Sleep Solutions", phone: "+91 98765 70018" }
      ]
    },
    specifications: {
      "Material": "Sheesham Wood",
      "Size": "Double (75x60 inches)",
      "Storage": "Hydraulic Storage with Gas Lifters",
      "Finish": "Honey Oak Finish",
      "Assembly": "Expert Assembly Required"
    },
    tags: ["bed", "double", "wood", "storage", "sheesham"]
  },
  {
    id: 7008,
    name: "Single Bed with Study Table Combo",
    brand: "Alex Daisy",
    category: "Furniture",
    subcategory: "Single Beds",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 876,
    originalPrice: 22999,
    year: 2024,
    model: "AD-SINGLE-STUDY",
    prices: {
      amazon: { price: 18999, available: true, shipping: "Free", delivery: "5-7 days" },
      flipkart: { price: 19999, available: true, shipping: "Free", delivery: "6-8 days" },
      local: [
        { name: "Alex Daisy Store", price: 22999, distance: 2.9, address: "Kids Furniture", phone: "+91 98765 70019" },
        { name: "Study Room Solutions", price: 17999, distance: 1.8, address: "Student Furniture", phone: "+91 98765 70020" },
        { name: "Space Savers", price: 19499, distance: 3.2, address: "Compact Living", phone: "+91 98765 70021" }
      ]
    },
    specifications: {
      "Material": "Engineered Wood",
      "Size": "Single (75x36 inches)",
      "Features": "Attached Study Table, Book Shelf",
      "Color": "White and Blue",
      "Target": "Kids and Students"
    },
    tags: ["bed", "single", "study-table", "kids", "space-saving"]
  },

  // ===== CUPBOARDS =====
  {
    id: 7009,
    name: "4-Door Wardrobe with Mirror",
    brand: "Godrej Interio",
    category: "Furniture",
    subcategory: "Cupboards & Wardrobes",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop&crop=center",
        alt: "4-Door Wardrobe - Closed View",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        alt: "Wardrobe Interior - Open View",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center",
        alt: "Wardrobe Mirror Panel",
        type: "detail"
      }
    ],
    rating: 4.5,
    reviews: 2345,
    originalPrice: 65999,
    year: 2024,
    model: "GI-4DOOR-MIR",
    prices: {
      amazon: { price: 52999, available: true, shipping: "Free", delivery: "10-14 days" },
      flipkart: { price: 55999, available: true, shipping: "Free", delivery: "12-16 days" },
      local: [
        { name: "Godrej Interio", price: 65999, distance: 3.7, address: "Furniture Showroom", phone: "+91 98765 70022" },
        { name: "Wardrobe World", price: 51999, distance: 2.4, address: "Storage Solutions", phone: "+91 98765 70023" },
        { name: "Bedroom Experts", price: 53999, distance: 4.1, address: "Complete Interiors", phone: "+91 98765 70024" }
      ]
    },
    specifications: {
      "Material": "Engineered Wood with Laminate",
      "Doors": "4 Door with 1 Mirror Panel",
      "Dimensions": "200cm H x 180cm W x 55cm D",
      "Interior": "Hanging Rod, Shelves, Drawers",
      "Color": "Walnut Brown"
    },
    tags: ["wardrobe", "4-door", "mirror", "storage", "bedroom"]
  },
  {
    id: 7010,
    name: "3-Door Steel Almirah",
    brand: "Nilkamal",
    category: "Furniture",
    subcategory: "Cupboards & Wardrobes",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center",
    rating: 4.0,
    reviews: 1234,
    originalPrice: 18999,
    year: 2024,
    model: "NIL-3DOOR-STL",
    prices: {
      amazon: { price: 14999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 15999, available: true, shipping: "Free", delivery: "4-6 days" },
      local: [
        { name: "Nilkamal Store", price: 18999, distance: 1.6, address: "Plastic & Steel Furniture", phone: "+91 98765 70025" },
        { name: "Steel Furniture Hub", price: 13999, distance: 2.8, address: "Durable Solutions", phone: "+91 98765 70026" },
        { name: "Budget Almirah", price: 15499, distance: 3.5, address: "Affordable Storage", phone: "+91 98765 70027" }
      ]
    },
    specifications: {
      "Material": "High Quality Steel",
      "Doors": "3 Door with Lock System",
      "Dimensions": "185cm H x 120cm W x 45cm D",
      "Features": "Rust Resistant, Easy Assembly",
      "Color": "Grey/Blue Available"
    },
    tags: ["almirah", "steel", "3-door", "budget", "durable"]
  },

  // ===== ADDITIONAL FURNITURE ITEMS =====
  {
    id: 7011,
    name: "Recliner Chair with Massage Function",
    brand: "La-Z-Boy",
    category: "Furniture",
    subcategory: "Chairs & Recliners",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 567,
    originalPrice: 89999,
    year: 2024,
    model: "LZB-MASSAGE-REC",
    prices: {
      amazon: { price: 74999, available: true, shipping: "Free", delivery: "7-10 days" },
      flipkart: { price: 77999, available: true, shipping: "Free", delivery: "8-12 days" },
      local: [
        { name: "La-Z-Boy Store", price: 89999, distance: 5.2, address: "Premium Furniture", phone: "+91 98765 70028" },
        { name: "Comfort Zone", price: 73999, distance: 3.8, address: "Relaxation Hub", phone: "+91 98765 70029" }
      ]
    },
    specifications: {
      "Material": "Premium Leather",
      "Features": "8-Point Massage, Heat Function",
      "Power": "Electric Reclining",
      "Remote": "Wireless Remote Control",
      "Warranty": "3 Years"
    },
    tags: ["recliner", "massage", "leather", "premium", "comfort"]
  },
  {
    id: 7012,
    name: "Coffee Table with Storage Glass Top",
    brand: "IKEA",
    category: "Furniture",
    subcategory: "Tables",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 892,
    originalPrice: 12999,
    year: 2024,
    model: "IKEA-COFFEE-GL",
    prices: {
      amazon: { price: 9999, available: true, shipping: "₹299", delivery: "5-7 days" },
      flipkart: { price: 10499, available: true, shipping: "₹399", delivery: "6-8 days" },
      local: [
        { name: "IKEA Store", price: 12999, distance: 8.5, address: "IKEA Nagasandra", phone: "+91 98765 70030" },
        { name: "Glass Furniture", price: 9499, distance: 2.1, address: "Modern Living", phone: "+91 98765 70031" },
        { name: "Table World", price: 10199, distance: 3.4, address: "Furniture Plaza", phone: "+91 98765 70032" }
      ]
    },
    specifications: {
      "Material": "Tempered Glass Top with Wood Base",
      "Dimensions": "120cm x 60cm x 45cm",
      "Storage": "Lower Shelf for Magazines",
      "Style": "Scandinavian Modern",
      "Assembly": "Self Assembly Required"
    },
    tags: ["coffee-table", "glass", "storage", "scandinavian", "modern"]
  },
  {
    id: 7013,
    name: "Bookshelf 5-Tier Wooden Display",
    brand: "Wakefit",
    category: "Furniture",
    subcategory: "Storage & Display",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 743,
    originalPrice: 8999,
    year: 2024,
    model: "WF-BOOK-5T",
    prices: {
      amazon: { price: 6999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 7499, available: true, shipping: "Free", delivery: "4-6 days" },
      local: [
        { name: "Wakefit Store", price: 8999, distance: 2.7, address: "Study Furniture", phone: "+91 98765 70033" },
        { name: "Book Storage", price: 6499, distance: 1.9, address: "Student Solutions", phone: "+91 98765 70034" },
        { name: "Display Racks", price: 7199, distance: 3.1, address: "Organization Hub", phone: "+91 98765 70035" }
      ]
    },
    specifications: {
      "Material": "Engineered Wood",
      "Tiers": "5 Adjustable Shelves",
      "Dimensions": "180cm H x 80cm W x 30cm D",
      "Capacity": "Up to 50 Books per Shelf",
      "Finish": "Walnut Laminate"
    },
    tags: ["bookshelf", "5-tier", "wooden", "storage", "study"]
  },
  {
    id: 7014,
    name: "Dining Table 6-Seater with Chairs",
    brand: "Hometown",
    category: "Furniture",
    subcategory: "Dining Sets",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 1156,
    originalPrice: 58999,
    year: 2024,
    model: "HT-DINING-6S",
    prices: {
      amazon: { price: 46999, available: true, shipping: "Free", delivery: "8-12 days" },
      flipkart: { price: 49999, available: true, shipping: "Free", delivery: "10-14 days" },
      local: [
        { name: "Hometown Store", price: 58999, distance: 4.1, address: "Dining Solutions", phone: "+91 98765 70036" },
        { name: "Dining World", price: 45999, distance: 3.2, address: "Family Furniture", phone: "+91 98765 70037" },
        { name: "Table & Chairs", price: 47999, distance: 2.8, address: "Dining Specialists", phone: "+91 98765 70038" }
      ]
    },
    specifications: {
      "Material": "Solid Wood Table with Upholstered Chairs",
      "Seating": "6 Chairs Included",
      "Table Size": "180cm x 90cm",
      "Chair Material": "Fabric Upholstery",
      "Style": "Contemporary Design"
    },
    tags: ["dining-table", "6-seater", "chairs", "family", "contemporary"]
  },
  {
    id: 7015,
    name: "Office Chair Ergonomic High-Back",
    brand: "Featherlite",
    category: "Furniture",
    subcategory: "Office Chairs",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 2134,
    originalPrice: 15999,
    year: 2024,
    model: "FL-ERGO-HB",
    prices: {
      amazon: { price: 12999, available: true, shipping: "Free", delivery: "2-4 days" },
      flipkart: { price: 13499, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "Featherlite Store", price: 15999, distance: 3.5, address: "Office Furniture", phone: "+91 98765 70039" },
        { name: "Ergonomic Solutions", price: 12499, distance: 2.1, address: "Workspace Comfort", phone: "+91 98765 70040" },
        { name: "Office Chairs Plus", price: 13199, distance: 2.9, address: "Professional Seating", phone: "+91 98765 70041" }
      ]
    },
    specifications: {
      "Material": "Mesh Back with Fabric Seat",
      "Features": "Lumbar Support, Adjustable Armrests",
      "Height": "Pneumatic Height Adjustment",
      "Wheels": "Smooth Rolling Casters",
      "Warranty": "2 Years"
    },
    tags: ["office-chair", "ergonomic", "mesh", "adjustable", "professional"]
  }
];
