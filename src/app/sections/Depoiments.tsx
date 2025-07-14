import React, { useEffect, useRef, useState } from "react";
import Heading from "../components/shared/Heading";
import { Depoiment, depoiments } from "@/app/content/depoiments-content";
import useHeaderAnchor from "@/app/hooks/UseHeaderAnchor";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

// =====================
// Section
// =====================
const Depoiments = () => {
	const depoimentsRef = useHeaderAnchor("depoiments");

	return (
		<div id="depoiments" className="bg-background py-20">
			<section
				className="w-screen"
				data-aos="fade-up"
				ref={depoimentsRef}
			>
				<Heading subtitle="Palavras de quem ja confiou em mim">
					DEPOIMENTOS
				</Heading>
				<DepoimentsSlider />
			</section>
		</div>
	);
};

export default Depoiments;

// =====================
// Slider
// =====================
function DepoimentsSlider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [atStart, setAtStart] = useState(true);
	const [atEnd, setAtEnd] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	// Variáveis de drag
	const startXRef = useRef<number | null>(null);
	const endXRef = useRef<number | null>(null);
	const isDraggingRef = useRef(false);

	const handlePrev = () => {
		const container = containerRef.current;
		if (!container) return;

		if (container.scrollLeft > 0) {
			setCurrentIndex((prev) => Math.max(prev - 1, 0));
		}
	};

	const handleNext = () => {
		const container = containerRef.current;
		if (!container) return;

		const maxScrollLeft = container.scrollWidth - container.clientWidth;

		if (container.scrollLeft < maxScrollLeft - 10) {
			setCurrentIndex((prev) => prev + 1);
		}
	};

	// Controle do index
	useEffect(() => {
		const container = containerRef.current;
		const item = container?.children[currentIndex] as
			| HTMLElement
			| undefined;

		if (container && item) {
			const containerWidth = container.clientWidth;
			const itemWidth = item.offsetWidth;

			const scrollPosition =
				item.offsetLeft - (containerWidth - itemWidth) / 2;

			container.scrollTo({
				left: scrollPosition,
				behavior: "smooth",
			});

			setAtStart(currentIndex === 0);

			const maxScrollLeft = container.scrollWidth - container.clientWidth;
			const isAtEnd = scrollPosition >= maxScrollLeft - 10;
			setAtEnd(isAtEnd);
		}
	}, [currentIndex]);

	// Eventos de mouse e touch
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// REFS PARA O MOUSE / TOUCH
		const startXRef = { current: null as number | null };
		const startYRef = { current: null as number | null };
		const endXRef = { current: null as number | null };
		const endYRef = { current: null as number | null };
		const isDraggingRef = { current: false };

		/* MOUSE */
		const handleMouseDown = (e: MouseEvent) => {
			startXRef.current = e.clientX;
			isDraggingRef.current = true;
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!isDraggingRef.current) return;
			endXRef.current = e.clientX;
		};

		const handleMouseUp = () => {
			if (
				!isDraggingRef.current ||
				startXRef.current === null ||
				endXRef.current === null
			)
				return;

			const deltaX = endXRef.current - startXRef.current;
			if (Math.abs(deltaX) > 50) {
				deltaX > 0 ? handlePrev() : handleNext();
			}

			startXRef.current = null;
			endXRef.current = null;
			isDraggingRef.current = false;
		};

		/* TOUCH */
		const handleTouchStart = (e: TouchEvent) => {
			startXRef.current = e.touches[0].clientX;
			startYRef.current = e.touches[0].clientY;
			isDraggingRef.current = true;
		};

		const handleTouchMove = (e: TouchEvent) => {
			if (!isDraggingRef.current) return;
			endXRef.current = e.touches[0].clientX;
			endYRef.current = e.touches[0].clientY;
		};

		const handleTouchEnd = () => {
			if (
				!isDraggingRef.current ||
				startXRef.current === null ||
				startYRef.current === null ||
				endXRef.current === null ||
				endYRef.current === null
			)
				return;

			const deltaX = endXRef.current - startXRef.current;
			const deltaY = endYRef.current - startYRef.current;

			// AJUSTE DE SENSIBILIDADE DO SWIPE
			const MIN_SWIPE_DISTANCE = 50;
			const HORIZONTAL_DOMINANCE = 1.2; // quanto maior, mais difícil acionar horizontal se tiver vertical

			if (
				Math.abs(deltaX) > MIN_SWIPE_DISTANCE &&
				Math.abs(deltaX) > Math.abs(deltaY) * HORIZONTAL_DOMINANCE
			) {
				deltaX > 0 ? handlePrev() : handleNext();
			}

			startXRef.current = null;
			startYRef.current = null;
			endXRef.current = null;
			endYRef.current = null;
			isDraggingRef.current = false;
		};

		// Listeners
		container.addEventListener("mousedown", handleMouseDown);
		container.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);

		container.addEventListener("touchstart", handleTouchStart);
		container.addEventListener("touchmove", handleTouchMove);
		window.addEventListener("touchend", handleTouchEnd);

		// Cleanup
		return () => {
			container.removeEventListener("mousedown", handleMouseDown);
			container.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);

			container.removeEventListener("touchstart", handleTouchStart);
			container.removeEventListener("touchmove", handleTouchMove);
			window.removeEventListener("touchend", handleTouchEnd);
		};
	}, []);

	return (
		<div className="w-screen mt-20">
			<div
				className="flex overflow-hidden px-5 text-light-contrast"
				ref={containerRef}
				style={{ scrollBehavior: "smooth" }}
			>
				{depoiments.map((item, index) => (
					<DepoimentCard key={item.name} data={item} />
				))}
			</div>

			<div className="wrapper flex justify-between mt-20 px-10 text-6xl">
				<button
					onClick={handlePrev}
					className={`transition-colors ${
						atStart ? "text-muted" : "text-fixed-button"
					}`}
					disabled={atStart}
					aria-label="Voltar depoimento"
				>
					&#x276E;
				</button>
				<button
					onClick={handleNext}
					className={`transition-colors ${
						atEnd ? "text-muted" : "text-fixed-button"
					}`}
					disabled={atEnd}
					aria-label="Avançar depoimento"
				>
					&#x276F;
				</button>
			</div>
		</div>
	);
}

// =====================
// Card
// =====================
function DepoimentCard({ data }: { data: Depoiment }) {
	const [expanded, setExpanded] = useState(false);
	const [hasOverflow, setHasOverflow] = useState(false);

	const contentRef = useRef<HTMLElement | null>(null);

	// mede sempre que texto mudar ou viewport for redimensionada
	useEffect(() => {
		const el = contentRef.current;
		if (!el) return;

		const measure = () => {
			// scrollHeight = altura total do conteúdo
			// clientHeight  = altura visível (limitada pelo max-h)
			setHasOverflow(el.scrollHeight > el.clientHeight);
		};

		// mede na montagem
		measure();

		// mede ao redimensionar a janela
		window.addEventListener("resize", measure);

		// mede se algo dentro do card mudar de tamanho
		// (caso depoimento chegue de API depois)
		const ro = new ResizeObserver(measure);
		ro.observe(el);

		return () => {
			window.removeEventListener("resize", measure);
			ro.disconnect();
		};
	}, [contentRef]);

	useEffect(() => {
		if (!expanded) {
			contentRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
		}
	}, [expanded]);

	return (
		<div className="flex flex-col min-w-[90%] md:min-w-[650px] lg:min-w-[780px] h-[600px] md:h-[350px] p-8 md:p-10 box-border bg-primary mx-5 rounded-xl">
			<SimpleBar
				scrollableNodeProps={{
					ref: contentRef,
				}}
				className="flex flex-col relative h-fit overflow-x-hidden"
				style={{
					overflowY: expanded ? "auto" : "hidden",
				}}
			>
				<h2 className="text-4xl font-bold text-accent mb-3">
					{data.name}
				</h2>
				<h3 className="font-bold text-lg mb-3">{data.role}</h3>
				<p
					className="text-lg leading-relaxed"
					style={{ paddingRight: expanded ? "20px" : "0px" }}
				>
					{data.depoiment}
				</p>
				{!expanded && hasOverflow && (
					<div
						className="pointer-events-none absolute bottom-0 left-0 w-full h-8
                        bg-gradient-to-t from-primary to-transparent
                        flex justify-end items-end pr-2 pb-0.5
                        text-lg font-bold select-none"
					/>
				)}
			</SimpleBar>

			{/* botão */}
			{hasOverflow && (
				<button
					onClick={() => setExpanded(!expanded)}
					aria-expanded={expanded}
					className="mt-2 self-end underline text-light-blue"
				>
					{expanded ? "ver menos" : "ver mais"}
				</button>
			)}
		</div>
	);
}
