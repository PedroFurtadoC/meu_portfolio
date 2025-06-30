import React, { useEffect, useRef, useState } from "react";
import Heading from "../shared/Heading";
import { depoiments } from "@/app/content/depoiments-content";
import useHeaderAnchor from "@/app/hooks/UseHeaderAnchor";

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

function DepoimentsSlider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [atStart, setAtStart] = useState(true);
	const [atEnd, setAtEnd] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

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

			// Chegou no início?
			setAtStart(currentIndex === 0);

			// Chegou no fim?
			const maxScrollLeft = container.scrollWidth - container.clientWidth;
			const isAtEnd = scrollPosition >= maxScrollLeft - 10;
			setAtEnd(isAtEnd);
		}
	}, [currentIndex]);

	return (
		<div className="w-screen mt-20">
			<div
				className="flex overflow-hidden px-5"
				ref={containerRef}
				style={{ scrollBehavior: "smooth" }}
			>
				{depoiments.map((item, index) => (
					<div
						key={index}
						className="flex flex-col min-w-[90%] md:min-w-[650px] lg:min-w-[780px] md:h-[300px] p-10 box-border bg-primary mx-5 rounded-xl gap-3"
					>
						<h2 className="text-4xl font-bold text-accent">
							{item.name}
						</h2>
						<h3 className="font-[700] text-lg">{item.role}</h3>
						<p className="font-[400] text-lg">{item.depoiment}</p>
					</div>
				))}
			</div>

			<div className="wrapper flex justify-between mt-20 px-10 text-6xl">
				<button
					onClick={handlePrev}
					className={`transition-colors ${
						atStart ? "text-muted" : "text-accent"
					}`}
					disabled={atStart}
					aria-label="Voltar depoimento"
				>
					&#x276E;
				</button>
				<button
					onClick={handleNext}
					className={`transition-colors ${
						atEnd ? "text-muted" : "text-accent"
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
