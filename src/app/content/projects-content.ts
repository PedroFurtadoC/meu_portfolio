import { Color } from "../types/constants";

export interface Project {
	title: string;
	shortDescription: string;
	picture: string; //Nome e extensão da imagem apenas. Ex: "image.png" (imagem deve estar presente na pasta public)
	bgColor: Color;
	modalContent: PContent;
}

export interface PContent {
	layout: 1 | 2;
	title: string;
	text: string;
	optionalText?: string;
	optionalText2?: string;
	link?: PLink;
	/* Essas 3 imagens a seguir devem estar na pasta assets e serem escritos dessa forma: "../assets/image.png" */
	image: string;
	optionalImage: string;
	optionalImage2: string;
}

export interface PLink {
	url: string;
	description?: string;
}

export const projectContent: Project[] = [
	{
		title: "Placeholder",
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
		picture: "image.png",
		bgColor: "#ececec",
		modalContent: {
			layout: 1,
			title: "Placeholder",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText2:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			image: require("../assets/image.png"),
			optionalImage: require("../assets/image.png"),
			optionalImage2: require("../assets/image.png"),
			link: {
				url: "https:www.google.com.br",
				description: "Google",
			},
		},
	},
];
