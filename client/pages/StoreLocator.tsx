import { useState, useEffect } from "react";
import { Search, MapPin, Navigation, Phone, Clock, Star, Filter, RefreshCw, AlertCircle } from "lucide-react";
import useGeolocation from "@/hooks/useGeolocation";
import { reverseGeocode, formatLocationDisplay, generateNearbyStores, calculateDistance, type LocationInfo } from "@/lib/locationUtils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Store {
  id: number;
  name: string;
  address: string;
  distance: number;
  phone: string;
  rating: number;
  reviews: number;
  hours: string;
  image: string;
  categories: string[];
  coordinates: { lat: number; lng: number };
  specialOffers?: string;
}

const mockStores: Store[] = [
  {
    id: 1,
    name: "TechWorld Electronics",
    address: "MG Road, Brigade Road Junction, Bangalore",
    distance: 1.2,
    phone: "+91 98765 43210",
    rating: 4.8,
    reviews: 234,
    hours: "10:00 AM - 9:00 PM",
    image: "/placeholder.svg",
    categories: ["Electronics", "Smartphones", "Laptops"],
    coordinates: { lat: 12.9716, lng: 77.5946 },
    specialOffers: "10% off on smartphones"
  },
  {
    id: 2,
    name: "Mobile Planet",
    address: "Commercial Street, Near Café Coffee Day",
    distance: 2.1,
    phone: "+91 98765 43211",
    rating: 4.6,
    reviews: 189,
    hours: "9:30 AM - 10:00 PM",
    image: "/placeholder.svg",
    categories: ["Smartphones", "Accessories", "Repairs"],
    coordinates: { lat: 12.9845, lng: 77.6108 },
    specialOffers: "Free screen guard with purchase"
  },
  {
    id: 3,
    name: "Samsung Experience Store",
    address: "Forum Mall, Koramangala 7th Block",
    distance: 0.8,
    phone: "+91 98765 43212",
    rating: 4.9,
    reviews: 421,
    hours: "10:00 AM - 10:00 PM",
    image: "/placeholder.svg",
    categories: ["Samsung", "Smartphones", "Tablets", "Appliances"],
    coordinates: { lat: 12.9352, lng: 77.6245 },
    specialOffers: "Extended warranty available"
  },
  {
    id: 4,
    name: "Electronics Hub",
    address: "Indiranagar 100 Feet Road, Near Metro Station",
    distance: 1.5,
    phone: "+91 98765 43213",
    rating: 4.5,
    reviews: 156,
    hours: "10:00 AM - 9:30 PM",
    image: "/placeholder.svg",
    categories: ["Electronics", "Home Appliances", "Gaming"],
    coordinates: { lat: 12.9784, lng: 77.6408 },
    specialOffers: "Buy 2 get 1 free on accessories"
  },
  {
    id: 5,
    name: "Apple Authorized Reseller",
    address: "UB City Mall, Vittal Mallya Road",
    distance: 3.2,
    phone: "+91 98765 43214",
    rating: 4.7,
    reviews: 312,
    hours: "10:00 AM - 9:00 PM",
    image: "/placeholder.svg",
    categories: ["Apple", "MacBooks", "iPhones", "Accessories"],
    coordinates: { lat: 12.9719, lng: 77.5937 },
    specialOffers: "Student discount available"
  }
];

export default function StoreLocator() {
  const [stores, setStores] = useState<Store[]>(mockStores);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("distance");
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null);
  const [locationDisplay, setLocationDisplay] = useState<string>("");
  const [isGeneratingStores, setIsGeneratingStores] = useState(false);

  const {
    loading: gpsLoading,
    latitude,
    longitude,
    error: gpsError,
    getCurrentPosition,
    accuracy
  } = useGeolocation({
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 600000 // Cache for 10 minutes for store locator
  });

  const categories = ["all", "Electronics", "Smartphones", "Laptops", "Appliances", "Gaming"];

  // Effect to handle location updates and generate nearby stores
  useEffect(() => {
    if (latitude && longitude) {
      setIsGeneratingStores(true);

      // Get location information
      reverseGeocode(latitude, longitude)
        .then((info) => {
          setLocationInfo(info);
          setLocationDisplay(formatLocationDisplay(info));
        })
        .catch((error) => {
          console.error('Failed to get location info:', error);
          setLocationDisplay('Current Location');
        });

      // Generate nearby stores based on actual location
      const nearbyStores = generateNearbyStores(latitude, longitude, 25);

      // Update distances for existing mock stores
      const updatedMockStores = mockStores.map(store => ({
        ...store,
        distance: calculateDistance(
          { latitude, longitude },
          { latitude: store.coordinates.lat, longitude: store.coordinates.lng }
        )
      }));

      // Ensure unique IDs and remove any potential duplicates
      const allStores = [...updatedMockStores, ...nearbyStores]
        .map((store, index) => ({
          ...store,
          id: store.id || (1000 + index) // Ensure unique numeric ID
        }))
        .filter((store, index, array) =>
          // Remove duplicates based on name and approximate location
          index === array.findIndex(s =>
            s.name === store.name &&
            Math.abs(s.coordinates.lat - store.coordinates.lat) < 0.001
          )
        )
        .sort((a, b) => a.distance - b.distance);

      setStores(allStores);
      setIsGeneratingStores(false);
    }
  }, [latitude, longitude]);

  // Auto-request location on component mount
  useEffect(() => {
    // Check if we have cached location data first
    const cachedLocation = localStorage.getItem('userLocation');
    if (cachedLocation) {
      try {
        const parsed = JSON.parse(cachedLocation);
        const isRecent = Date.now() - parsed.timestamp < 600000; // 10 minutes

        if (isRecent && parsed.latitude && parsed.longitude) {
          // Use cached location to avoid unnecessary API calls
          const nearbyStores = generateNearbyStores(parsed.latitude, parsed.longitude, 25);

          // Update distances for existing mock stores
          const updatedMockStores = mockStores.map(store => ({
            ...store,
            distance: calculateDistance(
              { latitude: parsed.latitude, longitude: parsed.longitude },
              { latitude: store.coordinates.lat, longitude: store.coordinates.lng }
            )
          }));

          // Combine and ensure unique stores
          const allStores = [...updatedMockStores, ...nearbyStores]
            .map((store, index) => ({
              ...store,
              id: store.id || (2000 + index) // Ensure unique numeric ID
            }))
            .filter((store, index, array) =>
              // Remove duplicates based on name and approximate location
              index === array.findIndex(s =>
                s.name === store.name &&
                Math.abs(s.coordinates.lat - store.coordinates.lat) < 0.001
              )
            )
            .sort((a, b) => a.distance - b.distance);

          setStores(allStores);

          if (parsed.info) {
            setLocationInfo(parsed.info);
            setLocationDisplay(formatLocationDisplay(parsed.info));
          }
          return;
        }
      } catch (error) {
        console.error('Failed to parse cached location:', error);
      }
    }

    // Request fresh location
    getCurrentPosition();
  }, []); // Empty dependency array - only run on mount

  const handleLocationRefresh = () => {
    getCurrentPosition();
  };

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || 
                           store.categories.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  const sortedStores = [...filteredStores].sort((a, b) => {
    switch (sortBy) {
      case "distance":
        return a.distance - b.distance;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const getDirections = (store: Store) => {
    if (latitude && longitude) {
      const url = `https://www.google.com/maps/dir/${latitude},${longitude}/${store.coordinates.lat},${store.coordinates.lng}`;
      window.open(url, '_blank');
    } else {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`;
      window.open(url, '_blank');
    }
  };

  const callStore = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Store Locator</h1>
              <p className="text-gray-600">Find nearby stores and get directions</p>
            </div>
            
            <div className="flex gap-2">
              <Button
                onClick={handleLocationRefresh}
                disabled={gpsLoading}
                className="bg-brand-500 hover:bg-brand-600 self-start lg:self-auto"
              >
                {gpsLoading ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <MapPin className="w-5 h-5 mr-2" />
                )}
                {gpsLoading ? "Detecting..." : latitude ? "Refresh Location" : "Get My Location"}
              </Button>

              {accuracy && (
                <div className="self-center text-sm text-gray-600">
                  Accuracy: ±{Math.round(accuracy)}m
                </div>
              )}
            </div>
          </div>

          {/* Location Status */}
          {gpsError ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                {gpsError}
              </p>
              <p className="text-sm text-red-600 mt-1">
                Please enable location access to find nearby stores.
              </p>
            </div>
          ) : latitude && longitude ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <p className="text-green-800 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Location: {locationDisplay || 'Detected'}
                  {accuracy && accuracy < 100 && (
                    <span className="w-2 h-2 bg-green-500 rounded-full" title="High accuracy" />
                  )}
                </p>
                {isGeneratingStores && (
                  <div className="flex items-center gap-2 text-green-600">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Finding nearby stores...</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-green-600 mt-1">
                Showing stores within 25km radius
              </p>
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Click "Get My Location" to find stores near you
              </p>
            </div>
          )}

          {/* Search and Filters */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Input
                type="text"
                placeholder="Search stores, products, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Distance</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
          <div className="h-64 bg-gray-100 flex items-center justify-center relative">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Interactive map will load here</p>
              <p className="text-sm text-gray-400">
                Showing {sortedStores.length} stores
                {latitude && longitude ? ' nearby' : ' (enable location for distance sorting)'}
              </p>
              {latitude && longitude && (
                <p className="text-xs text-gray-400 mt-1">
                  Current location: {latitude.toFixed(4)}, {longitude.toFixed(4)}
                </p>
              )}
            </div>
            
            {/* Map Controls */}
            <div className="absolute top-4 right-4 space-y-2">
              <Button size="sm" variant="outline" className="bg-white">
                <Navigation className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="bg-white">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stores List */}
        <div className="grid lg:grid-cols-2 gap-6">
          {sortedStores.map((store) => (
            <Card key={store.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{store.name}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{store.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({store.reviews} reviews)</span>
                      <Badge variant="secondary" className="ml-2">
                        {store.distance} km away
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {store.categories.slice(0, 3).map((category, index) => (
                        <Badge key={`${store.id}-${category}-${index}`} variant="outline" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <img 
                    src={store.image} 
                    alt={store.name}
                    className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{store.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{store.hours}</span>
                  </div>
                  
                  {store.specialOffers && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-800 font-medium">
                        🎉 {store.specialOffers}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-brand-500 hover:bg-brand-600"
                      onClick={() => getDirections(store)}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Directions
                    </Button>
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => callStore(store.phone)}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedStores.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No stores found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or category filter.</p>
          </div>
        )}

        {/* Load More */}
        {sortedStores.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Stores
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
