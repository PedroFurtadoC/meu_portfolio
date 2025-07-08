import { ReactNode, useEffect, useRef } from "react";
import Portal from "./Portal";
import FontelloIcon from "./FontelloIcon";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	closeButton?: boolean;
}

/**
 * Modal baseado em Portal.
 * Fecha ao clicar fora, apertar ESC ou no “X”.
 */
export default function Modal({
	isOpen,
	onClose,
	children,
	closeButton = true,
}: ModalProps) {
	useEffect(() => {
		if (!isOpen) return;

		const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", handleKey);

		return () => window.removeEventListener("keydown", handleKey);
	}, [isOpen, onClose]);

	const contentRef = useRef<HTMLDivElement>(null);

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (
			contentRef.current &&
			!contentRef.current.contains(e.target as Node)
		) {
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<Portal>
			{/* backdrop ---------------------------------------------------------- */}
			<div
				className="fixed inset-0 z-[999] bg-black/55 flex items-center justify-center"
				onClick={handleBackdropClick}
			>
				{/* conteúdo -------------------------------------------------------- */}
				<div
					ref={contentRef}
					className="max-w-[90vw] max-h-[90vh]"
					onClick={(e) => e.stopPropagation()}
				>
					{/* Botão “X” (opcional) ----------------------------------------- */}
					{closeButton && (
						<button
							aria-label="Fechar modal"
							onClick={(e) => {
								e.stopPropagation();
								onClose();
							}}
							className="absolute top-3 right-3 rounded-full bg-white/60 hover:bg-white
                         text-black text-xl leading-none aspect-square"
						>
							<FontelloIcon name="icon-cancel" />
						</button>
					)}

					{children}
				</div>
			</div>
		</Portal>
	);
}
