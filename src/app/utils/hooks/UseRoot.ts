import { useEffect, useState } from "react";

/**
 * Hook que retorna o elemento HTML com id "root" após o componente ser montado.
 *
 * @returns O elemento HTMLElement com id "root" ou null se não encontrado
 */
const useRoot = () => {
	const [root, setRoot] = useState<HTMLElement | null>(null);

	useEffect(() => {
		// Busca o elemento com id "root" no DOM após montagem
		setRoot(document.getElementById("root"));
	}, []);

	return root;
};

export default useRoot;
