import React, { CSSProperties } from "react";

interface Props {
	scale?: number;
	relative?: boolean;
	translate?: { x: number; y: number };
	zIndex?: number;
	top?: number | string;
	bottom?: number | string;
	left?: number | string;
	right?: number | string;
	className?: string;
}

const Blob = ({
	scale = 0,
	relative = false,
	zIndex,
	top,
	bottom,
	left,
	right,
	translate = { x: 0, y: 0 },
	className = "",
}: Props) => {
	let baseStyles: CSSProperties;

	if (scale > 0) {
		baseStyles = {
			zIndex: zIndex,
			top: top,
			bottom: bottom,
			left: left,
			right: right,
			scale: scale,
			position: relative ? "relative" : "absolute",
			transform: `translate(${translate.x}px, ${translate.y}px)`,
			height: "30em",
			width: "30em",
			opacity: 1,
		};
	} else {
		baseStyles = {
			zIndex: zIndex,
			top: top,
			bottom: bottom,
			left: left,
			right: right,
			position: relative ? "relative" : "absolute",
			transform: `translate(${translate.x}px, ${translate.y}px)`,
			height: "200px",
			width: "200px",
		};
	}

	return (
		<div className={className} style={baseStyles}>
			<svg
				className="blob"
				viewBox="0 0 200 200"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className="fill-secondary"
					d="M35.6,-63.7C46.1,-55.5,54.7,-46,57.2,-35.2C59.7,-24.4,56.1,-12.2,53,-1.8C49.8,8.5,47.1,17.1,43.3,25.7C39.5,34.3,34.7,43,27.3,52.4C19.9,61.7,9.9,71.8,-2.2,75.7C-14.4,79.6,-28.9,77.3,-39.6,69.8C-50.3,62.4,-57.3,49.7,-65.2,37.2C-73.2,24.7,-82.2,12.4,-80.2,1.2C-78.2,-10.1,-65.2,-20.1,-56.1,-30.6C-46.9,-41.1,-41.6,-51.9,-32.9,-61.2C-24.2,-70.5,-12.1,-78.2,0.2,-78.5C12.5,-78.9,25,-71.9,35.6,-63.7Z"
					transform="translate(100 100)"
				/>
			</svg>
		</div>
	);
};

export default Blob;
