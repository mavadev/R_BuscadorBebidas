import { StateCreator } from 'zustand';
import { FullDrink } from '../types/recipe-types';

export type FavoritesSliceType = {
	favorites: FullDrink[];
	setFavorite: (drink: FullDrink) => void;
};

const loadFromStorage = () => {
	const storedFavorites = localStorage.getItem('bebidas_buscador-favorites');
	if (storedFavorites) {
		return JSON.parse(storedFavorites);
	}
	return [];
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
	favorites: loadFromStorage(),
	setFavorite: newDrink => {
		let updatedFavorites;
		const drinkAdded = get().favorites.some(favorite => favorite.idDrink == newDrink.idDrink);

		if (drinkAdded) {
			updatedFavorites = get().favorites.filter(favorite => favorite.idDrink !== newDrink.idDrink);
		} else {
			updatedFavorites = [newDrink, ...get().favorites];
		}

		set({ favorites: updatedFavorites });
		localStorage.setItem('bebidas_buscador-favorites', JSON.stringify(get().favorites));
	},
});
