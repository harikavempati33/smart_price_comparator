import { Product } from './products';

export const bagsExpansion: Product[] = [
  // ===== SCHOOL BAGS =====
  {
    id: 12001,
    name: "VIP School Backpack 45L with Laptop Compartment",
    brand: "VIP",
    category: "Bags",
    subcategory: "School Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
        alt: "VIP School Backpack - Front View",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=400&fit=crop&crop=center",
        alt: "VIP Backpack - Side Profile",
        type: "side"
      },
      {
        url: "https://images.unsplash.com/photo-1564484485-aff2889134c4?w=400&h=400&fit=crop&crop=center",
        alt: "VIP Backpack - Interior Compartments",
        type: "detail"
      }
    ],
    rating: 4.3,
    reviews: 3456,
    originalPrice: 2999,
    year: 2024,
    model: "VIP-SCHOOL-45L",
    prices: {
      amazon: { price: 2199, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2399, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1999, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2099, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "VIP Store", price: 2999, distance: 1.5, address: "Student Accessories", phone: "+91 98765 12001" },
        { name: "School Bags Plus", price: 1899, distance: 1.2, address: "Educational Supplies", phone: "+91 98765 12002" },
        { name: "Student World", price: 2199, distance: 2.1, address: "School Equipment", phone: "+91 98765 12003" }
      ]
    },
    specifications: {
      "Capacity": "45 Liters",
      "Laptop Compartment": "Fits up to 15.6 inch laptop",
      "Material": "Water Resistant Polyester",
      "Pockets": "Multiple Organizer Pockets",
      "Age Group": "8-18 years"
    },
    tags: ["vip", "school-bag", "backpack", "laptop", "students"]
  },
  {
    id: 12002,
    name: "Wildcraft Kids School Bag 30L Colorful",
    brand: "Wildcraft",
    category: "Bags",
    subcategory: "School Bags",
    image: "https://images.unsplash.com/photo-1564484485-aff2889134c4?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 2876,
    originalPrice: 3999,
    year: 2024,
    model: "WILD-KIDS-30L",
    prices: {
      amazon: { price: 2999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 3199, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Wildcraft Store", price: 3999, distance: 2.3, address: "Outdoor & Adventure", phone: "+91 98765 12004" },
        { name: "Kids Bags", price: 2699, distance: 1.8, address: "Children's Accessories", phone: "+91 98765 12005" },
        { name: "Adventure Kids", price: 2999, distance: 2.0, address: "Active Lifestyle", phone: "+91 98765 12006" }
      ]
    },
    specifications: {
      "Capacity": "30 Liters",
      "Design": "Colorful Kids Design",
      "Padding": "Padded Shoulder Straps",
      "Safety": "Reflective Strips",
      "Age Group": "5-12 years"
    },
    tags: ["wildcraft", "kids", "school-bag", "colorful", "safe"]
  },

  // ===== COLLEGE BAGS =====
  {
    id: 12003,
    name: "American Tourister College Backpack 32L",
    brand: "American Tourister",
    category: "Bags",
    subcategory: "College Bags",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=400&fit=crop&crop=center",
        alt: "American Tourister College Bag",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
        alt: "College Bag - Multiple Compartments",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1564484485-aff2889134c4?w=400&h=400&fit=crop&crop=center",
        alt: "College Bag - Side View",
        type: "side"
      }
    ],
    rating: 4.4,
    reviews: 1987,
    originalPrice: 4999,
    year: 2024,
    model: "AT-COLLEGE-32L",
    prices: {
      amazon: { price: 3799, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 3999, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 3599, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3699, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "American Tourister Store", price: 4999, distance: 2.7, address: "Travel & College Gear", phone: "+91 98765 12007" },
        { name: "College Essentials", price: 3499, distance: 1.9, address: "Student Lifestyle", phone: "+91 98765 12008" },
        { name: "Campus Bags", price: 3799, distance: 2.4, address: "Higher Education", phone: "+91 98765 12009" }
      ]
    },
    specifications: {
      "Capacity": "32 Liters",
      "Laptop Section": "Dedicated Laptop Compartment",
      "Material": "Durable Nylon",
      "Organization": "Multiple Pockets & Organizers",
      "Comfort": "Ergonomic Design"
    },
    tags: ["american-tourister", "college", "laptop-bag", "ergonomic", "durable"]
  },
  {
    id: 12004,
    name: "Puma College Backpack Sports Style 25L",
    brand: "Puma",
    category: "Bags",
    subcategory: "College Bags",
    image: "https://images.unsplash.com/photo-1564484485-aff2889134c4?w=400&h=400&fit=crop&crop=center",
    rating: 4.2,
    reviews: 2345,
    originalPrice: 3499,
    year: 2024,
    model: "PUMA-SPORTS-25L",
    prices: {
      amazon: { price: 2599, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2799, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2399, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2499, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Puma Store", price: 3499, distance: 2.1, address: "Sports & Lifestyle", phone: "+91 98765 12010" },
        { name: "Sports College Bags", price: 2299, distance: 1.7, address: "Athletic Gear", phone: "+91 98765 12011" },
        { name: "Active Students", price: 2599, distance: 2.3, address: "Sport Style", phone: "+91 98765 12012" }
      ]
    },
    specifications: {
      "Capacity": "25 Liters",
      "Style": "Sports Inspired Design",
      "Compartments": "Main + Laptop + Front Pocket",
      "Material": "Polyester with Mesh",
      "Brand Logo": "Puma Cat Logo"
    },
    tags: ["puma", "sports", "college", "athletic", "brand"]
  },

  // ===== TRAVEL BAGS =====
  {
    id: 12005,
    name: "Samsonite Travel Duffle Bag 65L Weekend",
    brand: "Samsonite",
    category: "Bags",
    subcategory: "Travel Duffle Bags",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop&crop=center",
        alt: "Samsonite Duffle Bag - Travel Ready",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center",
        alt: "Samsonite Duffle - Interior Space",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
        alt: "Samsonite Duffle - Carrying Options",
        type: "detail"
      }
    ],
    rating: 4.6,
    reviews: 1543,
    originalPrice: 8999,
    year: 2024,
    model: "SAMSONITE-DUFFLE-65",
    prices: {
      amazon: { price: 6999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 7299, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 6799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 6899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Samsonite Store", price: 8999, distance: 3.1, address: "Travel Solutions", phone: "+91 98765 12013" },
        { name: "Travel Gear", price: 6599, distance: 2.4, address: "Weekend Trips", phone: "+91 98765 12014" },
        { name: "Duffle World", price: 6999, distance: 2.8, address: "Soft Luggage", phone: "+91 98765 12015" }
      ]
    },
    specifications: {
      "Capacity": "65 Liters",
      "Type": "Duffle Bag with Wheels",
      "Material": "Water Resistant Fabric",
      "Carry Options": "Handle, Shoulder Strap, Wheels",
      "Trip Type": "Weekend/Short Trips"
    },
    tags: ["samsonite", "duffle", "travel", "weekend", "wheeled"]
  },
  {
    id: 12006,
    name: "Aristocrat Travel Backpack 55L Hiking",
    brand: "Aristocrat",
    category: "Bags",
    subcategory: "Travel Backpacks",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 987,
    originalPrice: 4999,
    year: 2024,
    model: "ARISTO-HIKE-55L",
    prices: {
      amazon: { price: 3699, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 3899, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 3499, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 3599, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Aristocrat Store", price: 4999, distance: 2.5, address: "Adventure Travel", phone: "+91 98765 12016" },
        { name: "Hiking Gear", price: 3399, distance: 1.9, address: "Outdoor Equipment", phone: "+91 98765 12017" },
        { name: "Backpack Central", price: 3699, distance: 2.7, address: "Travel Backpacks", phone: "+91 98765 12018" }
      ]
    },
    specifications: {
      "Capacity": "55 Liters",
      "Type": "Hiking Travel Backpack",
      "Frame": "Internal Frame Support",
      "Rain Cover": "Included Rain Protection",
      "Pockets": "Multiple External Pockets"
    },
    tags: ["aristocrat", "hiking", "travel", "backpack", "rain-cover"]
  },

  // ===== TROLLEY BAGS =====
  {
    id: 12007,
    name: "VIP Trolley Bag 75cm Large Hard Shell",
    brand: "VIP",
    category: "Bags",
    subcategory: "Trolley Bags",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center",
        alt: "VIP Hard Shell Trolley",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop&crop=center",
        alt: "VIP Trolley - Wheels & Handle",
        type: "detail"
      },
      {
        url: "https://images.unsplash.com/photo-1564484485-aff2889134c4?w=400&h=400&fit=crop&crop=center",
        alt: "VIP Trolley - Interior Layout",
        type: "detail"
      }
    ],
    rating: 4.4,
    reviews: 2876,
    originalPrice: 12999,
    year: 2024,
    model: "VIP-TROLLEY-75CM",
    prices: {
      amazon: { price: 9999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 10499, available: true, shipping: "Free", delivery: "4-6 days" },
      myntra: { price: 9699, available: true, shipping: "Free", delivery: "3-5 days" },
      ajio: { price: 9899, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "VIP Luggage Store", price: 12999, distance: 3.2, address: "Premium Luggage", phone: "+91 98765 12019" },
        { name: "Hard Shell Luggage", price: 9499, distance: 2.8, address: "Durable Travel", phone: "+91 98765 12020" },
        { name: "Trolley World", price: 9999, distance: 3.0, address: "Rolling Luggage", phone: "+91 98765 12021" }
      ]
    },
    specifications: {
      "Size": "75cm Large (Check-in)",
      "Material": "ABS Hard Shell",
      "Wheels": "4 Spinner Wheels",
      "Lock": "TSA Combination Lock",
      "Weight": "Lightweight 3.8kg"
    },
    tags: ["vip", "trolley", "hard-shell", "spinner", "large"]
  },
  {
    id: 12008,
    name: "American Tourister Cabin Trolley 55cm",
    brand: "American Tourister",
    category: "Bags",
    subcategory: "Cabin Trolley",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 1876,
    originalPrice: 7999,
    year: 2024,
    model: "AT-CABIN-55CM",
    prices: {
      amazon: { price: 5999, available: true, shipping: "Free", delivery: "2-3 days" },
      flipkart: { price: 6299, available: true, shipping: "Free", delivery: "3-4 days" },
      myntra: { price: 5799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 5899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "American Tourister", price: 7999, distance: 2.7, address: "Cabin Luggage", phone: "+91 98765 12022" },
        { name: "Carry-On Specialists", price: 5699, distance: 2.1, address: "Airline Compliant", phone: "+91 98765 12023" },
        { name: "Travel Light", price: 5999, distance: 2.5, address: "Cabin Size", phone: "+91 98765 12024" }
      ]
    },
    specifications: {
      "Size": "55cm Cabin Size",
      "Compliance": "IATA Cabin Size Compliant",
      "Material": "Polycarbonate",
      "Handle": "Multi-Stage Trolley Handle",
      "Capacity": "32 Liters"
    },
    tags: ["american-tourister", "cabin", "trolley", "iata", "polycarbonate"]
  },

  // ===== TREKKING BAGS =====
  {
    id: 12009,
    name: "Wildcraft Rucksack 65L Trekking Backpack",
    brand: "Wildcraft",
    category: "Bags",
    subcategory: "Trekking Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
        alt: "Wildcraft Trekking Rucksack",
        type: "main"
      },
      {
        url: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=400&fit=crop&crop=center",
        alt: "Wildcraft Rucksack - Side Profile",
        type: "side"
      },
      {
        url: "https://images.unsplash.com/photo-1564484485-aff2889134c4?w=400&h=400&fit=crop&crop=center",
        alt: "Wildcraft Rucksack - All Compartments",
        type: "detail"
      }
    ],
    rating: 4.7,
    reviews: 1234,
    originalPrice: 8999,
    year: 2024,
    model: "WILD-TREK-65L",
    prices: {
      amazon: { price: 6999, available: true, shipping: "Free", delivery: "3-5 days" },
      flipkart: { price: 7299, available: true, shipping: "Free", delivery: "4-6 days" },
      myntra: { price: 6799, available: true, shipping: "Free", delivery: "3-5 days" },
      ajio: { price: 6899, available: true, shipping: "Free", delivery: "3-5 days" },
      local: [
        { name: "Wildcraft Adventure", price: 8999, distance: 3.5, address: "Trekking Gear", phone: "+91 98765 12025" },
        { name: "Mountain Equipment", price: 6599, distance: 2.9, address: "Hiking Specialists", phone: "+91 98765 12026" },
        { name: "Trek Ready", price: 6999, distance: 3.2, address: "Adventure Gear", phone: "+91 98765 12027" }
      ]
    },
    specifications: {
      "Capacity": "65 Liters",
      "Type": "External Frame Rucksack",
      "Rain Cover": "Detachable Rain Cover",
      "Comfort": "Padded Hip Belt & Shoulder Straps",
      "Features": "Ice Axe Loop, Hydration Compatible"
    },
    tags: ["wildcraft", "trekking", "rucksack", "65l", "external-frame"]
  },
  {
    id: 12010,
    name: "Quechua Forclaz 50L Hiking Backpack",
    brand: "Quechua",
    category: "Bags",
    subcategory: "Trekking Bags",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 987,
    originalPrice: 6999,
    year: 2024,
    model: "QUECH-FORC-50L",
    prices: {
      amazon: { price: 5299, available: true, shipping: "Free", delivery: "2-4 days" },
      flipkart: { price: 5599, available: true, shipping: "Free", delivery: "3-5 days" },
      myntra: { price: 4999, available: true, shipping: "Free", delivery: "2-4 days" },
      ajio: { price: 5199, available: true, shipping: "Free", delivery: "2-4 days" },
      local: [
        { name: "Decathlon Store", price: 6999, distance: 4.1, address: "Sports & Outdoor", phone: "+91 98765 12028" },
        { name: "Hiking Backpacks", price: 4899, distance: 3.2, address: "Trail Equipment", phone: "+91 98765 12029" },
        { name: "Outdoor Adventures", price: 5299, distance: 3.7, address: "Nature Gear", phone: "+91 98765 12030" }
      ]
    },
    specifications: {
      "Capacity": "50 Liters",
      "Type": "Multi-Day Hiking Backpack",
      "Access": "Top & Front Panel Access",
      "Suspension": "Adjustable Torso Length",
      "Ventilation": "Back Panel Airflow"
    },
    tags: ["quechua", "hiking", "50l", "multi-day", "adjustable"]
  },

  // ===== LAPTOP BAGS =====
  {
    id: 12011,
    name: "Targus Business Laptop Bag 15.6 inch",
    brand: "Targus",
    category: "Bags",
    subcategory: "Laptop Bags",
    image: "https://images.unsplash.com/photo-1564484485-aff2889134c4?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 2345,
    originalPrice: 3999,
    year: 2024,
    model: "TARGUS-BUS-15.6",
    prices: {
      amazon: { price: 2999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 3199, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 2799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 2899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Targus Store", price: 3999, distance: 2.4, address: "Laptop Accessories", phone: "+91 98765 12031" },
        { name: "Business Bags", price: 2699, distance: 1.8, address: "Professional Gear", phone: "+91 98765 12032" },
        { name: "Office Solutions", price: 2999, distance: 2.1, address: "Work Essentials", phone: "+91 98765 12033" }
      ]
    },
    specifications: {
      "Laptop Size": "Up to 15.6 inches",
      "Style": "Professional Business",
      "Material": "Ballistic Nylon",
      "Organization": "File Compartments",
      "Comfort": "Padded Shoulder Strap"
    },
    tags: ["targus", "laptop-bag", "business", "15.6-inch", "professional"]
  },

  // ===== LADIES HANDBAGS =====
  {
    id: 12012,
    name: "Lavie Women's Handbag with Sling",
    brand: "Lavie",
    category: "Bags",
    subcategory: "Women's Handbags",
    image: "https://images.unsplash.com/photo-1564484485-aff2889134c4?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 1876,
    originalPrice: 2999,
    year: 2024,
    model: "LAVIE-HANDBAG-SLG",
    prices: {
      amazon: { price: 1999, available: true, shipping: "Free", delivery: "Tomorrow" },
      flipkart: { price: 2199, available: true, shipping: "Free", delivery: "2 days" },
      myntra: { price: 1799, available: true, shipping: "Free", delivery: "2-3 days" },
      ajio: { price: 1899, available: true, shipping: "Free", delivery: "2-3 days" },
      local: [
        { name: "Lavie Store", price: 2999, distance: 2.1, address: "Women's Fashion", phone: "+91 98765 12034" },
        { name: "Ladies Bags", price: 1699, distance: 1.7, address: "Fashion Accessories", phone: "+91 98765 12035" },
        { name: "Handbag World", price: 1999, distance: 2.3, address: "Women's Lifestyle", phone: "+91 98765 12036" }
      ]
    },
    specifications: {
      "Type": "Handbag with Detachable Sling",
      "Material": "PU Leather",
      "Compartments": "Main + Zip Pockets",
      "Colors": "Multiple Color Options",
      "Occasion": "Daily Use/Office"
    },
    tags: ["lavie", "handbag", "women", "sling", "pu-leather"]
  }
];
