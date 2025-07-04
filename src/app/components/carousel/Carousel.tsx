import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./style/embla.css";
import certificates from "@/app/content/certificate-content";

const OPTIONS: EmblaOptionsType = { loop: true };

const Carousel = () => {
	return <EmblaCarousel slides={certificates} options={OPTIONS} />;
};

export default Carousel;
