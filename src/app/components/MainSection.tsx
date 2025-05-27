import Typewriter from "typewriter-effect";
import FontelloIcon from "./shared/FontelloIcon";
import ResponsiveIconScroll from "./shared/ResponsiveIconScroll";
import Image from "next/image";
import useMousePosition from "../hooks/UseMousePosition";
import { useWindow } from "../hooks/UseWindow";
import openNewTab from "../functions/NewTab";
import Blobs from "./shared/Blobs";
import openEmail from "../functions/OpenEmail";

export default function MainSection() {
	let mouseDistanceX = 0;
	let mouseDistanceY = 0;

	const { x, y } = useMousePosition("home");
	const windowRef = useWindow();

	if (windowRef) {
		mouseDistanceX = x / (windowRef?.innerWidth || 1);
		mouseDistanceY = y / (windowRef?.innerHeight || 1);
	}

	return (
		<main
			id="home"
			className="w-full min-h-[800px] h-[calc(100vh-5rem)] gradient-background mt-20 overflow-y-hidden"
			style={{ overflowX: "hidden" }}
		>
			<div className="flex flex-row wrapper">
				<aside id="main-section" className="pt-10 md:pt-40">
					<p className="text-2xl md:text-3xl">Olá, eu sou o </p>
					<p className="font-bold text-6xl md:text-7xl mt-4 text-cyan-400">
						Pedro
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
									.typeString(
										'<span class="Typewriter__mobile">Inteligentes</span>'
									)
									.pauseFor(2500)
									.deleteAll()
									.typeString(
										'<span class="Typewriter__desktop">Descomplicadas</span>'
									)
									.pauseFor(2500)
									.deleteAll()
									.typeString(
										'<span class="Typewriter__web">Estratégicas</span>'
									)
									.pauseFor(2500)
									.deleteAll()
									.start();
							}}
						/>
					</div>
					<section className="flex flex-col items-center md:flex-row mt-10">
						<button
							onClick={() =>
								openNewTab(
									"https://www.linkedin.com/in/pedro-furtado-33159023b/"
								)
							}
							className="h-16 w-full md:w-44 rounded-xl text-xl font-bold bg-[#0e76a8] shadow-md shadow-[#0005] hover:bg-[#0f6086] transition-all"
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
							className="h-16 w-full md:w-44 rounded-xl text-xl font-bold bg-[#a33939] mx-0 my-5 md:mx-4 md:my-0 shadow-md shadow-[#0005] hover:bg-[#802626] transition-all"
						>
							<FontelloIcon
								name={"icon-mail-alt"}
								classStyling="mr-1 text-2xl"
							/>{" "}
							E-mail
						</button>
					</section>
					<div className="flex flex-row mt-10 items-center">
						<p className="text-xl mr-4">Veja mais!</p>
						<ResponsiveIconScroll />
					</div>
				</aside>
				<picture className="ml-0 mt-10 md:ml-1 lg:mt-0 relative text-[0.6rem] md:text-xs lg:text-base">
					<Blobs
						className="main-blob"
						color="#3791ad"
						bottom={"10%"}
						left={"38%"}
						type={6}
						zIndex={1}
						translate={{
							x: mouseDistanceX * -0.8,
							y: mouseDistanceY * -0.8,
						}}
					/>
					<Image
						className="min-w-[350px] min-h-[350px] mb-[-3rem] md:mb-0 md:min-w-[600px] md:min-h-[600px] relative z-10 ml-auto mr-auto"
						aria-hidden
						src={require("../assets/Pedro.webp")}
						alt="Imagem do Pedro"
						unoptimized
						priority
						style={{
							transform: `translate(${mouseDistanceX * -10}px, ${
								mouseDistanceY * -10
							}px)`,
						}}
					/>
				</picture>
			</div>
		</main>
	);
}
