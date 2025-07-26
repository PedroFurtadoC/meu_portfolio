/**
 * Este arquivo define a interface e os dados dos projetos apresentados no portfólio.
 * Cada projeto inclui título, descrição detalhada, tecnologias utilizadas,
 * destaques, link opcional e vídeo de apresentação no YouTube.
 */

export interface Project {
	title: string;
	modalContent: PContent;
}

// Conteúdo detalhado que será exibido ao abrir um projeto no modal
export interface PContent {
	title: string;
	subtitle: string;
	text: string;
	optionalText?: string; // Parágrafo complementar opcional
	optionalText2?: string; // Segundo parágrafo complementar opcional
	highlights?: string[]; // Destaques, como premiações
	technologies?: string[]; // Tecnologias utilizadas
	ytVideoId: string; // ID do vídeo do YouTube (código no final da URL)
	link?: PLink; // Link externo, como post no LinkedIn
}

// Estrutura opcional para link associado ao projeto
export interface PLink {
	url: string;
	description?: string; // Descrição opcional que será exibida no botão/link
}

// Lista dos projetos do portfólio
export const projectContent: Project[] = [
	{
		title: "NeuroVolt",
		modalContent: {
			title: "NeuroVolt",
			subtitle:
				"Automação inteligente para controle de energia em tempo real",
			text: "O NeuroVolt é um sistema completo de automação elétrica, criado para eliminar desperdícios e dar controle total sobre o consumo de energia em residências e empresas. Com inteligência artificial, automações no n8n e integração com dispositivos Shelly, o projeto oferece uma experiência acessível, visual e funcional para quem quer mais eficiência no dia a dia.",
			optionalText:
				"Com recursos como desligamento automático por geolocalização, relatórios inteligentes, gráficos em tempo real e controle remoto de tomadas, o NeuroVolt transforma a relação com a energia elétrica em algo intuitivo e sustentável.",
			optionalText2:
				"Este projeto foi vencedor do 19º Desafio da Computação da UNAERP por sua inovação, aplicabilidade e impacto direto na rotina de uso consciente de tecnologia.",
			highlights: ["vencedor do 19º Desafio da Computação da UNAERP"],
			technologies: [
				"n8n",
				"Firebase",
				"Shelly Plug S",
				"Inteligência Artificial",
				"APIs REST",
				"Interface Personalizada",
			],
			link: {
				url: "https://www.linkedin.com/posts/pedro-furtado-33159023b_neurovolt-projetocampeaeto-desafiodacomputaaexaeto-activity-7336752718310432769-EKrX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu1RtUBId-a4Mkdthr657KooeEXHYQOFJY",
				description: "Clique e veja o post no LinkedIn",
			},
			ytVideoId: "fVTpVg0KF1U",
		},
	},
	{
		title: "Dome",
		modalContent: {
			title: "Dome",
			subtitle:
				"Automação de ventilação e iluminação com controle via app",
			text: "O Dome é uma solução de automação residencial que conecta ventiladores e lâmpadas a um sistema de controle inteligente via aplicativo. Criado para tornar o conforto mais acessível e a energia mais eficiente, o projeto permite ligar, desligar e ajustar a intensidade dos dispositivos de forma remota, fácil e responsiva.",
			optionalText:
				"Desenvolvido com ESP32 e foco em usabilidade, o Dome traz uma interface clara e acessível mesmo para quem não é técnico, combinando controle local via Wi-Fi e estrutura preparada para evoluir com integração em nuvem.",
			optionalText2:
				"Foi destaque no 17º Desafio da Computação da UNAERP pela combinação entre tecnologia funcional e experiência real de uso em ambientes cotidianos.",
			technologies: [
				"ESP32",
				"Wi-Fi Local",
				"Interface Responsiva",
				"UX Baseado nas Heurísticas de Nielsen",
			],
			link: {
				url: "https://www.linkedin.com/posts/pedro-furtado-33159023b_apresenta%C3%A7%C3%A3o-dome-17-desafio-da-computa%C3%A7%C3%A3o-activity-7243609805188173824-aEx-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu1RtUBId-a4Mkdthr657KooeEXHYQOFJY",
				description: "Clique e veja o post no LinkedIn",
			},
			ytVideoId: "BJ32wYsjouY",
		},
	},
	{
		title: "PawSync",
		modalContent: {
			title: "PawSync",
			subtitle:
				"Tecnologia a favor do cuidado, bem-estar e rotina dos pets",
			text: "O PawSync é um aplicativo criado para tutores que desejam organizar e acompanhar todos os cuidados com seus animais de estimação. Com perfis individuais para cada pet, lembretes, registros de saúde, treinos e até relatórios inteligentes, o app foi desenvolvido com foco em carinho, organização e responsabilidade.",
			optionalText:
				"A interface é moderna, leve e adaptável, com recursos de acessibilidade e IA para gerar recomendações e insights personalizados — tudo isso para oferecer ao tutor mais tranquilidade e controle no dia a dia.",
			optionalText2:
				"Muito mais que um app, o PawSync é uma plataforma pensada para quem realmente se importa com a vida, saúde e evolução dos seus animais.",
			technologies: [
				"Frontend Moderno",
				"Recursos de IA",
				"Inerface Acessível e Personalizável",
			],
			link: {
				url: "https://www.linkedin.com/posts/pedro-furtado-33159023b_pawsync-techforpets-inovaaexaeto-activity-7264802766928179200-5fJ9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu1RtUBId-a4Mkdthr657KooeEXHYQOFJY",
				description: "Clique e veja o post no LinkedIn",
			},
			ytVideoId: "MD3FDuQMHfQ",
		},
	},
];
