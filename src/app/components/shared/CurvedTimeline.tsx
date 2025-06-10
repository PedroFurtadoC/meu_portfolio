import { timelineContent } from "@/app/content/timeline-content";
import useWindowResize from "@/app/hooks/useWindowResize";

//const windowWidth = 1800;

export default function CurvedTimeline() {
	const { width: windowWidth } = useWindowResize();

	let width = 0;
	let minusTranslate = 0;
	let plusTranslate = 0;
	let svgSize = {
		height: 0,
		width: 0,
	};

	Object.seal(svgSize);

	if (windowWidth > 1300) {
		width = windowWidth * 0.4;
		minusTranslate = -((width * 0.7) / 2);
		plusTranslate = (width * 0.7) / 2;
		svgSize = {
			height: 300,
			width: width * 0.8,
		};
	} else if (windowWidth > 1000) {
		width = windowWidth * 0.6;
		minusTranslate = -((width * 0.5) / 2);
		plusTranslate = (width * 0.5) / 2;
		svgSize = {
			height: 275,
			width: width * 0.6,
		};
	} else if (windowWidth > 700) {
		width = windowWidth * 0.6;
		minusTranslate = -((width * 0.5) / 2);
		plusTranslate = (width * 0.5) / 2;
		svgSize = {
			height: 250,
			width: width * 0.6,
		};
	} else {
		width = windowWidth * 0.8;
		/* 		minusTranslate = -((width * 0.15) / 2);
		plusTranslate = (width * 0.15) / 2;
		svgSize = {
			height: 175,
			width: width * 0.2,
		}; */
	}

	/* const width = windowWidth > 1000 ? windowWidth * 0.4 : windowWidth * 0.6;

	const minusTranslate =
		windowWidth > 1000 ? -((width * 0.7) / 2) : -((width * 0.4) / 2);
	const plusTranslate =
		windowWidth > 1000 ? (width * 0.7) / 2 : (width * 0.4) / 2;
	const svgSize = {
		height: windowWidth > 1000 ? 300 : 200,
		width: windowWidth > 1000 ? 640 : width * 0.5,
	}; */

	const renderTimeLineDivision = (index: number, length: number) => {
		if (index < length - 1) {
			if (windowWidth < 700)
				return (
					<hr className="h-[150px] w-[1px] border-l-[7px] border-l-accent border-dashed" />
				);

			return (
				<svg
					style={index % 2 !== 0 ? { transform: "scale(-1,1)" } : {}}
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 800 800"
					height={svgSize.height}
					width={svgSize.width}
					preserveAspectRatio="none"
				>
					<g
						strokeWidth="10"
						stroke="#ff6b6b"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeDasharray="35.5 26"
						transform="matrix(1,0,0,1,7,20)"
					>
						<path
							d="M11.5 11.5Q12.5 380.5 400 400Q788.5 403.5 788.5 788.5 "
							markerEnd="url(#SvgjsMarker4412)"
						></path>
					</g>
					<defs>
						<marker
							markerWidth="1"
							markerHeight="1"
							refX="0.5"
							refY="0.5"
							viewBox="0 0 1 1"
							orient="auto"
							id="SvgjsMarker4412"
						>
							<polygon
								points="0,1 0,0 1,0.5"
								fill="hsl(227, 71%, 57%)"
							></polygon>
						</marker>
					</defs>
				</svg>
			);
		} else {
			return null;
		}
	};

	return (
		<div className="w-full py-20 px-20">
			{timelineContent.map((item, index, arr) => (
				<div
					className="flex flex-col items-center justify-center"
					key={"path" + index}
				>
					<div
						style={{
							transform:
								index % 2 === 0
									? `translateX(${minusTranslate}px)`
									: `translateX(${plusTranslate}px)`,
							width: `${width}px`,
							maxWidth: "800px",
						}}
						className={`min-h-[200px] border-[6px] border-muted bg-background rounded-xl m-[-10px] p-8 flex flex-col text-white font-bold`}
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
					{renderTimeLineDivision(index, arr.length)}
				</div>
			))}
		</div>
	);
}
