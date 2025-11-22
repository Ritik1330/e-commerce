interface ProductGalleryProps {
	image: string;
	title: string;
}

export default function ProductGallery({ image, title }: ProductGalleryProps) {
	return (
		<div className="relative aspect-square overflow-hidden rounded-lg bg-secondary/20">
			<img
				src={image}
				alt={title}
				className="h-full w-full object-cover object-center"
			/>
		</div>
	);
}
