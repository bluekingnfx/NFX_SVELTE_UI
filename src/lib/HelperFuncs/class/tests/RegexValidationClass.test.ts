

import { describe,it,expect } from "vitest";
import RegexForValidator, { type AvailableValidatorType } from "../RegexValidationClass.js";


const itClauseBoilerPlate = (
    describeTestText:string,
    stringToChk:string,
    destinedTo:boolean,
    type: AvailableValidatorType
) => {
    it(describeTestText,() => {
        expect(RegexForValidator.Validate(type,stringToChk)).toBe(destinedTo)
    })
}


describe("RegexValidationClassEmailTest",() => {


    itClauseBoilerPlate("Should be true cause valid mail pattern","sid.09@gmail.com",true,"email")

    itClauseBoilerPlate("Includes illegal '>'","sid$$$>?@gmail.com",false,"email")

    itClauseBoilerPlate("Includes illegal consecutive '.' in username","sid..S@gmail.com",false,"email")

    itClauseBoilerPlate("Includes illegal @ in username","sid@f@gmail.com",false,"email")

    itClauseBoilerPlate("Includes special characters in domain part other than '.'","sid@hot.ma@r#.com",false,"email")

    itClauseBoilerPlate("Includes illegal consecutive '.' in domain name","sid@gm..ail.com",false,"email")

})


it("not valid number pattern contains letters",() => {
    expect(RegexForValidator.Validate("number","d1d1d")).toBe(false)
})

describe("numberRegexValidationClass",() => {
    itClauseBoilerPlate("Valid number pattern","1111",true,"number")

    itClauseBoilerPlate("Not valid number pattern contains letters","d1d1d",false,"number")

    itClauseBoilerPlate("Not valid number pattern contains special character letters","/1223$",false,"number")
})

describe("phoneNumberRegexPattern",() => {
    itClauseBoilerPlate("Valid phone number continuous 10 numbers","9994449999",true,"tel")

    itClauseBoilerPlate("Valid phone number space appropriate part","999 444 9999",true,"tel")

    itClauseBoilerPlate("Valid phone number with country code","+91 9994449999",true,"tel")

    itClauseBoilerPlate("Valid phone number with country code no space","+919994449999",true,"tel")

    itClauseBoilerPlate("Valid phone number with country code with space","+91 999 444 9999",true,"tel")
})

describe("PasswordFromRegexValidator",() => {

    itClauseBoilerPlate("Valid password pattern","@dUmmyPass123",true,"password")

    itClauseBoilerPlate("Does not match requirement of at least one upper case letter","dummy@123",false,"password")

    itClauseBoilerPlate("Does not match requirement of at least one lower case letter","DUMMY@123",false,"password")

    itClauseBoilerPlate("Does not match requirement of at least one number","#$@!@u#!@A#!",false,"password")

    itClauseBoilerPlate("Does not match the  requirement of being 8 characters in length","#$@Au!",false,"password")

    itClauseBoilerPlate("Matches one more character type","!@SDsd12",true,"password")
})
