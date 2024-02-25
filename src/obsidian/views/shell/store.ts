import type SchalePlugin from "@src/main";
import { writable } from "svelte/store";

export const pluginStore = writable<SchalePlugin>();
export const shellStore = writable<string[]>([]);
