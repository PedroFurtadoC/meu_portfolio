import { useEffect } from "react";
import { projectContent } from "../../content/projects-content";
import useIsVisible from "../../hooks/UseIsVisible";
import useHeaderAnchorStore from "../../stores/headerAnchorStore";
import PCard from "../projects/PCard";
import Heading from "../shared/Heading";

export default function Projects() {
	const [projectRef, isVisible] = useIsVisible({ threshold: 0.1 });
	const setAnchor = useHeaderAnchorStore((s) => s.setActiveAnchor);

	useEffect(() => {
		if (isVisible) {
			setAnchor("projects");
		}
	}, [isVisible]);
	return (
		<>
			<section
				data-aos="fade"
				className="w-screen h-fit py-20 bg-background"
			>
				<Heading subtitle="Veja meus principais projetos!">
					PROJETOS
				</Heading>
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
