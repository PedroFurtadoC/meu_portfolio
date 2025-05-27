import openNewTab from "../functions/NewTab";
import FontelloIcon from "./shared/FontelloIcon";

export default function Footer() {
	return (
		<footer
			className="bg-primary"
			style={{ boxShadow: "inset 0 10px 10px 0 #00000060" }}
		>
			<div
				data-aos="fade"
				className="wrapper font-[family-name:var(--font-geist-mono)] pt-20 lg:pt-36 pb-20 flex flex-col lg:flex-row justify-between lg:items-center"
			>
				<div className="mb-10 lg:mb-0">
					<p className="text-3xl font-bold mb-2">
						Pedro Furtado Cunha
					</p>
					<p className="text-base">
						Todos os direitos reservados &copy; 2025 - Pedro Furtado
						Cunha
					</p>
				</div>
				<div>
					<p className="lg:text-right text-base mb-2">
						Portfólio desenvolvido usando Next.js e Tailwind
					</p>
					<p className="lg:text-right text-base">
						Confira o repositório no{" "}
						<span
							role="button"
							onClick={() =>
								openNewTab(
									"https://github.com/PedroFurtadoC/meu_portfolio"
								)
							}
							className="text-violet-300 hover:cursor-pointer"
						>
							Github
							<FontelloIcon
								name={"icon-github-circled"}
								classStyling="text-lg ml-1"
							/>
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
