import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        propsToReq: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CopyButSlotsUsageEx2Props = typeof __propDef.props;
export type CopyButSlotsUsageEx2Events = typeof __propDef.events;
export type CopyButSlotsUsageEx2Slots = typeof __propDef.slots;
export default class CopyButSlotsUsageEx2 extends SvelteComponent<CopyButSlotsUsageEx2Props, CopyButSlotsUsageEx2Events, CopyButSlotsUsageEx2Slots> {
}
export {};
