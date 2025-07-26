import React, { useEffect, useRef, useState } from "react";
import Heading from "../components/shared/Heading";
import { Depoiment, depoiments } from "@/app/content/depoiments-content";
import useHeaderAnchor from "@/app/utils/hooks/UseHeaderAnchor";

// =====================
// Section
// =====================
const Depoiments = () => {
	// Cria uma ref associada à seção "depoiments"
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
	const [currentIndex, setCurrentIndex] = useState(0); // Índice do depoimento atual
	const [atStart, setAtStart] = useState(true); // Flag se está no primeiro depoimento
	const [atEnd, setAtEnd] = useState(false); // Flag se está no último depoimento
	const containerRef = useRef<HTMLDivElement>(null); // Ref para o container scrollável

	const handlePrev = () => {
		const container = containerRef.current;
		if (!container) return;

		if (container.scrollLeft > 0) {
			setCurrentIndex((prev) => Math.max(prev - 1, 0)); // Vai para o depoimento anterior, sem sair do índice 0
		}
	};

	const handleNext = () => {
		const container = containerRef.current;
		if (!container) return;

		const maxScrollLeft = container.scrollWidth - container.clientWidth;

		if (container.scrollLeft < maxScrollLeft - 10) {
			setCurrentIndex((prev) => prev + 1); // Vai para o próximo depoimento, sem ultrapassar o limite de scroll
		}
	};

	// Efeito para ajustar o scroll e atualizar flags quando o índice muda
	useEffect(() => {
		const container = containerRef.current;
		const item = container?.children[currentIndex] as
			| HTMLElement
			| undefined;

		if (container && item) {
			const containerWidth = container.clientWidth;
			const itemWidth = item.offsetWidth;

			// Centraliza o depoimento atual no container
			const scrollPosition =
				item.offsetLeft - (containerWidth - itemWidth) / 2;

			container.scrollTo({
				left: scrollPosition,
				behavior: "smooth",
			});

			setAtStart(currentIndex === 0); // Atualiza flag de início
			const maxScrollLeft = container.scrollWidth - container.clientWidth;
			setAtEnd(scrollPosition >= maxScrollLeft - 10); // Atualiza flag de fim
		}
	}, [currentIndex]);

	// Efeito para lidar com swipe e drag do mouse/toque
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// Refs para coordenadas do drag/swipe e estado de arrasto
		const startXRef = { current: null as number | null };
		const startYRef = { current: null as number | null };
		const endXRef = { current: null as number | null };
		const endYRef = { current: null as number | null };
		const isDraggingRef = { current: false };

		/* Eventos de mouse */
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
				deltaX > 0 ? handlePrev() : handleNext(); // Detecta swipe horizontal para esquerda/direita
			}

			// Reset estados do drag
			startXRef.current = null;
			endXRef.current = null;
			isDraggingRef.current = false;
		};

		/* Eventos de toque */
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

			// Define limites para swipe horizontal válido (distância e dominância)
			const MIN_SWIPE_DISTANCE = 50;
			const HORIZONTAL_DOMINANCE = 1.2;

			if (
				Math.abs(deltaX) > MIN_SWIPE_DISTANCE &&
				Math.abs(deltaX) > Math.abs(deltaY) * HORIZONTAL_DOMINANCE
			) {
				deltaX > 0 ? handlePrev() : handleNext(); // Swipe horizontal detectado
			}

			// Reset estados do drag
			startXRef.current = null;
			startYRef.current = null;
			endXRef.current = null;
			endYRef.current = null;
			isDraggingRef.current = false;
		};

		// Adiciona listeners para mouse e toque
		container.addEventListener("mousedown", handleMouseDown);
		container.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);

		container.addEventListener("touchstart", handleTouchStart);
		container.addEventListener("touchmove", handleTouchMove);
		window.addEventListener("touchend", handleTouchEnd);

		// Remove listeners no cleanup
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
	return (
		<div className="flex flex-col min-w-[90%] md:min-w-[650px] lg:min-w-[780px] h-[750px] md:h-[450px] xl:h-[380px] p-8 md:p-10 box-border bg-primary mx-5 rounded-xl">
			<h2 className="text-4xl font-bold text-accent mb-3">{data.name}</h2>
			<h3 className="font-bold text-lg mb-3">{data.role}</h3>
			<p className="text-lg leading-relaxed">{data.depoiment}</p>
		</div>
	);
}
