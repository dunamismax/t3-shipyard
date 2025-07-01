import config from "@t3-shipyard/config-eslint";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**", 
      "**/dist/**",
      "**/build/**",
      "**/.turbo/**",
      "**/coverage/**",
      "**/*.config.js",
      "**/ecosystem.config.js"
    ]
  },
  ...config
];
