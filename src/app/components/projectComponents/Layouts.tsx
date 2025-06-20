import { PContent } from "@/app/content/projects-content";
import { useEffect, useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import Image from "next/image";
import openNewTab from "@/app/functions/NewTab";
import { YouTubeEmbed } from "@next/third-parties/google";
import useWindowResize from "@/app/hooks/useWindowResize";

export const Layout1 = ({ content }: { content: PContent }) => {
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
					className="aspect-video h-auto w-[350px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
					src={content.image}
					alt={"Imagem " + content.title}
					loading="lazy"
					aria-hidden
					unoptimized
				/>
				{content.optionalImage && (
					<Image
						className="aspect-video h-auto w-[350px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
						src={content.optionalImage}
						alt={"Imagem " + content.title}
						loading="lazy"
						aria-hidden
						unoptimized
					/>
				)}
				{content.optionalImage2 && (
					<Image
						className="aspect-video h-auto w-[350px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
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

export const Layout2 = ({ content }: { content: PContent }) => {
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

export const Layout3 = ({ content }: { content: PContent }) => {
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
					className="aspect-[9/16] h-auto w-[300px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
					src={content.image}
					alt={"Imagem " + content.title}
					loading="lazy"
					aria-hidden
					unoptimized
				/>
				{content.optionalImage && (
					<Image
						className="aspect-[9/16] h-auto w-[300px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
						src={content.optionalImage}
						alt={"Imagem " + content.title}
						loading="lazy"
						aria-hidden
						unoptimized
					/>
				)}
				{content.optionalImage2 && (
					<Image
						className="aspect-[9/16] h-auto w-[300px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
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

export const CustomLayoutExample = ({ content }: { content: PContent }) => {
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
					className="aspect-[9/16] h-auto w-[300px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
					src={content.image}
					alt={"Imagem " + content.title}
					loading="lazy"
					aria-hidden
					unoptimized
				/>
				{content.optionalImage && (
					<Image
						className="aspect-[9/16] h-auto w-[300px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
						src={content.optionalImage}
						alt={"Imagem " + content.title}
						loading="lazy"
						aria-hidden
						unoptimized
					/>
				)}
				{content.optionalImage2 && (
					<Image
						className="aspect-[9/16] h-auto w-[300px] rounded-xl shadow-lg shadow-black transition-all hover:scale-105"
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
