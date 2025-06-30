import Carousel from "../carousel/Carousel";
import Timeline from "../shared/Timeline";
import Heading from "../shared/Heading";
import useHeaderAnchor from "@/app/hooks/UseHeaderAnchor";

export default function Journey() {
	const curriculumRef = useHeaderAnchor("curriculum");

	return (
		<div id="curriculum" className="bg-background" ref={curriculumRef}>
			<section data-aos="fade-up" className="w-screen h-fit py-20">
				<div className="relative wrapper flex flex-col pt-10">
					<Heading subtitle="Conheça cada passo dado por mim!">
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
