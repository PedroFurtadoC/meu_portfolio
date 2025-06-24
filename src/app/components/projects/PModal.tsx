import { PContent } from "@/app/content/projects-content";
import { useEffect, useRef } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import FontelloIcon from "../shared/FontelloIcon";
import Portal from "../shared/Portal";
import { YouTubeEmbed } from "@next/third-parties/google";
import useWindowResize from "@/app/hooks/useWindowResize";
import useSize from "@/app/hooks/UseSize";

interface Props {
	isVisible: boolean;
	onClose: () => void;
	content: PContent;
}

export default function PModal({ isVisible, onClose, content }: Props) {
	useEffect(() => {
		document.body.style.overflowY = isVisible ? "hidden" : "auto";
	}, [isVisible]);

	const { width: windowWidth } = useWindowResize();

	const cardRef = useRef(null);

	const { elementWidth } = useSize(cardRef);

	let width = 600;

	if (windowWidth >= 1500) {
		width = 600;
	} else if (windowWidth >= 1200) {
		width = 500;
	} else if (windowWidth >= 1000) {
		width = 400;
	} else {
		width = elementWidth * 0.9;
	}

	if (!isVisible) return null;

	return (
		<Portal>
			<div
				className={`fixed flex z-[100] h-screen w-screen bg-[#000b] justify-center items-center backdrop-blur-sm`}
				style={{ right: 0, bottom: 0 }}
			>
				<div className="relative minimalistic animated-shadow w-[90%] h-[90%] md:w-[80%] md:h-[80%] max-w-[1800px] max-h-[850px] rounded-2xl pt-16 pb-6 bg-primary">
					<div className="absolute top-4 right-4">
						<button onClick={onClose}>
							<FontelloIcon
								name={"icon-cancel"}
								classStyling="text-3xl"
							/>
						</button>
					</div>
					<div
						ref={cardRef}
						className="flex flex-col gap-10 w-full h-full"
					>
						<h1 className="self-center font-bold text-3xl md:text-5xl text-accent">
							{content.title}
						</h1>
						<div
							id="teste"
							className={`flex gap-10 pl-10 pr-1 pb-5 w-full flex-1 min-h-0 ${
								windowWidth < 1000 ? "flex-col" : "flex-row"
							}`}
						>
							{windowWidth > 1000 && (
								<aside className="h-fit">
									<YouTubeEmbed
										videoid={"jNQXAC9IVRw"}
										width={width}
									/>
								</aside>
							)}
							<SimpleBar className="overflow-y-auto overflow-x-hidden w-full h-full pr-10">
								<div className="flex flex-col gap-2">
									<p className="text-xl md:text-2xl">
										{content.text}
									</p>
									{content.optionalText && (
										<p className="text-xl md:text-2xl mt-5">
											{content.optionalText}
										</p>
									)}
									{content.optionalText2 && (
										<p className="text-xl md:text-2xl mt-5">
											{content.optionalText2}
										</p>
									)}
								</div>
								{windowWidth < 1000 && (
									<div className="h-fit mt-16">
										<YouTubeEmbed
											videoid={"jNQXAC9IVRw"}
											width={width}
										/>
									</div>
								)}
							</SimpleBar>
						</div>
					</div>
				</div>
			</div>
		</Portal>
	);
}
