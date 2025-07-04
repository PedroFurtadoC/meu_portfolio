import { useEffect, useState } from "react";

const usePageLoading = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const MAX_WAIT = 5_000; // 5s de espera
		const fallbackTimer = setTimeout(() => {
			setIsLoading(false);
		}, MAX_WAIT);

		const handleLoad = () => {
			clearTimeout(fallbackTimer);
			setTimeout(() => setIsLoading(false), 2_000);
		};

		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
		}

		return () => {
			clearTimeout(fallbackTimer);
			window.removeEventListener("load", handleLoad);
		};
	}, []);

	return isLoading;
};

export default usePageLoading;
