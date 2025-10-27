import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Search, Menu, X, ShoppingCart, User, MapPin, Navigation as NavigationIcon, AlertCircle, HeadphonesIcon } from "lucide-react";
import useGeolocation from "@/hooks/useGeolocation";
import { reverseGeocode, formatLocationDisplay, type LocationInfo } from "@/lib/locationUtils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { name: "Electronics", href: "/category/electronics" },
  { name: "Home Appliances", href: "/category/home-appliances" },
  { name: "Fashion", href: "/category/fashion" },
  { name: "Shoes", href: "/category/shoes" },
  { name: "Smartwatches", href: "/category/smartwatches" },
  { name: "Traditional Watches", href: "/category/traditional-watches" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null);
  const [locationDisplay, setLocationDisplay] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const lastProcessedCoords = useRef<string | null>(null);
  const { state: cartState } = useCart();

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
    maximumAge: 300000 // Cache for 5 minutes
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  // Effect to handle location updates
  useEffect(() => {
    if (latitude && longitude) {
      // Avoid unnecessary updates if we already processed these coordinates
      const currentCoords = `${latitude.toFixed(4)},${longitude.toFixed(4)}`;

      if (lastProcessedCoords.current === currentCoords) {
        return; // Skip if we already processed these coordinates
      }

      // Check cached location first
      const storedLocation = localStorage.getItem('userLocation');
      if (storedLocation) {
        try {
          const parsed = JSON.parse(storedLocation);
          const storedCoords = `${parsed.latitude?.toFixed(4)},${parsed.longitude?.toFixed(4)}`;

          if (storedCoords === currentCoords && parsed.info) {
            setLocationInfo(parsed.info);
            setLocationDisplay(formatLocationDisplay(parsed.info));
            lastProcessedCoords.current = currentCoords;
            return;
          }
        } catch (error) {
          console.error('Failed to parse cached location:', error);
        }
      }

      // Only make API call if we haven't processed these coordinates
      reverseGeocode(latitude, longitude)
        .then((info) => {
          setLocationInfo(info);
          setLocationDisplay(formatLocationDisplay(info));
          lastProcessedCoords.current = currentCoords;

          // Store location in localStorage for other components
          localStorage.setItem('userLocation', JSON.stringify({
            latitude,
            longitude,
            accuracy,
            timestamp: Date.now(),
            info
          }));
        })
        .catch((error) => {
          console.error('Failed to get location info:', error);
          setLocationDisplay('Location detected');
          lastProcessedCoords.current = currentCoords;
        });
    }
  }, [latitude, longitude, accuracy]); // Added accuracy back but with proper tracking

  // Auto-request location and check auth on component mount
  useEffect(() => {
    // Check authentication state
    const authData = localStorage.getItem('userAuth');
    if (authData) {
      try {
        const parsed = JSON.parse(authData);
        if (parsed.signedIn && Date.now() - parsed.timestamp < 86400000) { // 24 hours
          setIsAuthenticated(true);
          setUserInfo(parsed);
        }
      } catch (error) {
        console.error('Failed to parse auth data:', error);
      }
    }

    // Check if we have cached location data first
    const cachedLocation = localStorage.getItem('userLocation');
    if (cachedLocation) {
      try {
        const parsed = JSON.parse(cachedLocation);
        const isRecent = Date.now() - parsed.timestamp < 300000; // 5 minutes

        if (isRecent && parsed.info) {
          setLocationInfo(parsed.info);
          setLocationDisplay(formatLocationDisplay(parsed.info));
          return;
        }
      } catch (error) {
        console.error('Failed to parse cached location:', error);
      }
    }

    // Request fresh location
    getCurrentPosition();
  }, []); // Empty dependency array - only run on mount

  const handleLocationClick = () => {
    getCurrentPosition();
  };

  const handleLogout = () => {
    localStorage.removeItem('userAuth');
    setIsAuthenticated(false);
    setUserInfo(null);
    window.location.href = '/';
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-brand-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>Free shipping on orders over ₹999</span>
          </div>
          <div className="flex items-center gap-6">
            {/* Location Display */}
            <div className="flex items-center gap-2">
              {gpsLoading ? (
                <div className="flex items-center gap-1 text-brand-200">
                  <NavigationIcon className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Detecting...</span>
                </div>
              ) : gpsError ? (
                <button
                  onClick={handleLocationClick}
                  className="flex items-center gap-1 hover:text-brand-200 text-sm transition-colors group"
                  title={gpsError}
                >
                  <AlertCircle className="w-4 h-4 text-red-400 group-hover:text-red-300" />
                  <span>Enable Location</span>
                </button>
              ) : locationDisplay ? (
                <button
                  onClick={handleLocationClick}
                  className="flex items-center gap-1 text-brand-200 hover:text-brand-100 text-sm transition-colors"
                  title={`Click to refresh location${accuracy ? ` (±${Math.round(accuracy)}m)` : ''}`}
                >
                  <MapPin className="w-4 h-4" />
                  <span>{locationDisplay}</span>
                  {accuracy && accuracy < 100 && (
                    <span className="w-2 h-2 bg-green-400 rounded-full" title="High accuracy" />
                  )}
                </button>
              ) : (
                <button
                  onClick={handleLocationClick}
                  className="flex items-center gap-1 hover:text-brand-200 text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Location</span>
                </button>
              )}
            </div>

            <Link to="/stores" className="hover:text-brand-200 flex items-center gap-1 bg-brand-500 px-3 py-1 rounded-full text-sm font-medium transition-colors hover:bg-brand-400">
              <MapPin className="w-4 h-4" />
              Local Stores
            </Link>
            <Link to="/support" className="hover:text-brand-200 flex items-center gap-1 text-sm">
              <HeadphonesIcon className="w-4 h-4" />
              Support
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <span className="text-brand-200 text-sm">Hi, {userInfo?.name?.split(' ')[0] || 'User'}!</span>
                <button onClick={handleLogout} className="hover:text-brand-200 text-sm">
                  Sign Out
                </button>
              </div>
            ) : (
              <Link to="/auth" className="hover:text-brand-200">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900">PriceCompare</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="flex w-full">
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-r-none border-r-0 focus:ring-brand-500 focus:border-brand-500"
              />
              <Button
                type="submit"
                className="rounded-l-none bg-brand-500 hover:bg-brand-600"
              >
                <Search className="w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-3">
            {/* Location Button - Desktop */}
            <Link to="/stores">
              <Button variant="ghost" size="sm" className="hidden lg:flex bg-green-50 hover:bg-green-100 text-green-700 border border-green-200">
                <MapPin className="w-4 h-4" />
                <span className="ml-2">Local Stores</span>
              </Button>
            </Link>

            <Button variant="ghost" size="sm" className="hidden md:flex">
              <ShoppingCart className="w-5 h-5" />
              <span className="ml-2">Cart</span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="w-5 h-5" />
                  <span className="ml-2 hidden sm:inline">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {isAuthenticated ? (
                  <>
                    <DropdownMenuItem disabled>
                      {userInfo?.name || userInfo?.email}
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/merchant">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/support">Support</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/auth">Sign In</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/auth">Sign Up</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/merchant">Merchant Dashboard</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Categories Bar - Desktop */}
        <div className="hidden md:flex border-t border-gray-200 py-3 space-x-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="text-gray-600 hover:text-brand-600 font-medium transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex mb-4">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-r-none border-r-0"
              />
              <Button type="submit" className="rounded-l-none bg-brand-500 hover:bg-brand-600">
                <Search className="w-5 h-5" />
              </Button>
            </form>

            {/* Mobile Local Stores Button */}
            <Link to="/stores" className="block mb-4">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => setIsMenuOpen(false)}>
                <MapPin className="w-4 h-4 mr-2" />
                Find Local Stores
              </Button>
            </Link>

            {/* Mobile Categories */}
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.href}
                  className="block py-2 text-gray-600 hover:text-brand-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
