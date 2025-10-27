import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '@shared/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSource: 'amazon' | 'flipkart' | 'myntra' | 'ajio' | 'local';
  selectedPrice: number;
  selectedStore?: string; // For local stores
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; source: string; price: number; store?: string } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, source, price, store } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id && item.selectedSource === source
      );

      let newItems;
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newItem: CartItem = {
          product,
          quantity: 1,
          selectedSource: source as any,
          selectedPrice: price,
          selectedStore: store,
        };
        newItems = [...state.items, newItem];
      }

      const newTotal = newItems.reduce((sum, item) => sum + (item.selectedPrice * item.quantity), 0);
      const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.product.id !== action.payload.productId);
      const newTotal = newItems.reduce((sum, item) => sum + (item.selectedPrice * item.quantity), 0);
      const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: { productId } });
      }

      const newItems = state.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      );

      const newTotal = newItems.reduce((sum, item) => sum + (item.selectedPrice * item.quantity), 0);
      const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case 'CLEAR_CART':
      return initialState;

    case 'LOAD_CART':
      return action.payload;

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addToCart: (product: Product, source: string, price: number, store?: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: number) => boolean;
  getCartItemCount: (productId: number) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shopping-cart');
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: cartData });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product: Product, source: string, price: number, store?: string) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { product, source, price, store }
    });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const isInCart = (productId: number): boolean => {
    return state.items.some(item => item.product.id === productId);
  };

  const getCartItemCount = (productId: number): number => {
    const item = state.items.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  const value: CartContextType = {
    state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
    getCartItemCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
