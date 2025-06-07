import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: ReactNode }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	if (typeof window === "undefined") return null;

	let portalRoot = document.getElementById("portal-root");

	if (!portalRoot) {
		portalRoot = document.createElement("div");
		portalRoot.setAttribute("id", "portal-root");
		document.body.appendChild(portalRoot);
	}

	return mounted ? createPortal(children, portalRoot) : null;
};

export default Portal;
