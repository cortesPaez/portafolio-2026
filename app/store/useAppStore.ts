import { create } from 'zustand';
import type { Dictionary } from '@/app/get-dictionary';

interface AppState {
	isPreloaderFinished: boolean;
	setPreloaderFinished: (status: boolean) => void;
	dictionary: Dictionary | null;
	setDictionary: (dictionary: Dictionary) => void;
}

export const useAppStore = create<AppState>((set) => ({
	isPreloaderFinished: false,
	setPreloaderFinished: (status) => set({ isPreloaderFinished: status }),
	dictionary: null,
	setDictionary: (dictionary) => set({ dictionary }),
}));
