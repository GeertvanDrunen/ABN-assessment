import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./main.module.css";
import { VueQueryPlugin } from "vue-query";

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(router);

app.mount("#app");
