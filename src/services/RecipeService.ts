import axios from 'axios';
import { CategoriesResponseSchema } from '../schemas/recipe-schema';

export async function getCategories() {
	const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
	try {
		const { data } = await axios.get(url);
		const result = CategoriesResponseSchema.safeParse(data);
		if (result.success) return result.data.drinks;
	} catch (error) {
		console.error(error);
	}
}
