import React from "react";

interface Props {
	children: string;
	subtitle?: string;
}

const Heading = ({ children, subtitle }: Props) => {
	return (
		<div className="w-full h-fit flex items-center justify-center">
			<div className="w-max">
				<h1 className="text-center font-extralight text-secondary text-4xl md:text-6xl px-10 mb-4">
					{children}
				</h1>
				<hr className="border-b border-accent max-w-[80vw] mx-auto" />
				{subtitle && (
					<p className="text-xl md:text-3xl text-center font-light mt-4">
						{subtitle}
					</p>
				)}
			</div>
		</div>
	);
};

export default Heading;
