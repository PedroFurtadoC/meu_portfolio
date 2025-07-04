import { ReactNode, useEffect } from "react";
import Portal from "./Portal";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
	useEffect(() => {
		if (!isOpen) return;
		const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<Portal>
			<div
				className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
				onClick={onClose}
			>
				<div
					className="max-w-[90vw] max-h-[90vh]"
					onClick={(e) => e.stopPropagation()}
				>
					{children}
				</div>
			</div>
		</Portal>
	);
}
