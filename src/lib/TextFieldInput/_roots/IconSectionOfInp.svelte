
<!-- 

    @component
    ## IconSectionOfInp (Internal use)
    IconSectionOfInp is internal component to render the icon with settings(props) passed into its parent component. 

    ---

    ⚠️ *It is not reusable as it depends on specific component props*

    ---
    
    ## Props
    **inputIconOptions**: IconOptions to determine the specific component or custom component to render

    **inputValidationOptions**: InputValidation options are required to understand what icon component to render based on available validation and not render if validation prop combination is wrong.

    **isValid**: if the answer is valid be true.

 -->


 <script lang="ts">
	import NumberIcon from "../IconComponents/Number/_roots/NumberIcon.svelte";
	import PasswordIcon from "../IconComponents/Password/_roots/PasswordIcon.svelte";
    import type { IconSectionOfInpOptionsType, InputValidationOptionsType,ValidatorType } from "../types/TextFieldInputTypes.js";

    export let inputIconOptions:IconSectionOfInpOptionsType

    export let inputValidationOptions:InputValidationOptionsType

    export let isValid:boolean

    export let inputRef: HTMLInputElement | undefined | null

    export let InputType: "text" | ValidatorType
    

</script>


<style>
    .parentContainer{
        display:flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
</style>    

<div class="parentContainer" style="
    width:{inputIconOptions.widthOfIcon ?? "60px"};
">
    {#if inputIconOptions.customComp === true}
    <slot name="IconComponent"/>
    {:else}
        {#if inputValidationOptions.validation === true && inputValidationOptions.usingCusValidation === false && inputValidationOptions.validator !== "email"}
            {#if inputValidationOptions.validator === "number"}
                <NumberIcon />
                {:else if inputValidationOptions.validator === "password"}
                <PasswordIcon {inputRef}/>
            {/if}
        {/if}
    {/if}
</div>

