import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesPage, HomePage } from './pages';

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={<HomePage />}
				/>
				<Route
					path='/favoritos'
					element={<FavoritesPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
