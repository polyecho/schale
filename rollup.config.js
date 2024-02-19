import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import svg from "rollup-plugin-svg";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/main.ts",
    output: {
        format: "cjs",
        file: "main.js",
        exports: "default",
    },
    external: ["obsidian", "fs", "os", "path"],
    plugins: [
        nodeResolve(),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
        alias({
            entires: [
                { find: "@events", replacement: "./src/events" },
                { find: "@settings", replacement: "./src/settings" },
            ],
        }),
        commonjs({
            include: "node_modules/**",
        }),
        svg(),
        json(),
    ],
};
