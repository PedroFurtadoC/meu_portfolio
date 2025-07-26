import { useEffect, useState } from "react";
import { useThemeStore } from "@/app/stores/themeStore";
import "./style/ThemeSwitch.css";
import FontelloIcon from "../shared/FontelloIcon";

export default function ThemeSwitch() {
	const rawTheme = useThemeStore((s) => s.theme); // Tema atual no estado global (pode ser undefined)
	const getCurrentTheme = useThemeStore((s) => s.getCurrentTheme); // Função para obter tema real considerando sistema
	const toggleTheme = useThemeStore((s) => s.toggleTheme); // Função para alternar tema

	const [mounted, setMounted] = useState(false); // Controla se o componente já montou
	const [activeTheme, setActiveTheme] = useState<
		"dark" | "light" | undefined
	>(undefined); // Tema efetivo para renderização

	useEffect(() => {
		setMounted(true); // Marca o componente como montado após primeiro render
	}, []);

	useEffect(() => {
		if (mounted) {
			setActiveTheme(getCurrentTheme()); // Atualiza o tema real após montar e sempre que rawTheme mudar
		}
	}, [mounted, rawTheme]);

	const isDark = activeTheme === "dark"; // Verifica se o tema ativo é escuro

	return (
		<button
			onClick={toggleTheme}
			className={`theme-switch ${isDark ? "light" : "dark"}`}
			aria-label="Switch theme"
		>
			<div className="switch-handle">
				{isDark ? (
					<FontelloIcon name="icon-sun" />
				) : (
					<FontelloIcon name="icon-moon" />
				)}
			</div>
			<span className="switch-label">{isDark ? "Light" : "Dark"}</span>
		</button>
	);
}
