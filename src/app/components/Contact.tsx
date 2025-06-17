import navigate from "../functions/Navigate";
import openNewTab from "../functions/NewTab";
import openEmail from "../functions/OpenEmail";
import FontelloIcon from "./shared/FontelloIcon";
import GoToStartShape from "./shared/GoToStartShape";
import useRoot from "../hooks/UseRoot";
import { PopupModal } from "react-calendly";
import useCalendlyStore from "../stores/calendlyStore";
import Image from "next/image";

export default function Contact() {
	const { isCalendlyOpen, toggleCalendly } = useCalendlyStore();

	const root = useRoot();

	return (
		<div id="contact" className="bg-background">
			<section
				id="contact-section"
				data-aos="fade"
				className="relative w-screen pt-3 md:pt-32 pb-32"
			>
				<div
					id="contact-div"
					className="wrapper flex flex-col lg:flex-row-reverse gap-10 lg:gap-0 items-center justify-between card bg-primary py-10 lg:py-20 rounded-3xl"
				>
					<div className="flex flex-col justify-center items-center w-[90%] lg:w-[60%]">
						<div className="w-[80%]">
							<h1 className="text-center text-4xl md:text-5xl text-accent font-bold mb-10">
								Contato
							</h1>
							<h2 className="text-center text-2xl md:text-3xl">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</h2>
						</div>
						<div className="flex flex-col lg:flex-row gap-4 mt-12 w-[90%] lg:w-3/4">
							<button
								onClick={() =>
									openNewTab(
										"https://www.linkedin.com/in/pedro-furtado-33159023b/"
									)
								}
								className="h-16 w-full rounded-xl text-xl font-bold bg-[#0e76a8] shadow-md shadow-[#0005] hover:bg-[#0f6086] transition-all"
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
								className="h-16 w-full rounded-xl text-xl font-bold bg-[#a33939] shadow-md shadow-[#0005] hover:bg-[#802626] transition-all"
							>
								<FontelloIcon
									name={"icon-mail-alt"}
									classStyling="mr-1 text-2xl"
								/>{" "}
								E-mail
							</button>
						</div>
						<div className="flex flex-row mt-4 w-[90%] lg:w-1/2">
							<button
								onClick={toggleCalendly}
								className="h-16 w-full rounded-xl text-xl font-bold bg-[#4977a0] shadow-md shadow-[#0005] hover:bg-[#3e5c76] transition-all"
							>
								<FontelloIcon
									name={"icon-calendar"}
									classStyling="mr-1 text-2xl"
								/>{" "}
								Agende uma reunião
							</button>
						</div>
					</div>
					<figure className="relative flex flex-grow justify-center h-[400px] ">
						<Image
							aria-hidden
							unoptimized
							src={require("../assets/PedroContato.webp")}
							alt="Pedro"
							objectFit="cover"
							className="h-full w-auto rounded-lg"
						/>
					</figure>
				</div>

				<div className="to-start">
					<GoToStartShape
						height="md"
						width="sm"
						color="#3791ad"
						left={"80%"}
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
