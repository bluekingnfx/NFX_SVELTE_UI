


<!-- 
    Format HT(ED)DE/U (left to right precedence) / => precedence interchangeable.
    H => Heading
    T => Type 
    ED => Export default.
    D => Description
    E => Example 
    U => Usage.
-->
<!--
    @component

    # Text Field Component

    Regular input field with super powers 🪄

    ---

    ## Starting point
    🤔 Creating a basic input which is ready for modifying
    
    ```tsx
    <TextFieldInput />
    ```

    🤔 Creating a basic text field which gives the info to the user what the input is about and obtain value of the user.

    ```tsx
    //start of script tag <script>
    let val:string = ''
    //end of script tag </script>

    <TextFieldInput 
        labelText="Enter your name"
        placeHolder="@ex: Emily"
        on:inputChanged={(e) => {
            val = e.detail.value
        }}
    />
    ```
    ---

    ## Component events
    - `on:inputChanged` - Default component listener convention for listening to input events.
    - `on:mountedWithInput` - Default component listener convention to get the input reference when the component is mounted.

    ---

    ## Slots
    - `customIconComponent` - Slot label to insert or introduce your custom icon component
    - `customSupportingText` - Slot label to insert or introduce your custom supporting text component.
    - `cusErrorComponent` - Slot label to insert your own custom error component

    Usage of slots with respective props is required, otherwise highlighted text will be displayed at their respective positions in the screen. Usage section(below) offers more comprehensive way of using custom components.

    ---

    ## Color Palette composition

    Parent Container background : `lessIntensePrimaryColor` of respective theme

    Input text color : `secondaryColor` of the respective theme

    Border color on no input : `lessIntenseSecondaryColor` of the respective theme

    Label Text color : `textPassedBlueVariant`

    Border color on correct input : `blueVariantLightText`

    Error text color : `redIntenseLessVariant` for dark theme and `redIntenseVariant` for white theme

    Icon color: `tertiaryColor` of the respective theme
    
    No input hover: `hoverBlueVariant`
    ---

    ## Props to the Component.

    **theme**
    ```ts
    type: "dark" | "light"
    export let theme = $colorPalette.theme //!dark
    ```

    Theme **_(optional)_** is theme setter prop specific to component, if you would like to apply theme unanimously - check out color palette store.

    **LabelText**
    ```ts 
    type: string
    //default 
    export let labelText = "Enter a value"
    ```
    Label tag text **_(optional)_** node acts as Info text about input tag that exhibits mobility (moving behavior or animation) based on focus events. 

    **placeHolder**
    ```ts
    type: string
    // default 
    export let placeHolder = "Enter a value"
    ```
    placeHolder **_(optional)_** attribute that can be used to show example how the input can be used (just a use case.)

    **typeOfYourInput**
    ```ts
    type:"number" | "email" | "password" | "text" | "url" | "tel" | "syncWithValidator"

    // if you use component built validator 
    export let typeOfYourInput = "syncWithValidator" 

    // if you use custom Validator func it will be 
    export let typeOfYourInput = "text"
    ```

    typeOfYourInput **_(optional)_** is alias of type attribute of HTMLInputElement but with restrictions. (sync is special not a type)
    
    - Component will not restrict you from adding value to inputValidations.validator different from this prop, its upto your experiment. 
    - **I strongly recommend if you going to use component 
    built validation leave it default**
    - If you going to use syncWithValidator with your customValidation function it defaults back to text.


    **supportingText**
    ```ts
    type: {
        customComponent: true;
    } | {
        customComponent: false;
        text: string;
    } | undefined
    // default 
    export let supportingText = undefined //Means there is no supporting text
    ```
    supportingText **_(optional)_** is down to the input, that represents characteristic of input.

    - If chose to do `supportingText.customComponent:true` one must passed named slot (usage down below).
    
    -If chose to do `supportingText.customComponent:false` one must passed error text along with it.

    *_Usage_*:

    ```tsx
    ✅
    <TextField supportingText = {customComponent:true}>
        <FancySupportingText 
            slot="customSupportingText"
        />
    </TextField>

    <TextField 
        supportingText={customComponent:false,text:"This is required field."}
    />

    ❌
    <TextField supportingText = {customComponent:false,text:'Iam tripping.'}>
        <FancySupportingText 
            slot="customSupportingText"
        />
    </TextField>

    ```

    *_Example_*:

    ```tsx
    <TextField supportingText = {customComponent:true}>
        <FancySupportingText 
            slot="customSupportingText"
        />
    </TextField>
    ```

    **debounceOptions**
    ```ts
    type: {
        debounceTheInput: boolean
        delayToDebounce: number
    }
    // default 
    export let debounceOptions = { debounceTheInput: false, delayToDebounce: 500 }
    ```

    debounceOptions **_(optional)_** are needed when sometimes you might want to sent response to server directly to fetch data, in those circumstance it is useful to fire events delayed, this process is called debounced.

    `debounceOptions.debounceTheInput` 
    - *default : false*
    - To enable debounce process.

    `debounceOptions.delayToDebounce` 
    - *default: 500*
    - Time delay before firing consequent events, **in milliseconds.**

    **requiredField**
    ```ts
    type: boolean
    // default 
    export let requiredField = false
    ```
    RequiredField **_(optional)_** is to make the input field required. Component does not apply any constraints that html form does. Consider:

    ```tsx
    <TextField supportingText = "This is a required input" />
    ```

    **readOnlyOptions**
    ```ts
    export type readonlyOptions = {
        readOnlyCondition:false
    } | {
        readOnlyCondition:true,
        initialVal?:string
    }
    // default 
    export let readOnlyOptions = false
    ```
    To make the input read-only.

    **obtainInputReference**
    ```ts
    type obtainInputReference = {
        needReference: true,
    customComponentEventName?: string
    } | {
        needReference: false
    }

    //default
    export let obtainInputReference = {
        needReference: false
    }
    ```

    obtainInputReference **_(optional)_** dispatches the input reference to the custom event of component after *mounting*

    `obtainInputReference.needReference`
    - default: false,
    - Indicator for intentions of obtaining the input reference after component mount.

    `obtainInputReference.customComponentEventName`
    - default: mountedWithInput
    - String value for to re-initialize the inbuilt naming convention  to desired one.

    *_Usage_*:

    ```tsx
    ✅
    <TextFieldInput
        obtainInputReference = {{
            needReference:true
        }}
        on:mountedWithInput={(e) => {
            globalRefForInp = e.detail //! Assuming the globalRefForInp is available for all of component instance and its children. e.detail is a input reference.
        }}
    />
    
    <TextFieldInput
        obtainInputReference = {{
            needReference:true,
            customComponentEventName: "I_HATE_AUTHORS_AWFUL_NAMING_CONVENTION"
        }}

        on:I_HATE_AUTHORS_AWFUL_NAMING_CONVENTION = {(e) => {
            globalRefForInp = e.detail
        }}

        on:inputChanged = {.//Logic..}
    />

    ❌
    <TextFieldInput 
        obtainInputReference = {{
            needReference:false 
        }}
        on:mountedWithInput={...} <--- Will never be called cause you are just flagged `obtainInputReference.needReference:false`
    />

    <TextFieldInput 
        obtainInputReference = {{
            needReference:true,
            customComponentEventName:"EventIsMissing"
        }}
        //since component not listening to EventIsMissing is though it dispatches; there is no one to listen, I does not cause memory leak.
    />
    ```

    **customAttributesForElements**
    ```ts
    type DefinitionCusAtr = {
        [x:string]: string
    }
    type customAttributesForElements = {
        parentContainer?: DefinitionCusAttr 
        label?: DefinitionCusAttr
        input?: Exclude<DefinitionCusAttr , "type">
    }

    //default
    export let customAttributesForElements = {}
    ```
    customAttributesForElements **_(Optional)_** is object of key-value pairs which will spread to respective tag.

    `customAttributesForElements.parentContainer`
    - default undefined
    - Properties you like to  pass top level wrapper of IconComponent, input and label element. 

    `customAttributesForElements.label`
    - default undefined
    - Extra  properties that you like to pass in the label tag of the component.

    `customAttributesForElements.input`
    - default undefined
    - Extra properties that you like to pass in the input tag of the
    component
    - **Type attribute will suppressed and typeOfYourInput will take precedence - to maintain core integrity of the component** 

    **changeTypeOfInputOnRealTime**
    ```ts
    type changeTypeOfInputOnRealTime: boolean

    //default
    export let changeTypeOfInputOnRealTime = true
    ```

    changeTypeOfInputOnRealTime **_(optional)_** is a permissible to change the 'allowed' type of input on changing the input.type using js.

    *_Example_*:

    ```tsx
    //<script lang="ts">
        let inpRef:HTMLInputElement | undefined
    //</ script>
    ✅
    <TextFieldInput
        changeTypeOfInputOnRealTime = {true}
        obtainInputReference={{
            needReference:true
        }}
        on:mountedWithInput = {(e) => {
            inpRef = e.detail
        }}
        inputValidationOptions={{
            validation:true,
            usingCusValidation:false,
            validator:"password"
        }}
        inputIconOptions={{
            iconComp:true,
            customComp:false, 
            iconPosition:"left"
        }}
    >
        <FancyIconComp {inputRef} />
    </TextFieldInput>

    //FancyIconComp.svelte
    //<script lang="ts">
        let inpRef:HTMLInputElement | undefined
        
        const changeInpType = () => {
            if(inputRef.type === "text"){
                inputRef.type = "password"
            }else{
                inputRef.type = "text"
            }
        }
    //</>
    <button on:click={changeInpType}>
        Change The InputType
    </button>
    ```
    In above *_Example_* code the input type is changed to password to text and vice versa which allowed cause of `changeTypeOfInputOnRealTime = true` prop otherwise the type will stay at initial value given to the `typeOfYourInput` prop. Say, you unintentionally changed the type of the input by color which is not supported by component - will fallback / turn from color to text. (for supported types look at typeOfYourInput)

    You want to make sure that the input stays at the initial type you can just set `changeTypeOfInputOnRealTime = false`.

    **inputValidationOptions**
    ```ts
    type inputValidationOptions = {
    validation:true,
    usingCusValidation:false,
    validator: "number" | "email" | "password" | "url" | "tel"
    RegexForValidation?: RegExp
    cusDispatcherEventName?: string
    giveBackEventObj?:boolean
    } | {
        validation:true,
        usingCusValidation: true,
        validationFunc:(value:string) => boolean
        cusDispatcherEventName?: string
        giveBackEventObj?:boolean
    } | {
        validation:false,
        cusDispatcherEventName?: string
        giveBackEventObj?:boolean
    }

    //default
    export let inputValidationOptions = {
        validation: false
    }
    ```
    inputValidationOptions **_(optional)_** is the heart(functional) part of the input, exhibits a UI change over a wrong input if validation is chosen to be true

    **To catch the value from  the input on must listen to the custom event dispatched

    **Remember ➡️: Passing customErrorOptions fully depends upon on the validation:true 
    **

    `inputValidationOptions.validation` 
    - *default*: false
    - Switch to decide if to validate the input value.

    `inputValidationOptions.cusDispatcherEventName`
    - *default*: inputChanged
    - Component listener `on:{your_naming_convention}` is called with your naming convention.

    `inputValidationOptions.giveBackEventObj`
    -*default*: false
    - object of shape {
        isValid: boolean //boolean property indicating whether value passes validation, true always if `inputValidationOptions.validation: false`
        value: e | val 
    }
    - if false, the e.detail.value from custom component event listener *inputChanged* will be value of type `string`.
    - if true, the e.detail.value from custom component event listener *inputChanged* will be of type `Event & {currentTarget: HTMLInputElement}`
    
    `inputValidationOptions.usingCusValidation` 
    - **required** //due to inputValidationOptions.validation: true
    - a boolean indictor if you are using custom validation function.
    
    `inputValidationOptions.validationFunc`
    - **required** //due to inputValidationOptions.usingCusValidation: true
    - Custom callback function that is called with value (at interaction moments ) must be returned with boolean indicating if the value that was passed as an argument a valid string 

    `inputValidationOptions.validator`
    - **required** // due to inputValidationOptions.validation:true
    - validator is inbuilt custom regex expression to check if the value that entered (momentary) valid or not which determines if `isValid` property of dispatched component event.

    `inputValidationOptions.RegexForValidation` 
    - default: undefined
    - If you are certain thing in mind - like you need only the composition even numbers then you can change inbuilt regex expression to the desired one. In this case regex to validate even number composition.

    *_Usage_*:

    ```tsx
    ✅
    <TextFieldInput 
        inputValidationOptions={{
            validation: false,
            giveBackEventObj:true
        }}

        on:inputChanged = {(e: CustomEvent) => {
            console.log(e.detail)  //{value: e, isValid:boolean}
            //The returned e will type of 
            ```ts
                Event & {
                    currentTarget: HTMLInputElement
                }
            ```
        }}
    />

    <TextFieldInput 
        inputValidationOptions={{
            validation: true,
            usingCusValidation:true,
            validationFunc:() => {
                //validation code eg: regex to check your value
                return false //(boolean)
            }
            cusDispatcherEventName: "ListeningToVal"
            giveBackEventObj: false
        }}

        on:ListeningToVal = {(e) => {
            console.log(e.detail) // {value: e, isValid: boolean }
            //The returned value will be string.
        }}
    />

    <TextFieldInput 
        inputValidationOptions={{
            validation: true,
            usingCusValidation:false,
            validator: number /// if you like to inbuilt number regex validator. 
            giveBackEventObj: false
        }}

        on:inputChanged = {(e) => {
            console.log(e.detail) // {value: e, isValid: boolean }
            //The returned value will be string.
        }}
    />

    //If you unsatisfied with number validation that checks if the entry is number, you might pass your own regex without changing validator type from number.

    //🤔 Motive to validate if the number entered is even number and  you just want to do checking without doing something before validation. (i.e changing only validation logic) 

    <TextFieldInput 
        inputValidationOptions={{
            validation: true,
            usingCusValidation:false,
            validator: number,
            RegexForValidation: /^[02468]+$/ //<--- only allow even terms to the input otherwise show error.
        }}

        on:inputChanged = {(e) => {
            console.log(e.detail) // {value: e, isValid: boolean }
            //The returned value will be string.
        }}
    />

    ❌
    <TextFieldInput 
        inputValidationOptions={{
            validation:false,
            cusDispatcherEventName: "ListeningToVal"
            giveBackEventObj: false
            {...rest} //<--- Whatever this rest of the key-value pairs it will not work. Since rest of props is associated with validation: true.
        }}
        on:inputChanged={(e) => //logic}
    />

    <TextFieldInput 
        inputValidationOptions={{
            validation:true,
            cusDispatcherEventName: "ListeningToVal"
            giveBackEventObj: false
            {...rest} //<--- rest of the props must be passed that is associated with validation: true, key value combinations are clearly explained above section (✅). Though Typescript💓 does not allow improper combinations 😜.
        }}
        on:inputChanged={(e) => //logic}
    />
    ```

    *_Example_*:

    ```tsx
    //You expect no validation and complexity 
    <TextFieldInput 
        on:inputChanged = {(e) => {
            sendToDbObj = { //Assuming sendToDbObj is provided in the script tag in global scope (of the component).
                ...sendToDbObj,
                someValueImportant: e.value
            }
        }}
    />

    <TextFieldInput 
        inputValidationOptions={{
            validation:true,
            usingCusValidation:true,
            validationFunc:() => {
                //do something before validation
                return /^[a-b][A-Ba-z.]{3,}@gmail.com/ //-> only allow google SMTP service.
            }
        }}
        inputIconOptions={{
            iconComp:true,
            customComp:true,
            iconPosition:right,
        }}
        customErrorCompOptions = {{
            useCustomErrorComp: true,
        }}
        
        supportingText = {{
            customComponent: true;
        }}
        on:inputChanged={(e) => //logic}
    >
        <FancySupportingComponent slot="customSupportingText" />
        <FancyEmailIconComponent slot="customIconComponent"/>
        <FancyErrorComponent slot="cusErrorComponent" />
    </TextFieldInput>


    <TextFieldInput 
        inputValidationOptions={{
            validation:true,
            usingCusValidation:false,
            validator: password,
        }}
        on:inputChanged={(e) => //logic}
    />
    ```

    ⚠️ Below props are dependent(or partially with) inputValidationOptions.

    **inputIconOptions**
    ```ts
    type : {
        iconComp:true,
        customComp:true,
        iconPosition?:"left" | "right",
        widthOfIcon?:`${number}px` | `${number}%`
    } | {
        customComp:false,
        iconComp:true,
        iconPosition?:"left" | "right",
        widthOfIcon?:`${number}px` | `${number}%`
    } | {
        iconComp:false
    }

    //default
    export let inputIconOptions = {
        iconComp:false
    }
    ```

    inputIconOptions **_(optional)_** is used to display icon on left or right side of horizontal axis. 

    `inputIconOptions.iconComp`
    - *default* - false 
    - Switch to use the icon component in the input.
    
    `inputIconOptions.iconPosition`
    - *default* - "right"
    - This option is used to position your icon component to you desired side in horizontal axis.

    `inputIconOptions.widthOfIcon`
    - *default* - 60px
    - This helps you to resize the icon component to desired width.

    `inputIconOptions.customComp`
    - *default* - false
    - Switch to use custom icon component for your Input.
    - **Named slot must be passed if you switch this option to true** - explained in usage section (down). If you don't use named slot, you probably will fallback to the following text *No Icon(fallback)*
    - If this option is false then `interactive` icon component is rendered based on **`inputValidationOptions.validator` currently tel | url | number | password is supported. In order to get access to 
    `inputValidationOptions.validator` one must turn on  inputValidationOptions.validation  with `inputValidationOptions.usingCusValidation` false.**

    *_Usage_*:

    ```tsx
    ✅
    <TextInputField 
        inputIconOptions={
            iconComp:false
        }
    /> // You have decided to use no Icon Component.

    <TextInputField 
        inputIconOptions={
            iconComp:true,
            customComp:true,
            iconPosition:left,
            widthOfIcon: 100px
        }
    >
        <FancyIconComponent slot="IconComponent"/>
    </TextInputField> //You decided use your custom component of width 100px placed at left side of input.


    <TextFieldInput 
        inputValidationOptions={
            validation:true,
            usingCusValidation:false,
            validator:password
        } // ✅ All options must be required to render an in-built icon component. You can always render your own interactive(or non interactive) custom Icon Component without these options but need to while rendering inbuilt component.
        inputIconOptions={
            iconComp:true,
            customComp:false,
            iconPosition:right,
        }
    /> // You have decided to use supported password icon component and turned to pre-requisites of inputValidationOptions to render the password icon component. 

    ❌
    <TextFieldInput
        inputIconOptions={
            iconComp:true,
            customComp:false, //<---
            iconPosition:left,
            widthOfIcon: 100px
        }
    >
        <FancyIconComponent slot="IconComponent"/>
    </TextFieldInput>
    // Which will not  yield expected result cause you chose to pass custom but with flag of customComp:false.

    <TextFieldInput
        inputValidationOptions={
            validation:true,
            usingCusValidation:true, //<---
            validator:email //<---
        }
        inputOptions={
            iconComp:true,
            customComp:false, 
            iconPosition:left,
            widthOfIcon: 100px
        }
    />
    // First usingCusValidation must be off
    //Second the validator email is not supported.
    ```

    *_Example:_* 

    ```tsx
    <TextFieldInput 
        inputValidationOptions={
            validation:true,
            usingCusValidation:false,
            validator:"number"
        }
        inputIconOptions={
            iconComp:true,
            customComp:false,
            iconPosition:"left",
        }
    />

    <TextFieldInput 
        inputValidationOptions={
            validation:true,
            usingCusValidation:true,
            validationFunc:() => {
                return result 
                // result is regex to check for email that resolves to boolean
            }
        }
        inputIconOptions={
            iconComp:true,
            customComp:true,
            iconPosition:"right",
        }
    >
        <FancyEmailIconComponent slot="IconComponent"/>
    </TextFieldInput>
    ```

    **customErrorCompOptions**
    ```ts
    type: {
        useCustomErrorComp: true;
    } | {
        useCustomErrorComp: false;
        errorText?: string
    }
    // default 
    export let customErrorCompOptions = {
        useCustomErrorComp: false,
        errorText:"There is a error"
    }

    ```

    customErrorCompOptions **_(optional)_** is used when you wish to display the error in different from default way of displaying error (red text at the bottom). **fully dependent on the inputValidationOptions prop, validation false does not trigger error.**

    `customErrorCompOptions.useCustomErrorComp`
    - *default* - false
    - switch to use customErrorComp.

    `customErrorCompOptions.errorText`
    - *default* - "There is a error"
    - Text to display in component-inbuilt error component.

    **If you chose to use custom error component, you need to pass a named slot with a name = cusErrorComponent, otherwise you will see Chose customElement Error Component (fallback) -> which is intentional to make you provide the error component or default to inbuilt error component. (This behavior may subject to change in future).**

    *_Example:_* 

    ```tsx
    <TextFieldInput
        inputValidationOptions = {...}
        customErrorCompOptions={
            useCustomErrorComp:true
        }
    >
        <CustomFancyErrorComponent 
            name="cusErrorComponent"
        />
    </TextFieldInput>
    ```

    *_Usage:_*
    
    ```tsx
    ✅
    <TextFieldInput 
        customErrorCompOptions = {
            useCustomErrorComp: true
        }
    >
        <FancyErrComp slot="cusErrorComponent"/>
    </>// You decided to use custom error component.

    <TextFieldInput 
        customErrorCompOptions = {
            useCustomErrorComp: false,
            errorText:"Please enter a valid value"
        }
    /> // You decided to use component in built error component and adorn it with your custom text

    ❌
    <TextFieldInput 
        customErrorCompOptions = {
            useCustomErrorComp:true,
            errorText:"Myself 'erroring' now."
        }
    /> //Which does not make sense => you have decided to use your own error component but errorText option only available if you chose customErrorCompOptions.useCustomErrorComp = true.

    <TextFieldInput 
        customErrorCompOptions = {
            useCustomErrorComp:false,
            errorText:"Myself 'erroring' now."
        }
    >
        <YourErrorComponent slot="cusErrorComponent"/>
    </> //You are passing  cusErrorComponent with useCustomErrorComp: false, errorText prop takes precedence.
    ```
-->


<script lang="ts">

    /* Library imports */
    import { createEventDispatcher, onMount,setContext } from "svelte";

    /* Type imports */
    import type { InputValidationOptionsType,InputIconOptionsType, customErrorComponentType, SupportingTextOptions, inBuildTypeAttrType, EventFromInputType, obtainInputReferenceType, customAttributesType, readonlyOptionsType} from "../types/TextFieldInputTypes.js";

    // Stores
    import colorPalette, { type ThemeType } from "$lib/global/stores/colorPalette.js";
    import prefixStore from "$lib/global/stores/prefixStore.js"


    // Refactored Component parts 
    import debounce from "../../HelperFuncs/funcs/debounce.js";
    import inputEvents from "../actions/InputEvents.js";
    import onMountMethod from "../lifecycleMethods/onMountMethod.js";
    import functionOnInput from "../funcs/functionOnInput.js";
    import IconSectionOfInp from "./IconSectionOfInp.svelte";
	import InputTypeDecider from "../funcs/InputTypeDecider.js";
	import produceRanString from "$lib/HelperFuncs/funcs/produceRanString.js";
	import FireFocusForReadOnly from "../lifecycleMethods/FireFocusForReadOnly.js";
    import parentConHighlightEvents from "../actions/parentConHighlightEvent.js"

    //! Props that can be passed to component

    export let theme:ThemeType = $colorPalette.theme

    export let labelText = "Enter a value"

    export let placeHolder = "Enter a value"

    export let supportingText:SupportingTextOptions = undefined

    export let typeOfYourInput:inBuildTypeAttrType = "syncWithValidator"

    export let debounceOptions = {
        debounceTheInput: false,
        delayToDebounce: 500
    }

    export let readOnlyOptions:readonlyOptionsType = {
        readOnlyCondition: false
    }

    export let requiredField = false
    

    export let customErrorCompOptions:customErrorComponentType = {
        useCustomErrorComp:false,
        errorText:"There is a error"
    }

    export let inputIconOptions:InputIconOptionsType = {
        iconComp:false,
    }

    export let inputValidationOptions: InputValidationOptionsType = {
        validation:false,
    }

    // If condition signifies if there is no icon component if the validation is true with with validator being tel or url
    if(inputIconOptions.iconComp === true && inputIconOptions.customComp === false && inputValidationOptions.validation === true && inputValidationOptions.usingCusValidation === false && (inputValidationOptions.validator === "tel" || inputValidationOptions.validator === "email")){
        inputIconOptions = {
            iconComp: false
        }
    }

    export let obtainInputReference:obtainInputReferenceType = {
        needReference: false
    }

    export let customAttributesForElements:customAttributesType = {}
    
    export let changeTypeOfInputOnRealTime = true

    // Variables of internal use

    let CusError = false
    
    const dispatch = createEventDispatcher()

    let labelRef:HTMLLabelElement|undefined|null = undefined

    let labelHeightFromTop = 0

    let valueForInternalAccess:string = ''

    let parentRef: HTMLDivElement | undefined | null = undefined

    let isValid:boolean = false

    let inputRef: HTMLInputElement | undefined | null = undefined

    let uniqueString:string = produceRanString()

    let InputType = InputTypeDecider(typeOfYourInput,inputValidationOptions)

    let backgroundColorDark = $colorPalette.darkThemeColorPalette.lessIntensePrimaryColor

    let backgroundColorLight = $colorPalette.lightThemeColorPalette.lessIntensePrimaryColor

    let textColorDark = $colorPalette.darkThemeColorPalette.secondaryColor

    let borderColorDark = $colorPalette.darkThemeColorPalette.lessIntenseSecondaryColor

    let borderColorLight = $colorPalette.lightThemeColorPalette.lessIntenseSecondaryColor

    let textColorLight = $colorPalette.lightThemeColorPalette.secondaryColor

    let textPassedBlueVariant = $colorPalette.intuitiveSignifiers.ok.blueVariantDarkText

    let textPassedBlueVariantBorder = $colorPalette.intuitiveSignifiers.ok.blueVariantLightText

    let errorDarkTextColor = $colorPalette.intuitiveSignifiers.error.redIntenseVariant

    let errorLightTextColor = $colorPalette.intuitiveSignifiers.error.redIntenseLessVariant

    export let darkVersionIconColor = $colorPalette.darkThemeColorPalette.tertiaryColor
    export let lightVersionIconColor = $colorPalette.lightThemeColorPalette.tertiaryColor

    export let hoverBlueVariant = $colorPalette.intuitiveSignifiers.interactiveHoverVariants.blueVariant

    //! life cycle methods
    onMount(() => {
        labelHeightFromTop = onMountMethod(labelRef,uniqueString,inputRef,obtainInputReference,dispatch)
        FireFocusForReadOnly(parentRef,inputRef,labelRef,readOnlyOptions,requiredField)
    })


    //! functions 

    const functionBodyForInp:(e:EventFromInputType,currentTarget:HTMLInputElement) => void = debounce((e:EventFromInputType,currentTarget:HTMLInputElement) => {
        const {CusError:cusErr,valueForInternalAccess:value,validated,inputRefType:typeOfInputOnRealTime} = functionOnInput(dispatch,inputValidationOptions,e,CusError,parentRef,currentTarget,readOnlyOptions,errorDarkTextColor,textPassedBlueVariantBorder)
        CusError = cusErr
        valueForInternalAccess = value
        isValid = validated
        if(changeTypeOfInputOnRealTime === true){
            InputType = typeOfInputOnRealTime
        }
    },debounceOptions.debounceTheInput,debounceOptions.delayToDebounce)

    /** 
        * ## functionToChangeVal
        * This is a function used with **interactive** - *capable of changing the input* that associated with custom icon component, this is used via named slot="customIconComponent" 
        * @argument cb **Cb is *callback function* that returns value to attach the returned value to your TextFieldInputComponent which is dispatched to you component eventlistener inputChanged.**
        * ----
        * *_Example_:*
        * ```tsx
        //componentThatTextFieldInputIsImported.svelte
        //Import statements...
        <TextFieldInput 
            inputValidationOptions={{ 
                validation: true,
                usingCusValidation:true, 
                cusDispatcherEventName:"listenToValueChange", 
                validationFunc:(val) => (/^[A-Z]+$/).test(val)
            }}
            on:listenToValueChange={(e) => {
                console.log(e.detail)
            }}
            inputIconOptions={{
                customComp:true,
                iconComp:true,
	        }}
        >
            <svelte:fragment let:functionToChangeVal>
                <UpperCaseComponent {functionToChange} />
            </svelte:fragment>
        </TextFieldInput>

        //UpperCaseComponent.svelte
        < script>
            export let functionToChange:((prevVal:string) => string) => void
            const changeAllToUpperCase = () => {
                functionToChange((prevVal) => {
                    return prevVal.toUpperCase()
                })
            }
        </ script>
        <button on:click={changeAllToUpperCase}>
            A
        </button>
        ```
    */

    const functionToChangeVal = (cb:(prevVal:string) => string) => {
        const val = cb(valueForInternalAccess)
        if(inputRef){
            inputRef.value = val
            inputRef.focus()
            inputRef.dispatchEvent(new Event("input"))
        }
    }

    //! contexts
    setContext("changeVal",functionToChangeVal)

</script>



<!-- !Store to change the prefix Based on theme the border color -->

<div 
    class="parentContainer" 
    style="
        background-color: {theme === "dark" ? backgroundColorDark : backgroundColorLight};
        height:var(--height-of-Input,70px);

        padding-left: {inputIconOptions.iconComp === true && (inputIconOptions.iconPosition === "right" || inputIconOptions.iconPosition === undefined) ? "20px" : "0px"};

        padding-left: {inputIconOptions.iconComp === false && "20px"};

        flex-flow: {inputIconOptions.iconComp === true && (inputIconOptions.iconPosition === "right" || inputIconOptions.iconPosition === undefined) ?  "row-reverse nowrap" : "row nowrap"};

        opacity: {readOnlyOptions.readOnlyCondition === true ? 0.9 : 1};

        border-bottom: 2px solid {theme === "dark" ? borderColorDark : borderColorLight};
    "  
    id={`ParentContainer_${uniqueString}`} 
    bind:this={parentRef} 
    use:parentConHighlightEvents={{
        inputRef,
        hoverBlueVariant,
        borderColorDark,
        borderColorLight,
        theme
    }}
    {...customAttributesForElements.parentContainer ?? {}}
>
    {#if inputIconOptions.iconComp === true}
        <IconSectionOfInp 
            {inputIconOptions}
            {inputValidationOptions}
            {isValid}
            {inputRef}
            {theme}
            {darkVersionIconColor}
            {lightVersionIconColor}
        >
            <slot 
                name="customIconComponent" 
                slot="IconComponent" 
                functionToChangeVal={functionToChangeVal}
            >
                <mark>Icon Fallback</mark>
            </slot>
        </IconSectionOfInp>
    {/if}

    <div 
        class="outlined" 
        class:removePointerEvents = {readOnlyOptions.readOnlyCondition === true} 
        style="
            width: {inputIconOptions.iconComp === true ? `calc(100% - ${inputIconOptions.widthOfIcon ?? "60px"})`: "100%"};
        "
    >
        <label 
            for = {`${$prefixStore}_INPUT_ID_${uniqueString}`}
            style="
                color:{theme === 'dark' ? textColorDark : textColorLight}
            "
            bind:this={labelRef} 
            class="label"
            {...customAttributesForElements.label ?? {}}
            
        >
            {labelText}
        </label>
    
        <input
            style="
                color:{theme === 'dark' ? textColorDark : textColorLight}
            "
            id = {`${$prefixStore}_INPUT_ID_${uniqueString}`}
            bind:this={inputRef}
            class="mainInput" 
            use:inputEvents={{
                CusError,
                labelHeightFromTop,
                labelRef_Global:labelRef,
                placeHolder,
                valueForInternalAccess,
                parentRef,
                readOnlyOptions,
                textColorDark,
                textColorLight,
                theme,
                textPassedBlueVariant,
                textPassedBlueVariantBorder,
                borderColorDark,
                borderColorLight
            }}
            {...customAttributesForElements.input ?? {}}
            type={InputType}
            on:input={(e) => {functionBodyForInp(e,e.currentTarget)}} 
        />
    
    </div>
</div>
{#if inputValidationOptions.validation === true && CusError === true && valueForInternalAccess.length > 0}
    {#if customErrorCompOptions.useCustomErrorComp === true}
        <slot name="cusErrorComponent">
            <mark>
                Chose Custom Error Component (fallback)
            </mark>
        </slot>
    {:else}
        <div 
            class="supportingText"
            style="
                color:{theme === "dark" ? errorLightTextColor : errorDarkTextColor};
            "
        >
            {customErrorCompOptions.errorText ?? "Input is invalid"}
        </div>
    {/if}
{:else}
    {#if supportingText !== undefined}
        {#if supportingText.customComponent === true}
            <slot name="customSupportingText">
                <mark>
                    Chose custom supporting text (fallback)
                </mark>
            </slot>
        {:else}
            <div
            class = "supportingText"
            style="
                color:{theme === 'dark' ? textColorDark : textColorLight}
            ">
                {supportingText.text}
            </div>
        {/if}
    {/if}
{/if}

<style>

    *{
        box-sizing: border-box;
        font-family: "Tahoma", Geneva, Verdana, sans-serif;
    }

    .parentContainer{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        transition: border 0.2s linear;
        padding: 0px 0px 0px 20px;
        margin-bottom: 10px;
    }

    .outlined{
        width: max-content;
        display: flex;
        position: relative;
        align-items: center;
    }

    .removePointerEvents{
        pointer-events: none;
    }

    .mainInput{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
        outline: none;
        background-color: transparent;
        border: 0px;
        border-radius: inherit;
        padding-top: 20px;
        font-size: 20px;
        transition: border 0.2s linear;
        z-index: 1;
        text-align: start;
    }

    .label{
        width: 100%;
        z-index: 1;
        display: block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space:nowrap;
        font-size: 20px;
        transition: top 0.2s linear,font-size 0.2s linear;
    }

    .supportingText{
        margin-top: 10px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        appearance: textfield;
        -moz-appearance: textfield;
    }

</style>


<!-- 
    - set up github ci/cd
-->