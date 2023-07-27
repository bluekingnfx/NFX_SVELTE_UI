


<script lang="ts">
    import type { IconSectionOfInpOptionsType, InputValidationOptionsType } from "../types/TextFieldInputTypes.js";

    export let inputIconOptions:IconSectionOfInpOptionsType

    export let inputValidationOptions:InputValidationOptionsType

    export let isValid:boolean
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
    <slot name="IconComponent">
        No Icon(fallback)
    </slot>
    {:else}
        {#if inputValidationOptions.validation === true && inputValidationOptions.usingCusValidation === false && inputValidationOptions.validator !== "email"}
            <div></div>
        {/if}
    {/if}
</div>

