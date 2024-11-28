import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { RecipeSliceType, createRecipeSlice } from './createRecipeSlice';

export const useAppStore = create<RecipeSliceType>()(
	devtools((...args) => ({
		...createRecipeSlice(...args),
	}))
);
