import { solutionsContent } from "../content/solutions-content";
import CurvedTimeline from "./shared/CurvedTimeline";
import SolutionsCard from "./shared/SolutionsCard";
import Timeline from "./shared/Timeline";

export default function Solutions() {
	return (
		<div id="solutions" className="bg-background">
			<section data-aos="fade-up" className="w-screen py-20">
				<div className="flex flex-col items-center justify-center wrapper w-screen h-fit px-5">
					<h1 className="text-center text-5xl md:text-6xl mb-10 font-bold text-accent">
						Como posso te ajudar?
					</h1>
					<p className="text-center text-2xl md:text-3xl mb-16">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div className="wrapper">
					{solutionsContent.map((solution) => (
						<SolutionsCard
							key={solution.title}
							image={solution.image}
							imageAlt={solution.imageAlt}
							title={solution.title}
							text={solution.text}
							optionalText={solution.optionalText}
						/>
					))}
				</div>
				<CurvedTimeline />
			</section>
		</div>
	);
}
