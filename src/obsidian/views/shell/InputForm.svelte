<script lang="ts">
    import { getUsername } from "./utils";
    import { shellStore, pluginStore } from "./store";
    import { onMount } from "svelte";

    let shellInput = "";

    let computerUsername: string | null = null;
    onMount(async () => {
        computerUsername = await getUsername();
    });

    $: shellInfo = computerUsername
        ? `${$pluginStore.app.vault.getName()}@${computerUsername}`
        : `${$pluginStore.app.vault.getName()}`;
</script>

<div class="input-wrapper">
    <span class="user-info">{shellInfo} $</span>
    <form
        on:submit|preventDefault={() => {
            shellStore.update((s) => [...s, `${shellInfo} $ ${shellInput}`]);
            shellInput = "";
        }}
    >
        <input bind:value={shellInput} />
    </form>
</div>

<style lang="scss">
    .input-wrapper {
        display: flex;
        flex-direction: row;

        .user-info {
            white-space: nowrap;
            margin-right: 3px;
        }

        input {
            font: inherit;
            width: 100%;
            border: none;
            outline: none;
            background: none;
        }
    }
</style>
