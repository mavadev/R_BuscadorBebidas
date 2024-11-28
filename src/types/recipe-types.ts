import { z } from 'zod';
import { CategoriesSchema, CategorySchema, RecipeSchema, SearchFilterSchema } from '../schemas/recipe-schema';

export type Category = z.infer<typeof CategorySchema>;
export type Categories = z.infer<typeof CategoriesSchema>;

export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Recipe = z.infer<typeof RecipeSchema>;
