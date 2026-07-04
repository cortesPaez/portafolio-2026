import Image from 'next/image';
import { FigmaGrid } from '../components/FigmaGrid';

const About = () => {
	return (
		<FigmaGrid className="py-[64px] flex-1 w-full justify-between max-h-dvh min-h-dvh relative isolate bg-black text-white overflow-hidden">
			{/* Background Blurs */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] pointer-events-none -z-10">
				<div className="absolute w-[1039px] h-[300px] rounded-full bg-[#581284] blur-[300px] left-[-25%] top-[50%] opacity-90 z-2"></div>
				<div className="absolute w-[1005px] h-[500px] rounded-full bg-[#122784] blur-[300px] right-[-15%] top-[50%] opacity-90"></div>
				<div className="absolute w-[1000px] h-[500px] rounded-full bg-[#181284] blur-[300px] left-[5%] top-[50%] bottom-[-15%] opacity-90"></div>
			</div>

			<section className="relative w-full flex flex-col col-span-4 md:col-span-8 lg:col-span-12 gap-12 my-auto z-10">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-start  justify-between">
					<div className="flex flex-col gap-[24px]">
						<h2 className="text-[96px] font-regular leading-none">About me</h2>
						<button className="bg-white text-black text-[24px] font-medium p-[16px] w-full">
							Let&apos;s work together
						</button>
					</div>
					<div className="w-full lg:w-1/2">
						<p className="text-[48px] font-medium leading-tight">
							I am a{' '}
							<span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#FFFFFF_0%,#6A14FF_40%)]">
								web developer
							</span>{' '}
							with 5 years of experience creating interfaces and services for financial companies
							and saas projects
						</p>
					</div>
				</div>
			</section>

			<div className="relative z-10 col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mt-[64px]">
				<div className="lg:col-span-6 relative w-full max-w-[678px] rounded-[24px] overflow-hidden">
					<Image src="/img/picture.png" alt="About me" width={678} height={548} unoptimized />
					{/* Text Overlay */}
					<div className="absolute bottom-[24px] left-[24px] z-20">
						<h3 className="text-[40px] font-medium leading-none text-white">Cristóbal Cortés</h3>
					</div>
				</div>

				<div className="lg:col-span-6 flex flex-col gap-[16px]">
					<h3 className="text-[32px] leading-none">Growth & Scale</h3>
					<p className="text-[20px] font-light text-[#969696] leading-snug">
						We optimize your ecosystem to boost conversions and scale your digital presence.
					</p>
				</div>
			</div>
		</FigmaGrid>
	);
};

export default About;
