

export type AvailableValidatorType = "number" | "email" | "password" | "url" | "tel"

class RegexForValidator{
    private static validate(RegexForValidation:RegExp,value:string){
        return RegexForValidation.test(value)
    }

    public static emailChecker(value:string,RegexForValidation?:RegExp):boolean{
        return this.validate(RegexForValidation ?? /^((?!.*\.\.)[\w._+-]{2,64})@((?!.*\.\.)[A-Za-z0-9.-]{2,250})\.[A-Za-z]{2,6}$/,value)
    }

    public static phoneChecker(value:string,RegexForValidation?:RegExp):boolean{
        return this.validate(RegexForValidation ?? /^(\+\d{1,4}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,value)
    }

    public static urlChecker(value:string,RegexForValidation?:RegExp):boolean{
        return this.validate(RegexForValidation ?? /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,value )
    }

    public static numberChecker(value:string,RegexForValidation?:RegExp):boolean{
        if(isNaN(Number(value))) return false
        return this.validate(RegexForValidation ?? /\d+/,value)
    }

    public static passwordChecker(value:string,RegexForValidation?:RegExp):boolean{
        return this.validate(RegexForValidation ?? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,value)
    }

    public static Validate(type:AvailableValidatorType,value:string,CusRegexForValidation?:RegExp):boolean{
        switch(type){
            case "number":
                return this.numberChecker(value,CusRegexForValidation)
            case "email":
                return this.emailChecker(value,CusRegexForValidation)
            case "password":
                return this.passwordChecker(value,CusRegexForValidation)
            case "url":
                return this.urlChecker(value,CusRegexForValidation)
            case "tel":
                return this.phoneChecker(value,CusRegexForValidation)
            default:
                return false
        }
    }
}


export default RegexForValidator