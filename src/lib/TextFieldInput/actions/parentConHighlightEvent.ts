import type { ThemeType } from "$lib/global/stores/colorPalette.js";
import type { Action } from "svelte/action";


const parentContainerHighlight:Action<HTMLDivElement,{
    inputRef:HTMLInputElement | undefined | null,
    hoverBlueVariant:string,
    borderColorDark:string,
    borderColorLight:string,
    theme:ThemeType
}> = (node,{
    inputRef,
    hoverBlueVariant,
    borderColorDark,
    borderColorLight,
    theme
}) => {
    
    let inputRef_Loc = inputRef
    let hoverBlueVariant_Loc = hoverBlueVariant
    let borderColorDark_Loc = borderColorDark
    let borderColorLight_Loc = borderColorLight
    let theme_Loc = theme
    
    const onHover = () => {
        if(inputRef_Loc === undefined || inputRef_Loc === null || inputRef_Loc.value.length !== 0) return
        node.style.borderBottom = `2px solid ${hoverBlueVariant_Loc}`
    }
    
    const onBlur = () => {
        if(inputRef_Loc === undefined || inputRef_Loc === null || inputRef_Loc.value.length !== 0) return
        node.style.borderBottom = `2px solid ${theme_Loc === "dark" ? borderColorDark_Loc : borderColorLight_Loc }`
    }

    node.addEventListener("mouseover",onHover)
    node.addEventListener("mouseleave",onBlur)

    return {
        update(props){
            inputRef_Loc = props.inputRef
            hoverBlueVariant_Loc = props.hoverBlueVariant,
            borderColorDark_Loc = props.borderColorDark,
            borderColorLight_Loc = props.borderColorLight,
            theme_Loc = props.theme
        },
        destroy() {
            node.removeEventListener("mouseleave",onBlur)
            node.removeEventListener("mouseover",onHover)
        },
    }
}

export default parentContainerHighlight