import { ItemView, WorkspaceLeaf } from "obsidian";

import store from "../store";
import Component from "./Component.svelte";

import type SchalePlugin from "@src/main";

// The file explorer, graph view, and the Markdown view are
// all examples of views, but you can also create your own custom views that
// display content in a way that makes sense for your plugin.
// Reference : https://docs.obsidian.md/Plugins/User+interface/Views
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
