import { StateCreator } from 'zustand';

type Notification = {
	text: string;
	show: boolean;
	status: 'success' | 'error' | 'warning';
};

export type NotificationSliceType = {
	notification: Notification;
	setNotification: (text: Notification['text'], status: Notification['status']) => void;
	hideNotification: () => void;
};

export const createNotificationSlice: StateCreator<NotificationSliceType> = (set, get) => ({
	notification: {
		text: '',
		show: false,
		status: 'success',
	},
	setNotification: (text, status) => {
		set({
			notification: {
				text,
				status,
				show: true,
			},
		});

		setTimeout(() => get().hideNotification(), 5000);
	},
	hideNotification: () => {
		set({
			notification: {
				...get().notification,
				show: false,
			},
		});
	},
});
