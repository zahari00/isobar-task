/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.optimization = {
      usedExports: true,
      innerGraph: true,
      sideEffects: true,
    };
    return config;
  },
  env: {
    host: "http://localhost:3000",
    apiHost: "https://hacker-news.firebaseio.com/v0",
  },
};
