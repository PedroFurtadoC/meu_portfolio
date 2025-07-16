import { useEffect } from "react";
import useHeaderAnchorStore from "../../stores/headerAnchorStore";
import useIsVisible from "./UseIsVisible";

export default function useHeaderAnchor(
	anchor: string,
	options: IntersectionObserverInit = { threshold: 0.001 }
) {
	const [elementRef, isVisible] = useIsVisible(options);
	const setAnchor = useHeaderAnchorStore((s) => s.setActiveAnchor);

	useEffect(() => {
		if (isVisible) {
			setAnchor(anchor);
		}
	}, [isVisible]);

	return elementRef;
}
