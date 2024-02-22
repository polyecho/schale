import { addIcon } from "obsidian";

import schaleLogo from "./img/schale-logo.svg";

export class CustomIcons {
    private icons = [{ iconId: "schale-logo", svg: schaleLogo }];

    registerIcons = () => {
        this.icons.forEach(({ iconId, svg }) => {
            addIcon(iconId, svg);
        });
    };
}
