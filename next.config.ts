import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  //Webpack вместо Turbopack: длинный путь OneDrive ломает сборку на Windows
  turbopack: undefined,
  //Иначе Next берёт родительский lockfile из «Аналитик данных» и ломает статику/CSS
  outputFileTracingRoot: path.join(import.meta.dirname),
};

export default nextConfig;
