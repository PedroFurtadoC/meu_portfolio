import { projectContent } from "../content/projects-content";
import openNewTab from "../functions/NewTab";
import ProjectCard from "./projectComponents/ProjectCard";
import FontelloIcon from "./shared/FontelloIcon";

export default function Projects() {
	return (
		<>
			<div className="bg-background svg-background">
				<section data-aos="fade" className="w-screen h-fit py-20">
					<div
						id="projects"
						className="wrapper flex flex-col items-center pt-10"
					>
						<h1 className="text-6xl text-cyan-500 font-bold mb-10">
							Projetos
						</h1>
						<p className="text-center text-3xl">
							Veja alguns dos projetos mais importantes que
							participei
						</p>
						<button
							onClick={() =>
								openNewTab("https://github.com/GabrielReverso")
							}
							className="minimalistic animated-shadow relative h-16 w-full md:w-80 rounded-xl text-xl font-bold bg-[#24292e] mt-8 shadow-md shadow-[#0005] hover:bg-[#191d22] transition-all"
						>
							<FontelloIcon
								name={"icon-github-circled"}
								classStyling="mr-1 text-2xl"
							/>{" "}
							GitHub - Conheça Todos!
						</button>
						<div className="w-full flex flex-wrap justify-center my-10">
							{projectContent.map((project, index) => (
								<ProjectCard
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
