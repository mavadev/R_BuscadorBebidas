import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { RecipesSliceType, createRecipesSlice } from './recipesSlice';
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice';
import { NotificationSliceType, createNotificationSlice } from './notificationSlice';

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(
	devtools((...args) => ({
		...createRecipesSlice(...args),
		...createFavoritesSlice(...args),
		...createNotificationSlice(...args),
	}))
);
