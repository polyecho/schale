import { PluginSettingTab, Setting } from "obsidian";

import type { App } from "obsidian";
import type SchalePlugin from "../../main";

export class SchaleSettingTab extends PluginSettingTab {
    private plugin: SchalePlugin;
    private noticeMessages = {};

    constructor(app: App, plugin: SchalePlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;
        containerEl.empty();

        // Test Section
        containerEl.createEl("h2", {
            text: "Test section",
        });
        new Setting(containerEl)
            .setName("Example option")
            .setDesc("Example description.")
            .addText((text) =>
                text
                    .setPlaceholder("3")
                    .setValue(this.plugin.settings.exampleOption)
                    .onChange(async (value) => {
                        this.plugin.settings.exampleOption = value;
                        await this.plugin.saveSettings();
                    })
            );
    }
}
