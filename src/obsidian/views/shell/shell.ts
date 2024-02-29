import { ItemView, WorkspaceLeaf } from "obsidian";

import Shell from "./Shell.svelte";
import { pluginStore, shellStore } from "./store";

import type SchalePlugin from "@src/main";

// The file explorer, graph view, and the Markdown view are
// all examples of views, but you can also create your own custom views that
// display content in a way that makes sense for your plugin.
// Reference : https://docs.obsidian.md/Plugins/User+interface/Views

export const VIEW_TYPE = "schale-shell-view";
export const DISPLAY_TEXT = "Schale Shell";

export class SchaleShellView extends ItemView {
    private component: Shell;
    private plugin: SchalePlugin;

    constructor(leaf: WorkspaceLeaf, plugin: SchalePlugin) {
        super(leaf);
        this.plugin = plugin;
    }

    async onOpen() {
        pluginStore.set(this.plugin);

        this.component = new Shell({
            target: this.contentEl,
        });
    }

    async onClose() {
        shellStore.update(() => []);
        this.component.$destroy();
    }

    getViewType() {
        return VIEW_TYPE;
    }

    getDisplayText() {
        return DISPLAY_TEXT;
    }
}
