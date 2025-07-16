import useMobile from "@/app/utils/hooks/UseMobile";
import "./styles/scrollAnimation.css";

export default function ResponsiveIconScroll() {
	const isMobile = useMobile();

	return (
		<>
			<div
				className={`${
					isMobile ? "flex" : "hidden"
				} justify-center relative h-8 aspect-[2/3] rounded-md border-2 border-foreground`}
			>
				<div className="absolute h-0.5 w-1/2 bg-foreground rounded-b-sm"></div>
				<div id="touch-scroll"></div>
				<div className="absolute h-0.5 w-1/2 border-foreground rounded-sm bottom-0.5"></div>
			</div>
			<div
				className={`${
					isMobile ? "hidden" : "flex"
				} flex justify-center relative h-8 aspect-[2/3] rounded-3xl border-2 border-foreground`}
			>
				<div id="mouse-scroll"></div>
			</div>
		</>
	);
}
