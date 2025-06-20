import { CustomLayoutExample } from "../components/projectComponents/Layouts";
import { Color } from "../types/constants";

export interface Project {
	title: string;
	shortDescription: string;
	picture: string; //Nome e extensão da imagem apenas. Ex: "image.png" (imagem deve estar presente na pasta public)
	bgColor: Color;
	modalContent: PContent;
}

export interface PContent {
	layout: 1 | 2 | 3 | "custom";
	title: string;
	text: string;
	optionalText?: string;
	optionalText2?: string;
	link?: PLink;
	/* Essas 3 imagens a seguir devem estar na pasta assets e serem escritos dessa forma: "../assets/image.png" */
	image: string;
	optionalImage: string;
	optionalImage2: string;
	/* ID do vídeo do Youtube (aquele código no final do link) */
	ytVideoId?: string;
	/* Componente customizado, deve ser definido como "custom" para utilizar
	o componente customizado. Ele recebe os props de acordo com PContent, vide 
	src/app/projectComponentes/Layouts.tsx para mais detalhes de como implementar  */
	CustomLayout?: React.ComponentType<{ content: PContent }>;
}

export interface PLink {
	url: string;
	/* Se não houver descrição, aparecerá apenas o link */
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
			title: "Layout 1",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText2:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			image: require("../assets/image.png"),
			optionalImage: require("../assets/image.png"),
			optionalImage2: require("../assets/image.png"),
			link: {
				url: "https:www.google.com.br",
				description: "Teste de link",
			},
		},
	},
	{
		title: "Placeholder 2",
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
		picture: "image.png",
		bgColor: "#ececec",
		modalContent: {
			layout: 2,
			title: "Layout 2",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",

			image: require("../assets/image.png"),
			optionalImage: require("../assets/image.png"),
			optionalImage2: require("../assets/image.png"),
			link: {
				url: "https:www.google.com.br",
				description: "Teste de link",
			},
		},
	},
	{
		title: "Placeholder 3",
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
		picture: "image.png",
		bgColor: "#ececec",
		modalContent: {
			layout: 3,
			title: "Layout 3",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",

			image: require("../assets/image.png"),
			optionalImage: require("../assets/image.png"),
			optionalImage2: require("../assets/image.png"),
			ytVideoId: "jNQXAC9IVRw",
			link: {
				url: "https:www.google.com.br",
				description: "Teste de link",
			},
		},
	},
	{
		title: "Placeholder 4",
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
		picture: "image.png",
		bgColor: "#ececec",
		modalContent: {
			layout: "custom",
			title: "Custom Layout",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",
			optionalText:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis faucibus mi, vel dapibus ex.",

			image: require("../assets/image.png"),
			optionalImage: require("../assets/image.png"),
			optionalImage2: require("../assets/image.png"),
			ytVideoId: "jNQXAC9IVRw",
			link: {
				url: "https:www.google.com.br",
				description: "Teste de link",
			},
			CustomLayout: CustomLayoutExample,
		},
	},
];
