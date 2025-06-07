"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainSection from "./components/MainSection";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Solutions from "./components/Solutions";
import Projects from "./components/Projects";
import Curriculum from "./components/Curriculum";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { PopupModal } from "react-calendly";
import useRoot from "./hooks/UseRoot";
import useCalendlyStore from "./stores/calendlyStore";
import FontelloIcon from "./components/shared/FontelloIcon";
import useMobile from "./hooks/UseMobile";

export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
			easing: "ease-in-out",
			mirror: true,
		});
	}, []);

	const { isCalendlyOpen, toggleCalendly } = useCalendlyStore();

	const isMobile = useMobile();

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
			<Solutions />
			<Projects />
			<Curriculum />
			<Contact />
			<Footer />
			{root !== null ? (
				<PopupModal
					open={isCalendlyOpen}
					onModalClose={toggleCalendly}
					url={"https://calendly.com/pedrocunha-furtado/30min"}
					rootElement={root}
				/>
			) : null}
			{isMobile ? null : (
				<div className="fixed flex mt-8 w-fit h-fit z-[99] right-4 bottom-4">
					<button
						onClick={toggleCalendly}
						className="flex flex-row items-center p-3 h-full w-full rounded-xl text-lg bg-[#4977a0] ml-4 shadow-md shadow-[#0005] hover:bg-[#3e5c76] transition-all"
					>
						<FontelloIcon
							name={"icon-calendar"}
							classStyling="mr-1 text-xl"
						/>{" "}
						Agendar Conversa
					</button>
				</div>
			)}
			<div id="portal-root" />
		</div>
	);
}
