import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, Filter, SortAsc, Star, MapPin, ShoppingCart, ExternalLink } from "lucide-react";
import { searchProducts, categories, type Product } from "@shared/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [sortBy, setSortBy] = useState('relevance');
  const [allResults, setAllResults] = useState<Product[]>(searchProducts(query));
  const [displayedResults, setDisplayedResults] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const resultsPerPage = 12;

  useEffect(() => {
    // Update results when query changes
    const newResults = searchProducts(query);
    setAllResults(newResults);
    setCurrentPage(1);
    setDisplayedResults(newResults.slice(0, resultsPerPage));
  }, [query]);

  useEffect(() => {
    // Sort results when sortBy changes
    let sortedResults = [...allResults];

    switch (sortBy) {
      case 'price-low':
        sortedResults.sort((a, b) => getBestPrice(a.prices) - getBestPrice(b.prices));
        break;
      case 'price-high':
        sortedResults.sort((a, b) => getBestPrice(b.prices) - getBestPrice(a.prices));
        break;
      case 'rating':
        sortedResults.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        sortedResults.sort((a, b) => b.year - a.year);
        break;
      case 'relevance':
      default:
        // Keep original order for relevance
        break;
    }

    setAllResults(sortedResults);
    setDisplayedResults(sortedResults.slice(0, currentPage * resultsPerPage));
  }, [sortBy, allResults.length]);

  const loadMoreResults = async () => {
    setIsLoading(true);

    // Simulate loading time for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * resultsPerPage;

    setDisplayedResults(allResults.slice(startIndex, endIndex));
    setCurrentPage(nextPage);
    setIsLoading(false);
  };

  const hasMoreResults = displayedResults.length < allResults.length;

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

  const getBestPrice = (prices: any) => {
    const allPrices = [
      prices.amazon.price,
      prices.flipkart.price,
      ...prices.local.map((store: any) => store.price)
    ];
    return Math.min(...allPrices);
  };

  const getBestDeal = (prices: any) => {
    const bestPrice = getBestPrice(prices);
    if (prices.amazon.price === bestPrice) return { type: 'amazon', ...prices.amazon };
    if (prices.flipkart.price === bestPrice) return { type: 'flipkart', ...prices.flipkart };
    const bestLocal = prices.local.find((store: any) => store.price === bestPrice);
    return { type: 'local', ...bestLocal };
  };

  const openAmazonSearch = (productName: string) => {
    const searchQuery = encodeURIComponent(productName);
    window.open(`https://www.amazon.in/s?k=${searchQuery}`, '_blank');
  };

  const openFlipkartSearch = (productName: string) => {
    const searchQuery = encodeURIComponent(productName);
    window.open(`https://www.flipkart.com/search?q=${searchQuery}`, '_blank');
  };

  const openLocalStoreMap = (productName: string) => {
    const searchQuery = encodeURIComponent(`${productName} store near me`);
    window.open(`https://www.google.com/maps/search/${searchQuery}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <form onSubmit={handleSearch} className="flex gap-4 mb-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 text-lg"
              />
            </div>
            <Button type="submit" size="lg" className="bg-brand-500 hover:bg-brand-600">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </form>
          
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
            Showing {displayedResults.length} of {allResults.length} results for "<strong>{query}</strong>"
          </p>
            
            <div className="flex items-center gap-4">
              <Link to="/stores">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Local Stores
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Customer Rating</DropdownMenuItem>
                  <DropdownMenuItem>Newest First</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Customer Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="space-y-6">
          {displayedResults.map((product) => {
            const bestPrice = getBestPrice(product.prices);
            const bestDeal = getBestDeal(product.prices);
            const savingsPercent = Math.round(((product.originalPrice - bestPrice) / product.originalPrice) * 100);
            
            return (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Product Info */}
                    <div className="lg:col-span-1">
                      <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover transition-transform hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="space-y-2">
                        <Badge variant="secondary">{product.brand}</Badge>
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium ml-1">{product.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>

                    {/* Price Comparison */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-lg mb-4">Price Comparison</h4>
                      
                      {/* Best Deal Highlight */}
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Badge className="bg-green-500 hover:bg-green-600 mb-2">Best Deal</Badge>
                            <p className="font-semibold text-2xl text-green-600">
                              {formatPrice(bestPrice)}
                            </p>
                            <p className="text-sm text-gray-500 line-through">
                              {formatPrice(product.originalPrice)}
                            </p>
                            <p className="text-sm text-green-600 font-medium">
                              Save {savingsPercent}% ({formatPrice(product.originalPrice - bestPrice)})
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium capitalize">{bestDeal.type}</p>
                            {bestDeal.type === 'local' && (
                              <div className="text-sm text-gray-600">
                                <p>{bestDeal.name}</p>
                                <p className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {bestDeal.distance}km away
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* All Prices */}
                      <div className="space-y-3">
                        {/* Amazon */}
                        <div className="flex items-center justify-between p-4 border rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm">
                              <span className="text-white text-sm font-bold">A</span>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">Amazon</p>
                              <p className="text-sm text-gray-500 flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                {product.prices.amazon.delivery}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">{formatPrice(product.prices.amazon.price)}</p>
                            <Button
                              size="sm"
                              className="mt-2 bg-orange-500 hover:bg-orange-600 text-white"
                              onClick={() => openAmazonSearch(product.name)}
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Buy on Amazon
                            </Button>
                          </div>
                        </div>

                        {/* Flipkart */}
                        <div className="flex items-center justify-between p-4 border rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                              <span className="text-white text-sm font-bold">F</span>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">Flipkart</p>
                              <p className="text-sm text-gray-500 flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                {product.prices.flipkart.delivery}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">{formatPrice(product.prices.flipkart.price)}</p>
                            <Button
                              size="sm"
                              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white"
                              onClick={() => openFlipkartSearch(product.name)}
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Buy on Flipkart
                            </Button>
                          </div>
                        </div>

                        {/* Local Stores */}
                        {product.prices.local.map((store, index) => (
                          <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm">
                                <MapPin className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{store.name}</p>
                                <p className="text-sm text-gray-500 flex items-center gap-1">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                  {store.distance}km • {store.address}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-lg">{formatPrice(store.price)}</p>
                              <Button
                                size="sm"
                                className="mt-2 bg-green-500 hover:bg-green-600 text-white"
                                onClick={() => openLocalStoreMap(product.name)}
                              >
                                <MapPin className="w-3 h-3 mr-1" />
                                Find Nearby
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-lg mb-4">Key Specifications</h4>
                      <div className="space-y-3">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key}>
                            <p className="text-sm text-gray-600">{key}</p>
                            <p className="font-medium">{value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 space-y-2">
                        <Link to={`/product/${product.id}`}>
                          <Button className="w-full bg-brand-500 hover:bg-brand-600">
                            View Details
                          </Button>
                        </Link>
                        <Button variant="outline" className="w-full">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Compare
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Load More */}
        {displayedResults.length > 0 && hasMoreResults && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={loadMoreResults}
              disabled={isLoading}
              className="min-w-48"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-brand-500 rounded-full animate-spin mr-2"></div>
                  Loading...
                </>
              ) : (
                `Load More Results (${allResults.length - displayedResults.length} remaining)`
              )}
            </Button>
          </div>
        )}

        {/* No More Results Message */}
        {displayedResults.length > 0 && !hasMoreResults && allResults.length > resultsPerPage && (
          <div className="text-center mt-12">
            <p className="text-gray-600">You've seen all {allResults.length} results</p>
            <Button variant="outline" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              Back to Top
            </Button>
          </div>
        )}

        {/* No Results */}
        {displayedResults.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We couldn't find any products matching "<strong>{query}</strong>".
              Try adjusting your search terms or browse our categories.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Button variant="outline" onClick={() => setSearchQuery('iphone16')}>
                iPhone 16
              </Button>
              <Button variant="outline" onClick={() => setSearchQuery('samsung galaxy s25')}>
                Galaxy S25
              </Button>
              <Button variant="outline" onClick={() => setSearchQuery('macbook 2025')}>
                MacBook 2025
              </Button>
              <Button variant="outline" onClick={() => setSearchQuery('laptop')}>
                Laptops
              </Button>
              <Button variant="outline" onClick={() => setSearchQuery('smartwatch')}>
                Smartwatches
              </Button>
            </div>
            <Link to="/">
              <Button className="bg-brand-500 hover:bg-brand-600">
                Browse All Categories
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
