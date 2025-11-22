"use client";

import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/data";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";

interface ProductInfoProps {
	product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
	const { addItem } = useCart();
	const router = useRouter();

	const handleAddToCart = () => {
		addItem(product);
	};

	const handleBuyNow = () => {
		addItem(product);
		router.push("/checkout");
	};

	return (
		<div className="flex flex-col gap-6">
			<div>
				<h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
					{product.title}
				</h1>
				<p className="mt-2 text-xl font-medium text-primary">
					₹{product.price.toFixed(2)}
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<p>{product.description}</p>
			</div>

			<div className="flex flex-col gap-4 pt-6 border-t">
				<div className="flex gap-4 w-full md:w-auto">
					<Button size="lg" className="flex-1 md:flex-none" onClick={handleAddToCart}>
						<ShoppingBag className="mr-2 h-5 w-5" />
						Add to Cart
					</Button>
					<Button size="lg" variant="secondary" className="flex-1 md:flex-none" onClick={handleBuyNow}>
						Buy Now
					</Button>
				</div>
				<p className="text-xs text-muted-foreground text-center md:text-left">
					Free shipping on all orders over $500.
				</p>
			</div>
		</div>
	);
}
