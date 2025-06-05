import Carousel from "./carousel/Carousel";
import CurvedTimeline from "./shared/CurvedTimeline";

export default function Curriculum() {
	return (
		<div id="curriculum" className="bg-background">
			<section data-aos="fade-up" className="w-screen h-fit py-20">
				<div className="wrapper flex flex-col pt-10">
					<p className="text-2xl lg:text-3xl mb-2 font-bold">
						Saiba mais
					</p>
					<h1 className="text-5xl lg:text-6xl mb-3 font-bold text-accent">
						Minha Jornada
					</h1>
					<p className="text-lg lg:text-xl my-1.5">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit
					</p>
					<CurvedTimeline />
				</div>
			</section>
			<section data-aos="fade-up" className="w-screen h-fit pb-20">
				<div className="wrapper flex flex-col">
					<h1 className="text-5xl lg:text-6xl mb-16 font-bold text-accent text-center">
						Certificações
					</h1>
					<Carousel />
				</div>
			</section>
		</div>
	);
}
