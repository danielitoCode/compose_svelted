
import "@danielito1996/compose-svelted/baseline.css";

import { mount } from "svelte";
import App from "./App.svelte";

mount(App, {
    target: document.getElementById("app")!
});