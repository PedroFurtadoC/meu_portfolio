import { ReactNode, useEffect } from "react";
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

		/* Fecha no ESC  */
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		/* Fecha no botão “voltar”  */
		const handlePop = () => {
			onClose();
		};

		window.addEventListener("keydown", handleKey);
		window.addEventListener("popstate", handlePop);

		// Adiciona uma entrada fantasma no histórico
		window.history.pushState({ modal: true }, "");

		return () => {
			window.removeEventListener("keydown", handleKey);
			window.removeEventListener("popstate", handlePop);

			// Ao fechar manualmente, removemos a entrada fantasma
			if (window.history.state?.modal) {
				window.history.back();
			}
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<Portal>
			{/* backdrop ---------------------------------------------------------- */}
			<div
				className="fixed inset-0 z-[999] bg-black/55 flex items-center justify-center"
				onClick={onClose}
			>
				{/* conteúdo -------------------------------------------------------- */}
				<div
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
