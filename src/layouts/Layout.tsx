import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';

const Layout = () => {
	return (
		<>
			<Header />
			<main className='container mx-auto px-5 py-10'>
				<Outlet />
			</main>
			<Modal />
		</>
	);
};

export default Layout;
