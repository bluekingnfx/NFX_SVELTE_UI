
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

    //Refactored Components parts
	import NumberIcon from "../IconComponents/Number/_roots/NumberIcon.svelte";
	import PasswordIcon from "../IconComponents/Password/_roots/PasswordIcon.svelte";
    import type { IconSectionOfInpOptionsType, InputValidationOptionsType } from "../types/TextFieldInputTypes.js";
    import type {ThemeType} from "../../global/stores/colorPalette.js";
    import URLIconComponent from "../IconComponents/Url/_roots/URLIconComponent.svelte";

    // Variables for internal use
    export let inputIconOptions:IconSectionOfInpOptionsType

    export let inputValidationOptions:InputValidationOptionsType

    export let isValid:boolean

    export let inputRef: HTMLInputElement | undefined | null
    
    export let theme:ThemeType

    export let darkVersionIconColor:string

    export let lightVersionIconColor:string
</script>


<style>
.parentContainer{
    display:flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}
</style>    


{#if inputIconOptions.customComp === true}
    <div class="parentContainer" style="
        width:{inputIconOptions.widthOfIcon ?? "60px"};
    ">
        <slot name="IconComponent"/>
    </div>
{:else}
    {#if inputValidationOptions.validation === true && inputValidationOptions.usingCusValidation === false}
        <div class="parentContainer" style="
        width:{inputIconOptions.widthOfIcon ?? "60px"};
        ">
            {#if inputValidationOptions.validator === "number"}
                <NumberIcon 
                    {theme}
                    {darkVersionIconColor}
                    {lightVersionIconColor}
                />
                {:else if inputValidationOptions.validator === "password"}
                <PasswordIcon 
                    {inputRef}
                    {theme}
                    {darkVersionIconColor}
                    {lightVersionIconColor}
                />
                {:else if inputValidationOptions.validator === "url"}
                <URLIconComponent 
                    {inputRef} 
                    {isValid}
                    {theme}
                    {darkVersionIconColor}
                    {lightVersionIconColor}
                />
            {/if}
        </div>
    {/if}
{/if}

