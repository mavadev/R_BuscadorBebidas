import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';
import Notification from '../components/Notification';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Modal />
			<Notification />
		</>
	);
};

export default Layout;
