import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  ShoppingCart, 
  Minus, 
  Plus, 
  Trash2, 
  ArrowLeft, 
  CreditCard, 
  Truck,
  Shield,
  Star
} from 'lucide-react';

export default function CartPage() {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const applyPromoCode = () => {
    // Simple promo code logic
    const promoCodes: Record<string, number> = {
      'SAVE10': 0.1,
      'WELCOME15': 0.15,
      'STUDENT20': 0.2,
      'BULK25': 0.25
    };

    const discountRate = promoCodes[promoCode.toUpperCase()];
    if (discountRate) {
      setDiscount(state.total * discountRate);
    } else {
      setDiscount(0);
      alert('Invalid promo code');
    }
  };

  const finalTotal = state.total - discount;
  const savings = state.items.reduce((total, item) => {
    const originalPrice = item.product.originalPrice * item.quantity;
    const currentPrice = item.selectedPrice * item.quantity;
    return total + (originalPrice - currentPrice);
  }, 0) + discount;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-16">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/">
              <Button size="lg" className="px-8">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          </div>
          <Badge variant="secondary" className="text-base px-4 py-2">
            {state.itemCount} item{state.itemCount !== 1 ? 's' : ''}
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={`${item.product.id}-${item.selectedSource}`} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 mb-1">
                            {item.product.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{item.product.brand}</Badge>
                            <Badge variant="secondary" className="capitalize">
                              {item.selectedSource}
                              {item.selectedStore && ` - ${item.selectedStore}`}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600 ml-1">
                                {item.product.rating} ({item.product.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex justify-between items-end">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="h-10 w-10"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-12 text-center font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="h-10 w-10"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">
                            {formatPrice(item.selectedPrice * item.quantity)}
                          </div>
                          {item.product.originalPrice > item.selectedPrice && (
                            <div className="text-sm text-gray-500 line-through">
                              {formatPrice(item.product.originalPrice * item.quantity)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Clear Cart Button */}
            <div className="text-center pt-4">
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-red-600 border-red-200 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Promo Code */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={applyPromoCode} variant="outline">
                      Apply
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Try: SAVE10, WELCOME15, STUDENT20, BULK25
                  </div>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal ({state.itemCount} items)</span>
                    <span>{formatPrice(state.total)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({promoCode})</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-green-600">
                    <span>You're saving</span>
                    <span>{formatPrice(savings)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(finalTotal)}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-green-500" />
                    <span>Free delivery on orders above ₹500</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-purple-500" />
                    <span>Multiple payment options</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button size="lg" className="w-full">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Proceed to Checkout
                </Button>

                {/* Continue Shopping */}
                <Link to="/">
                  <Button variant="outline" size="lg" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
