import { useState } from 'react';
import { MapPin, Phone, Navigation, Clock, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface LocalStore {
  name: string;
  price: number;
  distance: number;
  address: string;
  phone: string;
}

interface LocalStoresModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  stores: LocalStore[];
  bestPrice: number;
}

export default function LocalStoresModal({ 
  isOpen, 
  onClose, 
  productName, 
  stores, 
  bestPrice 
}: LocalStoresModalProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const openDirections = (storeName: string, address: string) => {
    const searchQuery = encodeURIComponent(`${storeName} ${address}`);
    window.open(`https://www.google.com/maps/search/${searchQuery}`, '_blank');
  };

  const callStore = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  // Sort stores by price (best deals first)
  const sortedStores = [...stores].sort((a, b) => a.price - b.price);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            Local Stores for {productName}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Summary */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-blue-900">
                  {stores.length} stores found nearby
                </h3>
                <p className="text-sm text-blue-700">
                  Prices range from {formatPrice(Math.min(...stores.map(s => s.price)))} to {formatPrice(Math.max(...stores.map(s => s.price)))}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-blue-700">Best Local Deal</div>
                <div className="text-lg font-bold text-green-600">
                  {formatPrice(Math.min(...stores.map(s => s.price)))}
                </div>
              </div>
            </div>
          </div>

          {/* Store List */}
          <div className="space-y-3">
            {sortedStores.map((store, index) => {
              const isLowestPrice = store.price === Math.min(...stores.map(s => s.price));
              const isBestOverall = store.price === bestPrice;
              
              return (
                <Card key={index} className={`${isLowestPrice ? 'ring-2 ring-green-200 bg-green-50' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{store.name}</h4>
                          {isLowestPrice && (
                            <Badge className="bg-green-500 hover:bg-green-600 text-xs">
                              Best Local Price
                            </Badge>
                          )}
                          {isBestOverall && (
                            <Badge className="bg-blue-500 hover:bg-blue-600 text-xs">
                              Best Overall
                            </Badge>
                          )}
                        </div>
                        
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{store.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Navigation className="w-4 h-4" />
                            <span>{store.distance} km away</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>{store.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>Open: 9:00 AM - 9:00 PM</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>4.{Math.floor(Math.random() * 5) + 1} ({Math.floor(Math.random() * 200) + 50} reviews)</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right ml-4">
                        <div className={`text-2xl font-bold ${isLowestPrice ? 'text-green-600' : 'text-gray-900'}`}>
                          {formatPrice(store.price)}
                        </div>
                        <div className="text-sm text-gray-500 mb-3">
                          {store.price > Math.min(...stores.map(s => s.price)) && (
                            <span>
                              +{formatPrice(store.price - Math.min(...stores.map(s => s.price)))} more
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Button
                            size="sm"
                            onClick={() => openDirections(store.name, store.address)}
                            className="w-full"
                          >
                            <Navigation className="w-3 h-3 mr-1" />
                            Directions
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => callStore(store.phone)}
                            className="w-full"
                          >
                            <Phone className="w-3 h-3 mr-1" />
                            Call Store
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Footer Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <Button
              onClick={() => {
                const searchQuery = encodeURIComponent(`${productName} stores near me`);
                window.open(`https://www.google.com/maps/search/${searchQuery}`, '_blank');
              }}
              className="flex-1"
            >
              <MapPin className="w-4 h-4 mr-2" />
              View All on Map
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
