import { useEffect, useState } from "react";
import { useThemeStore } from "../../stores/themeStore";

const usePageLoading = () => {
	const [isLoading, setIsLoading] = useState(true);

	const theme = useThemeStore((s) => s.theme);

	useEffect(() => {
		let retryCount = 0;
		const MAX_RETRIES = 3;
		const RETRY_INTERVAL = 5_000;
		let timeoutId: NodeJS.Timeout;

		const handleLoad = () => {
			clearTimeout(timeoutId);
			setTimeout(() => setIsLoading(false), 2_000);
		};

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

		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
		}

		// Timeout inicial
		timeoutId = setTimeout(waitForThemeOrTimeout, RETRY_INTERVAL);

		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener("load", handleLoad);
		};
	}, []);

	return isLoading;
};

export default usePageLoading;
