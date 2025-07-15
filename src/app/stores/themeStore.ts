import { create } from "zustand";

const getSystemTheme = (): "dark" | "light" => {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
};

interface ThemeStore {
	theme?: "dark" | "light";
	initTheme: () => void;
	getCurrentTheme: () => undefined | "dark" | "light";
	toggleTheme: () => void;
	resetToSystem: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
	theme: undefined, // undefined = usar sistema

	initTheme: () => {
		const saved = localStorage.getItem("theme");
		if (saved === "dark" || saved === "light") {
			document.documentElement.classList.add(saved);
			set({ theme: saved });
		} else {
			const systemTheme = getSystemTheme();
			document.documentElement.classList.add(systemTheme);
			set({ theme: systemTheme });
		}
	},

	getCurrentTheme: () => {
		const { theme } = get();
		return theme ?? getSystemTheme(); // se theme for undefined, retorna o sistema
	},

	toggleTheme: () => {
		const current = get().getCurrentTheme();
		const newTheme = current === "dark" ? "light" : "dark";

		document.documentElement.classList.remove("dark", "light");
		document.documentElement.classList.add(newTheme);
		localStorage.setItem("theme", newTheme);

		set({ theme: newTheme });
	},

	resetToSystem: () => {
		document.documentElement.classList.remove("light", "dark");
		localStorage.removeItem("theme");
		const systemTheme = getSystemTheme();
		document.documentElement.classList.add(systemTheme);
		set({ theme: undefined });
	},
}));
