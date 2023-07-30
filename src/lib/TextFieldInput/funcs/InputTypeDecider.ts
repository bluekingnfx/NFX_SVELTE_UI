
import type { inBuildTypeAttrType, InputValidationOptionsType, ValidatorType } from "../types/TextFieldInputTypes.js";


const InputTypeDecider = (
    typeOfYourInput:inBuildTypeAttrType,
    inputValidationOptions:InputValidationOptionsType
):ValidatorType | "text" => {
    if(inputValidationOptions.validation === false){
        return "text" 
    }

    if(inputValidationOptions.validation === true && inputValidationOptions.usingCusValidation === true){
        if(typeOfYourInput === "syncWithValidator"){return "text"}
        else{ return typeOfYourInput}
    }

    if(inputValidationOptions.validation === true && inputValidationOptions.usingCusValidation === false && typeOfYourInput === "syncWithValidator"){
        return inputValidationOptions.validator
    }

    return "text"

}

export default InputTypeDecider