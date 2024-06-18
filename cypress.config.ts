import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/",
    experimentalStudio: true,
    viewportWidth: 2560,
    viewportHeight: 1440,
    requestTimeout: 5000,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
