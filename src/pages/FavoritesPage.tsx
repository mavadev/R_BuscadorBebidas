import { useMemo } from 'react';
import { DrinkCard } from '../components/DrinkCard';
import { useAppStore } from '../stores/useAppStore';

const FavoritesPage = () => {
	const favorites = useAppStore(state => state.favorites);
	const hasFavorites = useMemo(() => favorites.length > 0, [favorites]);

	return (
		<main className='container mx-auto px-5 py-10 text-center'>
			<h1 className='text-xl text-gray-500 uppercase'>Mi Carta de</h1>
			<h1 className='text-2xl font-bold uppercase'>Bebidas Favoritas</h1>
			{hasFavorites ? (
				<div className='grid grid-cols-[repeat(2,1fr)] sm:grid-cols-[repeat(auto-fit,_minmax(150px,200px))] gap-5 my-10'>
					{favorites.map(favorite => (
						<DrinkCard
							key={favorite.idDrink}
							drink={favorite}
						/>
					))}
				</div>
			) : (
				<p className='text-center text-xl mt-10'>¡Aún no eliges tus bebidas favoritas!</p>
			)}
		</main>
	);
};

export default FavoritesPage;
