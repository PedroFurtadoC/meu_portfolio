import useHeaderAnchor from "@/app/hooks/UseHeaderAnchor";
import Heading from "../components/shared/Heading";
import FAQContent, { FAQ } from "@/app/content/faq-content";
import FontelloIcon from "../components/shared/FontelloIcon";
import { useEffect, useRef, useState } from "react";
import useCalendlyStore from "@/app/stores/calendlyStore";

const FAQSection = () => {
	const FAQRef = useHeaderAnchor("FAQ");

	const toggleCalendly = useCalendlyStore((s) => s.toggleCalendly);

	return (
		<div id="FAQ" className="bg-background w-screen py-20">
			<section
				className="wrapper flex flex-col text-light-contrast"
				data-aos="fade-up"
				ref={FAQRef}
			>
				<Heading subtitle="Perguntas frequentes">FAQ</Heading>
				<div className="flex flex-col py-20 gap-[20px]">
					{FAQContent.map((FAQ, index) => (
						<FAQCard FAQ={FAQ} key={FAQ.question + index} />
					))}
				</div>
				<button
					onClick={toggleCalendly}
					className="self-center h-16 w-[90%] md:w-1/2 xl:w-1/3 rounded-xl font-bold text-xl bg-primary-button shadow-md shadow-[#0005] hover:bg-primary-button-hover transition-all"
				>
					Quero entrar em contato{" "}
					<FontelloIcon name="icon-right" classStyling="ml-2" />
				</button>
			</section>
		</div>
	);
};

export default FAQSection;

const FAQCard = ({ FAQ }: { FAQ: FAQ }) => {
	const [expanded, setExpanded] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [maxHeight, setMaxHeight] = useState("0px");

	useEffect(() => {
		if (expanded && contentRef.current) {
			setMaxHeight(contentRef.current.scrollHeight + "px");
		} else {
			setMaxHeight("0px");
		}
	}, [expanded]);

	return (
		<button
			className="w-full h-auto px-10 py-3 bg-primary rounded-3xl transition-all text-left"
			aria-label={"Abrir FAQ: " + FAQ.question}
			onClick={() => setExpanded(!expanded)}
		>
			<div className="flex justify-between items-center">
				<h2 className="text-xl font-bold">{FAQ.question}</h2>
				<FontelloIcon
					name={expanded ? "icon-up-open" : "icon-down-open"}
					classStyling="text-3xl"
				/>
			</div>
			<div
				ref={contentRef}
				style={{
					overflow: "hidden",
					transition: "max-height 0.5s ease-in-out, margin-top 0.5s",
					maxHeight,
					marginTop: expanded ? "20px" : "0px",
				}}
			>
				<p className="font-light pb-5">{FAQ.answer}</p>
			</div>
		</button>
	);
};
