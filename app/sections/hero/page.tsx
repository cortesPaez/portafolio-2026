import Navbar from '@/app/components/navbar';
import Image from 'next/image';
import type { Dictionary } from '@/app/get-dictionary';
import { FigmaGrid } from '@/app/components/FigmaGrid';

interface HeroProps {
	dictionary: Dictionary;
}

const Hero = ({ dictionary }: HeroProps) => {
	return (
		<section className="relative h-dvh w-full flex flex-col">
			<Navbar dictionary={dictionary} />
			<FigmaGrid className="py-[24px] flex-1">
				<div className="relative col-span-4 md:col-span-8 lg:col-span-12 w-full h-full rounded-3xl overflow-hidden flex flex-col justify-center">
					<Image
						src="/img/bg-hero.jpg"
						alt="Fondo Hero"
						fill
						priority
						className="object-cover object-center brightness-20"
						quality={100}
					/>
					{/* Aquí podrás colocar tus textos, usa relative z-10 para que estén por encima de la imagen */}
					<div className="relative z-10 p-[32px] flex flex-col items-start">
						<h1 className="font-bold text-[128px] text-white">
							Make <span className="text-transparent [-webkit-text-stroke:3px_white]">your</span>{' '}
							<br /> idea
							<span className="text-transparent [-webkit-text-stroke:3px_white]"> reality</span>
						</h1>
						<h2 className="max-w-[35%] text-[20px] text-[#969696] font-light mt-[16px]">
							I create high-impact web experiences that elevate your brand value and increase your
							sales.
						</h2>
					</div>
				</div>
			</FigmaGrid>
		</section>
	);
};

export default Hero;
