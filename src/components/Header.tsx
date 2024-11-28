import { useEffect, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';

export const Header = () => {
	const { pathname } = useLocation();
	const hasHome = useMemo(() => pathname == '/', [pathname]);

	const categories = useAppStore(state => state.categories);
	const fetchCategories = useAppStore(state => state.fetchCategories);

	useEffect(() => {
		fetchCategories();
	}, []);

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
					{/* Formulario */}
				</div>
				{hasHome && (
					<form className='space-y-5 w-full md:w-1/3 pb-5'>
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
