import { create } from "zustand";

// Retorna o tema do sistema ("dark" ou "light")
const getSystemTheme = (): "dark" | "light" => {
	if (typeof window === "undefined") return "light"; // Evita erro em ambiente server-side
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
};

// Interface da store para controle de tema
interface ThemeStore {
	theme?: "dark" | "light"; // Tema atual (undefined = usar o sistema)
	initTheme: () => void; // Inicializa o tema ao abrir o app
	getCurrentTheme: () => undefined | "dark" | "light"; // Retorna o tema atual
	toggleTheme: () => void; // Alterna entre dark/light
	resetToSystem: () => void; // Remove o tema salvo e volta ao do sistema
}

// Cria a store de tema usando Zustand
export const useThemeStore = create<ThemeStore>((set, get) => ({
	theme: undefined, // Valor inicial: usar tema do sistema

	initTheme: () => {
		const saved = localStorage.getItem("theme");
		if (saved === "dark" || saved === "light") {
			// Aplica o tema salvo
			document.documentElement.classList.add(saved);
			set({ theme: saved });
		} else {
			// Aplica o tema do sistema
			const systemTheme = getSystemTheme();
			document.documentElement.classList.add(systemTheme);
			set({ theme: systemTheme });
		}
	},

	getCurrentTheme: () => {
		const { theme } = get();
		// Retorna o tema salvo ou o do sistema
		return theme ?? getSystemTheme();
	},

	toggleTheme: () => {
		// Alterna entre light e dark
		const current = get().getCurrentTheme();
		const newTheme = current === "dark" ? "light" : "dark";

		// Atualiza a classe do <html> e salva no localStorage
		document.documentElement.classList.remove("dark", "light");
		document.documentElement.classList.add(newTheme);
		localStorage.setItem("theme", newTheme);

		set({ theme: newTheme });
	},

	resetToSystem: () => {
		// Remove o tema salvo e aplica o tema do sistema
		document.documentElement.classList.remove("light", "dark");
		localStorage.removeItem("theme");
		const systemTheme = getSystemTheme();
		document.documentElement.classList.add(systemTheme);
		set({ theme: undefined });
	},
}));
