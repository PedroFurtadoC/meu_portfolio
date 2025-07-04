export interface TimelineContent {
	title: string;
	start: string;
	end: string;
	text: string;
	habilities?: string[];
}

//IMPORTANTE: o "title" é utilizado como key, não podem haver repetições

export const timelineContent: TimelineContent[] = [
	{
		title: "Dimastec",
		start: "abril 2023",
		end: "outubro 2023",
		text: "Estagiário responsável pela área de apresentações técnicas aliadas ao suporte de usuário, na Dimastec fui braço direito da equipe de vendas para apresentar o DT Faceum de forma técnica, clara, vendável e inteligente.",
		habilities: [
			"Apresentação clara de soluções técnicas",
			"Criação de materiais que vendem o valor do produto",
			"Implantação rápida e funcional de sistemas",
			"Execução de POCs com foco em resultado",
			"Suporte direto ao usuário com linguagem acessível",
			"Comunicação entre times técnicos e comerciais",
			"Adaptação técnica a diferentes cenários e demandas",
		],
	},
	{
		title: "Consultor de Tecnologia",
		start: "julho 2024",
		end: "Atualmente",
		text: "Consultoria em tecnologia, resolvendo problemas de forma alinhada ao que usuário procura, sempre humanizado, simplificado, claro, estudado e trazendo as melhores soluções.",
		habilities: [
			"Diagnóstico rápido e preciso de problemas técnicos",
			"Soluções digitais claras e acessíveis",
			"Explicação técnica com linguagem simples",
			"Automação de processos para mais produtividade",
			"Organização de sistemas e ambientes de trabalho",
			"Suporte consultivo com foco em autonomia",
			"Adaptação técnica à realidade de cada cliente",
		],
	},
	{
		title: "TI na Agência 6P",
		start: "dezembro 2024",
		end: "atualmente",
		text: "Na agência 6P fui estagiário e responsável por cuidar de toda a área de TI da empresa, resolvendo problemas, organizando processos, realizando suporte ao usuário rápido, funcional e empático.",
		habilities: [
			"Suporte técnico com agilidade e clareza",
			"Organização de sistemas e fluxos internos",
			"Atendimento direto ao time com escuta ativa",
			"Resolução de erros e instabilidades com autonomia",
			"Padronização de processos de TI",
			"Manutenção preventiva e corretiva de máquinas",
			"Gerenciamento de acessos, backups e redes locais",
			"Comunicação técnica aplicada ao dia a dia da equipe",
		],
	},
	{
		title: "Zapit",
		start: "abril 2025",
		end: "atualmente",
		text: "Sócio na Zapit, empresa de vending machines focada em experiência do cliente e trazendo soluções com máquinas da melhor forma possível, segura, organizada, limpa, rápida e funcional.",
		habilities: [
			"Gestão de operação e logística de vending machines",
			"Automatização de processos com foco em escala",
			"Otimização de pontos físicos com análise estratégica",
			"Implementação de sistemas para controle remoto e abastecimento",
			"Monitoramento de desempenho em tempo real",
			"Suporte técnico e manutenção de equipamentos",
			"Visão de negócio aplicada à experiência do usuário",
			"Comunicação entre áreas técnicas e comerciais",
		],
	},
];
