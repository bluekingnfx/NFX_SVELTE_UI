
import { describe,expect,it } from "vitest";

import InputTypeDecider from "../InputTypeDecider.js";


describe("Input type decider",() => {
    it("Return text if the value of InputValidation.validation is false",() => {
        expect(InputTypeDecider("email",{
            validation:false,
        })).toBe("text")
    })


    it("Return text if the typeOfInput is syncWithValidator and usingCusValidation is true", () => {
        expect(InputTypeDecider("syncWithValidator",{
            usingCusValidation:true,
            validation:true,
            validationFunc:() => {
                return [true,false][Math.floor(Math.random()*2)]
            }
        })).toBe("text")
    })

    it("Return inBuiltType if not syncValidator (the first argument) if usingCusValidation is true", () => {
        expect(InputTypeDecider("number",{
            usingCusValidation:true,
            validation:true,
            validationFunc:() => {
                return [true,false][Math.floor(Math.random()*2)]
            },
        })).toBe("number")
    })

    it("Return validator if the typeOfInput is syncWithValidator and adopting for cusValidation false",() => {
        expect(InputTypeDecider("syncWithValidator",{
            validation:true,
            usingCusValidation:false,  
            validator:"email"
        })).toBe("email")
    })

    it("Return text if the validator value is not in part of validator",() => {
         // @ts-expect-error Intentional error.
        expect(InputTypeDecider("I am not in validator type",{
            usingCusValidation:true,
            validation: () => {
                return false
            },
        }))
    })

})