import { useMemo } from 'react';
import { DrinkCard } from '../components/DrinkCard';
import { useAppStore } from '../stores/useAppStore';

const FavoritesPage = () => {
	const favorites = useAppStore(state => state.favorites);
	const hasFavorites = useMemo(() => favorites.length > 0, [favorites]);

	if (!hasFavorites)
		return (
			<main className='container mx-auto px-5 py-10'>
				<h1 className='text-4xl font-bold'>Favoritos</h1>
				<p className='text-center text-2xl my-10'>Tus bebidas favoritas se mostrarán aquí</p>
			</main>
		);

	return (
		<main className='container mx-auto px-5 py-10'>
			<h1 className='text-4xl font-bold'>Favoritos</h1>
			<div className='grid grid-cols-[repeat(auto-fit,_minmax(150px,200px))] gap-5 my-5'>
				{favorites.map(favorite => (
					<DrinkCard
						key={favorite.idDrink}
						drink={favorite}
					/>
				))}
			</div>
		</main>
	);
};

export default FavoritesPage;
