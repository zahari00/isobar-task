module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-nesting",
    "postcss-flexbugs-fixes",
    "postcss-apply",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
