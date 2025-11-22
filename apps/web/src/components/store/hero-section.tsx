import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="relative h-[80vh] w-full overflow-hidden bg-neutral-100">
			{/* Background Image Placeholder - In a real app, use next/image */}
			<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center" />
			
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/30" />

			{/* Content */}
			<div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
				<h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
					Timeless Elegance
				</h1>
				<p className="text-lg md:text-xl mb-8 max-w-2xl text-white/90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
					Discover our exclusive collection of handcrafted jewelry, designed to illuminate your unique beauty.
				</p>
				<div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
					<Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
						<Link href="/collections">Shop Collection</Link>
					</Button>
					<Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black" asChild>
						<Link href="/about">Our Story</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
