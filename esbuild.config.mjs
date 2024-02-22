import esbuild from "esbuild";
import esbuildSvelte from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";

esbuild
    .build({
        plugins: [
            esbuildSvelte({
                compilerOptions: { css: true },
                preprocess: sveltePreprocess(),
            }),
        ],
        // ...
    })
    .catch(() => process.exit(1));
