import { useEffect, useState } from "react";
import { useThemeStore } from "@/app/stores/themeStore";
import "./style/ThemeSwitch.css";
import FontelloIcon from "../shared/FontelloIcon";

/* function getSystemTheme() {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
} */

export default function ThemeSwitch() {
	const rawTheme = useThemeStore((s) => s.theme);
	const toggleTheme = useThemeStore((s) => s.toggleTheme);

	const [mounted, setMounted] = useState(false);
	const [activeTheme, setActiveTheme] = useState<
		"dark" | "light" | undefined
	>("light");

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (mounted) {
			setActiveTheme(rawTheme);
		}
	}, [rawTheme, mounted]);

	/* 	useEffect(() => {
		if (!mounted) return;

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handler = (event: MediaQueryListEvent) => {
			if (rawTheme === undefined) {
				setActiveTheme(event.matches ? "dark" : "light");
			}
		};

		mediaQuery.addEventListener("change", handler);
		return () => mediaQuery.removeEventListener("change", handler);
	}, [rawTheme, mounted]); */

	if (!mounted) {
		return (
			<button
				className="theme-switch light"
				aria-label="Switch theme"
				disabled
			>
				<div className="switch-handle">
					<FontelloIcon name="icon-sun" />
				</div>
				<span className="switch-label">Light</span>
			</button>
		);
	}

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
