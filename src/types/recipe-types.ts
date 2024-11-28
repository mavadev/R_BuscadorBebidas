import { z } from 'zod';
import { CategoriesResponseSchema, CategoryResponseSchema } from '../schemas/recipe-schema';

export type CategoryResponse = z.infer<typeof CategoryResponseSchema>;
export type CategoriesResponse = z.infer<typeof CategoriesResponseSchema>;
