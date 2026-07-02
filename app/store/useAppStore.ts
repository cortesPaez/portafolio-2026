import { create } from 'zustand';

interface AppState {
	isPreloaderFinished: boolean;
	setPreloaderFinished: (status: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
	isPreloaderFinished: false,
	setPreloaderFinished: (status) => set({ isPreloaderFinished: status }),
}));
