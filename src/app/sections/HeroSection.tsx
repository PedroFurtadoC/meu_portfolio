import { useMemo } from "react";
import { useThemeStore } from "../stores/themeStore";
import useWindowResize from "../utils/hooks/useWindowResize";
import Typewriter from "typewriter-effect";
import FontelloIcon from "../components/shared/FontelloIcon";
import ResponsiveIconScroll from "../components/scrollAnimation/ResponsiveIconScroll";
import Image from "next/image";
import useMousePosition from "../utils/hooks/UseMousePosition";
import { useWindow } from "../utils/hooks/UseWindow";
import openNewTab from "../utils/functions/NewTab";
import openEmail from "../utils/functions/OpenEmail";
import Blob from "../components/shared/Blob";
import useHeaderAnchor from "@/app/utils/hooks/UseHeaderAnchor";
import Pedro_600x900 from "../assets/Pedro_600x900.webp";
import Pedro_fullHD from "../assets/Pedro_fullHD.webp";
import Pedro_400x600 from "../assets/Pedro_400x600.webp";
import bg_dark from "../assets/soft-fabric-background.webp";
import bg_dark_mobile from "../assets/soft-fabric-background-mobile.webp";
import bg_light from "../assets/soft-fabric-background-light.webp";
import bg_light_mobile from "../assets/soft-fabric-background-light-mobile.webp";

export default function HeroSection() {
	const homeRef = useHeaderAnchor("home");

	let mouseDistanceX = 0;
	let mouseDistanceY = 0;

	const { x, y } = useMousePosition("home");
	const windowRef = useWindow();

	if (windowRef) {
		mouseDistanceX = x / (windowRef?.innerWidth || 1);
		mouseDistanceY = y / (windowRef?.innerHeight || 1);
	}

	const theme = useThemeStore((s) => s.theme);
	const { width: windowWidth } = useWindowResize();

	const pedroSrc = useMemo(() => {
		if (windowWidth > 1000) return Pedro_fullHD;
		if (windowWidth > 700) return Pedro_600x900;
		return Pedro_400x600;
	}, [windowWidth]);

	const backgroundSrc = useMemo(() => {
		if (windowWidth < 1000 && theme === "dark") return bg_dark_mobile;
		if (windowWidth < 1000 && theme === "light") return bg_light_mobile;
		if (windowWidth > 1000 && theme === "dark") return bg_dark;
		return bg_light;
	}, [windowWidth, theme]);

	return (
		<main
			id="home"
			className="w-full min-h-[800px] h-[calc(100vh-5rem)] max-h-[1800px] xl:max-h-[1080px] bg-background mt-20 overflow-y-hidden relative"
			style={{
				overflowX: "hidden",
			}}
		>
			<Image
				src={backgroundSrc}
				alt=""
				role="presentation"
				aria-hidden
				fill
				priority
				fetchPriority="high"
				className="object-cover z-0 absolute"
				unoptimized
			/>
			<div className="flex flex-row wrapper z-10 relative">
				<aside
					id="main-section"
					className="pt-10 md:pt-40"
					ref={homeRef}
				>
					<p className="text-2xl md:text-3xl">Olá, eu sou o </p>
					<p className="font-black text-6xl md:text-7xl mt-4 text-secondary">
						Pedro Furtado
					</p>
					<div className="flex flex-row gap-3 mt-6 items-center font-[family-name:var(--font-geist-mono)]">
						<p
							style={{ lineHeight: 1 }}
							className="text-[1.3rem] md:text-[2.75rem]"
						>
							Tecnologias
						</p>
						<Typewriter
							options={{ loop: true }}
							onInit={(typewriter) => {
								typewriter
									.typeString("Inteligentes")
									.pauseFor(2500)
									.deleteAll()
									.typeString("Descomplicadas")
									.pauseFor(2500)
									.deleteAll()
									.typeString("Estratégicas")
									.pauseFor(2500)
									.deleteAll()
									.start();
							}}
						/>
					</div>
					<section className="flex flex-col items-center md:flex-row mt-10 text-light-contrast">
						<button
							onClick={() =>
								openNewTab(
									"https://www.linkedin.com/in/pedro-furtado-33159023b/"
								)
							}
							className="h-16 w-full rounded-xl text-xl font-bold bg-primary shadow-md shadow-[#0005] hover:bg-blue-hover transition-all"
						>
							<FontelloIcon
								name={"icon-linkedin"}
								classStyling="mr-1 text-2xl"
							/>{" "}
							Linkedin
						</button>
						<button
							onClick={() =>
								openEmail("pedrocunha.furtado@gmail.com")
							}
							className="h-16 w-full rounded-xl text-xl font-bold bg-primary mx-0 my-5 md:mx-4 md:my-0 shadow-md shadow-[#0005] hover:bg-fixed-button-hover transition-all"
						>
							<FontelloIcon
								name={"icon-mail-alt"}
								classStyling="mr-1 text-2xl"
							/>{" "}
							E-mail
						</button>
					</section>
					<div className="flex flex-row mt-10 items-center">
						<p className="text-xl mr-4 font-semibold">Veja mais!</p>
						<ResponsiveIconScroll />
					</div>
				</aside>
				<picture className="ml-0 mt-10 md:ml-1 lg:mt-0 relative text-[0.6rem] md:text-xs lg:text-base pointer-events-none">
					<Blob
						className="main-blob"
						bottom={"10%"}
						left={"38%"}
						zIndex={1}
						translate={{
							x: mouseDistanceX * -0.8,
							y: mouseDistanceY * -0.8,
						}}
					/>
					<Image
						className="min-w-[350px] min-h-[350px] mb-[-1rem] xl:mb-0 md:min-w-[600px] md:min-h-[600px] relative z-10 ml-auto mr-auto"
						aria-hidden
						src={pedroSrc}
						alt="Imagem do Pedro"
						width={600}
						height={600}
						unoptimized
						priority
						style={{
							transform: `translate(${mouseDistanceX * -10}px, ${
								mouseDistanceY * -10
							}px)`,
							filter: "drop-shadow(5px 0 10px black)",
						}}
						fetchPriority="high"
					/>
				</picture>
			</div>
		</main>
	);
}
