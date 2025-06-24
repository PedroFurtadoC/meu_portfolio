import { useEffect, useState } from "react";

const usePageLoaded = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const handleLoad = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
			/* setIsLoading(false); */
		};

		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
			return () => window.removeEventListener("load", handleLoad);
		}
	}, []);

	return isLoading;
};

export default usePageLoaded;
