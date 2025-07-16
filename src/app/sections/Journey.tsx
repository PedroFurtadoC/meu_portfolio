import Carousel from "../components/carousel/Carousel";
import Timeline from "../components/Timeline";
import Heading from "../components/shared/Heading";
import useHeaderAnchor from "@/app/utils/hooks/UseHeaderAnchor";

export default function Journey() {
	const journeyRef = useHeaderAnchor("journey");

	return (
		<div id="journey" className="bg-background" ref={journeyRef}>
			<section data-aos="fade-up" className="w-screen h-fit py-20">
				<div className="relative wrapper flex flex-col pt-10">
					<Heading subtitle="Conheça os passos que moldaram minha formação e experiência">
						MINHA JORNADA
					</Heading>
					<Timeline />
				</div>
			</section>
			<section data-aos="fade-up" className="w-screen h-fit pb-20">
				<div className="wrapper flex flex-col">
					<Heading style={{ marginBottom: "75px" }}>
						CERTIFICADOS
					</Heading>
					<Carousel />
				</div>
			</section>
		</div>
	);
}
