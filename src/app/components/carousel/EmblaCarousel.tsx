import React, { useCallback, useState } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
	PrevButton,
	NextButton,
	usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Certificate } from "@/app/content/certificate-content";
import Portal from "../shared/Portal";
import Modal from "../shared/Modal";

type PropType = {
	slides: Certificate[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

	const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
		const autoplay = emblaApi?.plugins()?.autoplay;
		if (!autoplay) return;

		const resetOrStop =
			autoplay.options.stopOnInteraction === false
				? autoplay.reset
				: autoplay.stop;

		resetOrStop();
	}, []);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
		emblaApi,
		onNavButtonClick
	);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi, onNavButtonClick);

	/* const selectionScale = (index: number) => {
		if (index === selectedIndex) {
			return 1;
		} else if (index + 1 === selectedIndex || index - 1 === selectedIndex) {
			return 0.8;
		} else if (index + 2 === selectedIndex || index - 2 === selectedIndex) {
			return 0.6;
		} else if (index + 3 === selectedIndex || index - 3 === selectedIndex) {
			return 0.4;
		} else if (index + 2 === selectedIndex || index - 2 === selectedIndex) {
			return 0.2;
		} else {
			return 0;
		}
	}; */

	const selectionScale = (index: number, length: number) => {
		if (selectedIndex < 4) {
			if (index < 4) {
				return 1;
			} else if (index === 4) {
				return 0.8;
			} else {
				return 0;
			}
		} else if (selectedIndex > length - 4) {
			if (index > length - 4) {
				return 1;
			} else if (index === length - 4) {
				return 0.8;
			} else {
				return 0;
			}
		} else {
			if (index < selectedIndex - 2 || index > selectedIndex + 2) {
				return 0;
			} else if (index < selectedIndex - 1 || index > selectedIndex + 1) {
				return 0.8;
			} else {
				return 1;
			}
		}
	};

	/* MODAL */
	const [activeImg, setActiveImg] = useState<{
		src: string;
		alt: string;
	} | null>(null);

	const open = useCallback(
		(src: string, alt: string) => setActiveImg({ src, alt }),
		[]
	);
	const close = () => setActiveImg(null);

	return (
		<>
			<section className="embla">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
						{slides.map((certificate, index) => (
							<div className="embla__slide" key={index}>
								<div className="embla__slide__number">
									<Image
										className="brightness-[0.85] h-full w-auto rounded-2xl border-4 border-accent cursor-pointer"
										src={certificate.image}
										unoptimized
										alt={certificate.description}
										loading="lazy"
										onClick={() =>
											open(
												certificate.image,
												certificate.description
											)
										}
									/>
								</div>
								<p className="text-center mt-4">
									{certificate.description}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="embla__controls">
					<div className="embla__buttons">
						<PrevButton
							aria-label="Slide anterior"
							onClick={onPrevButtonClick}
							disabled={prevBtnDisabled}
						/>
						<NextButton
							aria-label="Próximo slide"
							onClick={onNextButtonClick}
							disabled={nextBtnDisabled}
						/>
					</div>

					<div className="embla__dots">
						{scrollSnaps.map((_, index, arr) => (
							<DotButton
								style={{
									scale: selectionScale(index, arr.length),
									display:
										selectionScale(index, arr.length) === 0
											? "none"
											: "block",
								}}
								aria-label={"Ir para slide " + (index + 1)}
								key={index}
								onClick={() => onDotButtonClick(index)}
								className={
									"embla__dot".concat(
										index === selectedIndex
											? " embla__dot--selected"
											: ""
									) + " transition-all"
								}
							/>
						))}
					</div>
				</div>
			</section>
			<Modal isOpen={!!activeImg} onClose={close}>
				{activeImg && (
					<Image
						src={activeImg.src}
						alt={activeImg.alt}
						className="rounded-lg shadow-lg h-auto w-auto max-h-[85vh] max-w-[80vw]"
						unoptimized
					/>
				)}
			</Modal>
		</>
	);
};

export default EmblaCarousel;
