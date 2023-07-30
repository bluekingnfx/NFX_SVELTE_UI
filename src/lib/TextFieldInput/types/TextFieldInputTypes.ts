export type inBuildTypeAttrType = "email" | "password" | "text" | "number" | "url" | "tel" | "syncWithValidator"


export interface MandatoryErrOptions{
    validation:boolean
    usingCusValidation: boolean,
    cusDispatcherEventName?: string
    giveBackEventObj?:boolean
}


export type ValidatorType = Exclude<inBuildTypeAttrType, "syncWithValidator" | "text">
export interface InBuiltOptions extends MandatoryErrOptions{
    validation:true,
    usingCusValidation: false,
    validator: ValidatorType,
    RegexForValidation?: RegExp
}


export type InputValidationOptionsType = InBuiltOptions | (MandatoryErrOptions & {
    validation:true,
    usingCusValidation: true,
    validationFunc:(value:string) => boolean
}) | {
    validation:false,
    cusDispatcherEventName?: string
    giveBackEventObj?:boolean
}



interface IconCustomCompType {
    iconComp:true,
    customComp:true,
    iconPosition?:"left" | "right",
    widthOfIcon?:`${number}px` | `${number}%`
}


interface InputIconOptionsInBuiltType{
    customComp:false,
    iconComp:true,
    iconPosition?:"left" | "right",
    widthOfIcon?:`${number}px` | `${number}%`
}

export type InputIconOptionsType = IconCustomCompType | InputIconOptionsInBuiltType |  {
    iconComp:false
}

export type SupportingTextOptions = {
    customComponent: true,
} | {
    customComponent:false,
    text:string
} | undefined


export type EventFromInputType = Event & {
    currentTarget: EventTarget & HTMLInputElement,
}


//! IconSectionOfInp
export type IconSectionOfInpOptionsType = IconCustomCompType | InputIconOptionsInBuiltType


export type customErrorComponentType = {
    useCustomErrorComp:true,
} | {
    useCustomErrorComp:false,
    errorText?:string,
}

export type IconCompSelectorType = Exclude<inBuildTypeAttrType,"text" | "email" | "syncWithValidator">