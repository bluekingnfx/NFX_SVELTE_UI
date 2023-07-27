export type inBuildTypeAttrType = "email" | "password" | "text" | "number" | "url" | "tel"


export interface MandatoryErrOptions{
    validation:boolean
    usingCusValidation: boolean,
    cusDispatcherEventName?: string
    giveBackEventObj?:boolean
}

export interface InBuiltOptions extends MandatoryErrOptions{
    validation:true,
    usingCusValidation: false,
    validator: "email" | "tel" | "password" | "number" | "url" ,
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

//! IconSectionOfInp
export type IconSectionOfInpOptionsType = IconCustomCompType | InputIconOptionsInBuiltType


export type customErrorComponentType = {
    useCustomErrorComp:true,
} | {
    useCustomErrorComp:false,
    errorText?:string,
}