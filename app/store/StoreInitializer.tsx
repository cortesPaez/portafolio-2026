'use client';

import { useRef } from 'react';
import { useAppStore } from './useAppStore';
import type { Dictionary } from '@/app/get-dictionary';

export default function StoreInitializer({ dictionary }: { dictionary: Dictionary }) {
	const initialized = useRef(false);
	if (!initialized.current) {
		useAppStore.setState({ dictionary });
		initialized.current = true;
	}
	return null;
}
