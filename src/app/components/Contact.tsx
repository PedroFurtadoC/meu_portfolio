import navigate from "../functions/Navigate";
import openNewTab from "../functions/NewTab";
import openEmail from "../functions/OpenEmail";
import Blobs from "./shared/Blobs";
import FontelloIcon from "./shared/FontelloIcon";
import GoToStartShape from "./shared/GoToStartShape";
import useRoot from "../hooks/UseRoot";
import { PopupModal } from "react-calendly";
import useCalendlyStore from "../stores/calendlyStore";

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
				<div className="text-base w-1/3">
					<Blobs
						scale={2}
						type={1}
						color="#01b6d6"
						left={"15%"}
						top={"50%"}
						zIndex={1}
					/>
					<Blobs
						scale={1.8}
						type={2}
						color="#015dd6"
						left={"5%"}
						top={"0%"}
						zIndex={1}
					/>
					<Blobs
						scale={2.5}
						type={4}
						color="#ff6b6b"
						left={"-5%"}
						top={"30%"}
						zIndex={1}
					/>
					<Blobs
						scale={0.7}
						type={3}
						color="#00b88a"
						left={"3%"}
						top={"68%"}
						zIndex={1}
					/>
				</div>
				<div
					id="contact-div"
					className="wrapper flex flex-col items-center"
				>
					<div className="w-1/2">
						<h1 className="text-center text-5xl md:text-6xl text-cyan-500 font-bold mb-10">
							Contato
						</h1>
						<p className="text-center text-2xl md:text-3xl">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</div>
					<div className="flex flex-row mt-12 w-1/2">
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
							className="h-16 w-full rounded-xl text-xl font-bold bg-[#a33939] ml-4 shadow-md shadow-[#0005] hover:bg-[#802626] transition-all"
						>
							<FontelloIcon
								name={"icon-mail-alt"}
								classStyling="mr-1 text-2xl"
							/>{" "}
							E-mail
						</button>
					</div>
					<div className="flex flex-row mt-8 w-2/6">
						<button
							onClick={toggleCalendly}
							className="h-16 w-full rounded-xl text-xl font-bold bg-[#4977a0] ml-4 shadow-md shadow-[#0005] hover:bg-[#3e5c76] transition-all"
						>
							<FontelloIcon
								name={"icon-calendar"}
								classStyling="mr-1 text-2xl"
							/>{" "}
							Agende uma reunião
						</button>
					</div>
				</div>
				<div className="text-base w-1/3">
					<Blobs
						scale={1}
						type={5}
						color="#ff6b6b"
						left={"67%"}
						top={"0%"}
						zIndex={1}
					/>
					<Blobs
						scale={1.3}
						type={6}
						color="#016bd6"
						left={"75%"}
						top={"30%"}
						zIndex={1}
					/>
					<Blobs
						scale={2}
						type={10}
						color="#01bdd6"
						left={"90%"}
						top={"10%"}
						zIndex={1}
					/>
					<Blobs
						scale={1.6}
						type={8}
						color="#00b88a"
						left={"93%"}
						top={"57%"}
						zIndex={1}
					/>
				</div>
				<div className="to-start">
					<GoToStartShape
						height="md"
						width="sm"
						color="#3791ad"
						left={"80%"}
						top={"80%"}
						zIndex={5}
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
