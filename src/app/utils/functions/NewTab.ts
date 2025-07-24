/**
 * Abre uma nova aba com a URL fornecida, garantindo segurança com `rel="noopener noreferrer"`.
 *
 * @param url - Endereço que será aberto em uma nova aba
 */
export default function openNewTab(url: string) {
	// Cria um elemento de link (<a>)
	const link = document.createElement("a");

	// Define o destino da URL
	link.href = url;

	// Abre em uma nova aba
	link.target = "_blank";

	// Evita que a nova aba tenha acesso ao window.opener
	link.rel = "noopener noreferrer";

	// Adiciona o link ao DOM
	document.body.appendChild(link);

	// Dispara o clique para abrir o link
	link.click();

	// Remove o link do DOM
	document.body.removeChild(link);
}
