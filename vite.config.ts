import { defineConfig } from "vite";
import { getMaps, getMapsOptimizers, getMapsScripts } from "wa-map-optimizer-vite";
import basicSsl from '@vitejs/plugin-basic-ssl'

const maps = getMaps();

export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
            input: {
                index: "./index.html",
                ...getMapsScripts(maps),
            },
        },
    },
    plugins: [...getMapsOptimizers(maps),basicSsl()],
    server: {
        host: "localhost",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            "Cache-Control": "no-cache, no-store, must-revalidate",
        },
        open: "/",
    },
});
