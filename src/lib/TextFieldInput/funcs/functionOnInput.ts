import type { EventDispatcher } from "svelte"
import type { InputValidationOptionsType, ValidatorType, readonlyOptionsType } from "../types/TextFieldInputTypes.js"
import RegexForValidator from "../../HelperFuncs/class/RegexValidationClass.js";


const functionOnInput = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch:EventDispatcher<any>,
    inputValidationOptions: InputValidationOptionsType,
    e: Event & {
        currentTarget: HTMLInputElement;
    },
    showError:boolean,
    parentRef: HTMLDivElement | null | undefined,
    currentTarget:HTMLInputElement,
    readOnlyOptions: readonlyOptionsType,
    errorTextColor:string,
    textPassedBlueVariantBorder:string
):{
    valueForInternalAccess: string;
    CusError: boolean;
    validated:boolean;
    inputRefType: ValidatorType | "text",
} => {

    const valueForInternalAccess = currentTarget.value
    
    const eventName = inputValidationOptions.cusDispatcherEventName ?? "inputChanged"

    let validated = false

    if(inputValidationOptions.validation === true){
        if(inputValidationOptions.usingCusValidation === true){

            validated = inputValidationOptions.validationFunc(valueForInternalAccess)
    
        }else{
            validated = RegexForValidator.Validate(inputValidationOptions.validator,valueForInternalAccess,inputValidationOptions.RegexForValidation)
        }
    }else{
        validated = true
    }

    if(validated === false && valueForInternalAccess.length > 0){
        showError = true
        if(parentRef !== null && parentRef !== undefined){parentRef.style.borderBottom = `2px solid ${errorTextColor}`}
    }else{
        showError = false
        if(parentRef !== null && parentRef !== undefined && readOnlyOptions.readOnlyCondition === false){parentRef.style.borderBottom = `2px solid ${textPassedBlueVariantBorder}`}
    }

    dispatch(eventName,{
        value: inputValidationOptions.giveBackEventObj === true ? e : valueForInternalAccess,
        isValid: validated
    })

    const inputType =  currentTarget.type !== "email" && currentTarget.type !== "number" && currentTarget.type !== "tel" && currentTarget.type !== "url" && currentTarget.type !== "password" ? "text" : currentTarget.type

    return {
        valueForInternalAccess,
        CusError:showError,
        validated,
        inputRefType: inputType
    }
}

export default functionOnInput


