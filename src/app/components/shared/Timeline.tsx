export default function Timeline() {
	const points = [1, 2, 3]; // Simulação de conteúdo ainda não definido

	return (
		<div className="flex flex-col items-center mt-10">
			{/* Timeline vertical */}
			{points.map((_, index) => (
				<div key={index} className="flex flex-col items-center">
					{/* Conector acima (exceto o primeiro) */}
					{index !== 0 && <div className="h-10 w-1 bg-blue-500" />}

					{/* Ponto/quadrado */}
					<div className="w-40 h-24 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
						Placeholder
					</div>
				</div>
			))}
		</div>
	);
}
