import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import button from "./components/Button";

const app = createApp(App);
app.use(button);
app.mount("#app");
