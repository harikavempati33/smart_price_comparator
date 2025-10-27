import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Heart, Share2, MapPin, ShoppingCart, ExternalLink, TrendingUp, ChevronDown, ChevronUp, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { getAllProducts, type Product } from "@shared/products";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllSpecs, setShowAllSpecs] = useState(false);
  const [priceHistory] = useState([
    { date: "Jan 2024", amazon: 149900, flipkart: 151900, local: 148900 },
    { date: "Feb 2024", amazon: 147900, flipkart: 149900, local: 146900 },
    { date: "Mar 2024", amazon: 144900, flipkart: 146900, local: 142900 },
  ]);

  useEffect(() => {
    const productId = parseInt(id || "1");
    const allProducts = getAllProducts();
    const foundProduct = allProducts.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getBestPrice = () => {
    const allPrices = [
      product.prices.amazon.price,
      product.prices.flipkart.price,
      ...product.prices.local.map(store => store.price)
    ];
    return Math.min(...allPrices);
  };

  const getBestDeal = () => {
    const bestPrice = getBestPrice();
    if (product.prices.amazon.price === bestPrice) return { type: 'amazon', ...product.prices.amazon };
    if (product.prices.flipkart.price === bestPrice) return { type: 'flipkart', ...product.prices.flipkart };
    const bestLocal = product.prices.local.find(store => store.price === bestPrice);
    return { type: 'local', ...bestLocal };
  };

  const savingsPercent = Math.round(((product.originalPrice - getBestPrice()) / product.originalPrice) * 100);
  const bestDeal = getBestDeal();

  const openAmazonSearch = () => {
    const searchQuery = encodeURIComponent(product.name);
    window.open(`https://www.amazon.in/s?k=${searchQuery}`, '_blank');
  };

  const openFlipkartSearch = () => {
    const searchQuery = encodeURIComponent(product.name);
    window.open(`https://www.flipkart.com/search?q=${searchQuery}`, '_blank');
  };

  const openLocalStoreMap = () => {
    const searchQuery = encodeURIComponent(`${product.name} store near me`);
    window.open(`https://www.google.com/maps/search/${searchQuery}`, '_blank');
  };

  const specEntries = Object.entries(product.specifications);
  const visibleSpecs = showAllSpecs ? specEntries : specEntries.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-brand-600">Home</Link>
            <span>/</span>
            <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-brand-600">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/search" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Search
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src={product.images && product.images.length > 0 ? product.images[selectedImage]?.url || product.image : product.image}
                alt={product.images && product.images.length > 0 ? product.images[selectedImage]?.alt || product.name : product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
            </div>

            {/* Image thumbnails */}
            {product.images && product.images.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {product.images.map((img, index) => (
                  <div key={index} className="relative">
                    <button
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all hover:border-brand-400 ${
                        selectedImage === index ? 'border-brand-500 ring-2 ring-brand-200' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                    </button>
                    {img.variant && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <span className="bg-black text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                          {img.variant}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Image type indicators */}
            {product.images && product.images.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(product.images.map(img => img.type))).map((type) => (
                  <Badge key={type} variant="outline" className="text-xs">
                    {type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{product.brand}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold ml-1">{product.rating}</span>
                  </div>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>
                
                {product.year && (
                  <Badge variant="outline" className="text-blue-600">
                    {product.year} Model
                  </Badge>
                )}
              </div>

              {product.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Price Comparison */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Price Comparison
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Best Deal Highlight */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge className="bg-green-500 hover:bg-green-600 mb-2">Best Deal</Badge>
                      <p className="font-bold text-2xl text-green-600">
                        {formatPrice(getBestPrice())}
                      </p>
                      <p className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </p>
                      <p className="text-sm text-green-600 font-medium">
                        Save {savingsPercent}% ({formatPrice(product.originalPrice - getBestPrice())})
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium capitalize text-gray-900">
                        {bestDeal.type === 'local' ? (bestDeal as any).name : bestDeal.type}
                      </p>
                      {bestDeal.type === 'local' && (
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {(bestDeal as any).distance}km away
                        </p>
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
                        onClick={openAmazonSearch}
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
                        onClick={openFlipkartSearch}
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
                          onClick={openLocalStoreMap}
                        >
                          <Navigation className="w-3 h-3 mr-1" />
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1 bg-brand-500 hover:bg-brand-600">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="price-history">Price History</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="stores">Nearby Stores</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {visibleSpecs.map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
                
                {specEntries.length > 4 && (
                  <Button
                    variant="ghost"
                    onClick={() => setShowAllSpecs(!showAllSpecs)}
                    className="mt-4 w-full"
                  >
                    {showAllSpecs ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        Show More Specifications
                      </>
                    )}
                  </Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="price-history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Price History (Last 3 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {priceHistory.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">{entry.date}</span>
                      <div className="flex gap-6 text-sm">
                        <span>Amazon: {formatPrice(entry.amazon)}</span>
                        <span>Flipkart: {formatPrice(entry.flipkart)}</span>
                        <span>Local: {formatPrice(entry.local)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    📈 <strong>Price Trend:</strong> Prices have decreased by ₹5,000 in the last 3 months. 
                    This is a good time to buy!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="font-medium">John Doe</span>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-gray-700">
                        Great product! Excellent build quality and performance. 
                        The price comparison feature helped me get the best deal.
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="stores" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Nearby Stores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.prices.local.map((store, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{store.name}</h3>
                          <p className="text-sm text-gray-600">{store.address}</p>
                          <p className="text-sm text-gray-500">{store.distance}km away</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{formatPrice(store.price)}</p>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline" onClick={() => window.location.href = `tel:${store.phone}`}>
                            Call
                          </Button>
                          <Button size="sm" onClick={openLocalStoreMap}>
                            Directions
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link to="/stores">
                    <Button className="w-full bg-green-500 hover:bg-green-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      View All Stores on Map
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
