import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

const Layout = () => {
	return (
		<>
			<Header />
			<main className='container mx-auto px-5 py-10'>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
