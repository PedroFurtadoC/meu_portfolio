import React from "react";

interface HighlighterProps {
	text: string;
	highlights: string[];
	className?: string;
	highlightClassName?: string;
}

export const Highlighter: React.FC<HighlighterProps> = ({
	text,
	highlights,
	className,
	highlightClassName = "font-bold",
}) => {
	if (!highlights.length) return <p className={className}>{text}</p>;

	const escaped = highlights.map((h) =>
		h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
	);

	const regex = new RegExp(`(${escaped.join("|")})`, "gi");
	const parts = text.split(regex);

	return (
		<p className={className}>
			{parts.map((part, index) =>
				highlights.some(
					(h) => h.toLowerCase() === part.toLowerCase()
				) ? (
					<span key={index} className={highlightClassName}>
						{part}
					</span>
				) : (
					<React.Fragment key={index}>{part}</React.Fragment>
				)
			)}
		</p>
	);
};
