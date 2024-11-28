import { useAppStore } from '../stores/useAppStore';
import type { Drink } from '../types/recipe-types';

interface DrinkCardProps {
	drink: Drink;
}

export const DrinkCard = ({ drink }: DrinkCardProps) => {
	const fetchRecipeByID = useAppStore(state => state.fetchRecipeByID);

	return (
		<div className='w-full'>
			<div className='overflow-hidden'>
				<img
					loading='lazy'
					src={drink.strDrinkThumb}
					alt={`Drink ${drink.strDrink}`}
					className='hover:scale-110 hover:rotate-2 transition-transform'
				/>
			</div>
			<div className='p-2 space-y-3'>
				<p className='text-lg md:text-sm truncate'>{drink.strDrink}</p>
				<button
					className='text-lg md:text-sm bg-black hover:bg-black/90 button p-2'
					onClick={() => fetchRecipeByID(drink.idDrink)}>
					Ver Bebida
				</button>
			</div>
		</div>
	);
};
