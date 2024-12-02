import { StateCreator } from 'zustand';
import { FullDrink } from '../types/recipe-types';

export type FavoritesSliceType = {
	favorites: FullDrink[];
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = () => ({
	favorites: [],
});
