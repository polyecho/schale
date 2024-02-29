<script lang="ts">
    import InputForm from "./InputForm.svelte";
    import { onMount } from "svelte";
    import { pluginStore, shellStore } from "./store";
    import type SchalePlugin from "@src/main";

    /*
    In Svelte, if you modify an array or an object,
    you need to reassign it to itself to trigger reactivity.
    This is because Svelte's reactivity is triggered by assignments.
    When you push an item to the shell array, Svelte doesn't know that
    the array has changed because the reference to the array is still the same.
    */

    let plugin: SchalePlugin;
    onMount(async () => {
        pluginStore.subscribe((p) => (plugin = p));
        shellStore.update((s) => [
            ...s,
            `Welcome to Schale Terminal! It's running on '${plugin.app.vault.getName()}' vault.`,
        ]);
    });

    let shell: string[];
    shellStore.subscribe((s) => {
        return (shell = s);
    });
</script>

<div class="shell-wrapper">
    {#each shell as line, index}
        {#if index != 0}
            <br />
        {/if}
        <span>{line}</span>
    {/each}
    <InputForm />
</div>

<style lang="scss">
    .shell-wrapper {
        user-select: text;
        padding: 15px;
    }
</style>
