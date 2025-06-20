import { useEffect } from "react";
import useIsVisible from "../hooks/UseIsVisible";
import useHeaderAnchorStore from "../stores/headerAnchorStore";
import Carousel from "./carousel/Carousel";
import Timeline from "./shared/Timeline";

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
					<p className="text-2xl lg:text-3xl mb-2 font-bold">
						Saiba mais
					</p>
					<h1 className="text-4xl md:text-5xl mb-3 font-bold text-accent">
						Minha Jornada
					</h1>
					<h2 className="text-2xl md:text-3xl my-1.5">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit
					</h2>
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
