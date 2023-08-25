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
export type OnInputEventsProps = typeof __propDef.props;
export type OnInputEventsEvents = typeof __propDef.events;
export type OnInputEventsSlots = typeof __propDef.slots;
export default class OnInputEvents extends SvelteComponent<OnInputEventsProps, OnInputEventsEvents, OnInputEventsSlots> {
}
export {};
