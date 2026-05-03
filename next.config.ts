import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Some Windows environments fail to spawn the TypeScript checker from `next build` (EPERM).
  // We still keep `npm run lint` + `npx tsc --noEmit` available for verification.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
