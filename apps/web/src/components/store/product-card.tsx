import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
	id: string;
	title: string;
	price: number;
	image: string;
	category: string;
}

export default function ProductCard({ id, title, price, image, category }: ProductCardProps) {
	return (
		<Card className="group overflow-hidden border-none shadow-none bg-transparent">
			<CardContent className="p-0 relative aspect-square overflow-hidden bg-secondary/20 rounded-lg mb-4">
				<img
					src={image}
					alt={title}
					className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
				/>
				<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<Button size="icon" className="rounded-full shadow-lg">
						<ShoppingBag className="h-4 w-4" />
					</Button>
				</div>
			</CardContent>
			<CardFooter className="p-0 flex flex-col items-start gap-1">
				<p className="text-xs text-muted-foreground uppercase tracking-wider">{category}</p>
				<Link href={`/product/${id}`} className="font-medium hover:underline">
					{title}
				</Link>
				<p className="text-sm font-semibold">₹{price.toFixed(2)}</p>
			</CardFooter>
		</Card>
	);
}
