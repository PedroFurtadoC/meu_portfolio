import { useState } from "react";
import FontelloIcon from "../shared/FontelloIcon";
import navigate from "../../functions/Navigate";
import useHeaderAnchorStore from "../../stores/headerAnchorStore";
import ThemeSwitch from "../customSwitch/ThemeSwitch";

export default function Header() {
	const [isMenuVisible, setMenuVisible] = useState(false);

	const activeAnchor = useHeaderAnchorStore((s) => s.activeAnchor);

	return (
		<>
			<header className="select-none fixed h-20 w-screen top-0 bg-background shadow-lg shadow-[#0003] z-30">
				<div className="flex flex-row items-center justify-between wrapper">
					<p className="text-xl font-bold">Pedro Furtado Cunha</p>
					<nav
						id="nav-header"
						className="flex-row gap-6 items-center"
					>
						{/* <p
							onClick={() => navigate("#home")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "home" && "active-link"
							}`}
						>
							Home
						</p> */}
						<p
							onClick={() => navigate("#about-me")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "about-me" && "active-link"
							}`}
						>
							Sobre mim
						</p>
						<p
							onClick={() => navigate("#solutions")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "solutions" && "active-link"
							}`}
						>
							Soluções
						</p>
						<p
							onClick={() => navigate("#depoiments")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "depoiments" && "active-link"
							}`}
						>
							Depoimentos
						</p>
						<p
							onClick={() => navigate("#FAQ")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "FAQ" && "active-link"
							}`}
						>
							FAQ
						</p>
						<p
							onClick={() => navigate("#projects")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "projects" && "active-link"
							}`}
						>
							Projetos
						</p>
						<p
							onClick={() => navigate("#curriculum")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "curriculum" && "active-link"
							}`}
						>
							Currículo
						</p>
						<p
							onClick={() => navigate("#contact")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "contact" && "active-link"
							}`}
						>
							Contato
						</p>
						<br />
						<ThemeSwitch />
					</nav>
					<div
						onClick={() => setMenuVisible(true)}
						id="header-menu-button"
						className="flex-col justify-center items-center aspect-square h-[60%] rounded-lg bg-nav shadow-sm shadow-black hover:bg-extra-blue transition-all"
					>
						<span className="w-1/2 h-1 rounded-full bg-[#f0f0f0]"></span>
						<span className="w-1/2 h-1 rounded-full bg-[#f0f0f0] my-1.5"></span>
						<span className="w-1/2 h-1 rounded-full bg-[#f0f0f0]"></span>
					</div>
				</div>
			</header>
			<div
				id="menu-wrapper"
				className={`select-none w-screen h-screen fixed z-40 flex flex-row ${
					isMenuVisible ? "left-0" : "left-[100%]"
				} transition-all`}
			>
				<div
					onClick={() => setMenuVisible(false)}
					id="touchable-area"
					className="h-full w-full"
				></div>
				<nav
					id="nav-side"
					className={`flex flex-col bg-nav w-[500px] h-full`}
				>
					<div
						className="m-4 self-end"
						onClick={() => setMenuVisible(false)}
					>
						<FontelloIcon
							name={"icon-cancel"}
							classStyling="text-4xl text-[#f0f0f0]"
						/>
					</div>
					<div className="flex flex-col gap-6 px-5 pt-5">
						{/* <p
							onClick={() => navigate("#home")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "home" && "active-link"
							}`}
						>
							Home
						</p> */}
						<p
							onClick={() => navigate("#about-me")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "about-me" && "active-link"
							}`}
						>
							Sobre mim
						</p>
						<p
							onClick={() => navigate("#solutions")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "solutions" && "active-link"
							}`}
						>
							Soluções
						</p>
						<p
							onClick={() => navigate("#depoiments")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "depoiments" && "active-link"
							}`}
						>
							Depoimentos
						</p>
						<p
							onClick={() => navigate("#FAQ")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "FAQ" && "active-link"
							}`}
						>
							FAQ
						</p>
						<p
							onClick={() => navigate("#projects")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "projects" && "active-link"
							}`}
						>
							Projetos
						</p>
						<p
							onClick={() => navigate("#curriculum")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "curriculum" && "active-link"
							}`}
						>
							Currículo
						</p>
						<p
							onClick={() => navigate("#contact")}
							className={`hover:scale-105 transition-all text-lg font-bold hover:cursor-pointer ${
								activeAnchor === "contact" && "active-link"
							}`}
						>
							Contato
						</p>
						<ThemeSwitch />
					</div>
				</nav>
			</div>
		</>
	);
}
