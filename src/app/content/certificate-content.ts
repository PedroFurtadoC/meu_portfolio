/**
 * Define a estrutura de um certificado e exporta uma lista com certificados concluídos.
 * Cada certificado contém uma imagem (comprovante) e uma descrição textual.
 */

export interface Certificate {
	image: string; // Caminho da imagem do certificado
	description: string; // Título ou descrição do certificado
}

// Lista de certificados disponíveis
const certificates: Certificate[] = [
	{
		image: require("../assets/Certificado_Fundamentos_do_Suporte_Tecnico.jpg"),
		description: "Fundamentos de Suporte Técnico",
	},
	{
		image: require("../assets/Declaracao_Monitoria_Lab_BD-1.png"),
		description: "Monitoria de Lab. de Banco de Dados 1",
	},
	{
		image: require("../assets/Declaracao_Monitoria_Sistemas_Operacionais.jpg"),
		description: "Monitoria de Sistemas Operacionais",
	},
];

export default certificates;
