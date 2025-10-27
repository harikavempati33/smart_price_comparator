import { useState, useEffect, useCallback, useMemo } from 'react';

export interface GeolocationState {
  loading: boolean;
  accuracy?: number;
  altitude?: number | null;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  latitude?: number;
  longitude?: number;
  speed?: number | null;
  timestamp?: number;
  error?: string;
}

export interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

export interface GeolocationHook extends GeolocationState {
  getCurrentPosition: () => void;
  watchPosition: () => void;
  clearWatch: () => void;
  isSupported: boolean;
}

const useGeolocation = (options: GeolocationOptions = {}): GeolocationHook => {
  const [state, setState] = useState<GeolocationState>({
    loading: false,
  });
  const [watchId, setWatchId] = useState<number | null>(null);

  // Memoize options to prevent infinite re-renders
  const defaultOptions: PositionOptions = useMemo(() => ({
    enableHighAccuracy: options.enableHighAccuracy ?? true,
    timeout: options.timeout ?? 15000,
    maximumAge: options.maximumAge ?? 300000, // 5 minutes
  }), [options.enableHighAccuracy, options.timeout, options.maximumAge]);

  const isSupported = 'geolocation' in navigator;

  const updateState = useCallback((position: GeolocationPosition) => {
    setState({
      loading: false,
      accuracy: position.coords.accuracy,
      altitude: position.coords.altitude,
      altitudeAccuracy: position.coords.altitudeAccuracy,
      heading: position.coords.heading,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      speed: position.coords.speed,
      timestamp: position.timestamp,
      error: undefined,
    });
  }, []);

  const onError = useCallback((error: GeolocationPositionError) => {
    let errorMessage = 'Unable to retrieve location';
    
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = 'Location access denied by user';
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = 'Location information unavailable';
        break;
      case error.TIMEOUT:
        errorMessage = 'Location request timed out';
        break;
    }

    setState(prev => ({
      ...prev,
      loading: false,
      error: errorMessage,
    }));
  }, []);

  const getCurrentPosition = useCallback(() => {
    if (!isSupported) {
      setState(prev => ({
        ...prev,
        error: 'Geolocation is not supported by this browser',
      }));
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: undefined }));

    navigator.geolocation.getCurrentPosition(
      updateState,
      onError,
      defaultOptions
    );
  }, [isSupported, updateState, onError, defaultOptions]);

  const watchPosition = useCallback(() => {
    if (!isSupported) {
      setState(prev => ({
        ...prev,
        error: 'Geolocation is not supported by this browser',
      }));
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: undefined }));

    const id = navigator.geolocation.watchPosition(
      updateState,
      onError,
      defaultOptions
    );

    setWatchId(id);
  }, [isSupported, updateState, onError, defaultOptions]);

  const clearWatch = useCallback(() => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
    }
  }, [watchId]);

  useEffect(() => {
    return () => {
      clearWatch();
    };
  }, [clearWatch]);

  return {
    ...state,
    getCurrentPosition,
    watchPosition,
    clearWatch,
    isSupported,
  };
};

export default useGeolocation;
