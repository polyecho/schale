import type { Command } from "obsidian";
import type SchalePlugin from "@src/main";

export class SchaleCommands {
    private plugin: SchalePlugin;

    constructor(plugin: SchalePlugin) {
        this.plugin = plugin;
    }

    registerCommands() {
        this.getCommandsArr().forEach((item) => {
            this.plugin.addCommand(item);
        });
    }

    getCommandsArr(): Command[] {
        return [
            {
                id: "schale-logo",
                name: "Open Schale View",
                icon: "schale-logo",
                callback: async () => {
                    this.plugin.app.workspace.detachLeavesOfType(
                        "schale-shell"
                    );

                    const leaf = this.plugin.app.workspace.getLeaf();
                    await leaf.setViewState({ type: "schale-shell" });
                    this.plugin.app.workspace.revealLeaf(leaf);
                },
            },
        ];
    }
}
