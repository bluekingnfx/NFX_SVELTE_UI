import { SvelteComponent } from "svelte";
import { type ThemeType } from "$lib/global/stores/colorPalette.js";
declare const __propDef: {
    props: {
        functionToChangeVal: (cb: (prevVal: string) => string) => void;
        theme: ThemeType;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type UpperCaseIconComponentProps = typeof __propDef.props;
export type UpperCaseIconComponentEvents = typeof __propDef.events;
export type UpperCaseIconComponentSlots = typeof __propDef.slots;
export default class UpperCaseIconComponent extends SvelteComponent<UpperCaseIconComponentProps, UpperCaseIconComponentEvents, UpperCaseIconComponentSlots> {
}
export {};
