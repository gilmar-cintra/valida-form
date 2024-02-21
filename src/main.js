/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
// Importamos o plugin v-mask
import VMask from "@ssibrahimbas/v-mask";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);
// Registramos o plugin v-mask
app.use(VMask);

registerPlugins(app);

app.mount("#app");
