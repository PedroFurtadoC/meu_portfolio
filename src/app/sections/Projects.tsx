import { projectContent } from "../content/projects-content";
import PCard from "../components/projects/PCard";
import Heading from "../components/shared/Heading";
import useHeaderAnchor from "@/app/utils/hooks/UseHeaderAnchor";

export default function Projects() {
	const projectRef = useHeaderAnchor("projects");
	return (
		<>
			<section className="w-screen h-fit py-20 bg-background">
				<div data-aos="fade">
					<Heading subtitle="Veja meus principais projetos!">
						PROJETOS
					</Heading>
				</div>
				<div className="svg-background mt-10" ref={projectRef}>
					<div
						id="projects"
						className="wrapper flex flex-col items-center py-10"
					>
						<div className="w-full flex flex-wrap justify-between my-10">
							{projectContent.map((project, index) => (
								<PCard
									key={"project" + index + project.title}
									title={project.title}
									modalContent={project.modalContent}
									aosDelay="100"
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
