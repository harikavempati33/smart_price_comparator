import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Search, Filter, Grid, List, Star, MapPin, ShoppingCart, ExternalLink, ChevronDown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LocalStoresModal from "@/components/LocalStoresModal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { productDatabase, getProductsByCategory, getAllProducts, type Product } from "@shared/products";

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState<{isOpen: boolean, product: Product | null}>({
    isOpen: false,
    product: null
  });
  const resultsPerPage = 12;

  const categoryName = category ? category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Products';

  useEffect(() => {
    if (category) {
      // Handle category name conversion more intelligently
      let categoryName = category.replace(/-/g, ' ');

      // Handle specific category mappings and broad category matching
      const categoryMappings: Record<string, string[]> = {
        'electronics': ['Electronics', 'Smartphones', 'Laptops', 'Desktops', 'Student Accessories'],
        'smartphones': ['Smartphones'],
        'laptops': ['Laptops'],
        'desktops': ['Desktops'],
        'home appliances': ['Home Appliances'],
        'fashion': ['Fashion', 'Dresses'],
        'shoes': ['Shoes'],
        'smartwatches': ['Smartwatches'],
        'traditional watches': ['Traditional Watches'],
        'furniture': ['Furniture'],
        'bags': ['Bags', 'Travelling Bags'],
        'cosmetics': ['Cosmetics'],
        'gym equipment': ['Gym Equipment'],
        'travelling bags': ['Travelling Bags'],
        'dresses': ['Dresses'],
        'home decor': ['Home Decor'],
        'student accessories': ['Student Accessories']
      };

      const searchCategories = categoryMappings[categoryName.toLowerCase()] || [categoryName];

      // Get products from all sources with enhanced filtering
      const categoryProducts = getAllProducts().filter(product => {
        // Direct category match
        if (searchCategories.some(cat => product.category.toLowerCase() === cat.toLowerCase())) {
          return true;
        }

        // Subcategory match
        if (product.subcategory && searchCategories.some(cat =>
          product.subcategory!.toLowerCase() === cat.toLowerCase() ||
          product.subcategory!.toLowerCase().includes(cat.toLowerCase())
        )) {
          return true;
        }

        // Tags match
        if (product.tags && searchCategories.some(cat =>
          product.tags!.some(tag => tag.toLowerCase().includes(cat.toLowerCase()))
        )) {
          return true;
        }

        // Special handling for electronics - include tech-related categories
        if (categoryName.toLowerCase() === 'electronics') {
          const techCategories = ['smartphone', 'laptop', 'desktop', 'tablet', 'computer', 'mobile', 'phone', 'watch'];
          return techCategories.some(tech =>
            product.category.toLowerCase().includes(tech) ||
            product.name.toLowerCase().includes(tech) ||
            product.tags?.some(tag => tag.toLowerCase().includes(tech))
          );
        }

        return false;
      });

      setProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
    } else {
      const allProducts = getAllProducts();
      setProducts(allProducts);
      setFilteredProducts(allProducts);
    }
  }, [category]);

  // Initialize displayed products when filtered products change
  useEffect(() => {
    const endIndex = currentPage * resultsPerPage;
    setDisplayedProducts(filteredProducts.slice(0, endIndex));
  }, [filteredProducts, currentPage]);

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    let filtered = products;

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.includes(product.brand)
      );
    }

    // Price range filter
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter(product => {
        const price = Math.min(
          product.prices.amazon.price,
          product.prices.flipkart.price,
          ...product.prices.local.map(store => store.price)
        );
        
        return selectedPriceRanges.some(range => {
          switch (range) {
            case 'under-10000': return price < 10000;
            case '10000-25000': return price >= 10000 && price < 25000;
            case '25000-50000': return price >= 25000 && price < 50000;
            case '50000-100000': return price >= 50000 && price < 100000;
            case 'above-100000': return price >= 100000;
            default: return true;
          }
        });
      });
    }

    // Rating filter
    if (selectedRatings.length > 0) {
      filtered = filtered.filter(product =>
        selectedRatings.some(rating => {
          const minRating = parseFloat(rating);
          return product.rating >= minRating;
        })
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => getBestPrice(a) - getBestPrice(b));
        break;
      case 'price-high':
        filtered.sort((a, b) => getBestPrice(b) - getBestPrice(a));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.year - a.year);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedBrands, selectedPriceRanges, selectedRatings, sortBy]);

  const loadMoreResults = async () => {
    setIsLoading(true);
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));
    setCurrentPage(prev => prev + 1);
    setIsLoading(false);
  };

  const hasMoreResults = displayedProducts.length < filteredProducts.length;
  const remainingResults = filteredProducts.length - displayedProducts.length;

  const getBestPrice = (product: Product) => {
    const allPrices = [
      product.prices.amazon.price,
      product.prices.flipkart.price,
      ...product.prices.local.map(store => store.price)
    ];

    if (product.prices.myntra?.available) {
      allPrices.push(product.prices.myntra.price);
    }

    if (product.prices.ajio?.available) {
      allPrices.push(product.prices.ajio.price);
    }

    return Math.min(...allPrices);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const openAmazonSearch = (productName: string) => {
    const searchQuery = encodeURIComponent(productName);
    window.open(`https://www.amazon.in/s?k=${searchQuery}`, '_blank');
  };

  const openFlipkartSearch = (productName: string) => {
    const searchQuery = encodeURIComponent(productName);
    window.open(`https://www.flipkart.com/search?q=${searchQuery}`, '_blank');
  };

  const openMyntraSearch = (productName: string) => {
    const searchQuery = encodeURIComponent(productName);
    window.open(`https://www.myntra.com/${searchQuery}`, '_blank');
  };

  const openAjioSearch = (productName: string) => {
    const searchQuery = encodeURIComponent(productName);
    window.open(`https://www.ajio.com/search/?text=${searchQuery}`, '_blank');
  };

  const openLocalStoreMap = (productName: string) => {
    const searchQuery = encodeURIComponent(`${productName} store near me`);
    window.open(`https://www.google.com/maps/search/${searchQuery}`, '_blank');
  };

  // Get unique brands from products
  const availableBrands = Array.from(new Set(products.map(p => p.brand))).sort();

  const priceRanges = [
    { value: 'under-10000', label: 'Under ₹10,000' },
    { value: '10000-25000', label: '₹10,000 - ₹25,000' },
    { value: '25000-50000', label: '₹25,000 - ₹50,000' },
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: 'above-100000', label: 'Above ₹1,00,000' },
  ];

  const ratingOptions = [
    { value: '4.5', label: '4.5★ & above' },
    { value: '4.0', label: '4.0�� & above' },
    { value: '3.5', label: '3.5★ & above' },
    { value: '3.0', label: '3.0★ & above' },
  ];

  const toggleBrandFilter = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const togglePriceRangeFilter = (range: string) => {
    setSelectedPriceRanges(prev =>
      prev.includes(range)
        ? prev.filter(r => r !== range)
        : [...prev, range]
    );
  };

  const toggleRatingFilter = (rating: string) => {
    setSelectedRatings(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedPriceRanges([]);
    setSelectedRatings([]);
    setSearchQuery("");
  };

  const openLocalStoresModal = (product: Product) => {
    setModalState({ isOpen: true, product });
  };

  const closeLocalStoresModal = () => {
    setModalState({ isOpen: false, product: null });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-brand-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">{categoryName}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{categoryName}</h1>
            <p className="text-gray-600">
              Showing {displayedProducts.length} of {filteredProducts.length} products
              {products.length > 0 && (
                <span className="text-gray-500"> (Total available: {products.length})</span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 ${showFilters || 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                  Clear All
                </Button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Search in {categoryName}
                </label>
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Brands</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {availableBrands.map(brand => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrandFilter(brand)}
                      />
                      <label
                        htmlFor={`brand-${brand}`}
                        className="text-sm text-gray-600 cursor-pointer"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <div key={range.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`price-${range.value}`}
                        checked={selectedPriceRanges.includes(range.value)}
                        onCheckedChange={() => togglePriceRangeFilter(range.value)}
                      />
                      <label
                        htmlFor={`price-${range.value}`}
                        className="text-sm text-gray-600 cursor-pointer"
                      >
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Customer Rating</h4>
                <div className="space-y-2">
                  {ratingOptions.map(rating => (
                    <div key={rating.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`rating-${rating.value}`}
                        checked={selectedRatings.includes(rating.value)}
                        onCheckedChange={() => toggleRatingFilter(rating.value)}
                      />
                      <label
                        htmlFor={`rating-${rating.value}`}
                        className="text-sm text-gray-600 cursor-pointer"
                      >
                        {rating.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Customer Rating</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {(selectedBrands.length > 0 || selectedPriceRanges.length > 0 || selectedRatings.length > 0) && (
                <div className="flex flex-wrap gap-2">
                  {selectedBrands.map(brand => (
                    <Badge key={brand} variant="secondary" className="cursor-pointer" onClick={() => toggleBrandFilter(brand)}>
                      {brand} ×
                    </Badge>
                  ))}
                  {selectedPriceRanges.map(range => (
                    <Badge key={range} variant="secondary" className="cursor-pointer" onClick={() => togglePriceRangeFilter(range)}>
                      {priceRanges.find(p => p.value === range)?.label} ×
                    </Badge>
                  ))}
                  {selectedRatings.map(rating => (
                    <Badge key={rating} variant="secondary" className="cursor-pointer" onClick={() => toggleRatingFilter(rating)}>
                      {ratingOptions.find(r => r.value === rating)?.label} ×
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Products */}
            {displayedProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  {searchQuery ? `No results found for "${searchQuery}" in ${categoryName}` : `No products found in ${categoryName}`}
                  <br />Try adjusting your filters or search terms
                </p>
                <Button onClick={clearAllFilters}>Clear All Filters</Button>
              </div>
            ) : (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {displayedProducts.map((product) => {
                  const bestPrice = getBestPrice(product);
                  const savingsPercent = Math.round(((product.originalPrice - bestPrice) / product.originalPrice) * 100);

                  return (
                    <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative group/images">
                          <img
                            src={product.image}
                            alt={product.name}
                            className={`w-full object-cover transition-transform group-hover:scale-105 ${
                              viewMode === 'grid' ? 'h-48' : 'h-32'
                            }`}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/placeholder.svg';
                            }}
                          />

                          {/* Multiple Images Indicator */}
                          {product.images && product.images.length > 1 && (
                            <div className="absolute bottom-2 right-2">
                              <div className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                <div className="grid grid-cols-2 gap-0.5">
                                  {[0,1,2,3].map(i => (
                                    <div key={i} className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                                  ))}
                                </div>
                                <span>+{product.images.length - 1}</span>
                              </div>
                            </div>
                          )}

                          {/* Color/Style Variants Indicator */}
                          {product.images && product.images.some(img => img.type === 'color_variant' || img.type === 'style_variant') && (
                            <div className="absolute bottom-2 left-2">
                              <div className="flex gap-1">
                                {product.images.filter(img => img.type === 'color_variant' || img.type === 'style_variant').slice(0, 3).map((img, index) => (
                                  <div key={index} className="w-4 h-4 rounded-full border-2 border-white shadow-sm overflow-hidden bg-gray-200">
                                    <img src={img.url} alt={img.variant} className="w-full h-full object-cover" />
                                  </div>
                                ))}
                                {product.images.filter(img => img.type === 'color_variant' || img.type === 'style_variant').length > 3 && (
                                  <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm bg-gray-800 flex items-center justify-center">
                                    <span className="text-white text-xs">+</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          <div className="absolute top-2 left-2 right-2 flex justify-between">
                            <Badge className="bg-red-500 hover:bg-red-600">
                              {savingsPercent}% OFF
                            </Badge>
                            {product.year >= 2024 && (
                              <Badge className="bg-blue-500 hover:bg-blue-600">
                                {product.year} Model
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <Badge variant="outline">{product.brand}</Badge>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium ml-1">{product.rating}</span>
                              <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                            </div>
                          </div>

                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                          {product.tags && (
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.tags.slice(0, 3).map((tag, index) => (
                                <Badge key={`${product.id}-${tag}-${index}`} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-green-600">
                                {formatPrice(bestPrice)}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                {formatPrice(product.originalPrice)}
                              </span>
                            </div>

                            {/* Best Local Store Highlight */}
                            {product.prices.local && product.prices.local.length > 0 && (() => {
                              const bestLocalStore = product.prices.local.reduce((min, store) =>
                                store.price < min.price ? store : min, product.prices.local[0]);
                              const isLocalBest = bestLocalStore.price === bestPrice;

                              return (
                                <div className={`p-2 rounded-lg border ${isLocalBest ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                      <MapPin className="w-3 h-3 text-gray-600" />
                                      <span className="text-xs font-medium text-gray-700">
                                        {isLocalBest ? 'Best Local Deal' : 'Local Store'}
                                      </span>
                                    </div>
                                    <span className={`text-sm font-bold ${isLocalBest ? 'text-green-600' : 'text-blue-600'}`}>
                                      {formatPrice(bestLocalStore.price)}
                                    </span>
                                  </div>
                                  <div className="text-xs text-gray-600 mt-1">
                                    {bestLocalStore.name} • {bestLocalStore.distance}km away
                                  </div>
                                </div>
                              );
                            })()}

                            <div className="text-xs space-y-1">
                              <div className="flex justify-between">
                                <span>Amazon:</span>
                                <span className={product.prices.amazon.price === bestPrice ? "text-green-600 font-medium" : ""}>
                                  {formatPrice(product.prices.amazon.price)}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span>Flipkart:</span>
                                <span className={product.prices.flipkart.price === bestPrice ? "text-green-600 font-medium" : ""}>
                                  {formatPrice(product.prices.flipkart.price)}
                                </span>
                              </div>
                              {product.prices.myntra?.available && (
                                <div className="flex justify-between">
                                  <span>Myntra:</span>
                                  <span className={product.prices.myntra.price === bestPrice ? "text-green-600 font-medium" : ""}>
                                    {formatPrice(product.prices.myntra.price)}
                                  </span>
                                </div>
                              )}
                              {product.prices.ajio?.available && (
                                <div className="flex justify-between">
                                  <span>Ajio:</span>
                                  <span className={product.prices.ajio.price === bestPrice ? "text-green-600 font-medium" : ""}>
                                    {formatPrice(product.prices.ajio.price)}
                                  </span>
                                </div>
                              )}

                              {/* Local Store Prices */}
                              {product.prices.local && product.prices.local.length > 0 && (
                                <div className="mt-2 pt-2 border-t border-gray-100">
                                  <div className="text-xs font-medium text-gray-700 mb-1 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    Local Stores:
                                  </div>
                                  {product.prices.local.slice(0, 2).map((store, storeIndex) => (
                                    <div key={storeIndex} className="flex justify-between items-center py-0.5">
                                      <span className="text-xs text-gray-600 truncate max-w-[100px]" title={store.name}>
                                        {store.name}
                                      </span>
                                      <div className="text-right">
                                        <span className={`text-xs ${store.price === bestPrice ? "text-green-600 font-medium" : "text-gray-900"}`}>
                                          {formatPrice(store.price)}
                                        </span>
                                        <div className="text-xs text-gray-500">
                                          {store.distance}km
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                  {product.prices.local.length > 2 && (
                                    <button
                                      className="text-xs text-blue-600 hover:text-blue-800 mt-1 underline"
                                      onClick={() => openLocalStoresModal(product)}
                                    >
                                      +{product.prices.local.length - 2} more stores
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="p-4 pt-0 space-y-2">
                        <div className="grid grid-cols-2 gap-2 w-full">
                          <Button
                            size="sm"
                            className="bg-orange-500 hover:bg-orange-600 text-white"
                            onClick={() => openAmazonSearch(product.name)}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Amazon
                          </Button>
                          <Button
                            size="sm"
                            className="bg-blue-500 hover:bg-blue-600 text-white"
                            onClick={() => openFlipkartSearch(product.name)}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Flipkart
                          </Button>
                        </div>
                        {product.category.toLowerCase().includes('fashion') ||
                         product.category.toLowerCase().includes('dress') ||
                         product.subcategory?.toLowerCase().includes('men') ||
                         product.subcategory?.toLowerCase().includes('women') ? (
                          <div className="space-y-2 w-full">
                            <div className="grid grid-cols-2 gap-2">
                              <Button
                                size="sm"
                                className="bg-pink-500 hover:bg-pink-600 text-white"
                                onClick={() => openMyntraSearch(product.name)}
                              >
                                Myntra
                              </Button>
                              <Button
                                size="sm"
                                className="bg-purple-500 hover:bg-purple-600 text-white"
                                onClick={() => openAjioSearch(product.name)}
                              >
                                Ajio
                              </Button>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => openLocalStoresModal(product)}
                                className="flex flex-col items-center p-2 h-auto"
                              >
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>Local</span>
                                </div>
                                {product.prices.local && product.prices.local.length > 0 && (() => {
                                  const bestLocalPrice = Math.min(...product.prices.local.map(store => store.price));
                                  return (
                                    <span className="text-xs text-green-600 font-medium mt-0.5">
                                      {formatPrice(bestLocalPrice)}
                                    </span>
                                  );
                                })()}
                              </Button>
                              <Link to={`/compare?products=${product.id}`}>
                                <Button size="sm" variant="outline" className="w-full">
                                  Compare
                                </Button>
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-2 w-full">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => openLocalStoresModal(product)}
                              className="flex flex-col items-center p-2 h-auto"
                            >
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>Local</span>
                              </div>
                              {product.prices.local && product.prices.local.length > 0 && (() => {
                                const bestLocalPrice = Math.min(...product.prices.local.map(store => store.price));
                                return (
                                  <span className="text-xs text-green-600 font-medium mt-0.5">
                                    {formatPrice(bestLocalPrice)}
                                  </span>
                                );
                              })()}
                            </Button>
                            <Link to={`/compare?products=${product.id}`}>
                              <Button size="sm" variant="outline" className="w-full">
                                Compare
                              </Button>
                            </Link>
                          </div>
                        )}
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* Load More Results */}
            {displayedProducts.length > 0 && hasMoreResults && (
              <div className="text-center mt-12">
                <Button
                  onClick={loadMoreResults}
                  disabled={isLoading}
                  size="lg"
                  className="px-8"
                >
                  {isLoading ? 'Loading...' : `Load More Results (${remainingResults} remaining)`}
                </Button>
              </div>
            )}

            {/* No More Results */}
            {displayedProducts.length > 0 && !hasMoreResults && filteredProducts.length > resultsPerPage && (
              <div className="text-center mt-12">
                <div className="text-gray-600 mb-4">
                  You've seen all {filteredProducts.length} products in {categoryName}
                </div>
                <Button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  variant="outline"
                  size="lg"
                >
                  Back to Top
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Local Stores Modal */}
      {modalState.product && (
        <LocalStoresModal
          isOpen={modalState.isOpen}
          onClose={closeLocalStoresModal}
          productName={modalState.product.name}
          stores={modalState.product.prices.local}
          bestPrice={getBestPrice(modalState.product)}
        />
      )}
    </div>
  );
}
