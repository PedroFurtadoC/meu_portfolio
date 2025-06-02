"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainSection from "./components/MainSection";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Curriculum from "./components/Curriculum";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { PopupWidget } from "react-calendly";
import useRoot from "./hooks/UseRoot";
import { isMobile } from "react-device-detect";

export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
			easing: "ease-in-out",
			mirror: true,
		});
	}, []);

	const root = useRoot();

	return (
		<div
			id="root"
			className="flex flex-col w-screen font-[family-name:var(--font-geist-sans)]"
			style={{ overflowX: "hidden" }}
		>
			<Header />
			<MainSection />
			<AboutMe />
			<Technologies />
			<Projects />
			<Curriculum />
			<Contact />
			<Footer />
			{root !== null && !isMobile ? (
				<PopupWidget
					url={"https://calendly.com/pedrocunha-furtado/30min"}
					rootElement={root}
					text="Agendar reunião"
				/>
			) : null}
		</div>
	);
}
