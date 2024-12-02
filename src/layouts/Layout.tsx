import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Modal />
		</>
	);
};

export default Layout;
