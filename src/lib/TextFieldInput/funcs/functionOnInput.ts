import type { EventDispatcher } from "svelte"
import type { InputValidationOptionsType } from "../types/TextFieldInputTypes.js"
import RegexForValidator from "../../HelperFuncs/class/RegexValidationClass.js";


const functionOnInput = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch:EventDispatcher<any>,
    inputValidationOptions: InputValidationOptionsType,
    e: Event & {
        currentTarget: HTMLInputElement;
    },
    showError:boolean,
    parentRef: HTMLDivElement | null | undefined
):{
    valueForInternalAccess: string;
    CusError: boolean;
    validated:boolean;
} => {
    const valueForInternalAccess = e.currentTarget.value
    
    const eventName = inputValidationOptions.cusDispatcherEventName ?? "inputChanged"

    let validated = false

    if(inputValidationOptions.validation === true){
        if(inputValidationOptions.usingCusValidation === true){

            validated = inputValidationOptions.validationFunc(e.currentTarget.value)
    
        }else{
            validated = RegexForValidator.Validate(inputValidationOptions.validator,e.currentTarget.value,inputValidationOptions.RegexForValidation)
        }
    }else{
        validated = true
    }

    if(validated === false && e.currentTarget.value.length > 0){
        showError = true
        if(parentRef !== null && parentRef !== undefined){parentRef.style.borderBottom = "2px solid #ff2828"}
    }else{
        showError = false
        if(parentRef !== null && parentRef !== undefined){parentRef.style.borderBottom = "2px solid #0072E5"}
    }

    dispatch(eventName,{
        value: inputValidationOptions.giveBackEventObj === true ? e : e.currentTarget.value,
        isValid: validated
    })

    return {
        valueForInternalAccess,
        CusError:showError,
        validated
    }
}

export default functionOnInput


