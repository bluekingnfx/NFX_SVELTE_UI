import type { readonlyOptionsType } from "../types/TextFieldInputTypes.js"


const FireFocusForReadOnly = (
    parentRef:HTMLDivElement | undefined | null,
    inputRef: HTMLInputElement | undefined | null,
    labelRef:HTMLLabelElement|undefined|null,
    readOnlyOptions:readonlyOptionsType,
    requiredField:boolean
) => {
    if(parentRef && inputRef && labelRef){
        if(readOnlyOptions.readOnlyCondition === true){
            setTimeout(() => inputRef.focus(),0)
            setTimeout(() => inputRef.value = readOnlyOptions.initialVal ?? "",10)
            setTimeout(() => inputRef.dispatchEvent(new Event("input")),20)
            inputRef.readOnly = true
        }
        if(requiredField === true && inputRef){
            inputRef.required = true
        }
    }
}

export default FireFocusForReadOnly