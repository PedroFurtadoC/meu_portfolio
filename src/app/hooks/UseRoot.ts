import { useEffect, useState } from "react";

const useRoot = () => {
	const [root, setRoot] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setRoot(document.getElementById("root"));
	}, []);

	return root;
};

export default useRoot;
