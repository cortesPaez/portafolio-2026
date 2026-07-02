'use client';

import { useAppStore } from '@/app/store/useAppStore';
import { ReactNode } from 'react';

export default function MainContentWrapper({ children }: Readonly<{ children: ReactNode }>) {
	const isPreloaderFinished = useAppStore((state) => state.isPreloaderFinished);

	return (
		<div
			className="w-full h-full flex flex-col"
			style={{
				opacity: isPreloaderFinished ? 1 : 0,
				transform: isPreloaderFinished ? 'translateY(0)' : 'translateY(3vh)',
				pointerEvents: isPreloaderFinished ? 'auto' : 'none',
				transition: 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
				visibility: isPreloaderFinished ? 'visible' : 'hidden',
			}}
		>
			{children}
		</div>
	);
}
