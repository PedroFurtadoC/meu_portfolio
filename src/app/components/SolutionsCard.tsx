import { Solution } from "@/app/content/solutions-content";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const SolutionsCard = ({ lottie, title, text, optionalText }: Solution) => {
	return (
		<div
			className="relative flex gap-12 solution-card w-full"
			data-aos="fade-up"
		>
			<DotLottieReact
				src={lottie}
				autoplay
				loop
				className="hidden xl:contents"
				width={"100%"}
				height={80}
			/>
			<div>
				<h2 className="text-2xl md:text-3xl font-bold xl:w-2/3">
					{title}
				</h2>
				<DotLottieReact
					src={lottie}
					autoplay
					loop
					className="contents xl:hidden"
					width={"100%"}
					height={80}
				/>
				<p className="text-xl md:text-2xl xl:mt-[55px] text-muted">
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
