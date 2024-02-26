import type { WorkspaceLeaf } from "obsidian";
import type SchalePlugin from "@src/main";
import { SchaleShellView } from "./shell/shell";

export class SchaleViews {
    private plugin: SchalePlugin;

    constructor(plugin: SchalePlugin) {
        this.plugin = plugin;
    }

    registerViews() {
        this.plugin.registerView(
            "schale-shell-view",
            (leaf: WorkspaceLeaf) => new SchaleShellView(leaf, this.plugin)
        );
    }
}
