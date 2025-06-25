import { useEffect } from "react";
import { solutionsContent } from "../../content/solutions-content";
import useIsVisible from "../../hooks/UseIsVisible";
import useHeaderAnchorStore from "../../stores/headerAnchorStore";
import SolutionsCard from "../shared/SolutionsCard";
import Heading from "../shared/Heading";

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
				<Heading>COMO POSSO TE AJUDAR?</Heading>
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
