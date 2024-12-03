import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';
import { SearchFilter } from '../types/recipe-types';

export const Header = () => {
	// Location
	const { pathname } = useLocation();
	const hasHome = useMemo(() => pathname == '/', [pathname]);

	// Store
	const drinks = useAppStore(state => state.drinks);
	const setNotification = useAppStore(state => state.setNotification);

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
	const searchDrinks = useAppStore(state => state.searchDrinks);

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
			setNotification('Todos los campos son obligatorios', 'error');
			return;
		}

		// Consultar las bebidas
		searchDrinks(searchFilter);
	};

	const conditionalClass = useMemo(() => {
		if (hasHome) {
			var className = 'bg-header bg-cover bg-center bg-blend-color-dodge';
			if (drinks.length) {
				className += ' h-2/3';
			} else {
				className += ' h-dvh';
			}
			return className;
		}
		return 'h-auto';
	}, [hasHome, drinks]);

	return (
		<header className={`bg-black ${conditionalClass} transition-all`}>
			<div className='container mx-auto p-5 h-full flex flex-col justify-between'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<Link to='/'>
						<img
							alt='Logotipo'
							src='/logo-white.svg'
							className='h-10'
						/>
					</Link>
					{/* Navegación */}
					<nav className='flex gap-2'>
						<NavLink
							to='/'
							className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-300'} font-bold px-2 uppercase`}>
							Inicio
						</NavLink>
						<NavLink
							to='/favoritos'
							className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-300'} font-bold px-2 uppercase`}>
							Favoritos
						</NavLink>
					</nav>
				</div>
				{/* Formulario */}
				{hasHome && (
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
				)}
			</div>
		</header>
	);
};
