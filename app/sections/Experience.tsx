import type { Dictionary } from '@/app/get-dictionary';
import { FigmaGrid } from '../components/FigmaGrid';

interface ExperienceProps {
	dictionary: Dictionary;
}

const Experience = ({ dictionary }: ExperienceProps) => {
	return (
		<FigmaGrid className="py-[64px] flex-1 w-full justify-between min-h-dvh relative isolate bg-black text-white overflow-hidden">
			{/* Background Blurs */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] pointer-events-none -z-10">
				{/* Bright Purple - Left side */}
				<div className="absolute w-[1000px] h-[1000px] rounded-full bg-[#581284] blur-[300px] -left-[25%] top-[50%] opacity-90"></div>
				{/* Dark Blue - Right side */}
				<div className="absolute w-[900px] h-[900px] rounded-full bg-[#122784] blur-[300px] -right-[15%] top-[0%] opacity-90"></div>
				{/* Dark Purplish Blue - Bottom middle/left */}
				<div className="absolute w-[1000px] h-[1000px] rounded-full bg-[#181284] blur-[300px] left-[5%] top-[50%] -bottom-[15%] opacity-90"></div>
			</div>

			<section className="relative w-full flex flex-col col-span-4 md:col-span-8 lg:col-span-12 gap-12 my-auto z-10">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-10 flex flex-col lg:flex-row lg:items-end gap-[42px]">
						<h2 className="text-[96px] font-medium leading-none">Custom</h2>
						<p className="text-[24px] leading-snug">
							web experiences engineered from scratch to match your specific business goals and
							performance needs.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-11 lg:col-start-2 flex flex-col lg:flex-row lg:items-end gap-[42px]">
						<h2 className="text-[96px] font-medium leading-none">Design</h2>
						<p className="text-[24px] leading-snug">
							that merges flawless aesthetics with interactive elements, crafted to make your brand
							unforgettable.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-11 lg:col-start-3 flex flex-col lg:flex-row lg:items-end gap-[42px]">
						<h2 className="text-[96px] font-medium leading-none">For your</h2>
						<p className="text-[24px] leading-snug">
							digital ecosystem, ensuring seamless responsive behavior across every single device
							and screen size.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-11 lg:col-start-4 flex flex-col lg:flex-row lg:items-end gap-[42px]">
						<h2 className="text-[96px] font-medium leading-none">company</h2>
						<p className="text-[24px] leading-snug">
							company looking to scale up, dominate the market, and completely redefine its digital
							presence.
						</p>
					</div>
				</div>
			</section>

			<div className="col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mt-[64px] z-10">
				<div className="lg:col-span-3 flex flex-col gap-[16px]">
					<h3 className="text-[32px] leading-none">Brand Strategy</h3>
					<p className="text-[20px] font-light text-[#969696] leading-snug">
						We define your digital identity, positioning your business exactly where it needs to be.
					</p>
				</div>
				<div className="lg:col-span-3 flex flex-col gap-[16px]">
					<h3 className="text-[32px] leading-none">UI/UX Design</h3>
					<p className="text-[20px] font-light text-[#969696] leading-snug">
						We craft visually stunning, highly intuitive interfaces tailored to your audience.
					</p>
				</div>
				<div className="lg:col-span-3 flex flex-col gap-[16px]">
					<h3 className="text-[32px] leading-none">Web Development</h3>
					<p className="text-[20px] font-light text-[#969696] leading-snug">
						We build clean, high-performance code ensuring speed, animations, and responsiveness.
					</p>
				</div>
				<div className="lg:col-span-3 flex flex-col gap-[16px]">
					<h3 className="text-[32px] leading-none">Growth & Scale</h3>
					<p className="text-[20px] font-light text-[#969696] leading-snug">
						We optimize your ecosystem to boost conversions and scale your digital presence.
					</p>
				</div>
			</div>
		</FigmaGrid>
	);
};

export default Experience;
