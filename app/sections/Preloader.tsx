'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAppStore } from '@/app/store/useAppStore';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(useGSAP);
}

const Preloader = () => {
	const container = useRef<HTMLDivElement>(null);
	const counterRef = useRef<HTMLDivElement>(null);
	const setPreloaderFinished = useAppStore((state) => state.setPreloaderFinished);

	useGSAP(
		() => {
			// 1. Creamos la línea de tiempo principal que manejará la animación del preloader.
			// Inicia pausada para que se ejecute solo cuando nuestra carga (simulada) termine.
			const tl_loaded = gsap.timeline({ 
			paused: true,
			onComplete: () => {
				// Avisamos inmediatamente que el preloader terminó para que el contenido principal empiece a entrar
				setPreloaderFinished(true);
				// Desvanecemos el preloader de manera rápida pero suave
				gsap.to(container.current, {
					autoAlpha: 0,
					duration: 0.5,
					ease: 'power2.inOut'
				});
			}
		}).to('.counter-preloader', { duration: 0.4, autoAlpha: 0, ease: 'power2.inOut' });

			// 2. Simulador de carga, dado que ignoramos las imágenes.
			// Animamos un objeto desde 0 hasta 100 a lo largo de 2 segundos.
			let progress = { value: 0 };
			gsap.to(progress, {
				value: 100,
				duration: 2.5,
				ease: 'power1.inOut',
				onUpdate: () => {
					// 3. En cada frame de la animación, actualizamos el texto del contador
					if (counterRef.current) {
						counterRef.current.textContent = `${Math.round(progress.value)}%`;
					}
				},
				onComplete: () => {
					// 4. Una vez la carga falsa llega a 100, iniciamos la línea de tiempo de la animación
					tl_loaded.play();
				},
			});
		},
		{ scope: container, dependencies: [] },
	);

	return (
		<div
			ref={container}
			className="preloader fixed inset-0 z-50 bg-[var(--dark)] flex flex-col items-center justify-center h-screen w-screen overflow-hidden"
		>
			<p className="absolute top-10 text-white">Desarrollador Web</p>
			<div className="master_proloader"></div>
			<div ref={counterRef} className="counter-preloader text-[2.5rem] text-[var(--white)]">
				00%
			</div>
		</div>
	);
};

export default Preloader;
