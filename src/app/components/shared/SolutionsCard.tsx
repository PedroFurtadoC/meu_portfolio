import { Solution } from "@/app/content/solutions-content";
import Image from "next/image";
import React from "react";

const SolutionsCard = ({
	image,
	imageAlt = "",
	title,
	text,
	optionalText,
}: Solution) => {
	return (
		<div className="flex gap-10 solution-card">
			<Image
				className="aspect-square w-[80%] self-center md:w-[26rem] rounded-lg hover:scale-105 transition-all"
				unoptimized
				loading="lazy"
				src={image}
				alt={imageAlt}
			/>
			<div>
				<p className="text-3xl md:text-4xl font-bold">{title}</p>
				<p className="text-2xl md:text-3xl mt-5 text-muted">{text}</p>
				{optionalText && (
					<p className="text-2xl md:text-3xl mt-5 text-muted">
						{optionalText}
					</p>
				)}
			</div>
		</div>
	);
};

export default SolutionsCard;
