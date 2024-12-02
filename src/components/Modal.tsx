import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useAppStore } from '../stores/useAppStore';
import { useMemo } from 'react';

export const Modal = () => {
	const modalIsOpen = useAppStore(state => state.modalIsOpen);
	const closeModal = useAppStore(state => state.closeModal);

	const recipe = useAppStore(state => state.recipe);
	const favorites = useAppStore(state => state.favorites);
	const setFavorite = useAppStore(state => state.setFavorite);

	const addedToFavorite = useMemo(
		() => favorites.some(favorite => favorite.idDrink === recipe?.idDrink),
		[recipe, favorites]
	);

	return (
		<Dialog
			transition
			open={modalIsOpen}
			onClose={closeModal}
			className='relative z-50 transition'>
			<div className='fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/40'>
				<DialogPanel className='max-w-3xl bg-white p-10 rounded-md'>
					<div className='flex flex-col md:flex-row gap-4'>
						{/* Información */}
						<div className='flex-1'>
							<p className='text-gray-500'>{recipe?.idDrink}</p>
							<p className='text-gray-500'>{recipe?.strCategory}</p>
							<h2 className='font-bold text-2xl mb-4'>{recipe?.strDrink}</h2>

							<DialogTitle className='text-xl font-bold mb-2'>Ingredientes: </DialogTitle>
							<ul className='list-disc list-inside'>
								{recipe?.arrIngredients.map((ingredient, index) => (
									<li key={index}> {ingredient}</li>
								))}
							</ul>
						</div>
						{/* Imagen */}
						<div className='flex-1 bg-red-50 w-1/2 md:w-full'>
							<img
								src={recipe?.strDrinkThumb}
								alt={`Drink Thumb ${recipe?.idDrink}`}
							/>
						</div>
					</div>
					<div className='my-4'>
						<DialogTitle className='text-xl font-bold mb-2'>Instrucciones: </DialogTitle>
						<p>{recipe?.strInstructionsES || recipe?.strInstructions}</p>
					</div>

					<footer className='mt-5 flex flex-col md:flex-row gap-4'>
						<button
							type='button'
							onClick={() => setFavorite(recipe!)}
							className='button bg-primary p-3 rounded hover:bg-primary-darken'>
							{addedToFavorite ? 'Eliminar de' : 'Añadir a'} Favoritos
						</button>
						<button
							type='button'
							onClick={closeModal}
							className='button bg-black p-3 rounded hover:bg-black/90'>
							Cerrar
						</button>
					</footer>
				</DialogPanel>
			</div>
		</Dialog>
	);
};
