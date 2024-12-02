import { z } from 'zod';
import {
	CategorySchema,
	SearchFilterSchema,
	DrinkSchema,
	FullDrinkSchema,
	FullDrinkWithIngredientsSchema,
} from '../schemas/recipe-schema';

export type Category = z.infer<typeof CategorySchema>;

export type SearchFilter = z.infer<typeof SearchFilterSchema>;

export type Drink = z.infer<typeof DrinkSchema>;

export type FullDrink = z.infer<typeof FullDrinkSchema>;
export type FullDrinkIngredients = z.infer<typeof FullDrinkWithIngredientsSchema>;
