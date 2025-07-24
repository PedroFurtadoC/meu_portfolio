/**
 * Navega para uma âncora ou URL específica criando e clicando em um link temporário.
 *
 * @param selector - Seletor de destino (ex: "#contato" ou "/pagina")
 */
export default function navigate(selector: string) {
	// Cria um elemento de link (<a>)
	const link = document.createElement("a");

	// Define o destino (anchor ou URL)
	link.href = selector;

	// Adiciona o link ao DOM
	document.body.appendChild(link);

	// Dispara o clique para navegar até o destino
	link.click();

	// Remove o link do DOM
	document.body.removeChild(link);
}
