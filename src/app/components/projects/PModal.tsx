import { PContent } from "@/app/content/projects-content";
import { useEffect } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import FontelloIcon from "../shared/FontelloIcon";
import Portal from "../shared/Portal";
import { YouTubeEmbed } from "@next/third-parties/google";

interface Props {
	isVisible: boolean;
	onClose: () => void;
	content: PContent;
}

export default function PModal({ isVisible, onClose, content }: Props) {
	useEffect(() => {
		document.body.style.overflowY = isVisible ? "hidden" : "auto";
	}, [isVisible]);

	if (!isVisible) return null;

	return (
		<Portal>
			<div
				className={`fixed flex z-[100] h-screen w-screen bg-[#000b] justify-center items-center backdrop-blur-sm`}
				style={{ right: 0, bottom: 0 }}
			>
				<div className="relative minimalistic animated-shadow w-[90%] h-[90%] md:w-[80%] md:h-[80%] rounded-2xl pt-16 pb-6 bg-primary">
					<div className="absolute top-4 right-4">
						<button onClick={onClose}>
							<FontelloIcon
								name={"icon-cancel"}
								classStyling="text-3xl"
							/>
						</button>
					</div>
					<div className="flex flex-col gap-10 w-full h-full">
						<h1 className="self-center font-bold text-3xl md:text-5xl text-accent">
							{content.title}
						</h1>
						<div
							id="teste"
							className="flex gap-10 pl-10 pr-1 pb-5 w-full flex-1 min-h-0"
						>
							<aside className="h-fit">
								<YouTubeEmbed
									videoid={"jNQXAC9IVRw"}
									width={600}
								/>
							</aside>
							<SimpleBar className="overflow-y-auto overflow-x-hidden w-full h-full pr-10">
								<div className="flex flex-col gap-2">
									<p className="text-lg md:text-2xl">
										{content.text}
									</p>
									{content.optionalText && (
										<p className="text-lg md:text-2xl mt-5">
											{content.optionalText}
										</p>
									)}
									{content.optionalText2 && (
										<p className="text-lg md:text-2xl mt-5">
											{content.optionalText2}
										</p>
									)}
								</div>
							</SimpleBar>
						</div>
					</div>
				</div>
			</div>
		</Portal>
	);
}
