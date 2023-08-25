import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        propsReq: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SlotsUsageEx1Props = typeof __propDef.props;
export type SlotsUsageEx1Events = typeof __propDef.events;
export type SlotsUsageEx1Slots = typeof __propDef.slots;
export default class SlotsUsageEx1 extends SvelteComponent<SlotsUsageEx1Props, SlotsUsageEx1Events, SlotsUsageEx1Slots> {
}
export {};
