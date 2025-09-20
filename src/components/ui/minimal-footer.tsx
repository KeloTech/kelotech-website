import {
	Smartphone,
} from 'lucide-react';

export function MinimalFooter() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative bg-black">
			<div className="mx-auto max-w-6xl">
				<div className="border-t border-gray-800 w-full" />
				<div className="grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6 p-8">
					{/* Brand Section */}
					<div className="col-span-1 flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<Smartphone className="h-6 w-6 text-white" />
							<span className="text-white text-xl font-semibold">KeloTech</span>
						</div>
						<p className="text-gray-400 max-w-sm text-sm leading-relaxed">
							Building innovative mobile applications that solve real-world problems and genuinely improve people's lives.
						</p>
					</div>

					{/* Contact Info */}
					<div className="col-span-1">
						<h3 className="text-white font-medium mb-3">Contact</h3>
						<div className="flex flex-col gap-2 text-sm text-gray-400">
							<p>kelotechfi@gmail.com</p>
							<p>+358 44 358 1828</p>
							<p>Espoo, Finland</p>
						</div>
					</div>

					{/* Apps */}
					<div className="col-span-1">
						<h3 className="text-white font-medium mb-3">Our Apps</h3>
						<div className="flex flex-col gap-2 text-sm text-gray-400">
							<p>Chad.AI - AI Dating Assistant</p>
							<p>Art App - Digital Art Creation</p>
						</div>
					</div>
				</div>
				
				<div className="border-t border-gray-800 w-full" />
				<div className="flex max-w-6xl justify-center py-6">
					<p className="text-gray-500 text-sm">
						© {year} KeloTech. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
