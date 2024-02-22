import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import svg from "rollup-plugin-svg";
import typescript from "@rollup/plugin-typescript";

import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import sveltePreprocess from "svelte-preprocess";

export default {
    input: "src/main.ts",
    output: {
        format: "cjs",
        file: "main.js",
        exports: "default",
    },
    external: ["obsidian", "fs", "os", "path"],
    plugins: [
        svelte({
            // Optionally, preprocess components with svelte.preprocess:
            // https://svelte.dev/docs#compile-time-svelte-preprocess
            preprocess: sveltePreprocess(),

            // Emit CSS as "files" for other plugins to process. default is true
            emitCss: false,
        }),
        // see NOTICE below
        resolve({
            browser: true,
            exportConditions: ["svelte"],
            extensions: [".svelte"],
        }),

        nodeResolve(),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
        alias({
            entires: [
                { find: "@src", replacement: "./src/" },
                { find: "@components", replacement: "./src/components/" },
            ],
        }),
        commonjs({
            include: "node_modules/**",
        }),
        svg(),
        json(),
    ],
};
