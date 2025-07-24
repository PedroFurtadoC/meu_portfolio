import { RefObject, useEffect, useState } from "react";

interface Dimension {
	elementWidth: number;
	elementHeight: number;
}

/**
 * Hook que monitora as dimensões (largura e altura) de um elemento HTML usando ResizeObserver.
 *
 * @param elementRef - Referência ao elemento DOM que será observado
 * @returns Um objeto com as dimensões atuais { elementWidth, elementHeight }
 */
const useSize = (elementRef: RefObject<HTMLElement | null>) => {
	const [dimensions, setDimensions] = useState<Dimension>({
		elementWidth: 100, // Valor inicial padrão
		elementHeight: 100,
	});

	useEffect(() => {
		if (!elementRef.current) return;

		// Cria o observer para monitorar mudanças no tamanho do elemento
		const observer = new ResizeObserver((entries) => {
			const entry = entries[0];

			// Usa borderBoxSize se disponível para maior precisão
			if (entry.borderBoxSize && entry.borderBoxSize.length > 0) {
				setDimensions({
					elementWidth: entry.borderBoxSize[0].inlineSize,
					elementHeight: entry.borderBoxSize[0].blockSize,
				});
			} else {
				// Fallback para contentRect se borderBoxSize não estiver disponível
				setDimensions({
					elementWidth: entry.contentRect.width,
					elementHeight: entry.contentRect.height,
				});
			}
		});

		observer.observe(elementRef.current);

		// Desconecta o observer ao desmontar o componente
		return () => observer.disconnect();
	}, [elementRef]);

	return dimensions;
};

export default useSize;
