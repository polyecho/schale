<script lang="ts">
    import type SchalePlugin from "@src/main";
    import store from "../store";

    export let variable: number;
    let plugin: SchalePlugin;

    store.plugin.subscribe((p) => (plugin = p));
</script>

<div class="number">
    <span>{plugin.manifest.author} / {variable}</span>
</div>
