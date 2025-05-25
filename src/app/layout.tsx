import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./assets/fontello/css/fontello.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const viewport: Viewport = {
	colorScheme: "dark",
};

export const metadata: Metadata = {
	title: "Pedro Furtado - Portfólio",
	description: "",
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
			<body
				id="root"
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
