import {
	TimelineContent,
	timelineContent,
} from "@/app/content/timeline-content";
import useSize from "@/app/hooks/UseSize";
import useWindowResize from "@/app/hooks/useWindowResize";
import { useRef } from "react";

export default function Timeline() {
	return (
		<div className="w-full py-20">
			{timelineContent.map((item, index, arr) => (
				<TimelineCard
					key={"timelineCard" + index}
					item={item}
					index={index}
					length={arr.length}
				/>
			))}
		</div>
	);
}

interface TimelineCardProps {
	item: TimelineContent;
	index: number;
	length: number;
}

const TimelineCard = ({ item, index, length }: TimelineCardProps) => {
	const divRef = useRef(null);

	const { elementHeight } = useSize(divRef);

	const { width: windowWidth } = useWindowResize();
	const width = windowWidth * 0.9;
	const maxWidth = windowWidth > 1200 ? "750px" : "600px";

	const renderTimeLineDivision = (index: number) => {
		if (index < length - 1) {
			if (windowWidth < 1000)
				return (
					<hr className="h-[150px] w-[1px] border-l-[7px] border-l-accent border-dashed" />
				);

			return (
				<div
					style={{
						height: `${elementHeight}px`,
						flexDirection: index % 2 === 0 ? "row" : "row-reverse",
					}}
					className="relative flex items-center flex-grow"
				>
					<hr className="w-1/2 h-[1px] border-0 border-b-[5px] border-b-accent border-dashed" />
					<hr
						className="w-[1px] border-0 border-l-[5px] border-l-accent border-dashed"
						style={{
							height: `${elementHeight}px`,
							transform: `translateY(${elementHeight / 2 - 2}px)`,
						}}
					/>
				</div>
			);
		} else {
			return null;
		}
	};

	return (
		<div
			className="flex items-center"
			style={{
				marginBottom:
					windowWidth > 1000
						? index === length - 1
							? "0px"
							: `${elementHeight / 2}px`
						: "0px",
				flexDirection:
					windowWidth > 1000
						? index % 2 === 0
							? "row"
							: "row-reverse"
						: "column",
			}}
		>
			<div
				ref={divRef}
				style={{
					width: `${width}px`,
					maxWidth: maxWidth,
				}}
				className={`min-h-[200px] bg-nav rounded-xl p-8 flex flex-col text-white font-bold card z-10`}
			>
				<h2
					className={`${
						index % 2 === 0
							? "text-extra-lilac"
							: "text-extra-green"
					} text-2xl md:text-3xl mb-4`}
				>
					{item.title}
				</h2>
				<p className="text-foreground font-normal text-xl md:text-2xl mb-4">
					{item.text}
				</p>
				{item.optionalText && (
					<p className="text-foreground font-normal text-xl md:text-2xl">
						{item.optionalText}
					</p>
				)}
			</div>
			{renderTimeLineDivision(index)}
		</div>
	);
};
