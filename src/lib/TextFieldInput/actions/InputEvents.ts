import type { Action } from "svelte/action"
import type { readonlyOptionsType } from "../types/TextFieldInputTypes.js"
import type { ThemeType } from "$lib/global/stores/colorPalette.js"



const inputEvents:Action<HTMLInputElement,{
    labelRef_Global:HTMLLabelElement | undefined | null,
    labelHeightFromTop:number,
    CusError: boolean,
    valueForInternalAccess:string,
    placeHolder:string,
    parentRef:HTMLDivElement | undefined | null,
    readOnlyOptions:readonlyOptionsType,
    textColorDark:string,
    textColorLight:string,
    theme:ThemeType,
    textPassedBlueVariant:string,
    textPassedBlueVariantBorder:string,
    borderColorDark:string,
    borderColorLight:string
}> = (
    node,
    {CusError,labelHeightFromTop,labelRef_Global,placeHolder,valueForInternalAccess,parentRef,readOnlyOptions,textColorDark,textColorLight,theme,textPassedBlueVariant,textPassedBlueVariantBorder,borderColorDark,
    borderColorLight}
) => {
    
    let error:boolean = CusError

    let value:string = valueForInternalAccess

    let labelHeightFromTop_Loc:number = labelHeightFromTop

    let placeholder:string = placeHolder

    let labelRef:HTMLLabelElement | undefined | null = labelRef_Global

    let parentRefLoc:HTMLDivElement | undefined | null = parentRef

    let readOnlyOptions_Loc:readonlyOptionsType = readOnlyOptions

    let theme_Loc:ThemeType = theme
    
    let textColorDark_Loc:string = textColorDark

    let textColorLight_Loc:string = textColorLight

    let textPassedBlueVariant_loc:string = textPassedBlueVariant

    let textPassedBlueVariantBorder_loc = textPassedBlueVariantBorder

    let borderColorDark_Loc:string = borderColorDark

    let borderColorLight_Loc:string = borderColorLight

    const onFocus = () => {

        if(!labelRef || !parentRefLoc) return

        labelRef.style.fontSize = `${16}px`

        labelRef.style.position = "absolute"

        labelRef.style.letterSpacing = ".1px"

        labelRef.style.top = `${8}px`

        if(error === false && readOnlyOptions_Loc.readOnlyCondition === false){

            labelRef.style.color = textPassedBlueVariant_loc

            parentRefLoc.style.borderBottom = `2px solid  ${textPassedBlueVariantBorder_loc}`
        }

        if(value.length === 0){
            node.placeholder = placeholder
        }else{
            node.placeholder = ""
        }
    }


    const onFocusOut = () => {

        if(readOnlyOptions_Loc.readOnlyCondition === true){
            return
        }

        if(!labelRef || !parentRefLoc) return 


        if(value.length === 0){
            node.placeholder = ""

            labelRef.style.fontSize = `${20}px`

            labelRef.style.position = "absolute"

            labelRef.style.top = `${labelHeightFromTop_Loc}px`

            labelRef.style.color = theme_Loc === "dark" ? textColorDark_Loc : textColorLight_Loc

            parentRefLoc.style.borderBottom = `2px solid ${theme_Loc === "dark" ? borderColorDark_Loc: borderColorLight_Loc}`
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

            readOnlyOptions_Loc = new_props.readOnlyOptions

            textColorDark_Loc = new_props.textColorDark

            textColorLight_Loc = new_props.textColorLight

            theme_Loc = new_props.theme
        
            textPassedBlueVariantBorder_loc = new_props.textPassedBlueVariantBorder

            textPassedBlueVariant_loc = new_props.textPassedBlueVariant,
            
            borderColorDark_Loc = new_props.borderColorDark

            borderColorLight_Loc = new_props.borderColorLight
        },

        destroy(){
            node.removeEventListener("focus",onFocus)

            node.removeEventListener("focusout",onFocusOut)
        }
    }
}

export default inputEvents