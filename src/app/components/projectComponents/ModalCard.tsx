import { PContent } from "@/app/content/projects-content";
import { useEffect } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import FontelloIcon from "../shared/FontelloIcon";
import Portal from "../shared/Portal";
import { Layout1, Layout2, Layout3 } from "./Layouts";

interface Props {
	isVisible: boolean;
	onClose: () => void;
	content: PContent;
}

export default function ModalCard({ isVisible, onClose, content }: Props) {
	useEffect(() => {
		document.body.style.overflowY = isVisible ? "hidden" : "auto";
	}, [isVisible]);

	if (!isVisible) return null;

	const renderLayout = () => {
		switch (content.layout) {
			case 1:
				return <Layout1 content={content} />;
			case 2:
				return <Layout2 content={content} />;
			case 3:
				return <Layout3 content={content} />;
			case "custom":
				// Verifica se existe um CustomLayout e renderiza com as props
				return content.CustomLayout ? (
					<content.CustomLayout content={content} />
				) : null;
		}
	};

	return (
		<Portal>
			<div
				className={`fixed flex z-[100] h-screen w-screen bg-[#000b] justify-center items-center backdrop-blur-sm`}
				style={{ right: 0, bottom: 0 }}
			>
				<div className="relative minimalistic animated-shadow w-[90%] h-[90%] md:w-[80%] md:h-[80%] rounded-2xl pt-16 pb-6 bg-primary">
					<div className="absolute top-4 right-4">
						<button onClick={onClose}>
							<FontelloIcon
								name={"icon-cancel"}
								classStyling="text-3xl"
							/>
						</button>
					</div>
					<SimpleBar className="h-full overflow-y-auto overflow-x-hidden">
						<div className="flex flex-col px-5 md:px-36">
							{renderLayout()}
						</div>
					</SimpleBar>
				</div>
			</div>
		</Portal>
	);
}
