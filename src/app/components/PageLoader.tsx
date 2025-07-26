import React, { useEffect, useState } from "react";

interface Props {
	isLoading: boolean;
}

const PageLoader = ({ isLoading }: Props) => {
	const [shouldRender, setShouldRender] = useState(isLoading); // Controla se o loader deve ser renderizado

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (isLoading) {
			setShouldRender(true); // Mostrar loader imediatamente
			document.body.style.overflowY = "hidden"; // Bloqueia scroll da página enquanto carrega
		} else {
			document.body.style.overflowY = "auto"; // Libera scroll quando não está carregando
			// Após delay, esconde loader para permitir transição suave
			timeout = setTimeout(() => {
				setShouldRender(false);
			}, 1100);
		}

		// Limpa timeout se o componente desmontar ou isLoading mudar
		return () => clearTimeout(timeout);
	}, [isLoading]);

	const text = "CARREGANDO CONTEÚDO...";

	if (!shouldRender) return null; // Não renderiza nada se não deve mostrar

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
