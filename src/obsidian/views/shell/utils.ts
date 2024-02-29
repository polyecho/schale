import { exec as execCallback } from "child_process";
import { Notice } from "obsidian";
import { promisify } from "util";

export const displayErrorNotice = async (message: string) => {
    new Notice(message);
};

export const getUsername = async () => {
    const exec = promisify(execCallback);
    const { stdout, stderr } = await exec("whoami");

    if (stderr) {
        displayErrorNotice(stderr);
    }

    return stdout.trim();
};
