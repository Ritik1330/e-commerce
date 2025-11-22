export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="font-serif text-4xl font-bold mb-8">Product {id}</h1>
			<p>Product details for {id} will go here.</p>
		</div>
	);
}
