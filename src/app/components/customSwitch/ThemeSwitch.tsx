import { useEffect, useState } from "react";
import { useThemeStore } from "@/app/stores/themeStore";
import "./style/ThemeSwitch.css";
import FontelloIcon from "../shared/FontelloIcon";

export default function ThemeSwitch() {
	const rawTheme = useThemeStore((s) => s.theme);
	const getCurrentTheme = useThemeStore((s) => s.getCurrentTheme);
	const toggleTheme = useThemeStore((s) => s.toggleTheme);

	const [mounted, setMounted] = useState(false);
	const [activeTheme, setActiveTheme] = useState<
		"dark" | "light" | undefined
	>(undefined);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (mounted) {
			setActiveTheme(getCurrentTheme()); // pega o tema real, inclusive se estiver como undefined (usa sistema)
		}
	}, [mounted, rawTheme]);

	/* if (!mounted || activeTheme === undefined) {
		<div className="theme-switch skeleton" aria-hidden="true">
			<div className="switch-handle-skeleton" />
			<div className="switch-label-skeleton" />
		</div>;
	} */

	const isDark = activeTheme === "dark";

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
