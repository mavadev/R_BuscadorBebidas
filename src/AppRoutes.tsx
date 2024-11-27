import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesPage, HomePage } from './pages';
import Layout from './layouts/Layout';

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
						element={<FavoritesPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
