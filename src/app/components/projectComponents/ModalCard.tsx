import { PContent } from "@/app/content/projects-content";
import { useEffect } from "react";
import SimpleBar from "simplebar-react";
import FontelloIcon from "../shared/FontelloIcon";
import Image from "next/image";
import Portal from "../shared/Portal";
import openNewTab from "@/app/functions/NewTab";

interface Props {
	isVisible: boolean;
	onClose: () => void;
	content: PContent;
}

export default function ModalCard({ isVisible, onClose, content }: Props) {
	useEffect(() => {
		document.body.style.overflowY = isVisible ? "hidden" : "auto";
	}, [isVisible]);

	if (!isVisible) return null;

	const renderLayout = () => {
		switch (content.layout) {
			case 1:
				return (
					<>
						<h1 className="self-center font-bold text-3xl md:text-5xl text-cyan-400">
							{content.title}
						</h1>
						<div className="flex flex-col pt-10 mb-15">
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
						<div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
							<Image
								className="h-auto w-[550px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
								src={content.image}
								alt={"Imagem " + content.title}
								loading="lazy"
								aria-hidden
								unoptimized
							/>
							<Image
								className="h-auto w-[550px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
								src={content.optionalImage2}
								alt={"Imagem " + content.title}
								loading="lazy"
								aria-hidden
								unoptimized
							/>
						</div>
						{content.link && (
							<p
								className="my-10 text-lg md:text-2xl font-bold text-purple-400 cursor-pointer"
								role="button"
								onClick={() => openNewTab(content.link?.url!)}
							>
								{content.link.description ?? content.link.url}
							</p>
						)}
					</>
				);
			case 2:
				return null;
		}
	};

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
					<SimpleBar className="h-full overflow-y-auto overflow-x-hidden">
						<div className="flex flex-col h-full px-5 md:px-36 modal">
							{renderLayout()}
						</div>
					</SimpleBar>
				</div>
			</div>
		</Portal>
	);
}
