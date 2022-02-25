import type { Plugin } from "vue";
import Button from "./src/index.vue";

const plugin: Plugin = {
  install(app, options) {
    app.component("how-button", Button);
  },
};

export default plugin;
