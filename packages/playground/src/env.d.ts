declare module "*.svelte" {
    const component: new (...args: any) => any;
    export default component;
}