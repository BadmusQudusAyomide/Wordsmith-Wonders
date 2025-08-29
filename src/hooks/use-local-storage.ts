'use client';

import { useState, useEffect } from 'react';

// Check if we're in the browser environment
const isBrowser = typeof window !== 'undefined';

function getValue<T>(key: string, initialValue: T | (() => T)): T {
  // Always return initial value if we're on the server
  if (!isBrowser) {
    return initialValue instanceof Function ? initialValue() : initialValue;
  }
  
  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : (initialValue instanceof Function ? initialValue() : initialValue);
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error);
    return initialValue instanceof Function ? initialValue() : initialValue;
  }
}

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(() => getValue(key, initialValue));
  
  // Only update localStorage if we're in the browser
  useEffect(() => {
    if (!isBrowser) return;
    
    try {
      const valueToStore = storedValue instanceof Function ? storedValue() : storedValue;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
