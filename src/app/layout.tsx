import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./assets/fontello/css/fontello.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const viewport: Viewport = {
	colorScheme: "light dark",
};

export const metadata: Metadata = {
	title: "Pedro Furtado - Portfólio",
	description:
		"Sou apaixonado por computação e consultor em tecnologia. Crio automações e soluções digitais funcionais, acessíveis e sob medida.",
	keywords: "Pedro",
	//other: { "google-site-verification": "" },
	authors: [
		{
			name: "Pedro Furtado Cunha",
			url: "https://www.linkedin.com/in/pedro-furtado-33159023b/",
		},
	],
	openGraph: {
		locale: "pt-BR",
		type: "website",
		title: "Pedro Furtado - Portfólio",
		description: "",
		siteName: "Portfólio",
		url: "https://pedrofurtadoc.github.io/meu_portfolio",
		images: [
			{
				url: "https://pedrofurtadoc.github.io/meu_portfolio/WebsitePreview.jpg",
				secureUrl:
					"https://pedrofurtadoc.github.io/meu_portfolio/WebsitePreview.jpg",
				alt: "Portfolio Preview",
				type: "image/jpg",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link
					rel="preload"
					href="/soft-fabric-background.webp"
					as="image"
				/>
				<link
					rel="preload"
					href="/soft-fabric-background-light.webp"
					as="image"
				/>
				<link
					rel="preload"
					href="/soft-fabric-background-mobile.webp"
					as="image"
				/>
				<link
					rel="preload"
					href="/soft-fabric-background-light-mobile.webp"
					as="image"
				/>
			</head>
			<body
				style={{ overflowY: "hidden" }}
				className={`${inter.variable} antialiased select-none text-foreground`}
			>
				{children}
			</body>
		</html>
	);
}
