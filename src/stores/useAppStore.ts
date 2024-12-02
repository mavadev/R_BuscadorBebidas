import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { RecipesSliceType, createRecipesSlice } from './recipesSlice';
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice';

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(
	devtools((...args) => ({
		...createRecipesSlice(...args),
		...createFavoritesSlice(...args),
	}))
);
