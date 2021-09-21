/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    host: "http://localhost:3000",
    apiHost: "https://hacker-news.firebaseio.com/v0",
  },
};
