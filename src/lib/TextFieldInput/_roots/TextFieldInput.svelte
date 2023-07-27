


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

    ## Props to the Component.

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

    **supportingText**
    ```ts
    type: string | undefined
    // default 
    export let supportingText = undefined //Means there is no supporting text
    ```
    supportingText **_(optional)_** is down to the input, that represents characteristic of input.
    Example:
    ```jsx
    <TextField supportingText = "This is a required input" />
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
    ```ts
    <TextField supportingText = "This is a required input" />
    ```

    **readonlyField**
    ```ts
    export type: boolean
    // default 
    export let readonlyField = false
    ```
    To make the input read-only **_(optional)_**.


    **inputValidationOptions**

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
    - *default* - "left"
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
    ```ts

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
    ```ts
    <TextFieldInput 
        inputValidationOptions={
            validation:true,
            usingCusValidation:false,
            validator:number
        }
        inputIconOptions={
            iconComp:true,
            customComp:false,
            iconPosition:left,
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
            iconPosition:right,
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

    customErrorCompOptions **_(optional)_** is used when you wish to display the error in different from default way of displaying error (red text at the bottom).

    `customErrorCompOptions.useCustomErrorComp`
    - *default* - false
    - switch to use customErrorComp.

    `customErrorCompOptions.errorText`
    - *default* - "There is a error"
    - Text to display in component-inbuilt error component.

    **If you chose to use custom error component, you need to pass a named slot with a name = customIconComponent, otherwise you will see Chose customElement Error Component (fallback) -> which is intentional to make you provide the error component or default to inbuilt error component. (This behavior may subject to change in future).**

    *_Example:_* 
    ```tsx
    <TextFieldInput
        inputValidationOptions = {...}
        customErrorCompOptions={
            useCustomErrorComp:true
        }
    >
        <CustomFancyErrorComponent 
            name="customIconComponent"
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
    /> // You decided to use custom error component.

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
    ```



-->


<script lang="ts">

    /* Library imports */
    import { createEventDispatcher, onMount } from "svelte";

    /* Type imports */
    import type { InputValidationOptionsType, inBuildTypeAttrType,InputIconOptionsType, customErrorComponentType } from "../types/TextFieldInputTypes.js";

    // Refactored Component parts 
    import debounce from "../../HelperFuncs/funcs/debounce.js";
    import inputEvents from "../actions/InputEvents.js";
    import onMountMethod from "../lifecycleMethods/onMountMethod.js";
    import functionOnInput from "../funcs/functionOnInput.js";
    import IconSectionOfInp from "./IconSectionOfInp.svelte";

    
    //! Props that can be passed to component
    export let labelText = "Enter a value"

    export let placeHolder = "Enter a value"

    let CusError = false
    export {CusError as ShowError}

    export let supportingText:string | undefined = undefined

    export let debounceOptions = {
        debounceTheInput: false,
        delayToDebounce: 500
    }

    export let requiredField = false

    export let readOnlyField = false

    export let customErrorCompOptions:customErrorComponentType = {
        useCustomErrorComp:false,
        errorText:"There is a error"
    }

    export let inputIconOptions:InputIconOptionsType = {
        iconComp:true,
        customComp:false,
        iconPosition: "right"
    }


    export let inputValidationOptions: InputValidationOptionsType = {
        validation:false,
    }

    // Variables of internal use
    const dispatch = createEventDispatcher()

    let labelRef:HTMLLabelElement|undefined|null = undefined

    let labelHeightFromTop = 0

    let valueForInternalAccess:string = ''

    let parentRef: HTMLDivElement | undefined | null = undefined

    let inBuildTypeAttr:inBuildTypeAttrType = inputValidationOptions.validation && inputValidationOptions.usingCusValidation === false && inputValidationOptions.validator !== undefined ? inputValidationOptions.validator : "text"

    let isValid:boolean = false

    //! life cycle methods
    onMount(() => {
        labelHeightFromTop = onMountMethod(labelRef)
    })

    //! functions 
    const functionBodyForInp = (e:Event & { 
        currentTarget: EventTarget & HTMLInputElement
    }) => {
        const {CusError:cusErr,valueForInternalAccess:value,validated} = functionOnInput(dispatch,inputValidationOptions,e,CusError,parentRef)
        CusError = cusErr
        valueForInternalAccess = value
        isValid = validated
    }

    const OnInputChange = debounce(functionBodyForInp,debounceOptions.debounceTheInput,debounceOptions.delayToDebounce)

    //! reactive statements
    //$:console.log(labelHeightFromTop)
</script>



<!-- !Store to change the prefix, custom-styles for label onFocus. Based on theme the border color -->

<div class="parentContainer" style="
    height:var(--height-of-Input,70px);
    padding-left: {inputIconOptions.iconComp === true && inputIconOptions.iconPosition === "left" ? "0px" : "20px"}
" bind:this={parentRef} class:parentContainerOnPosition={inputIconOptions.iconComp === true && inputIconOptions.iconPosition === "right"} id="NFX_Text_Input_ID" >

    {#if inputIconOptions.iconComp === true}
        <IconSectionOfInp 
            inputIconOptions={inputIconOptions}
            inputValidationOptions={inputValidationOptions}
            isValid={isValid}
        >
            <slot name="customIconComponent" slot="IconComponent"/>
        </IconSectionOfInp>
    {/if}

    <div 
        class="outlined" 
        class:removePointerEvents = {readOnlyField === true} 
        style="
            width: {inputIconOptions.iconComp === true ? `calc(100% - ${inputIconOptions.widthOfIcon ?? "60px"})`: "100%"};
        "
    >
        <label 
            for="NFX_Text_Input_ID" 
            bind:this={labelRef} 
            class="label"
        >
            {labelText}
        </label>
    
        <input
            class="mainInput" 
            use:inputEvents={{
                CusError,
                labelHeightFromTop,
                labelRef_Global:labelRef,
                placeHolder,
                valueForInternalAccess,
                parentRef
            }}
            on:input={OnInputChange} 
            type={inBuildTypeAttr}
            required={requiredField}
            readonly={readOnlyField}
        />
    
    </div>
</div>
{#if inputValidationOptions.validation === true && CusError && valueForInternalAccess.length > 0}
    {#if customErrorCompOptions.useCustomErrorComp === true}
        <slot name="cusErrorComponent">
            Chose customElement Error Component (fallback)
        </slot>
    {:else}
        <div class="supportingText supportingTextError">
            {customErrorCompOptions.errorText ?? "Input is invalid"}
        </div>
    {/if}
{:else}
    {#if supportingText !== undefined}
        <div class='supportingText'>
            {supportingText}
        </div>
    {/if}
{/if}


<style>

    *{
        box-sizing: border-box;
    }

    .parentContainer{
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        border-bottom: 2px solid #c4c4c4;
        background-color: rgba(255, 255, 255, 0.089);
        transition: border 0.2s linear;
        padding: 0px 0px 0px 20px;
    }

    .parentContainerOnPosition{
        flex-flow: row-reverse nowrap;
    }

    .parentContainer:hover{
        border-bottom: 2px solid rgb(252, 252, 252);
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

    .supportingTextError{
        color: #ff2828
    }

</style>

