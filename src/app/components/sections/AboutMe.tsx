import { useEffect } from "react";
import openNewTab from "../../functions/NewTab";
import openEmail from "../../functions/OpenEmail";
import useIsVisible from "../../hooks/UseIsVisible";
import useHeaderAnchorStore from "../../stores/headerAnchorStore";
import FontelloIcon from "../shared/FontelloIcon";

export default function AboutMe() {
	const [aboutRef, isVisible] = useIsVisible({ threshold: 0.1 });
	const setAnchor = useHeaderAnchorStore((s) => s.setActiveAnchor);

	useEffect(() => {
		if (isVisible) {
			setAnchor("about-me");
		}
	}, [isVisible]);

	return (
		<section id="about-me" className="bg-background">
			<div
				ref={aboutRef}
				data-aos="fade-up"
				className="relative flex flex-row items-center justify-center w-screen"
			>
				<div
					id="about-me-div"
					className="flex flex-col my-20 px-5 py-8 md:p-20 wrapper rounded-[2rem] bg-primary"
				>
					<p className="text-2xl md:text-3xl mb-2 font-light tracking-[0.75em]">
						SOBRE MIM
					</p>
					<h1 className="text-4xl md:text-[80px] leading-[84px] mb-3 text-secondary font-extrabold">
						Pedro Furtado Cunha
					</h1>
					<h2 className="text-2xl md:text-3xl text-extra-blue font-bold">
						Ribeirão Preto, SP
					</h2>
					<div className="my-10">
						<p className="text-xl md:text-2xl mb-3">
							Sou engenheiro da computação, desenvolvedor e
							consultor de tecnologia com foco total em soluções
							que funcionam de verdade. Não acredito em
							complicação. Acredito em entender bem o problema,
							propor ideias com clareza e transformar tudo isso em
							sistemas simples, seguros e eficientes. Gosto de
							escutar com atenção, pensar com lógica e entregar
							com qualidade.
						</p>
						<p className="text-xl md:text-2xl">
							Trabalho com automações, sites, sistemas e
							consultorias em tecnologia, sempre buscando o que
							realmente importa: resultado com leveza. Atendo
							pessoas e negócios de qualquer lugar, com
							organização, propósito e um olhar que combina
							técnica, empatia e estratégia. Cada projeto que
							entrego é uma extensão do meu cuidado.
						</p>
					</div>
					<div className="flex flex-row">
						<button
							onClick={() =>
								openNewTab(
									"https://www.linkedin.com/in/pedro-furtado-33159023b/"
								)
							}
							className="h-16 w-full rounded-xl text-xl font-bold bg-extra-blue shadow-md shadow-[#0005] hover:bg-[#0f6086] transition-all"
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
							className="h-16 w-full rounded-xl text-xl font-bold bg-accent ml-4 shadow-md shadow-[#0005] hover:bg-[#b35b18] transition-all"
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
