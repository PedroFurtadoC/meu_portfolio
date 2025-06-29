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
		<div className="flex gap-12 solution-card" data-aos="fade-up">
			<Image
				className="aspect-square self-center w-[80%] md:w-[20rem] lg:w-[26rem] rounded-lg hover:scale-105 transition-all"
				unoptimized
				loading="lazy"
				src={image}
				alt={imageAlt}
			/>
			<div>
				<h2 className="text-2xl md:text-3xl font-bold lg:w-1/2">
					{title}
				</h2>
				<p className="text-xl md:text-2xl mt-[55px] text-muted">
					{text}
				</p>
				{optionalText && (
					<p className="text-xl md:text-2xl mt-5 text-muted">
						{optionalText}
					</p>
				)}
			</div>
		</div>
	);
};

export default SolutionsCard;
