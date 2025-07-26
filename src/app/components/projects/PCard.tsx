import { Project } from "@/app/content/projects-content";
import useSize from "@/app/utils/hooks/UseSize";
import { YouTubeEmbed } from "@next/third-parties/google";
import { useRef, useState } from "react";
import PModal from "./PModal";
import useMobile from "@/app/utils/hooks/UseMobile";

interface Props extends Project {
	aosDelay: string;
}

export default function PCard({ aosDelay, ...rest }: Props) {
	const [expanded, setExpanded] = useState(false); // Controla visibilidade do modal

	const cardRef = useRef(null);

	const { elementWidth } = useSize(cardRef); // Obtém largura do card para ajustar vídeo

	const isMobile = useMobile(); // Detecta se está em dispositivo móvel

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
				className={`project ${isMobile && "mobile"}`}
			>
				<div className="flex flex-col bg-primary w-full h-full rounded-2xl items-center p-8 text-light-contrast">
					<YouTubeEmbed
						videoid={rest.modalContent.ytVideoId}
						width={elementWidth * 0.8}
						style="border-radius: 1rem"
					/>
					<button
						onClick={() => setExpanded(true)}
						className="relative h-16 w-full md:w-80 rounded-xl text-xl font-bold bg-secondary-button mt-8 shadow-md shadow-[#0005] hover:bg-secondary-button-hover transition-all"
					>
						Saiba mais!
					</button>
				</div>
			</div>
		</>
	);
}
