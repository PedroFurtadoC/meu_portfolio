import { RefObject, useEffect, useState } from "react";

interface Dimension {
	elementWidth: number;
	elementHeight: number;
}

const useSize = (elementRef: RefObject<HTMLElement | null>) => {
	const [dimensions, setDimensions] = useState<Dimension>({
		elementWidth: 100,
		elementHeight: 100,
	});

	useEffect(() => {
		if (!elementRef.current) return;

		const observer = new ResizeObserver((entries) => {
			const entry = entries[0];
			if (entry.borderBoxSize && entry.borderBoxSize.length > 0) {
				setDimensions({
					elementWidth: entry.borderBoxSize[0].inlineSize,
					elementHeight: entry.borderBoxSize[0].blockSize,
				});
			} else {
				setDimensions({
					elementWidth: entry.contentRect.width,
					elementHeight: entry.contentRect.height,
				});
			}
		});

		observer.observe(elementRef.current);

		return () => observer.disconnect();
	}, [elementRef]);

	return dimensions;
};

export default useSize;
