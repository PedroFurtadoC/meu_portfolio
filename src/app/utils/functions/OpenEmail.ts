/**
 * Abre o cliente de e-mail padrão com o endereço fornecido usando um link `mailto:`.
 *
 * @param email - Endereço de e-mail que será usado no link
 */
export default function openEmail(email: string) {
	// Cria o link mailto com o endereço fornecido
	const mailtoLink = `mailto:${email}`;

	// Cria um elemento de link (<a>)
	const link = document.createElement("a");
	link.href = mailtoLink;

	// Adiciona o link ao DOM
	document.body.appendChild(link);

	// Dispara o clique para abrir o cliente de e-mail
	link.click();

	// Remove o link do DOM
	document.body.removeChild(link);
}
