import { solutionsContent } from "../../content/solutions-content";
import SolutionsCard from "../shared/SolutionsCard";
import Heading from "../shared/Heading";
import useHeaderAnchor from "@/app/hooks/UseHeaderAnchor";

export default function Solutions() {
	const solutionRef = useHeaderAnchor("solutions");

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
							lottie={solution.lottie}
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
