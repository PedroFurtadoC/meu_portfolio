import { Project } from "@/app/content/projects-content";
import { useState } from "react";
import ModalCard from "./ModalCard";

interface Props extends Project {
	aosDelay: string;
}

export default function ProjectCard({ aosDelay, ...rest }: Props) {
	const [isHovered, setIsHovered] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<ModalCard
				isVisible={modalVisible}
				onClose={() => setModalVisible(false)}
				content={rest.modalContent}
			/>
			<div
				data-aos="fade"
				data-aos-delay={aosDelay}
				className="animated-shadow relative h-96 w-72 bg-black rounded-2xl transition-all ease-in-out duration-200 m-10 select-none"
				onMouseEnter={() => {
					setTimeout(() => {
						setIsHovered(true);
					}, 100);
				}}
				onMouseLeave={() => {
					setTimeout(() => {
						setIsHovered(false);
					}, 100);
				}}
			>
				<div className="bg-black w-full h-full rounded-2xl">
					<div
						className={`w-full h-full rounded-2xl`}
						style={{
							backgroundImage: `url(${rest.picture})`,
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundColor: rest.bgColor,
						}}
					>
						<div className="card-background-gradient flex flex-col justify-end h-full w-full rounded-2xl transition-all ease-in-out duration-200 py-5 px-7 hover:backdrop-blur-sm">
							<p className="text-3xl font-bold font-[family-name:var(--font-geist-mono)]">
								{rest.title.charAt(0).toUpperCase() +
									rest.title.slice(1)}
							</p>
							<p
								className={`text-base font-[family-name:var(--font-geist-mono)] ${
									isHovered ? "flex" : "hidden"
								} mt-1`}
							>
								{rest.shortDescription}
							</p>
							<button
								onClick={() => {
									setTimeout(() => {
										setModalVisible(true);
									}, 100);
								}}
								className={`w-fit text-base font-[family-name:var(--font-geist-mono)] ${
									isHovered ? "flex" : "hidden"
								} my-3 p-1.5 border rounded-lg border-white`}
							>
								Veja mais!
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
