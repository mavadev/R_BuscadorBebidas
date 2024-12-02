import { z } from 'zod';
import {
	CategorySchema,
	SearchFilterSchema,
	DrinkSchema,
	FullDrinkWithoutIngredientsSchema,
	FullDrinkSchema,
} from '../schemas/recipe-schema';

export type Category = z.infer<typeof CategorySchema>;

export type SearchFilter = z.infer<typeof SearchFilterSchema>;

export type Drink = z.infer<typeof DrinkSchema>;

export type FullDrinkIngredients = z.infer<typeof FullDrinkWithoutIngredientsSchema>;
export type FullDrink = z.infer<typeof FullDrinkSchema>;
