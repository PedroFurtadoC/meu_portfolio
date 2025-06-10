import { PContent } from "@/app/content/projects-content";
import { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import FontelloIcon from "../shared/FontelloIcon";
import Image from "next/image";
import Portal from "../shared/Portal";
import openNewTab from "@/app/functions/NewTab";
import { YouTubeEmbed } from "@next/third-parties/google";
import useWindowResize from "@/app/hooks/useWindowResize";

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
				return <Layout1 content={content} />;
			case 2:
				return <Layout2 content={content} />;
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
						<div className="flex flex-col px-5 md:px-36">
							{renderLayout()}
						</div>
					</SimpleBar>
				</div>
			</div>
		</Portal>
	);
}

const Layout1 = ({ content }: { content: PContent }) => {
	const windowRef = useWindowResize();
	const [width, setWidth] = useState(700);
	useEffect(() => {
		if (windowRef.width >= 900) {
			setWidth(700);
		} else if (windowRef.width >= 700) {
			setWidth(500);
		} else {
			setWidth(300);
		}
	}, [windowRef]);

	return (
		<>
			<h1 className="self-center font-bold text-3xl md:text-5xl text-accent">
				{content.title}
			</h1>
			<div className="flex flex-col pt-10 mb-15">
				<p className="text-lg md:text-2xl">{content.text}</p>
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
			<div className="flex flex-row flex-wrap justify-around gap-10 mt-10">
				<Image
					className="h-auto w-[300px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
					src={content.image}
					alt={"Imagem " + content.title}
					loading="lazy"
					aria-hidden
					unoptimized
				/>
				{content.optionalImage && (
					<Image
						className="h-auto w-[300px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
						src={content.optionalImage}
						alt={"Imagem " + content.title}
						loading="lazy"
						aria-hidden
						unoptimized
					/>
				)}
				{content.optionalImage2 && (
					<Image
						className="h-auto w-[300px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
						src={content.optionalImage2}
						alt={"Imagem " + content.title}
						loading="lazy"
						aria-hidden
						unoptimized
					/>
				)}
			</div>
			{content.link && (
				<p
					className="my-10 text-lg md:text-2xl font-bold text-extra-lilac cursor-pointer"
					role="button"
					onClick={() => openNewTab(content.link?.url!)}
				>
					{content.link.description ?? content.link.url}
				</p>
			)}
			{content.ytVideoId && (
				<div className="flex flex-col w-full mb-10 pb-10 items-center">
					<YouTubeEmbed videoid={content.ytVideoId} width={width} />
				</div>
			)}
		</>
	);
};

const Layout2 = ({ content }: { content: PContent }) => {
	const windowRef = useWindowResize();
	const [width, setWidth] = useState(700);
	useEffect(() => {
		if (windowRef.width >= 900) {
			setWidth(700);
		} else if (windowRef.width >= 700) {
			setWidth(500);
		} else {
			setWidth(300);
		}
	}, [windowRef]);

	return (
		<>
			<h1 className="self-center font-bold text-3xl md:text-5xl text-accent">
				{content.title}
			</h1>
			<div className="flex flex-col gap-[50px] pt-10 mb-15">
				<div className="flex flex-col md:flex-row justify-center gap-[50px]">
					<p className="text-lg md:text-2xl">{content.text}</p>
					<Image
						className="h-auto w-[300px] md:w-[250px] xl:w-[500px] aspect-video rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
						src={content.image}
						alt={"Imagem " + content.title}
						loading="lazy"
						aria-hidden
						unoptimized
					/>
				</div>
				<div className="flex flex-col md:flex-row-reverse justify-center gap-[50px]">
					{content.optionalText && (
						<p className="text-lg md:text-2xl mt-5">
							{content.optionalText}
						</p>
					)}
					{content.optionalImage && (
						<Image
							className="h-auto w-[300px] md:w-[250px] xl:w-[500px] aspect-video rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
							src={content.optionalImage}
							alt={"Imagem " + content.title}
							loading="lazy"
							aria-hidden
							unoptimized
						/>
					)}
				</div>
				<div className="flex flex-col md:flex-row justify-center gap-[50px]">
					{content.optionalText && (
						<p className="text-lg md:text-2xl mt-5">
							{content.optionalText2}
						</p>
					)}
					{content.optionalImage && (
						<Image
							className="h-auto w-[300px] md:w-[250px] xl:w-[500px] aspect-video rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
							src={content.optionalImage2}
							alt={"Imagem " + content.title}
							loading="lazy"
							aria-hidden
							unoptimized
						/>
					)}
				</div>
			</div>
			{content.link && (
				<p
					className="my-10 text-lg md:text-2xl font-bold text-extra-lilac cursor-pointer"
					role="button"
					onClick={() => openNewTab(content.link?.url!)}
				>
					{content.link.description ?? content.link.url}
				</p>
			)}
			{content.ytVideoId && (
				<div className="flex flex-col w-full mb-10 pb-10 items-center">
					<YouTubeEmbed videoid={content.ytVideoId} width={width} />
				</div>
			)}
		</>
	);
};
