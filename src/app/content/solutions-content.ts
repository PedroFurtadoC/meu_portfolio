/**
 * Este arquivo define as **soluções** que o portfólio oferece.
 * Cada solução representa uma área de atuação, com destaque para automações, desenvolvimento web,
 * consultorias e resolução de problemas reais através da tecnologia.
 *
 * A animação Lottie deve ser colocada na pasta `public` e referenciada com o prefixo `/meu_portfolio/`.
 */

export interface Solution {
	/*
	Animação Lottie correspondente à solução.
	Deve estar na pasta `public` e conter o prefixo correto no caminho:
	Exemplo válido: "/meu_portfolio/arquivo.lottie"
	*/
	lottie: string;

	// Título da solução. Deve ser único, pois é usado como chave.
	title: string;

	// Texto principal que explica o que a solução oferece.
	text: string;

	// Texto adicional (opcional) com mais detalhes ou reforço do valor entregue.
	optionalText?: string;
}

// IMPORTANTE: o "title" é utilizado como chave (key), portanto, não pode se repetir.

export const solutionsContent: Solution[] = [
	{
		lottie: "/meu_portfolio/Automation.lottie",
		title: "Automações que organizam e economizam seu tempo",
		text: "Muita coisa que você faz manualmente pode ser automatizada de forma simples, segura e sob medida, crio fluxos inteligentes que conectam ferramentas, reduzem tarefas repetitivas e tornam sua rotina mais leve.",
		optionalText:
			"Você ganha tempo, reduz erros e passa a focar no que realmente importa.",
	},
	{
		lottie: "/meu_portfolio/WebPage.lottie",
		title: "Desenvolvimento web com foco em funcionalidade real",
		text: "Mais do que estética, um site ou sistema precisa funcionar bem, carregar rápido e ser fácil de usar, desenvolvo soluções digitais que combinam estrutura sólida, desempenho e experiência fluida.",
		optionalText:
			"Cada projeto é pensado para atender seu objetivo com leveza e inteligência.",
	},
	{
		lottie: "/meu_portfolio/Talking.lottie",
		title: "Consultoria em TI com visão técnica e humana",
		text: "Às vezes o problema não é a ferramenta, mas a falta de clareza, ofereço suporte técnico com explicações acessíveis, análise estratégica e orientações práticas.",
		optionalText:
			"Você entende o cenário, toma decisões com segurança e aplica a tecnologia da forma certa.",
	},
	{
		lottie: "/meu_portfolio/Puzzle.lottie",
		title: "Soluções práticas para problemas reais",
		text: "Se algo não está funcionando, se existe uma ideia travada ou se você simplesmente precisa de direção, posso ajudar, acompanho de perto, ouço com atenção e construo soluções aplicáveis, sob medida e focadas em resolver.",
		optionalText: "Tecnologia só tem valor quando melhora a sua realidade.",
	},
];
