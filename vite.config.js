const { createVuePlugin } = require("vite-plugin-vue2");
const { resolve } = require("path");

module.exports = {
  plugins: [createVuePlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "nested/index.html")
      }
    }
  },
  server: {
    port: 1112,
  },
};