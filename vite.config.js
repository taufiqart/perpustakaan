import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import { viteRequire } from "vite-require";

export default defineConfig({
    plugins: [
        viteRequire(),
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
            // publicDirectory: "../build/",
            // buildDirectory: "../build/",
        }),
        react(),
    ],
    // publicDirectory: "../build/",
    // assetsDir: "../build/",
    build: {
        // outDir: "../build/",
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
