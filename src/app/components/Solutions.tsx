import { useEffect } from "react";
import { solutionsContent } from "../content/solutions-content";
import useIsVisible from "../hooks/UseIsVisible";
import useHeaderAnchorStore from "../stores/headerAnchorStore";
import SolutionsCard from "./shared/SolutionsCard";

export default function Solutions() {
	const [solutionRef, isVisible] = useIsVisible({ threshold: 0.01 });
	const setAnchor = useHeaderAnchorStore((s) => s.setActiveAnchor);

	useEffect(() => {
		if (isVisible) {
			setAnchor("solutions");
		}
	}, [isVisible]);
	return (
		<div id="solutions" className="bg-background" ref={solutionRef}>
			<section data-aos="fade-up" className="w-screen py-20">
				<div className="flex flex-col items-center justify-center wrapper w-screen h-fit px-5">
					<h1 className="text-center text-4xl md:text-5xl mb-10 font-bold text-accent">
						Como posso te ajudar?
					</h1>
					<p className="text-center text-xl md:text-2xl w-[90%]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</section>
			<section className="w-screen pb-20">
				<div className="wrapper">
					{solutionsContent.map((solution, index) => (
						<SolutionsCard
							key={"solution" + index + solution.title}
							image={solution.image}
							imageAlt={solution.imageAlt}
							title={solution.title}
							text={solution.text}
							optionalText={solution.optionalText}
						/>
					))}
				</div>
			</section>
		</div>
	);
}
