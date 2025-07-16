import navigate from "../utils/functions/Navigate";
import openNewTab from "../utils/functions/NewTab";
import openEmail from "../utils/functions/OpenEmail";
import FontelloIcon from "../components/shared/FontelloIcon";
import GoToStartShape from "../components/GoToStartShape";
import useRoot from "../utils/hooks/UseRoot";
import { PopupModal } from "react-calendly";
import useCalendlyStore from "../stores/calendlyStore";
import Image from "next/image";
import useHeaderAnchor from "@/app/utils/hooks/UseHeaderAnchor";

export default function Contact() {
	const { isCalendlyOpen, toggleCalendly } = useCalendlyStore();

	const root = useRoot();

	const contactRef = useHeaderAnchor("contact");

	return (
		<div id="contact" className="bg-background">
			<section
				ref={contactRef}
				id="contact-section"
				data-aos="fade"
				className="relative w-screen pt-3 md:pt-32 pb-32 text-light-contrast"
			>
				<div
					id="contact-div"
					className="wrapper flex flex-col lg:flex-row-reverse gap-10 lg:gap-0 items-center justify-between bg-primary py-10 md:py-6 px-3 xl:px-16 lg:pr-16 rounded-3xl"
				>
					<div className="flex flex-col justify-center items-center w-[90%] lg:w-[60%]">
						<div className="w-full">
							<h1 className="text-4xl md:text-6xl text-light-blue font-light tracking-[0.33em] mb-10">
								CONTATO
							</h1>
							<h2 className="text-2xl md:text-3xl">
								Tecnologia não precisa ser um peso. Se quiser
								leveza, resultado e solução de verdade, estou
								aqui.
							</h2>
						</div>
						<div className="flex flex-col lg:flex-row gap-4 mt-12 w-full">
							<button
								onClick={() =>
									openNewTab(
										"https://www.linkedin.com/in/pedro-furtado-33159023b/"
									)
								}
								className="h-16 w-full rounded-xl text-xl font-bold bg-extra-blue shadow-md shadow-[#0005] hover:bg-blue-hover transition-all"
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
								className="h-16 w-full rounded-xl text-xl font-bold bg-extra-blue shadow-md shadow-[#0005] hover:bg-blue-hover transition-all"
							>
								<FontelloIcon
									name={"icon-mail-alt"}
									classStyling="mr-1 text-2xl"
								/>{" "}
								E-mail
							</button>
						</div>
						<div className="flex flex-row mt-4 w-full">
							<button
								onClick={toggleCalendly}
								className="h-16 w-full rounded-xl text-xl font-bold bg-fixed-button shadow-md shadow-[#0005] hover:bg-fixed-button-hover transition-all"
							>
								<FontelloIcon
									name={"icon-calendar"}
									classStyling="mr-1 text-2xl"
								/>{" "}
								Agende uma reunião
							</button>
						</div>
					</div>
					<figure className="relative flex flex-grow justify-center h-full xl:h-[500px] aspect-square">
						<Image
							aria-hidden
							unoptimized
							src={require("../assets/PedroContato.webp")}
							alt="Pedro"
							objectFit="cover"
							className="h-full w-auto rounded-lg aspect-square"
						/>
					</figure>
				</div>

				<div className="to-start">
					<GoToStartShape
						height="md"
						width="sm"
						left={"78%"}
						top={"93%"}
						zIndex={99}
						onClick={() => navigate("#home")}
					/>
				</div>
			</section>
			{root && (
				<PopupModal
					open={isCalendlyOpen}
					onModalClose={toggleCalendly}
					url={"https://calendly.com/pedrocunha-furtado/30min"}
					rootElement={root}
				/>
			)}
		</div>
	);
}
