

import type { EventDispatcher } from "svelte"

import type { obtainInputReferenceType } from "../types/TextFieldInputTypes.js"

/* 
    !Calculating the half the height of the label to position center from top of 
    parent to specify css rule top which indeed helps in smooth transition on focus
*/

const onMountMethod = (
    labelRef:HTMLLabelElement | undefined | null,
    uniqueStr:string,
    inputRef: HTMLInputElement | undefined | null,
    obtainInputReference:obtainInputReferenceType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch:EventDispatcher<any>,
) => {
    if(obtainInputReference.needReference === true){
        dispatch(obtainInputReference.customComponentEventName ?? "mountedWithInput",inputRef)
    }

    if(labelRef){
        const labelHeight = labelRef.getBoundingClientRect().height/2
        let containerHeight = 0
        const container = document.getElementById(`ParentContainer_${uniqueStr}`)
        if(container !== null){
            containerHeight = container.getBoundingClientRect().height/2
        }
        const labelHeightFromTop = containerHeight - labelHeight
        labelRef.style.top = `${labelHeightFromTop}px`

        return labelHeightFromTop
    }else{
        return 0 
    }
}

export default onMountMethod;