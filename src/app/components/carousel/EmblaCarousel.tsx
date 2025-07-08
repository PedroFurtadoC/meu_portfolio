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

/* -------------------------------------------------------------------------- */
/* Tipo do componente principal                                               */
/* -------------------------------------------------------------------------- */
type PropType = { slides: Certificate[]; options?: EmblaOptionsType };

/* -------------------------------------------------------------------------- */
/* Viewport + slides      	                                                  */
/* -------------------------------------------------------------------------- */
const CarouselViewport = ({
	slides,
	onSlideClick,
	emblaRef,
}: {
	slides: Certificate[];
	onSlideClick: (idx: number) => void;
	emblaRef: (ref: HTMLDivElement | null) => void;
}) => (
	<div className="embla__viewport" ref={emblaRef}>
		<div className="embla__container">
			{slides.map((c, i) => (
				<div className="embla__slide" key={i}>
					<div className="embla__slide__number">
						<Image
							src={c.image}
							alt={c.description}
							loading="lazy"
							unoptimized
							onClick={() => onSlideClick(i)}
							className="brightness-[0.85] h-full w-auto rounded-2xl
                         border-4 border-accent cursor-pointer"
						/>
					</div>
					<p className="text-center mt-4">{c.description}</p>
				</div>
			))}
		</div>
	</div>
);

/* -------------------------------------------------------------------------- */
/* Setas + Dots do Embla                                                      */
/* -------------------------------------------------------------------------- */
const CarouselControls = ({
	selectedIndex,
	scrollSnaps,
	selectionScale,
	prevBtnDisabled,
	nextBtnDisabled,
	onPrevButtonClick,
	onNextButtonClick,
	onDotButtonClick,
}: {
	selectedIndex: number;
	scrollSnaps: number[];
	selectionScale: (i: number, len: number) => number;
	prevBtnDisabled: boolean;
	nextBtnDisabled: boolean;
	onPrevButtonClick: () => void;
	onNextButtonClick: () => void;
	onDotButtonClick: (i: number) => void;
}) => (
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
						(i === selectedIndex ? " embla__dot--selected" : "")
					}
				/>
			))}
		</div>
	</div>
);

/* -------------------------------------------------------------------------- */
/* Modal com navegação interna                                 				  */
/* -------------------------------------------------------------------------- */
const ModalGallery = ({
	open,
	current,
	slides,
	onClose,
	onPrev,
	onNext,
}: {
	open: boolean;
	current: number | null;
	slides: Certificate[];
	onClose: () => void;
	onPrev: () => void;
	onNext: () => void;
}) => (
	<Modal isOpen={open} onClose={onClose}>
		{current !== null && (
			<div className="text-[#f0f0f0] max-w-[90vw] max-h-[90vh]">
				<Image
					src={slides[current].image}
					alt={slides[current].description}
					unoptimized
					loading="lazy"
					className="rounded-lg max-h-[85vh] w-auto h-auto object-contain"
				/>

				{/* seta ‹ */}
				<button
					onClick={(e) => {
						e.stopPropagation();
						onPrev();
					}}
					aria-label="Anterior"
					className="absolute left-5 bottom-5 md:top-1/2 -translate-y-1/2
                     text-4xl select-none h-[80px] aspect-square"
				>
					&#x276E;
				</button>

				{/* seta › */}
				<button
					onClick={(e) => {
						e.stopPropagation();
						onNext();
					}}
					aria-label="Próximo"
					className="absolute right-5 bottom-5 md:top-1/2 -translate-y-1/2
                     text-4xl select-none h-[80px] aspect-square"
				>
					&#x276F;
				</button>
			</div>
		)}
	</Modal>
);

/* -------------------------------------------------------------------------- */
/* Componente principal                                                       */
/* -------------------------------------------------------------------------- */
const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
	/* ------------ Embla ------------ */
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

	/* ------------ Modal ------------ */
	const [modalIndex, setModalIndex] = useState<number | null>(null);
	const openModal = (i: number) => setModalIndex(i);
	const closeModal = () => setModalIndex(null);

	const goTo = (i: number) => {
		setModalIndex(i);
		emblaApi?.scrollTo(i);
	};
	const modalPrev = () =>
		modalIndex !== null &&
		goTo((modalIndex - 1 + slides.length) % slides.length);
	const modalNext = () =>
		modalIndex !== null && goTo((modalIndex + 1) % slides.length);

	/* ← / → / Esc dentro do modal */
	useEffect(() => {
		if (modalIndex === null) return;
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
			if (e.key === "ArrowLeft") {
				e.preventDefault();
				modalPrev();
			}
			if (e.key === "ArrowRight") {
				e.preventDefault();
				modalNext();
			}
		};
		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [modalIndex]);

	/* ------------ render ------------ */
	return (
		<>
			<section className="embla">
				<CarouselViewport
					slides={slides}
					onSlideClick={openModal}
					emblaRef={viewportRef}
				/>

				<CarouselControls
					selectedIndex={selectedIndex}
					scrollSnaps={scrollSnaps}
					selectionScale={selectionScale}
					prevBtnDisabled={prevBtnDisabled}
					nextBtnDisabled={nextBtnDisabled}
					onPrevButtonClick={onPrevButtonClick}
					onNextButtonClick={onNextButtonClick}
					onDotButtonClick={onDotButtonClick}
				/>
			</section>

			<ModalGallery
				open={modalIndex !== null}
				current={modalIndex}
				slides={slides}
				onClose={closeModal}
				onPrev={modalPrev}
				onNext={modalNext}
			/>
		</>
	);
};

export default EmblaCarousel;
