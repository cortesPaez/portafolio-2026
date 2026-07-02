import type { Dictionary } from '@/app/get-dictionary';

interface ExperienceProps {
	dictionary: Dictionary;
}

const Experience = ({ dictionary }: ExperienceProps) => {
	return (
		<section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white">
			<h2 className="text-[64px] font-bold">Experience</h2>
            {/* Aquí puedes agregar la experiencia de tu portafolio */}
		</section>
	);
};

export default Experience;
