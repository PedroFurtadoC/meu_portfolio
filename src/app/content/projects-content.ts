export interface Project {
	title: string;
	modalContent: PContent;
}

export interface PContent {
	title: string;
	text: string;
	optionalText?: string;
	optionalText2?: string;
	/* ID do vídeo do Youtube (aquele código no final do link) */
	ytVideoId: string;
	link?: PLink;
}

export interface PLink {
	url: string;
	/* Se não houver descrição, aparecerá apenas o link */
	description?: string;
}

export const projectContent: Project[] = [
	{
		title: "NeuroVolt",
		modalContent: {
			title: "NeuroVolt",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText2:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			link: {
				url: "https://www.linkedin.com/posts/pedro-furtado-33159023b_neurovolt-projetocampeaeto-desafiodacomputaaexaeto-activity-7336752718310432769-EKrX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu1RtUBId-a4Mkdthr657KooeEXHYQOFJY",
				description: "Veja o post no LinkedIn",
			},
			ytVideoId: "fVTpVg0KF1U",
		},
	},
	{
		title: "Dome",
		modalContent: {
			title: "Dome",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText2:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			link: {
				url: "https://www.linkedin.com/posts/pedro-furtado-33159023b_apresenta%C3%A7%C3%A3o-dome-17-desafio-da-computa%C3%A7%C3%A3o-activity-7243609805188173824-aEx-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu1RtUBId-a4Mkdthr657KooeEXHYQOFJY",
				description: "Veja o post no LinkedIn",
			},
			ytVideoId: "BJ32wYsjouY",
		},
	},
	{
		title: "PawSync",
		modalContent: {
			title: "PawSync",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText2:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			link: {
				url: "https://www.linkedin.com/posts/pedro-furtado-33159023b_pawsync-techforpets-inovaaexaeto-activity-7264802766928179200-5fJ9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu1RtUBId-a4Mkdthr657KooeEXHYQOFJY",
				description: "Veja o post no LinkedIn",
			},
			ytVideoId: "MD3FDuQMHfQ",
		},
	},
];
