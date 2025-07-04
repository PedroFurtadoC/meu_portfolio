import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { Certificate } from "@/app/content/certificate-content";
import {
	PrevButton,
	NextButton,
	usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Modal from "../shared/Modal";

type PropType = { slides: Certificate[]; options?: EmblaOptionsType };

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
	/* ---------------- Carousel ---------------- */
	const [viewportRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
	const onNavClick = useCallback((embla: EmblaCarouselType) => {
		embla?.plugins()?.autoplay?.reset();
	}, []);
	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
		emblaApi,
		onNavClick
	);
	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi, onNavClick);

	/* escala dos dots */
	const selectionScale = (idx: number, len: number) => {
		if (selectedIndex < 4) return idx < 4 ? 1 : idx === 4 ? 0.8 : 0;
		if (selectedIndex > len - 4)
			return idx > len - 4 ? 1 : idx === len - 4 ? 0.8 : 0;
		if (idx < selectedIndex - 2 || idx > selectedIndex + 2) return 0;
		if (idx < selectedIndex - 1 || idx > selectedIndex + 1) return 0.8;
		return 1;
	};

	/* ---------------- Modal ---------------- */
	const [modalIndex, setModalIndex] = useState<number | null>(null);
	const open = (idx: number) => setModalIndex(idx);
	const close = () => setModalIndex(null);

	/* Avança/volta */
	const goTo = (idx: number) => {
		setModalIndex(idx);
		emblaApi?.scrollTo(idx); // sincronizar com embla
	};
	const handlePrev = () =>
		modalIndex !== null &&
		goTo((modalIndex - 1 + slides.length) % slides.length);
	const handleNext = () =>
		modalIndex !== null && goTo((modalIndex + 1) % slides.length);

	useEffect(() => {
		if (modalIndex === null) return;
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") handlePrev();
			if (e.key === "ArrowRight") handleNext();
			if (e.key === "Escape") close();
		};
		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [modalIndex]);

	return (
		<>
			{/* ---------- CAROUSEL PRINCIPAL ---------- */}
			<section className="embla">
				<div className="embla__viewport" ref={viewportRef}>
					<div className="embla__container">
						{slides.map((c, i) => (
							<div className="embla__slide" key={i}>
								<div className="embla__slide__number">
									<Image
										src={c.image}
										alt={c.description}
										loading="lazy"
										unoptimized
										onClick={() => open(i)}
										className="brightness-[0.85] h-full w-auto rounded-2xl
                               border-4 border-accent cursor-pointer"
									/>
								</div>
								<p className="text-center mt-4">
									{c.description}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* setas */}
				<div className="embla__controls">
					<div className="embla__buttons">
						<PrevButton
							aria-label="Anterior"
							onClick={onPrevButtonClick}
							disabled={prevBtnDisabled}
						/>
						<NextButton
							aria-label="Próximo"
							onClick={onNextButtonClick}
							disabled={nextBtnDisabled}
						/>
					</div>

					{/* pontos */}
					<div className="embla__dots">
						{scrollSnaps.map((_, i, arr) => (
							<DotButton
								key={i}
								aria-label={`Ir para slide ${i + 1}`}
								onClick={() => onDotButtonClick(i)}
								style={{
									scale: selectionScale(i, arr.length),
									display:
										selectionScale(i, arr.length) === 0
											? "none"
											: "block",
								}}
								className={
									"embla__dot transition-all" +
									(i === selectedIndex
										? " embla__dot--selected"
										: "")
								}
							/>
						))}
					</div>
				</div>
			</section>

			{/* ---------- MODAL  ---------- */}
			<Modal isOpen={modalIndex !== null} onClose={close}>
				{modalIndex !== null && (
					<div className="text-[#f0f0f0]">
						{/* Imagem atual */}
						<Image
							src={slides[modalIndex].image}
							alt={slides[modalIndex].description}
							unoptimized
							loading="lazy"
							className="rounded-lg max-h-[85vh] w-auto h-auto object-contain"
						/>

						{/* Botão ← */}
						<button
							onClick={handlePrev}
							aria-label="Anterior"
							className="absolute left-5 bottom-5 md:top-1/2 -translate-y-1/2
                         text-4xl leading-none select-none h-[80px] aspect-square rounded-full"
						>
							&#x276E;
						</button>

						{/* Botão → */}
						<button
							onClick={handleNext}
							aria-label="Próximo"
							className="absolute right-5 bottom-5 md:top-1/2 -translate-y-1/2
                         text-4xl leading-none select-none h-[80px] aspect-square"
						>
							&#x276F;
						</button>
					</div>
				)}
			</Modal>
		</>
	);
};

export default EmblaCarousel;
