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
		title: "Placeholder",
		modalContent: {
			title: "Placeholder 1",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText2:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			link: {
				url: "https:www.google.com.br",
				description: "Link",
			},
			ytVideoId: "jNQXAC9IVRw",
		},
	},
	{
		title: "Placeholder 2",
		modalContent: {
			title: "Placeholder 2",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText2:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			link: {
				url: "https:www.google.com.br",
				description: "Link",
			},
			ytVideoId: "jNQXAC9IVRw",
		},
	},
	{
		title: "Placeholder 3",
		modalContent: {
			title: "Placeholder 2",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText2:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			link: {
				url: "https:www.google.com.br",
				description: "Link",
			},
			ytVideoId: "jNQXAC9IVRw",
		},
	},
	{
		title: "Placeholder 4",
		modalContent: {
			title: "Placeholder 2",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText2:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			link: {
				url: "https:www.google.com.br",
				description: "Link",
			},
			ytVideoId: "jNQXAC9IVRw",
		},
	},
];
