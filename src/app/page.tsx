"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainSection from "./components/sections/MainSection";
import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Solutions from "./components/sections/Solutions";
import Projects from "./components/sections/Projects";
import Journey from "./components/sections/Journey";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import { PopupModal } from "react-calendly";
import useRoot from "./hooks/UseRoot";
import useCalendlyStore from "./stores/calendlyStore";
import FontelloIcon from "./components/shared/FontelloIcon";
import useMobile from "./hooks/UseMobile";
import { useThemeStore } from "./stores/themeStore";
import Depoiments from "./components/sections/Depoiments";
import FAQSection from "./components/sections/FAQ";
import PageLoader from "./components/shared/PageLoader";
import usePageLoading from "./hooks/UsePageLoading";

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

	const isPageLoading = usePageLoading();

	const initTheme = useThemeStore((s) => s.initTheme);

	useEffect(() => {
		initTheme();
	}, [initTheme]);

	return (
		<div
			id="root"
			className="flex flex-col w-screen font-inter text-foreground"
			style={{ overflowX: "hidden" }}
		>
			<PageLoader isLoading={isPageLoading} />
			<Header />
			<MainSection />
			<AboutMe />
			<Solutions />
			<Depoiments />
			<FAQSection />
			<Projects />
			<Journey />
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
				<div className="fixed flex mt-8 w-fit h-fit z-[99] right-4 bottom-4 font-semibold">
					<button
						onClick={toggleCalendly}
						className="text-light-contrast flex flex-row items-center p-3 h-full w-full rounded-xl text-lg bg-fixed-button ml-4 shadow-md shadow-[#0005] hover:bg-fixed-button-hover transition-all"
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
