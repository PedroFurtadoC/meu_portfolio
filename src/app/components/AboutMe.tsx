import openNewTab from "../functions/NewTab";
import openEmail from "../functions/OpenEmail";
import FontelloIcon from "./shared/FontelloIcon";

export default function AboutMe() {
	return (
		<section id="about-me" className="bg-background">
			<div
				data-aos="fade-up"
				className="relative flex flex-row items-center justify-center w-screen"
			>
				<div
					id="about-me-div"
					className="flex flex-col my-20 px-5 py-8 md:p-20 wrapper rounded-[2rem] bg-nav card"
				>
					<p className="text-2xl md:text-3xl mb-2 font-bold">
						Sobre mim
					</p>
					<h1 className="text-4xl md:text-5xl mb-3 text-accent font-bold">
						Pedro Furtado Cunha
					</h1>
					<h2 className="text-2xl md:text-3xl mb-5 text-cyan-300 font-bold">
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
			</div>
		</section>
	);
}
