import { ReactElement } from "react";
import useCalendlyStore from "../stores/calendlyStore";

export interface FAQ {
	question: string;
	answer: string | ReactElement;
}

const FAQContent: FAQ[] = [
	{
		question: "Pra quem é meu trabalho?",
		answer: "Para quem quer simplificar, automatizar ou resolver algo com tecnologia de forma leve e funcional. Atendo pessoas e empresas que buscam clareza, organização e soluções que realmente façam sentido no dia a dia.",
	},
	{
		question: "Preciso entender tecnologia para trabalhar com você?",
		answer: "Não. Meu trabalho é justamente traduzir o que parece complexo em soluções simples, acessíveis e que funcionam. Eu escuto, entendo sua realidade e construo algo que faz sentido para você.",
	},
	{
		question: "Atendo empresas ou pessoas físicas?",
		answer: "Atendo os dois. Trabalho com empreendedores, equipes e também com pessoas físicas que precisam de suporte técnico, automações sob medida ou soluções digitais práticas.",
	},
	{
		question: "Como marcar uma reunião comigo?",
		answer: <Meeting />,
	},
	{
		question: "Quais são as etapas do seu trabalho?",
		answer: "Tudo começa pela escuta. A partir do que você traz, eu organizo o cenário, proponho uma solução clara e coloco em prática com foco em leveza, desempenho e resultado real. Cada etapa é adaptada à sua realidade.",
	},
];

export default FAQContent;

function Meeting() {
	const toggleCalendly = useCalendlyStore((s) => s.toggleCalendly);
	return (
		<>
			É simples. Aqui mesmo no site você escolhe o horário e agenda direto
			comigo pelo calendário interativo. A conversa é rápida, objetiva e
			focada em entender o que você precisa. Se preferir, já pode clicar
			aqui em{" "}
			<span
				className="text-accent font-semibold"
				onClick={toggleCalendly}
			>
				MARCAR REUNIÃO
			</span>{" "}
			agora.
		</>
	);
}
