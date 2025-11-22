import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function StoreLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
