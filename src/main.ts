import { Plugin } from "obsidian";

import { SchaleSettingTab } from "@src/obsidian/settings/settingTab";
import { DEFAULT_SETTINGS } from "@src/obsidian/settings/settingTypes";

import { SchaleCommands } from "./obsidian/commands";
import { CustomIcons } from "./obsidian/icons/icons";
import { SchaleViews } from "./obsidian/views/views";

import type { SchalePluginSettings } from "@src/obsidian/settings/settingTypes";

/** Entry Point. */
export default class SchalePlugin extends Plugin {
    settings: SchalePluginSettings;

    private iconCreator = new CustomIcons();
    private commandCreator = new SchaleCommands(this);
    private viewCreator = new SchaleViews(this);

    /** Loads Settings */
    async loadSettings() {
        this.settings = Object.assign(
            {},
            DEFAULT_SETTINGS,
            await this.loadData()
        );
    }

    /** Saves Settings */
    async saveSettings() {
        await this.saveData(this.settings);
    }

    /** Runs whenever the user starts using the plugin in Obsidian. */
    async onload() {
        await this.loadSettings();
        this.addSettingTab(new SchaleSettingTab(this.app, this));

        this.iconCreator.registerIcons();
        this.commandCreator.registerCommands();
        this.viewCreator.registerViews();

        console.log(
            "Plugin Loaded: Schale\n(Error details are going to be displayed here.)"
        );
    }

    /** Runs when the plugin is disabled. */
    onunload() {
        console.log("Plugin Unloaded: Schale");
    }
}
