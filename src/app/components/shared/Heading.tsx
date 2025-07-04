import React, { CSSProperties } from "react";

interface Props {
	children: string;
	subtitle?: string;
	style?: CSSProperties;
}

const Heading = ({ children, subtitle, style }: Props) => {
	return (
		<div
			className="w-full h-fit flex items-center justify-center"
			style={style}
		>
			<div className="w-max">
				<h1 className="text-center font-extralight text-secondary text-4xl md:text-6xl px-10 mb-4">
					{children}
				</h1>
				<hr className="border-b border-accent max-w-[80vw] mx-auto" />
				{subtitle && (
					<p className="text-xl md:text-3xl text-center text-foreground font-light mt-4 px-5">
						{subtitle}
					</p>
				)}
			</div>
		</div>
	);
};

export default Heading;
