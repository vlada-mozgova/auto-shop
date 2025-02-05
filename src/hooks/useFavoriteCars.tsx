import { useState, useEffect } from "react";

const FAVORITES_KEY = "favoriteCars";

const useFavoriteCars = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const saveToLocalStorage = (stockNumbers: number[]) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(stockNumbers));
  };

  const addFavorite = (stockNumber: number) => {
    if (!favorites.includes(stockNumber)) {
      const updatedFavorites = [...favorites, stockNumber];
      setFavorites(updatedFavorites);
      saveToLocalStorage(updatedFavorites);
    }
  };

  const removeFavorite = (stockNumber: number) => {
    const updatedFavorites = favorites.filter((num) => num !== stockNumber);
    setFavorites(updatedFavorites);
    saveToLocalStorage(updatedFavorites);
  };

  return { favorites, addFavorite, removeFavorite };
};

export default useFavoriteCars;
