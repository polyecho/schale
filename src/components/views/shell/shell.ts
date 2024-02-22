import { ItemView, WorkspaceLeaf } from "obsidian";

import store from "../store";
import Component from "./Component.svelte";

import type SchalePlugin from "@src/main";

// https://docs.obsidian.md/Plugins/User+interface/Views
export const VIEW_TYPE = "shell-view";

export class SchaleShellView extends ItemView {
    component: Component;

    private plugin: SchalePlugin;

    constructor(leaf: WorkspaceLeaf, plugin: SchalePlugin) {
        super(leaf);
        this.plugin = plugin;
    }

    getViewType() {
        return VIEW_TYPE;
    }

    getDisplayText() {
        return "Example view";
    }

    async onOpen() {
        store.plugin.set(this.plugin);

        this.component = new Component({
            target: this.contentEl,
            props: {
                variable: 1,
            },
        });
    }

    async onClose() {
        this.component.$destroy();
    }
}
