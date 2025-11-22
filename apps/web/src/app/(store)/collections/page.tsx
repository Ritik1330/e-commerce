import ProductGrid from "@/components/store/product-grid";
import { products } from "@/lib/data";

export default function CollectionsPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<h1 className="font-serif text-4xl font-bold mb-4">All Collections</h1>
				<p className="text-muted-foreground max-w-2xl">
					Explore our complete range of handcrafted jewelry, from timeless classics to modern statements.
				</p>
			</div>
			<ProductGrid products={products} />
		</div>
	);
}
