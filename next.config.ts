import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	reactStrictMode: true,
};

nextConfig.basePath =
	process.env.NODE_ENV === "production" ? "/meu_portfolio" : "";

export default nextConfig;
