<script lang="ts">
    import { shellStore, pluginStore } from "./store";

    let computerUsername = "temp";
    let shellInput = "";

    let userInfo = "";
    pluginStore.subscribe(
        (p) => (userInfo = `${p.app.vault.getName()}@${computerUsername} $`)
    );
</script>

<div class="input-wrapper">
    <span class="userinfo"
        >{$pluginStore.app.vault.getName()}@{computerUsername} $</span
    >
    <form
        on:submit|preventDefault={(e) => {
            shellStore.update((s) => [...s, `${userInfo} ${shellInput}`]);
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

        .userinfo {
            white-space: nowrap;
            margin-right: 3px;
        }

        input {
            width: 100%;
            border: none;
            outline: none;
            background: none;
            font: inherit;
        }
    }
</style>
