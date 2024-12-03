import { useMemo } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';
import { FormHeader } from './FormHeader';

export const Header = () => {
	const { pathname } = useLocation();
	const hasHome = useMemo(() => pathname == '/', [pathname]);

	const drinks = useAppStore(state => state.drinks);
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
				{/* Formulario en Home */}
				{hasHome && <FormHeader />}
			</div>
		</header>
	);
};
