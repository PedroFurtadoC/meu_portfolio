import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/meu_portfolio",
	output: "export",
	reactStrictMode: true,
};

/* nextConfig.basePath =
	process.env.NODE_ENV === "production" ? "/meu_portfolio" : ""; */

export default nextConfig;
