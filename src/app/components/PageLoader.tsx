import React, { useEffect, useState } from "react";

interface Props {
	isLoading: boolean;
}

const PageLoader = ({ isLoading }: Props) => {
	const [shouldRender, setShouldRender] = useState(isLoading);

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (isLoading) {
			setShouldRender(true);
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
			timeout = setTimeout(() => {
				setShouldRender(false);
			}, 1100);
		}

		return () => clearTimeout(timeout);
	}, [isLoading]);

	const text = "CARREGANDO CONTEÚDO...";

	if (!shouldRender) return null;

	return (
		<div
			style={{
				opacity: isLoading ? 1 : 0,
				pointerEvents: isLoading ? "all" : "none",
			}}
			className="loading-screen"
		>
			{isLoading && (
				<div className="flex flex-col items-center gap-10">
					<div className="loader" />
					<div className="wavy-text text-[#f0f0f0]">
						{[...text].map((letter, index) => (
							<span
								key={letter + index}
								style={{
									animationDelay: `${index * 100}ms`,
									marginLeft: letter === " " ? "1rem" : "0px",
								}}
							>
								{letter}
							</span>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default PageLoader;
