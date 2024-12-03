import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';
import Layout from './layouts/Layout';

const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path='/favoritos'
						element={
							<Suspense fallback='Cargando...'>
								<FavoritesPage />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
