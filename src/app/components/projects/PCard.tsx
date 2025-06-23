import { Project } from "@/app/content/projects-content";
import useSize from "@/app/hooks/UseSize";
import { YouTubeEmbed } from "@next/third-parties/google";
import { useRef, useState } from "react";
import PModal from "./PModal";

interface Props extends Project {
	aosDelay: string;
}

export default function PCard({ aosDelay, ...rest }: Props) {
	//const [isHovered, setIsHovered] = useState(false);
	const [expanded, setExpanded] = useState(false);

	const cardRef = useRef(null);

	const { elementWidth } = useSize(cardRef);

	return (
		<>
			<PModal
				isVisible={expanded}
				onClose={() => setExpanded(false)}
				content={rest.modalContent}
			/>
			<div
				ref={cardRef}
				data-aos="fade"
				data-aos-delay={aosDelay}
				className={`project`}
				/* onMouseEnter={() => {
					setTimeout(() => {
						setIsHovered(true);
					}, 100);
				}}
				onMouseLeave={() => {
					setTimeout(() => {
						setIsHovered(false);
					}, 100);
				}} */
			>
				<div className="flex flex-col bg-primary w-full h-full rounded-2xl items-center p-8">
					<YouTubeEmbed
						videoid={"jNQXAC9IVRw"}
						width={elementWidth * 0.8}
						style="border-radius: 1rem"
					/>
					<button
						onClick={() => setExpanded(true)}
						className="relative h-16 w-full md:w-80 rounded-xl text-xl font-bold bg-[#4977a0] mt-8 shadow-md shadow-[#0005] hover:bg-[#3e5c76] transition-all"
					>
						Saiba mais!
					</button>
				</div>
			</div>
		</>
	);
}
