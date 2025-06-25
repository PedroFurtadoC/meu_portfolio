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
		start: "fevereiro 2022",
		end: "dezembro 2023",
		text: "Estagiário responsável pela área de apresentações técnicas aliadas ao suporte de usuário, na Dimastec fui braço direito da equipe de vendas para apresentar o DT Faceum de forma técnica, clara, vendável e inteligente.",
		habilities: ["Teste", "Teste2", "Teste3", "Teste4"],
	},
	{
		title: "Consultor de Tecnologia",
		start: "fevereiro 2022",
		end: "dezembro 2023",
		text: "Consultoria em tecnologia, resolvendo problemas de forma alinhada ao que usuário procura, sempre humanizado, simplificado, claro, estudado e trazendo as melhores soluções.",
		habilities: ["Teste", "Teste2", "Teste3", "Teste4"],
	},
	{
		title: "TI na Agência 6P",
		start: "fevereiro 2022",
		end: "dezembro 2023",
		text: "Na agência 6P fui estagiário e responsável por cuidar de toda a área de TI da empresa, resolvendo problemas, organizando processos, realizando suporte ao usuário rápido, funcional e empático.",
		habilities: ["Teste", "Teste2", "Teste3", "Teste4"],
	},
	{
		title: "Zapit",
		start: "fevereiro 2022",
		end: "dezembro 2023",
		text: "Sócio na Zapit, empresa de vending machines focada em experiência do cliente e trazendo soluções com máquinas da melhor forma possível, segura, organizada, limpa, rápida e funcional.",
		habilities: ["Teste", "Teste2", "Teste3", "Teste4"],
	},
];
