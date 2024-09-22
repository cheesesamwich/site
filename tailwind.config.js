module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    plugins: [
      require("@catppuccin/tailwindcss")({
        prefix: "ctp",
        defaultFlavour: "mocha",
      }),
    ],
  };
  