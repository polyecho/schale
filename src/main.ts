import { Plugin } from "obsidian";

import { DEFAULT_SETTINGS, SchalePluginSettings } from "@settings/settingTypes";

/** Entry Point. */
export default class SchalePlugin extends Plugin {
    settings: SchalePluginSettings;

    /** Load and Save Settings */
    async loadSettings() {
        // todo
    }
    async saveSettings() {
        // todo
    }

    /** Runs whenever the user starts using the plugin in Obsidian. */
    async onload() {
        await this.loadSettings();
        this.settings = Object.assign(
            {},
            DEFAULT_SETTINGS,
            await this.loadData()
        );

        console.log(
            "Plugin Loaded: Schale\n(Error details are going to be displayed here.)"
        );
    }

    /** Runs when the plugin is disabled. */
    onunload() {
        console.log("Plugin Unloaded: Schale");
    }
}
