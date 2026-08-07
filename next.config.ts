import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable persistent caching on disk to avoid watcher loops and memory exhaustion on Windows
    turbopackFileSystemCacheForDev: false,
    // Disable preloading page modules on start to reduce initial memory footprint
    preloadEntriesOnStart: false,
  },

  // Dispose of compiled pages in development quicker to free up memory
  onDemandEntries: {
    maxInactiveAge: 15 * 1000, // keep in memory for 15s instead of default 25s
    pagesBufferLength: 1,      // keep only 1 page in memory buffer instead of 2
  },
};

export default nextConfig;
