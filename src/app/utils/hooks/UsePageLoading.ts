import { useEffect, useState } from "react";
import { useThemeStore } from "../../stores/themeStore";

/**
 * Hook que controla o estado de carregamento da página,
 * esperando o carregamento completo do documento e a definição do tema.
 * Implementa retries com timeout para aguardar o tema ser definido.
 *
 * @returns `true` enquanto a página estiver carregando, `false` após carregamento
 */
const usePageLoading = () => {
	const [isLoading, setIsLoading] = useState(true);
	const theme = useThemeStore((s) => s.theme);

	useEffect(() => {
		let retryCount = 0;
		const MAX_RETRIES = 3; // Máximo de tentativas para aguardar tema
		const RETRY_INTERVAL = 5_000; // Intervalo entre tentativas (ms)
		let timeoutId: NodeJS.Timeout;

		// Finaliza loading com um pequeno delay para suavizar transição
		const handleLoad = () => {
			clearTimeout(timeoutId);
			setTimeout(() => setIsLoading(false), 2_000);
		};

		// Tenta aguardar o tema ser definido, com retries e timeout
		const waitForThemeOrTimeout = () => {
			if (theme !== undefined) {
				setIsLoading(false);
				return;
			}

			if (retryCount >= MAX_RETRIES) {
				setIsLoading(false);
				return;
			}

			retryCount++;
			timeoutId = setTimeout(waitForThemeOrTimeout, RETRY_INTERVAL);
		};

		// Se a página já estiver carregada, finaliza o loading
		if (document.readyState === "complete") {
			handleLoad();
		} else {
			// Escuta o evento load para detectar carregamento da página
			window.addEventListener("load", handleLoad);
		}

		// Inicia a primeira tentativa de esperar o tema ser definido
		timeoutId = setTimeout(waitForThemeOrTimeout, RETRY_INTERVAL);

		// Cleanup: remove listener e cancela timeout ao desmontar
		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener("load", handleLoad);
		};
	}, []);

	return isLoading;
};

export default usePageLoading;
