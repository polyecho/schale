import { Plugin } from "obsidian";
import { SchaleSettingTab } from "src/components/settings/settingTab";
import { DEFAULT_SETTINGS } from "src/components/settings/settingTypes";

import { SchaleCommands } from "./components/commands";
import { CustomIcons } from "./components/icons/icons";
import { SchaleUtils } from "./components/utils";
import { SchaleViews } from "./components/views/views";

import type { SchalePluginSettings } from "src/components/settings/settingTypes";

/** Entry Point. */
export default class SchalePlugin extends Plugin {
    settings: SchalePluginSettings;
    utils = new SchaleUtils(this);

    private iconCreator = new CustomIcons();
    private commandCreator = new SchaleCommands(this);
    private viewCreator = new SchaleViews(this);

    /** Load and Save Settings */
    async loadSettings() {
        this.settings = Object.assign(
            {},
            DEFAULT_SETTINGS,
            await this.loadData()
        );
    }
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
