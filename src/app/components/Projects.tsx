import { useEffect } from "react";
import { projectContent } from "../content/projects-content";
import openNewTab from "../functions/NewTab";
import useIsVisible from "../hooks/UseIsVisible";
import useHeaderAnchorStore from "../stores/headerAnchorStore";
import ProjectCard from "./projectComponents/ProjectCard";
import FontelloIcon from "./shared/FontelloIcon";
import PCard from "./projects/PCard";

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
			<div className="bg-background svg-background" ref={projectRef}>
				<section data-aos="fade" className="w-screen h-fit py-20">
					<div
						id="projects"
						className="wrapper flex flex-col items-center pt-10"
					>
						<h1 className="text-4xl md:text-5xl text-accent font-bold mb-10">
							Projetos
						</h1>
						<p className="text-center text-xl md:text-2xl">
							Veja alguns dos projetos mais importantes que
							participei
						</p>
						<div className="w-full flex flex-wrap justify-center my-10">
							{projectContent.map((project, index) => (
								<PCard
									key={"project" + index + project.title}
									title={project.title}
									shortDescription={project.shortDescription}
									bgColor={project.bgColor}
									picture={project.picture}
									modalContent={project.modalContent}
									aosDelay={`${(index + 1) * 100}`}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
