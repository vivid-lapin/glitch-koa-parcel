module.exports = {
  mode: "postcss",
  content: [
    "./src/frontend/**/*.html",
    "./src/frontend/**/*.ts",
    "./src/frontend/**/*.tsx",
  ],
  whitelist: ["body", "html", "svg"],
  whitelistPatterns: [],
  extractors: [
    {
      extensions: ["html", "ts", "tsx"],
      extractor: (content) => {
        return content.match(/[A-Za-z0-9-_:/]+/g) || []
      },
    },
  ],
}
