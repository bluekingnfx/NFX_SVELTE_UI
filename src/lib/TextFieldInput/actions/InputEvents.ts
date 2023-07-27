import type { Action } from "svelte/action"



const inputEvents:Action<HTMLInputElement,{
    labelRef_Global:HTMLLabelElement | undefined | null,
    labelHeightFromTop:number,
    CusError: boolean,
    valueForInternalAccess:string,
    placeHolder:string,
    parentRef:HTMLDivElement | undefined | null,
}> = (
    node,
    {CusError,labelHeightFromTop,labelRef_Global,placeHolder,valueForInternalAccess,parentRef}
) => {
    
    let error:boolean = CusError

    let value:string = valueForInternalAccess

    let labelHeightFromTop_Loc:number = labelHeightFromTop

    let placeholder:string = placeHolder

    let labelRef:HTMLLabelElement | undefined | null = labelRef_Global

    let parentRefLoc:HTMLDivElement | undefined | null = parentRef


    const onFocus = () => {

        if(!labelRef || !parentRefLoc) return

        labelRef.style.fontSize = `${16}px`

        labelRef.style.position = "absolute"

        labelRef.style.letterSpacing = ".1px"

        labelRef.style.top = `${6}px`

        if(error === false){

            labelRef.style.color = "#0072E5"

            parentRefLoc.style.borderBottom = "2px solid #0072E5"
        }

        if(value.length === 0){
            node.placeholder = placeholder
        }else{
            node.placeholder = ""
        }
    }


    const onFocusOut = () => {

        if(!labelRef || !parentRefLoc) return 


        if(value.length === 0){
            node.placeholder = ""

            labelRef.style.fontSize = `${20}px`

            labelRef.style.position = "absolute"

            labelRef.style.top = `${labelHeightFromTop_Loc}px`

            labelRef.style.color = "#c4c4c4"

            parentRefLoc.style.borderBottom = "2px solid #c4c4c4"
        }
    }


    node.addEventListener("focus",onFocus)
    node.addEventListener("focusout",onFocusOut)

    return {

        update(new_props){
            error = new_props.CusError

            value = new_props.valueForInternalAccess

            labelHeightFromTop_Loc = new_props.labelHeightFromTop

            placeholder = new_props.placeHolder

            labelRef = new_props.labelRef_Global

            parentRefLoc = new_props.parentRef
        },

        destroy(){
            node.removeEventListener("focus",onFocus)

            node.removeEventListener("focusout",onFocusOut)
        }
    }
}

export default inputEvents