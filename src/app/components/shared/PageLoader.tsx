import React, { useEffect } from "react";

interface Props {
	isLoading: boolean;
}

const PageLoader = ({ isLoading }: Props) => {
	useEffect(() => {
		if (isLoading) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [isLoading]);

	const text = "CARREGANDO CONTEÚDO...";

	return (
		<div style={{ opacity: isLoading ? 1 : 0 }} className="loading-screen">
			{isLoading && (
				<div className="flex flex-col items-center gap-10">
					<div className="loader" />
					<div className="wavy-text">
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
