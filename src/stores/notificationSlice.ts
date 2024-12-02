import { StateCreator } from 'zustand';

type Notification = {
	text: string;
	show: boolean;
	status: 'success' | 'error' | 'warning';
};

export type NotificationSliceType = {
	notification: Notification | null;
};

export const createNotificationSlice: StateCreator<NotificationSliceType> = (set, get) => ({
	notification: null,
});
