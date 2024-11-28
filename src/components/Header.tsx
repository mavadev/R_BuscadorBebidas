import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';
import { SearchFilter } from '../types/recipe-types';

export const Header = () => {
	// Location
	const { pathname } = useLocation();
	const hasHome = useMemo(() => pathname == '/', [pathname]);

	// Store
	const categories = useAppStore(state => state.categories);
	const fetchCategories = useAppStore(state => state.fetchCategories);
	useEffect(() => {
		fetchCategories();
	}, []);

	// State
	const [searchFilter, setSearchFilter] = useState<SearchFilter>({
		ingredient: '',
		category: '',
	});
	const searchRecipes = useAppStore(state => state.searchRecipes);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setSearchFilter({
			...searchFilter,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validar valores
		if (Object.values(searchFilter).includes('')) {
			console.log('Todos los campos son obligatorios');
			return;
		}

		// Consultar las recetas
		searchRecipes(searchFilter);
	};

	return (
		<header className={`bg-black ${hasHome ? 'bg-header bg-cover bg-center bg-blend-color-dodge h-2/3' : 'h-auto'}`}>
			<div className='container mx-auto p-5 h-full flex flex-col justify-between'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<div>
						<img
							alt='Logotipo'
							src='/logo-white.svg'
							className='h-10'
						/>
					</div>
					{/* Navegación */}
					<nav className='flex gap-2'>
						<NavLink
							to='/'
							className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-300'} font-bold px-2 text-lg`}>
							Inicio
						</NavLink>
						<NavLink
							to='/favoritos'
							className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-300'} font-bold px-2 text-lg`}>
							Favoritos
						</NavLink>
					</nav>
				</div>
				{/* Formulario */}
				{hasHome && (
					<form
						className='space-y-5 w-full md:w-1/2 lg:w-1/3 pb-5'
						onSubmit={handleSubmit}>
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
							className='cursor-pointer bg-primary hover:bg-primary_hover text-white font-bold w-full p-3 rounded-md uppercase transition-colors'
						/>
					</form>
				)}
			</div>
		</header>
	);
};
