import type { Dictionary } from '@/app/get-dictionary';

interface FooterProps {
	dictionary: Dictionary;
}

const Footer = ({ dictionary }: FooterProps) => {
	return (
		<footer className="relative w-full p-8 flex flex-col items-center justify-center bg-black text-white border-t border-gray-800">
			<p>© {new Date().getFullYear()} Cristóbal Cortés. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
