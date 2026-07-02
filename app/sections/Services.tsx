import type { Dictionary } from '@/app/get-dictionary';

interface ServicesProps {
	dictionary: Dictionary;
}

const Services = ({ dictionary }: ServicesProps) => {
	return (
		<section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white text-black">
			<h2 className="text-[64px] font-bold">Services</h2>
            {/* Aquí puedes agregar los servicios de tu portafolio */}
		</section>
	);
};

export default Services;
