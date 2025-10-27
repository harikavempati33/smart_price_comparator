import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getAllProducts, type Product } from '@shared/products';
import { ArrowLeft, Star, ExternalLink, Plus, X, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function ComparePage() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const productIds = searchParams.get('products')?.split(',').map(id => parseInt(id)) || [];
    const allProducts = getAllProducts();
    const foundProducts = productIds
      .map(id => allProducts.find(p => p.id === id))
      .filter((p): p is Product => p !== undefined);
    
    setProducts(foundProducts);
  }, [searchParams]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const allProducts = getAllProducts();
      const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 10);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const addProduct = (product: Product) => {
    if (products.length < 4 && !products.find(p => p.id === product.id)) {
      const newProducts = [...products, product];
      setProducts(newProducts);
      updateURL(newProducts);
      setSearchQuery('');
      setSearchResults([]);
      setShowSearch(false);
    }
  };

  const removeProduct = (productId: number) => {
    const newProducts = products.filter(p => p.id !== productId);
    setProducts(newProducts);
    updateURL(newProducts);
  };

  const updateURL = (newProducts: Product[]) => {
    const ids = newProducts.map(p => p.id).join(',');
    window.history.pushState({}, '', `?products=${ids}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getBestPrice = (product: Product) => {
    const allPrices = [
      product.prices.amazon.price,
      product.prices.flipkart.price,
      ...(product.prices.myntra?.available ? [product.prices.myntra.price] : []),
      ...(product.prices.ajio?.available ? [product.prices.ajio.price] : []),
      ...product.prices.local.map(store => store.price)
    ];
    return Math.min(...allPrices);
  };

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Compare Products</h1>
          </div>
          
          <div className="text-center py-16">
            <TrendingUp className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Comparing Products</h2>
            <p className="text-gray-600 mb-8">
              Add products to compare their features, prices, and specifications side by side.
            </p>
            
            <div className="max-w-md mx-auto">
              <Input
                placeholder="Search for products to compare..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="mb-4"
              />
              
              {searchResults.length > 0 && (
                <div className="bg-white border rounded-lg shadow-sm max-h-60 overflow-y-auto">
                  {searchResults.map(product => (
                    <div
                      key={product.id}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                      onClick={() => addProduct(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-grow text-left">
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.brand} • {product.category}</p>
                      </div>
                      <Plus className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Compare Products</h1>
          </div>
          
          {products.length < 4 && (
            <Button
              onClick={() => setShowSearch(!showSearch)}
              className="bg-blue-500 hover:bg-blue-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          )}
        </div>

        {/* Add Product Search */}
        {showSearch && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Add Product to Compare</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="mb-4"
              />
              
              {searchResults.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-80 overflow-y-auto">
                  {searchResults.map(product => (
                    <div
                      key={product.id}
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => addProduct(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-grow">
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.brand}</p>
                        <p className="text-xs text-green-600">{formatPrice(getBestPrice(product))}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <Card key={product.id} className="relative">
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 z-10 text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={() => removeProduct(product.id)}
              >
                <X className="w-4 h-4" />
              </Button>
              
              <CardContent className="p-6">
                {/* Product Image */}
                <div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <div>
                    <Badge variant="outline" className="mb-2">{product.brand}</Badge>
                    <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  {/* Price Comparison */}
                  <div className="space-y-2">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600">Best Price</p>
                      <p className="text-2xl font-bold text-green-600">
                        {formatPrice(getBestPrice(product))}
                      </p>
                    </div>

                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Amazon:</span>
                        <span className={product.prices.amazon.price === getBestPrice(product) ? "text-green-600 font-medium" : ""}>
                          {formatPrice(product.prices.amazon.price)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Flipkart:</span>
                        <span className={product.prices.flipkart.price === getBestPrice(product) ? "text-green-600 font-medium" : ""}>
                          {formatPrice(product.prices.flipkart.price)}
                        </span>
                      </div>
                      {product.prices.myntra?.available && (
                        <div className="flex justify-between">
                          <span>Myntra:</span>
                          <span className={product.prices.myntra.price === getBestPrice(product) ? "text-green-600 font-medium" : ""}>
                            {formatPrice(product.prices.myntra.price)}
                          </span>
                        </div>
                      )}
                      {product.prices.ajio?.available && (
                        <div className="flex justify-between">
                          <span>Ajio:</span>
                          <span className={product.prices.ajio.price === getBestPrice(product) ? "text-green-600 font-medium" : ""}>
                            {formatPrice(product.prices.ajio.price)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Key Specifications */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Specs</h4>
                    <div className="space-y-1 text-sm">
                      {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-medium text-right flex-1 ml-2">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-4">
                    <Link to={`/product/${product.id}`}>
                      <Button size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          const searchQuery = encodeURIComponent(product.name);
                          window.open(`https://www.amazon.in/s?k=${searchQuery}`, '_blank');
                        }}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Amazon
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          const searchQuery = encodeURIComponent(product.name);
                          window.open(`https://www.flipkart.com/search?q=${searchQuery}`, '_blank');
                        }}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Flipkart
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        {products.length > 1 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Detailed Specifications Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">Specification</th>
                      {products.map(product => (
                        <th key={product.id} className="text-left p-3 font-medium min-w-[200px]">
                          {product.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Get all unique specification keys */}
                    {Array.from(new Set(products.flatMap(p => Object.keys(p.specifications)))).map(spec => (
                      <tr key={spec} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium text-gray-700">{spec}</td>
                        {products.map(product => (
                          <td key={product.id} className="p-3">
                            {product.specifications[spec] || '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                    
                    {/* Additional comparison rows */}
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-700">Rating</td>
                      {products.map(product => (
                        <td key={product.id} className="p-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            {product.rating} ({product.reviews} reviews)
                          </div>
                        </td>
                      ))}
                    </tr>
                    
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-700">Year</td>
                      {products.map(product => (
                        <td key={product.id} className="p-3">{product.year}</td>
                      ))}
                    </tr>
                    
                    <tr className="border-b hover:bg-gray-50 bg-green-50">
                      <td className="p-3 font-medium text-gray-700">Best Price</td>
                      {products.map(product => (
                        <td key={product.id} className="p-3">
                          <span className="text-2xl font-bold text-green-600">
                            {formatPrice(getBestPrice(product))}
                          </span>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
