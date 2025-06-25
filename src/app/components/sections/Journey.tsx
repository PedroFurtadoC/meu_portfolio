import { useEffect } from "react";
import useIsVisible from "../../hooks/UseIsVisible";
import useHeaderAnchorStore from "../../stores/headerAnchorStore";
import Carousel from "../carousel/Carousel";
import Timeline from "../shared/Timeline";
import Heading from "../shared/Heading";

export default function Journey() {
	const [curriculumRef, isVisible] = useIsVisible({ threshold: 0.1 });
	const setAnchor = useHeaderAnchorStore((s) => s.setActiveAnchor);

	useEffect(() => {
		if (isVisible) {
			setAnchor("curriculum");
		}
	}, [isVisible]);
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
					<h1 className="text-4xl md:text-5xl mb-16 font-bold text-accent text-center">
						Certificações
					</h1>
					<Carousel />
				</div>
			</section>
		</div>
	);
}
