import { useMemo } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { DrinkCard } from '../components/DrinkCard';

const HomePage = () => {
	const drinks = useAppStore(state => state.drinks);
	const hasDrinks = useMemo(() => drinks.length > 0, [drinks]);

	if (!hasDrinks) return <></>;

	return (
		<main className='container mx-auto px-5 py-10'>
			<h1 className='text-2xl font-bold uppercase'>Recetas</h1>
			<section className='grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-5 my-5'>
				{drinks.map(drink => (
					<DrinkCard
						key={drink.idDrink}
						drink={drink}
					/>
				))}
			</section>
		</main>
	);
};

export default HomePage;
