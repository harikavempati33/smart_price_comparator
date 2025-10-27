export interface LocationInfo {
  city?: string;
  state?: string;
  country?: string;
  district?: string;
  area?: string;
  pincode?: string;
  formattedAddress?: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

// Calculate distance between two coordinates using Haversine formula
export const calculateDistance = (
  coord1: Coordinates,
  coord2: Coordinates
): number => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = ((coord2.latitude - coord1.latitude) * Math.PI) / 180;
  const dLon = ((coord2.longitude - coord1.longitude) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((coord1.latitude * Math.PI) / 180) *
      Math.cos((coord2.latitude * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return parseFloat(distance.toFixed(1));
};

// Reverse geocoding to get location information from coordinates
export const reverseGeocode = async (
  latitude: number,
  longitude: number
): Promise<LocationInfo> => {
  try {
    // Using a free geocoding service (OpenStreetMap Nominatim)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
    );
    
    if (!response.ok) {
      throw new Error('Geocoding request failed');
    }
    
    const data = await response.json();
    
    const address = data.address || {};
    
    return {
      city: address.city || address.town || address.village || address.suburb,
      state: address.state,
      country: address.country,
      district: address.state_district || address.county,
      area: address.neighbourhood || address.suburb,
      pincode: address.postcode,
      formattedAddress: data.display_name,
    };
  } catch (error) {
    console.error('Reverse geocoding failed:', error);
    
    // Fallback to a simple city detection based on coordinates
    // This is a very basic approximation for major Indian cities
    const indianCities = [
      { name: 'Bangalore', lat: 12.9716, lng: 77.5946, radius: 50 },
      { name: 'Mumbai', lat: 19.0760, lng: 72.8777, radius: 50 },
      { name: 'Delhi', lat: 28.7041, lng: 77.1025, radius: 50 },
      { name: 'Chennai', lat: 13.0827, lng: 80.2707, radius: 50 },
      { name: 'Kolkata', lat: 22.5726, lng: 88.3639, radius: 50 },
      { name: 'Hyderabad', lat: 17.3850, lng: 78.4867, radius: 50 },
      { name: 'Pune', lat: 18.5204, lng: 73.8567, radius: 40 },
      { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714, radius: 40 },
    ];
    
    for (const city of indianCities) {
      const distance = calculateDistance(
        { latitude, longitude },
        { latitude: city.lat, longitude: city.lng }
      );
      
      if (distance <= city.radius) {
        return {
          city: city.name,
          state: getStateFromCity(city.name),
          country: 'India',
          formattedAddress: `${city.name}, India`,
        };
      }
    }
    
    return {
      city: 'Unknown',
      country: 'India',
      formattedAddress: 'Location detected',
    };
  }
};

// Helper function to get state from city name
const getStateFromCity = (city: string): string => {
  const cityStateMap: Record<string, string> = {
    'Bangalore': 'Karnataka',
    'Mumbai': 'Maharashtra',
    'Delhi': 'Delhi',
    'Chennai': 'Tamil Nadu',
    'Kolkata': 'West Bengal',
    'Hyderabad': 'Telangana',
    'Pune': 'Maharashtra',
    'Ahmedabad': 'Gujarat',
  };
  
  return cityStateMap[city] || 'Unknown';
};

// Format location for display
export const formatLocationDisplay = (location: LocationInfo): string => {
  if (location.city && location.state) {
    return `${location.city}, ${location.state}`;
  } else if (location.city) {
    return location.city;
  } else if (location.area) {
    return location.area;
  } else if (location.formattedAddress) {
    // Extract city from formatted address
    const parts = location.formattedAddress.split(',');
    return parts[0] || 'Current Location';
  }
  
  return 'Current Location';
};

// Generate mock stores based on user location with configurable radius (1-50km)
export const generateNearbyStores = (
  userLat: number,
  userLng: number,
  radius: number = 25,
  storeType?: string
) => {
  const storeTemplates = [
    { name: 'Electronics World', type: 'Electronics', secondaryTypes: ['Appliances', 'Audio'] },
    { name: 'Mobile Hub', type: 'Smartphones', secondaryTypes: ['Accessories', 'Repairs'] },
    { name: 'Tech Zone', type: 'Laptops', secondaryTypes: ['Gaming', 'Software'] },
    { name: 'Gadget Store', type: 'Gadgets', secondaryTypes: ['Smart Home', 'Wearables'] },
    { name: 'Digital Point', type: 'Computers', secondaryTypes: ['Printers', 'Networking'] },
    { name: 'Smart Buy', type: 'Consumer Electronics', secondaryTypes: ['Cameras', 'TV'] },
    { name: 'Future Tech', type: 'Innovation', secondaryTypes: ['AI Gadgets', 'IoT'] },
    { name: 'Cyber Mall', type: 'Tech Retail', secondaryTypes: ['Gaming', 'VR'] },
    { name: 'Device Corner', type: 'Mobile Devices', secondaryTypes: ['Tablets', 'Watches'] },
    { name: 'Tech Plaza', type: 'Technology', secondaryTypes: ['Home Theater', 'Security'] },
  ];
  
  const addresses = [
    'Main Road', 'Commercial Street', 'Market Road', 'Gandhi Road',
    'Nehru Street', 'MG Road', 'Brigade Road', 'Church Street',
    'Residency Road', 'Infantry Road', 'Richmond Road', 'Lavelle Road'
  ];
  
  // Determine number of stores based on radius
  const storeCount = Math.min(Math.max(Math.ceil(radius / 3), 5), 20);

  // Filter store templates by type if specified
  const filteredTemplates = storeType
    ? storeTemplates.filter(template =>
        template.type.toLowerCase().includes(storeType.toLowerCase()) ||
        template.secondaryTypes.some(type => type.toLowerCase().includes(storeType.toLowerCase()))
      )
    : storeTemplates;

  const templates = filteredTemplates.length > 0 ? filteredTemplates : storeTemplates;

  return Array.from({ length: storeCount }, (_, index) => {
    // Generate random coordinates within radius
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * radius;
    const deltaLat = (distance / 111) * Math.cos(angle);
    const deltaLng = (distance / (111 * Math.cos(userLat * Math.PI / 180))) * Math.sin(angle);
    
    const storeLat = userLat + deltaLat;
    const storeLng = userLng + deltaLng;
    
    const actualDistance = calculateDistance(
      { latitude: userLat, longitude: userLng },
      { latitude: storeLat, longitude: storeLng }
    );
    
    const template = templates[index % templates.length];
    const address = addresses[index % addresses.length];
    
    return {
      id: 100 + index,
      name: template.name,
      address: `${address}, Near ${['Metro Station', 'Bus Stop', 'Mall', 'Park'][index % 4]}`,
      distance: actualDistance,
      phone: `+91 98765 ${43300 + index}`,
      rating: 4.0 + Math.random() * 1.0,
      reviews: Math.floor(Math.random() * 500) + 50,
      hours: ['9:00 AM - 9:00 PM', '10:00 AM - 10:00 PM', '9:30 AM - 9:30 PM'][index % 3],
      image: '/placeholder.svg',
      categories: [
        template.type,
        ...template.secondaryTypes,
        'Local Store'
      ].filter((cat, index, array) => array.indexOf(cat) === index), // Remove duplicates
      coordinates: { lat: storeLat, lng: storeLng },
      specialOffers: index % 3 === 0 ? [
        '10% off on electronics',
        'Free home delivery',
        'Exchange offer available',
        'Student discount available'
      ][index % 4] : undefined,
    };
  }).sort((a, b) => a.distance - b.distance);
};

// Filter stores by distance ranges
export const filterStoresByRadius = (stores: any[], minRadius: number = 0, maxRadius: number = 50) => {
  return stores.filter(store =>
    store.distance >= minRadius && store.distance <= maxRadius
  );
};

// Get stores in specific radius categories
export const getStoresByRadiusCategory = (userLat: number, userLng: number, category: string) => {
  const allStores = generateNearbyStores(userLat, userLng, 50);

  switch (category) {
    case 'within-1km':
      return filterStoresByRadius(allStores, 0, 1);
    case 'within-5km':
      return filterStoresByRadius(allStores, 0, 5);
    case 'within-10km':
      return filterStoresByRadius(allStores, 0, 10);
    case 'within-25km':
      return filterStoresByRadius(allStores, 0, 25);
    case 'within-50km':
      return filterStoresByRadius(allStores, 0, 50);
    case '1-5km':
      return filterStoresByRadius(allStores, 1, 5);
    case '5-10km':
      return filterStoresByRadius(allStores, 5, 10);
    case '10-25km':
      return filterStoresByRadius(allStores, 10, 25);
    case '25-50km':
      return filterStoresByRadius(allStores, 25, 50);
    default:
      return allStores;
  }
};

// Check if coordinates are within India (approximate bounds)
export const isInIndia = (latitude: number, longitude: number): boolean => {
  return (
    latitude >= 6.0 && latitude <= 37.6 &&
    longitude >= 68.7 && longitude <= 97.25
  );
};

// Enhanced location accuracy with multiple fallback methods
export const getHighAccuracyLocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'));
      return;
    }

    // First try with high accuracy
    navigator.geolocation.getCurrentPosition(
      resolve,
      (error) => {
        // If high accuracy fails, try with lower accuracy
        navigator.geolocation.getCurrentPosition(
          resolve,
          reject,
          {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 60000
          }
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 300000
      }
    );
  });
};
