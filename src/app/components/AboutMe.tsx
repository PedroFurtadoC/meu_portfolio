import openNewTab from "../functions/NewTab";
import openEmail from "../functions/OpenEmail";
import Blobs from "./shared/Blobs";
import FontelloIcon from "./shared/FontelloIcon";

export default function AboutMe() {
	return (
		<div className="bg-background">
			<section
				data-aos="fade-up"
				id="about-me"
				className="relative flex flex-row items-center justify-center w-screen"
			>
				<div className="text-xs lg:text-base w-1/3">
					<Blobs
						scale={2}
						type={1}
						color="#01b6d6"
						left={"15%"}
						top={"60%"}
						zIndex={1}
					/>
					<Blobs
						scale={2.5}
						type={2}
						color="#015dd6"
						left={"12%"}
						top={"20%"}
						zIndex={1}
					/>
					<Blobs
						scale={3}
						type={4}
						color="#ff6b6b"
						left={"-5%"}
						top={"40%"}
						zIndex={1}
					/>
					<Blobs
						scale={2}
						type={5}
						color="#00b88a"
						left={"-3%"}
						top={"90%"}
						zIndex={1}
					/>
				</div>
				<div
					id="about-me-div"
					className="flex flex-col py-20 md:py-40 mx-10"
				>
					<p className="text-2xl md:text-3xl mb-2 font-bold">
						Sobre mim
					</p>
					<h1 className="text-4xl md:text-5xl mb-3 text-cyan-400 font-bold">
						Pedro Furtado Cunha
					</h1>
					<h2 className="text-2xl md:text-3xl mb-5 text-rose-300 font-bold">
						Ribeirão Preto, SP
					</h2>
					<p className="text-xl md:text-2xl my-1.5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce quis faucibus mi, vel dapibus ex. Donec turpis
						purus, maximus id arcu at, condimentum tincidunt nibh.
						Morbi convallis diam eget orci rhoncus, ac tincidunt
						elit gravida. Aenean eget eros quis nibh semper
						efficitur at at turpis. In hac habitasse platea
					</p>
					<p className="text-xl md:text-2xl my-1.5">
						Aliquam mattis neque felis, at tincidunt mi ultrices
						lobortis. Proin convallis libero nec massa mattis
						congue. Vivamus quis luctus nunc. Vestibulum auctor
						lacus ac egestas pulvinar. Mauris mattis tempus dui in
						molestie. Donec ut ex viverra, fringilla enim sit amet,
					</p>
					<p className="text-xl md:text-2xl my-1.5">
						Integer vel felis id magna porttitor ultricies. Aliquam
						ac est ut odio mattis congue. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Pellentesque porta pretium imperdiet.
						Cras felis nisi, sagittis quis condimentum vel,
						venenatis quis tellus. Ut condimentum nisl mollis
					</p>

					<div className="flex flex-row mt-10">
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
				</div>
				<div className="text-base w-1/3">
					<Blobs
						scale={1.8}
						type={9}
						color="#016bd6"
						left={"85%"}
						top={"10%"}
						zIndex={1}
					/>
					<Blobs
						scale={3}
						type={5}
						color="#01bdd6"
						left={"78%"}
						top={"50%"}
						zIndex={1}
					/>
					<Blobs
						scale={2}
						type={8}
						color="#00b88a"
						left={"90%"}
						top={"70%"}
						zIndex={1}
					/>
					<Blobs
						scale={1.4}
						type={2}
						color="#ff6b6b"
						left={"70%"}
						top={"85%"}
						zIndex={1}
					/>
				</div>
			</section>
		</div>
	);
}
