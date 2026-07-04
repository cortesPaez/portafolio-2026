'use client';

import Image from 'next/image';
import { FigmaGrid } from '@/app/components/FigmaGrid';
import { IconWrapper } from '@/app/components/ui/icons';
import { useAppStore } from '@/app/store/useAppStore';

const Hero = () => {
	const dictionary = useAppStore((state) => state.dictionary);
	if (!dictionary) return null;

	return (
		<section className="relative min-h-[calc(100dvh-96px)] w-full flex flex-col">
			<FigmaGrid className="py-[24px] flex-1">
				<div className="relative col-span-4 md:col-span-8 lg:col-span-12 w-full h-full rounded-3xl overflow-hidden flex flex-col justify-center">
					<Image
						src="/img/bg-hero.jpg"
						alt="Fondo Hero"
						fill
						priority
						className="object-cover object-center brightness-20"
						quality={75}
					/>
					{/* Aquí podrás colocar tus textos, usa relative z-10 para que estén por encima de la imagen */}
					<div className="relative z-10 p-[32px] flex flex-col items-start h-full w-full">
						<div className="flex flex-col items-start my-auto">
							<h1 className="font-bold text-[128px] text-white">
								Make <span className="text-transparent [-webkit-text-stroke:3px_white]">your</span>{' '}
								<br /> idea
								<span className="text-transparent [-webkit-text-stroke:3px_white]"> reality</span>
							</h1>
							<h2 className="max-w-[40%] text-[20px] text-[#969696] font-light mt-[16px]">
								I create high-impact web experiences that elevate your brand value and increase your
								sales.
							</h2>
							<div className="col-span-2 lg:col-span-3 flex justify-end bg-white pl-[16px] py-[4px] pr-[2px] rounded-full mt-[32px]">
								<button className="flex flex-row gap-[10px] items-center cursor-pointer">
									<strong className="text-black hidden md:inline text-[24px]">
										{dictionary.navbar.cta}
									</strong>
									<IconWrapper
										name="arrow-main-button"
										className="bg-black p-[12px] rounded-full"
										color="white"
									/>
								</button>
							</div>
						</div>
						<div className="flex justify-between items-end w-full mt-auto text-white">
							<span>Coded and designer by Cristóbal Cortés</span>
							<div className="flex flex-col gap-[8px]">
								<span>Santiago, Chile</span>
								<span>{new Date().toLocaleTimeString()}</span>
							</div>
							<div className="flex flex-col gap-[8px]">
								<span>Web</span>
								<span>Mobile</span>
								<span>UX/UI</span>
							</div>
						</div>
					</div>
				</div>
			</FigmaGrid>
		</section>
	);
};

export default Hero;
