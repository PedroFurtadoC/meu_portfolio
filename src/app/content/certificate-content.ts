export interface Certificate {
	image: string;
	description: string;
}

const certificates: Certificate[] = [
	{
		image: require("../assets/image.png"),
		description: "Teste 1",
	},
	{
		image: require("../assets/image.png"),
		description: "Teste 2",
	},
];

export default certificates;
