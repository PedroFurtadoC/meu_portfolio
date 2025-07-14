import openNewTab from "../functions/NewTab";
import openEmail from "../functions/OpenEmail";
import FontelloIcon from "../components/shared/FontelloIcon";
import useHeaderAnchor from "@/app/hooks/UseHeaderAnchor";

export default function AboutMe() {
	const aboutRef = useHeaderAnchor("about-me", { threshold: 0.01 });

	return (
		<section id="about-me" className="bg-background">
			<div
				ref={aboutRef}
				data-aos="fade-up"
				className="relative flex flex-row items-center justify-center w-screen"
			>
				<div
					id="about-me-div"
					className="flex flex-col my-20 px-5 py-8 md:p-20 wrapper rounded-[2rem] bg-primary text-light-contrast"
				>
					<p className="text-2xl md:text-3xl mb-2 font-light tracking-[0.5em] md:tracking-[0.75em]">
						SOBRE MIM
					</p>
					<h1 className="text-4xl md:text-[80px] md:leading-[84px] mb-3 text-[#00a8e8] font-extrabold">
						Pedro Furtado Cunha
					</h1>
					<h2 className="text-2xl md:text-3xl text-extra-blue font-bold">
						Ribeirão Preto, SP
					</h2>
					<div className="flex flex-col gap-3 my-10">
						<p className="text-xl md:text-2xl">
							Sou desenvolvedor e consultor de tecnologia com base
							em Ribeirão Preto, atendendo presencialmente na
							região e online pessoas e empresas de qualquer
							lugar.
						</p>
						<p className="text-xl md:text-2xl">
							Atuo no desenvolvimento de sites, sistemas
							personalizados, automações sob medida e consultorias
							de TI, sempre com foco em soluções que realmente
							funcionam.
						</p>
						<p className="text-xl md:text-2xl">
							Sou apaixonado por criar ferramentas digitais que
							fazem sentido. Gosto de entender o problema com
							calma, escutar com atenção e propor ideias
							inteligentes que se transformam em soluções seguras,
							leves e bem estruturadas.
						</p>
						<p className="text-xl md:text-2xl">
							Acredito que a tecnologia deve ser acessível e
							humana. Por isso, cada projeto que entrego é pensado
							com organização, criatividade e estratégia, sempre
							buscando o melhor resultado para quem confia em mim.
							Cada entrega carrega meu cuidado, minha escuta e meu
							propósito.
						</p>
					</div>
					<div className="flex flex-row">
						<button
							onClick={() =>
								openNewTab(
									"https://www.linkedin.com/in/pedro-furtado-33159023b/"
								)
							}
							className="h-16 w-full rounded-xl text-xl font-bold bg-extra-blue shadow-md shadow-[#0005] hover:bg-blue-hover transition-all"
						>
							<FontelloIcon
								name={"icon-linkedin"}
								classStyling="mr-1 text-2xl"
							/>{" "}
							Linkedin
						</button>
						<button
							onClick={() =>
								openEmail("pedrocunha.furtado@gmail.com")
							}
							className="h-16 w-full rounded-xl text-xl font-bold bg-fixed-button ml-4 shadow-md shadow-[#0005] hover:bg-fixed-button-hover transition-all"
						>
							<FontelloIcon
								name={"icon-mail-alt"}
								classStyling="mr-1 text-2xl"
							/>{" "}
							E-mail
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
