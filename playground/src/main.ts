import { mount } from 'svelte';
import "@danielito1996/compose-svelted/baseline.css";
import App from './App.svelte';

const app = mount(App, {
  target: document.getElementById('app')!
});

export default app;
