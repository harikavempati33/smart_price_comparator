import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Smartphone, Home, Shirt, ShoppingBag, Watch, Zap, TrendingUp, Star, MapPin, Laptop, Dumbbell, Package, Palette, Sofa, GraduationCap } from "lucide-react";
import { getLatestProducts, categories, type Product } from "@shared/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ShoppingAnimation from "@/components/ShoppingAnimation";

const categoryIcons: Record<string, any> = {
  "Electronics": Smartphone,
  "Smartphones": Smartphone,
  "Laptops": Laptop,
  "Home Appliances": Home,
  "Fashion": Shirt,
  "Shoes": ShoppingBag,
  "Smartwatches": Watch,
  "Traditional Watches": Watch,
  "Furniture": Sofa,
  "Bags": Package,
  "Cosmetics": Palette,
  "Gym Equipment": Dumbbell,
  "Travelling Bags": Package,
  "Dresses": Shirt,
  "Home Decor": Home,
  "Student Accessories": GraduationCap,
  "Desktops": Laptop
};

const categoryColors = [
  "bg-blue-500", "bg-green-500", "bg-pink-500", "bg-purple-500",
  "bg-orange-500", "bg-amber-500", "bg-red-500", "bg-indigo-500",
  "bg-teal-500", "bg-cyan-500", "bg-emerald-500", "bg-rose-500",
  "bg-violet-500", "bg-sky-500", "bg-lime-500", "bg-fuchsia-500", "bg-slate-500"
];

const categoryData = categories.slice(0, 12).map((category, index) => ({
  name: category,
  icon: categoryIcons[category] || Smartphone,
  href: `/category/${category.toLowerCase().replace(/\s+/g, '-')}`,
  color: categoryColors[index % categoryColors.length],
  items: `${Math.floor(Math.random() * 20000) + 1000} items`
}));

// Get latest hot deals from the product database
const getHotDeals = () => {
  const latestProducts = getLatestProducts().slice(0, 8);
  const badges = ["Best Deal", "Hot Deal", "Editor's Choice", "Limited Time", "New Arrival", "Trending", "Popular", "Featured"];

  return latestProducts.map((product, index) => {
    const amazonPrice = product.prices.amazon.price;
    const flipkartPrice = product.prices.flipkart.price;
    const localPrice = Math.min(...product.prices.local.map(store => store.price));

    return {
      id: product.id,
      name: product.name,
      image: product.image,
      originalPrice: product.originalPrice,
      amazonPrice,
      flipkartPrice,
      localPrice,
      discount: product.originalPrice - Math.min(amazonPrice, flipkartPrice, localPrice),
      rating: product.rating,
      reviews: product.reviews,
      badge: badges[index % badges.length],
      year: product.year
    };
  });
};

const trendingSearches = [
  "iPhone 15", "Samsung Galaxy S24", "MacBook Pro", "AirPods Pro",
  "iPad Air", "Sony PlayStation 5", "Nintendo Switch", "Apple Watch"
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hotDeals] = useState(getHotDeals());

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getBestPrice = (amazonPrice: number, flipkartPrice: number, localPrice: number) => {
    return Math.min(amazonPrice, flipkartPrice, localPrice);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Compare Prices,
                <span className="block text-brand-200">Save Money</span>
              </h1>
              <p className="text-xl text-brand-100 mb-8 leading-relaxed">
                Find the best deals across Amazon, Flipkart, and local stores. 
                Compare prices instantly and save on every purchase.
              </p>
              
              {/* Main Search Bar */}
              <form onSubmit={handleSearch} className="flex max-w-2xl mb-6">
                <Input
                  type="text"
                  placeholder="Search for products, brands, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-r-none border-r-0 h-14 text-lg text-gray-900 placeholder:text-gray-500"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-l-none h-14 px-8 bg-white text-brand-600 hover:bg-gray-100"
                >
                  <Search className="w-6 h-6 mr-2" />
                  Search
                </Button>
              </form>

              {/* Trending Searches */}
              <div className="flex flex-wrap gap-2">
                <span className="text-brand-200 text-sm">Trending:</span>
                {trendingSearches.slice(0, 4).map((term) => (
                  <Link
                    key={term}
                    to={`/search?q=${encodeURIComponent(term)}`}
                    className="text-sm bg-brand-500/20 px-3 py-1 rounded-full hover:bg-brand-500/30 transition-colors"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>

            {/* Shopping Animation */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-96 h-96 bg-brand-400/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <ShoppingAnimation className="w-80 h-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Discover the best deals across all categories</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categoryData.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.name}
                  to={category.href}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{category.name}</h3>
                  <p className="text-xs text-gray-500">{category.items}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hot Deals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <Zap className="w-8 h-8 text-orange-500" />
                Hot Deals
              </h2>
              <p className="text-gray-600">Limited time offers you can't miss</p>
            </div>
            <Link to="/deals">
              <Button variant="outline">View All Deals</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotDeals.map((deal) => {
              const bestPrice = getBestPrice(deal.amazonPrice, deal.flipkartPrice, deal.localPrice);
              const savingsPercent = Math.round(((deal.originalPrice - bestPrice) / deal.originalPrice) * 100);
              
              return (
                <Card key={deal.id} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={deal.image}
                        alt={deal.name}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600 shadow-lg">
                        {deal.badge}
                      </Badge>
                      <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600 shadow-lg">
                        {savingsPercent}% OFF
                      </Badge>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{deal.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{deal.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({deal.reviews})</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">
                          {formatPrice(bestPrice)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(deal.originalPrice)}
                        </span>
                      </div>
                      
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between items-center">
                          <span>Amazon:</span>
                          <span className={deal.amazonPrice === bestPrice ? "text-green-600 font-medium" : ""}>
                            {formatPrice(deal.amazonPrice)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Flipkart:</span>
                          <span className={deal.flipkartPrice === bestPrice ? "text-green-600 font-medium" : ""}>
                            {formatPrice(deal.flipkartPrice)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Local Stores:</span>
                          <span className={deal.localPrice === bestPrice ? "text-green-600 font-medium" : ""}>
                            {formatPrice(deal.localPrice)}
                          </span>
                        </div>
                        {deal.year && (
                          <div className="mt-2 pt-2 border-t">
                            <span className="text-blue-600 font-medium text-xs">{deal.year} Model</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-0">
                    <Link to={`/product/${deal.id}`} className="w-full">
                      <Button className="w-full bg-brand-500 hover:bg-brand-600">
                        Compare Prices
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Price Comparison</h3>
              <p className="text-gray-600">Get live prices from Amazon, Flipkart, and local stores instantly.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Store Finder</h3>
              <p className="text-gray-600">Find nearby stores with GPS location and real-time availability.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hot Deals Alerts</h3>
              <p className="text-gray-600">Never miss a deal with automatic price drop notifications.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
