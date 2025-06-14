import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartItem, Artwork } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

interface CartContextType extends CartState {
  addToCart: (artwork: Artwork) => void;
  removeFromCart: (artworkId: string) => void;
  updateQuantity: (artworkId: string, quantity: number) => void;
  clearCart: () => void;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Artwork }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { artworkId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.artwork.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.artwork.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return calculateTotals(updatedItems);
      } else {
        const newItems = [...state.items, { artwork: action.payload, quantity: 1 }];
        return calculateTotals(newItems);
      }
    }
    
    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.artwork.id !== action.payload);
      return calculateTotals(newItems);
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.artwork.id === action.payload.artworkId
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);
      return calculateTotals(newItems);
    }
    
    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 };
    
    case 'LOAD_CART':
      return calculateTotals(action.payload);
    
    default:
      return state;
  }
};

const calculateTotals = (items: CartItem[]): CartState => {
  const total = items.reduce((sum, item) => sum + (item.artwork.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { items, total, itemCount };
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0, itemCount: 0 });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('artGalleryCart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('artGalleryCart', JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (artwork: Artwork) => {
    dispatch({ type: 'ADD_TO_CART', payload: artwork });
  };

  const removeFromCart = (artworkId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: artworkId });
  };

  const updateQuantity = (artworkId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { artworkId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{
      ...state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};