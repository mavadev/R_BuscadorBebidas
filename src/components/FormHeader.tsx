import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { SearchFilter } from '../types/recipe-types';
import { useAppStore } from '../stores/useAppStore';

export const FormHeader = () => {
	// Categorias
	const fetchCategories = useAppStore(state => state.fetchCategories);
	const categories = useAppStore(state => state.categories);
	useEffect(() => {
		if (!categories.length) fetchCategories();
	}, [categories]);

	// Form State
	const [searchFilter, setSearchFilter] = useState<SearchFilter>({
		ingredient: '',
		category: '',
	});
	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setSearchFilter({
			...searchFilter,
			[e.target.name]: e.target.value,
		});
	};

	// Buscar recetas
	const setNotification = useAppStore(state => state.setNotification);
	const searchDrinks = useAppStore(state => state.searchDrinks);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (Object.values(searchFilter).includes('')) {
			setNotification('Todos los campos son obligatorios', 'error');
			return;
		}
		searchDrinks(searchFilter);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-5 w-full md:w-1/2 lg:w-1/3 pb-5 animate__animated animate__fadeIn'>
			<div className='flex-[2]'>
				<label
					htmlFor='ingredient'
					className='block text-white uppercase font-bold text-sm mb-3'>
					Nombre o Ingredientes:
				</label>
				<input
					type='text'
					id='ingredient'
					name='ingredient'
					onChange={handleChange}
					placeholder='Ej. Vodka, Tequila, Café'
					className='p-3 w-full rounded-md outline-none'
				/>
			</div>
			<div className='flex-[2]'>
				<label
					htmlFor='category'
					className='block text-white uppercase font-bold text-sm mb-3'>
					Categoría:
				</label>
				<select
					id='category'
					name='category'
					onChange={handleChange}
					className='p-3 w-full rounded-md outline-none'>
					<option value=''>-- Seleccione --</option>
					{categories.map((category, index) => (
						<option
							key={index}
							value={category.strCategory}>
							{category.strCategory}
						</option>
					))}
				</select>
			</div>
			<input
				type='submit'
				value='Buscar Recetas'
				className='bg-primary hover:bg-primary-darken button rounded-md p-3'
			/>
		</form>
	);
};
