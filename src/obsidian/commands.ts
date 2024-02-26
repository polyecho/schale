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
                    await this.plugin.app.workspace.detachLeavesOfType(
                        "schale-shell-view"
                    );

                    const leaf = this.plugin.app.workspace.getLeaf("tab");
                    await leaf.setViewState({
                        type: "schale-shell-view",
                        active: true,
                    });
                },
            },
        ];
    }
}
