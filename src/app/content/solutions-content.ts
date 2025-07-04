export interface Solution {
	/* 
	A animação lottie deve ser
	colocada na pasta Public
	
	IMPORTANTE: sempre referenciar
	o / na string
	
	Ex: "/arquivo.lottie"
	*/
	lottie: string;
	title: string;
	text: string;
	optionalText?: string;
}

//IMPORTANTE: o "title" é utilizado como key, não podem haver repetições

export const solutionsContent: Solution[] = [
	{
		lottie: "/Automation.lottie",
		title: "Automações que organizam e economizam seu tempo",
		text: "Muita coisa que você faz manualmente pode ser automatizada de forma simples, segura e sob medida, crio fluxos inteligentes que conectam ferramentas, reduzem tarefas repetitivas e tornam sua rotina mais leve.",
		optionalText:
			"Você ganha tempo, reduz erros e passa a focar no que realmente importa.",
	},
	{
		lottie: "/WebPage.lottie",
		title: "Desenvolvimento web com foco em funcionalidade real",
		text: "Mais do que estética, um site ou sistema precisa funcionar bem, carregar rápido e ser fácil de usar, desenvolvo soluções digitais que combinam estrutura sólida, desempenho e experiência fluida.",
		optionalText:
			"Cada projeto é pensado para atender seu objetivo com leveza e inteligência.",
	},
	{
		lottie: "/Talking.lottie",
		title: "Consultoria em TI com visão técnica e humana",
		text: "Às vezes o problema não é a ferramenta, mas a falta de clareza, ofereço suporte técnico com explicações acessíveis, análise estratégica e orientações práticas.",
		optionalText:
			"Você entende o cenário, toma decisões com segurança e aplica a tecnologia da forma certa.",
	},
	{
		lottie: "/Puzzle.lottie",
		title: "Soluções práticas para problemas reais",
		text: "Se algo não está funcionando, se existe uma ideia travada ou se você simplesmente precisa de direção, posso ajudar, acompanho de perto, ouço com atenção e construo soluções aplicáveis, sob medida e focadas em resolver.",
		optionalText: "Tecnologia só tem valor quando melhora a sua realidade.",
	},
];
