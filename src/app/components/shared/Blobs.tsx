import React, { CSSProperties } from "react";

interface Props {
	color?: string;
	scale?: number;
	type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	relative?: boolean;
	translate?: { x: number; y: number };
	zIndex?: number;
	top?: number | string;
	bottom?: number | string;
	left?: number | string;
	right?: number | string;
	className?: string;
}

const Blobs = ({
	color = "#FF0066",
	scale = 0,
	type = 1,
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

	switch (type) {
		case 1:
			return (
				<div className={className} style={baseStyles}>
					<svg
						className="blob"
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill={color}
							d="M27.9,-43.4C36.5,-32.2,43.9,-24.4,50.7,-14C57.5,-3.6,63.5,9.5,63.8,24.5C64.1,39.4,58.5,56.2,46.9,63.4C35.3,70.5,17.7,68.1,1.1,66.6C-15.5,65.1,-30.9,64.5,-45.1,58.1C-59.2,51.7,-72,39.7,-73.7,26C-75.5,12.3,-66,-3.1,-60.1,-19C-54.2,-34.9,-51.8,-51.4,-42.4,-62.4C-32.9,-73.4,-16.5,-78.8,-3.4,-74.2C9.7,-69.5,19.3,-54.7,27.9,-43.4Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
			);
		case 2:
			return (
				<div className={className} style={baseStyles}>
					<svg
						className="blob"
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill={color}
							d="M31.1,-35.7C45.7,-24.8,66.6,-20.1,72.7,-9.3C78.9,1.5,70.1,18.5,59.7,32.7C49.4,46.9,37.4,58.3,25.2,57.8C12.9,57.4,0.5,45,-8.1,36C-16.8,26.9,-21.7,21.1,-29.5,14C-37.3,6.8,-48.1,-1.8,-51.6,-13.8C-55,-25.7,-51.2,-41.1,-41.4,-52.9C-31.6,-64.7,-15.8,-73,-3.8,-68.5C8.2,-64,16.5,-46.7,31.1,-35.7Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
			);
		case 3:
			return (
				<div className={className} style={baseStyles}>
					<svg
						className="blob"
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill={color}
							d="M31.4,-46.6C35.3,-34.2,29.4,-19.2,29.4,-7C29.5,5.2,35.5,14.6,37,30C38.4,45.3,35.2,66.7,24.3,73.5C13.5,80.3,-5.1,72.6,-20.7,63.9C-36.3,55.1,-48.9,45.3,-52.9,33.1C-56.9,20.9,-52.4,6.2,-50.8,-10C-49.2,-26.3,-50.6,-44.1,-42.6,-55.8C-34.6,-67.5,-17.3,-73.1,-1.8,-70.9C13.8,-68.8,27.5,-59,31.4,-46.6Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
			);
		case 4:
			return (
				<div className={className} style={baseStyles}>
					<svg
						className="blob"
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill={color}
							d="M28,-36C40.8,-29.2,58.9,-27.1,70.2,-17C81.5,-6.8,86.2,11.4,79.4,23.9C72.7,36.4,54.5,43.2,39.4,47C24.3,50.8,12.1,51.4,2.1,48.6C-8,45.7,-15.9,39.3,-22.2,32.6C-28.5,26,-33.2,19.1,-42,9.5C-50.8,-0.1,-63.8,-12.5,-65.6,-25.9C-67.5,-39.2,-58.4,-53.5,-45.6,-60.2C-32.8,-67,-16.4,-66.2,-4.4,-60.1C7.6,-54,15.2,-42.7,28,-36Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
			);
		case 5:
			return (
				<div className={className} style={baseStyles}>
					<svg
						className="blob"
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill={color}
							d="M57.2,-52.2C64.9,-35.9,55.8,-12.6,47.2,5C38.6,22.7,30.6,34.7,17.1,44.7C3.7,54.7,-15.2,62.7,-29.4,57.3C-43.7,51.9,-53.4,33.1,-57,13.9C-60.6,-5.3,-58.3,-24.9,-47.8,-41.9C-37.3,-58.9,-18.6,-73.2,3,-75.7C24.7,-78.1,49.4,-68.6,57.2,-52.2Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
			);
		case 6:
			return (
				<div className={className} style={baseStyles}>
					<svg
						className="blob"
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill={color}
							d="M35.6,-63.7C46.1,-55.5,54.7,-46,57.2,-35.2C59.7,-24.4,56.1,-12.2,53,-1.8C49.8,8.5,47.1,17.1,43.3,25.7C39.5,34.3,34.7,43,27.3,52.4C19.9,61.7,9.9,71.8,-2.2,75.7C-14.4,79.6,-28.9,77.3,-39.6,69.8C-50.3,62.4,-57.3,49.7,-65.2,37.2C-73.2,24.7,-82.2,12.4,-80.2,1.2C-78.2,-10.1,-65.2,-20.1,-56.1,-30.6C-46.9,-41.1,-41.6,-51.9,-32.9,-61.2C-24.2,-70.5,-12.1,-78.2,0.2,-78.5C12.5,-78.9,25,-71.9,35.6,-63.7Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
			);
		case 7:
			return (
				<div className={className} style={baseStyles}>
					<svg
						className="blob"
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill={color}
							d="M28.3,-44.2C40.1,-42.1,55.6,-41.6,56.5,-34.5C57.4,-27.3,43.7,-13.7,42.8,-0.5C41.9,12.6,53.7,25.2,54.3,34.9C54.9,44.6,44.2,51.4,33.3,55.2C22.4,59.1,11.2,60,-0.3,60.5C-11.8,61.1,-23.6,61.2,-35.6,58C-47.7,54.8,-59.9,48.2,-56.2,38C-52.6,27.8,-33,13.9,-25.1,4.6C-17.2,-4.8,-21,-9.6,-23.1,-17C-25.2,-24.5,-25.5,-34.6,-21.4,-41.2C-17.2,-47.7,-8.6,-50.7,-0.2,-50.3C8.2,-50,16.4,-46.3,28.3,-44.2Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
			);
		case 8:
			return (
				<div className={className} style={baseStyles}>
					<svg
						className="blob"
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill={color}
							d="M36.1,-60.1C45,-57.5,49.1,-44.1,51.4,-32.3C53.7,-20.5,54.2,-10.2,51.1,-1.8C48,6.7,41.3,13.3,35.5,19C29.6,24.6,24.6,29.3,18.8,39.8C13.1,50.3,6.5,66.8,-2.2,70.6C-10.9,74.4,-21.9,65.6,-31.6,57.3C-41.3,49.1,-49.8,41.4,-52.2,31.9C-54.6,22.4,-51,11.2,-49.9,0.6C-48.7,-9.9,-50.1,-19.8,-45.6,-25.6C-41,-31.4,-30.5,-33,-21.9,-35.8C-13.3,-38.6,-6.7,-42.6,3.5,-48.6C13.6,-54.6,27.3,-62.7,36.1,-60.1Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
			);
		case 9:
			return (
				<div className={className} style={baseStyles}>
					<svg
						className="blob"
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill={color}
							d="M41.2,-51.8C55.8,-46,71.9,-37.3,76.2,-24.6C80.6,-11.9,73.3,4.8,64.8,18.1C56.4,31.4,46.8,41.3,35.8,48.7C24.8,56,12.4,60.7,-2.3,63.9C-17.1,67.1,-34.1,68.8,-45.2,61.4C-56.2,54.1,-61.2,37.8,-67.2,21.4C-73.2,4.9,-80.2,-11.7,-77.3,-26.5C-74.3,-41.2,-61.5,-54.1,-47,-59.9C-32.5,-65.7,-16.2,-64.3,-1.5,-62.3C13.3,-60.2,26.5,-57.5,41.2,-51.8Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
			);
		case 10:
			return (
				<div className={className} style={baseStyles}>
					<svg
						className="blob"
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill={color}
							d="M35.6,-55.7C45,-56.2,50.9,-44.5,49.4,-33.1C47.9,-21.8,39.2,-10.9,39.3,0.1C39.4,11.1,48.5,22.2,49.2,32.1C49.9,42.1,42.2,50.9,32.6,53.4C23,56,11.5,52.2,-2.4,56.4C-16.3,60.5,-32.6,72.6,-46.8,72.7C-61,72.8,-73.2,61.1,-69.5,47C-65.8,32.9,-46.2,16.4,-39.1,4.1C-32,-8.2,-37.3,-16.4,-37.6,-24.6C-37.9,-32.9,-33.3,-41.2,-26.2,-42C-19.1,-42.9,-9.5,-36.2,1.8,-39.3C13.1,-42.3,26.1,-55.1,35.6,-55.7Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
			);
	}
};

export default Blobs;
