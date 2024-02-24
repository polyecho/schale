import type SchalePlugin from "@src/main";
import { writable } from "svelte/store";

const plugin = writable<SchalePlugin>();
export default { plugin };
