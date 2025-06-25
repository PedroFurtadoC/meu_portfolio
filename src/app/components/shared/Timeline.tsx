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
	const cardRef = useRef(null);
	const { elementHeight: cardHeight } = useSize(cardRef);

	const { width: windowWidth } = useWindowResize();
	const width = windowWidth * 0.9;
	const maxWidth = windowWidth > 1200 ? "750px" : "600px";

	const renderStartDivision = (index: number) => {
		if (index < length - 1) {
			/* if (windowWidth < 1000)
				return (
					<hr className="h-[150px] w-[1px] border-l-[7px] border-l-secondary border-dashed" />
				); */

			return (
				<div
					style={{
						height: `${cardHeight}px`,
						flexDirection: index % 2 === 0 ? "row" : "row-reverse",
					}}
					className="relative flex items-center w-[10%] xl:w-1/5"
				>
					<hr className="w-1/3 h-[1px] border-0 border-b-[5px] border-b-secondary border-dashed" />
					<hr
						className="w-[1px] border-0 border-l-[5px] border-l-secondary border-dashed"
						style={{
							height: `${cardHeight * 0.49 + 80}px`,
							transform: `translateY(49.5%)`,
						}}
					/>
				</div>
			);
		} else {
			return <div className="w-[10%] xl:w-1/5" />;
		}
	};

	const renderEndDivision = (index: number) => {
		if (index === 0) {
			return <div className="w-[10%] xl:w-1/5" />;
		} else {
			return (
				<div
					style={{
						height: `${cardHeight}px`,
						flexDirection: index % 2 !== 0 ? "row" : "row-reverse",
					}}
					className="relative flex items-center w-[10%] xl:w-1/5"
				>
					<hr className="w-1/3 h-[1px] border-0 border-b-[5px] border-b-secondary border-dashed" />
					<hr
						className="w-[1px] border-0 border-l-[5px] border-l-secondary border-dashed"
						style={{
							height: `${cardHeight * 0.5 + 80}px`,
							transform: `translateY(-49.5%)`,
						}}
					/>
				</div>
			);
		}
	};

	return (
		<div
			className="flex items-center w-full"
			style={{
				marginBottom: length === 1 ? "0px" : "80px",
				flexDirection: index % 2 === 0 ? "row" : "row-reverse",
			}}
		>
			{renderEndDivision(index)}
			<div
				ref={cardRef}
				className={`min-h-[200px] w-[80%] xl:w-3/5 bg-primary rounded-xl py-8 px-10 md:px-20 flex flex-col text-white font-bold z-10`}
			>
				<div className="flex flex-col lg:flex-row justify-between lg:items-center mb-6 gap-5">
					<h2 className="text-accent text-3xl md:text-4xl max-w-[100%] lg:max-w-[50%]">
						{item.title}
					</h2>
					<h3 className="text-sm md:text-base font-extralight">
						{item.start.toUpperCase()} | {item.end.toUpperCase()}
					</h3>
				</div>
				<p className="text-foreground font-normal text-xl md:text-2xl mb-4">
					{item.text}
				</p>
				{item.habilities && (
					<>
						<p className="text-foreground font-normal text-xl md:text-2xl mt-10 mb-4">
							Habilidades específicas
						</p>
						<ul className="font-light font-inter list-disc list-inside text-xl md:text-2xl columns-2">
							{item.habilities.map((hability) => (
								<li
									className="mb-2"
									key={item.title + " " + hability}
								>
									{hability}
								</li>
							))}
						</ul>
					</>
				)}
			</div>
			{renderStartDivision(index)}
		</div>
	);
};
