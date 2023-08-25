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
export type UpperCaseComponentProps = typeof __propDef.props;
export type UpperCaseComponentEvents = typeof __propDef.events;
export type UpperCaseComponentSlots = typeof __propDef.slots;
export default class UpperCaseComponent extends SvelteComponent<UpperCaseComponentProps, UpperCaseComponentEvents, UpperCaseComponentSlots> {
}
export {};
