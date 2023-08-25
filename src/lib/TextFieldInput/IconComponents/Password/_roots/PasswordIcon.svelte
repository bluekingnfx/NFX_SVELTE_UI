

<script lang="ts">
    //import statements
    import EyeClosed from "../resources/EyeClosed.svelte"
    import EyeOpen from "../resources/EyeOpen.svelte"

    //Variables for internal use
    export let inputRef:HTMLInputElement | undefined | null
    export let theme
    export let darkVersionIconColor 
    export let lightVersionIconColor

    //functions
    const ChangeTheTypeOfInput = () => {
        if(inputRef){
            if(inputRef.type === "text"){
                inputRef.type = "password"
            }else{
                inputRef.type = "text"
            }
        }else{
            throw new Error("If you this error message might be you removed input by DOM Manipulation")
        }
    }
</script>

<style>
    button{
        width: 100%;
        height: 100%;
        background-color: transparent;
        cursor: pointer;
        outline: none;
        border:0;
    }

</style>


<button on:click={ChangeTheTypeOfInput} aria-label="visible toggler">
    {#if inputRef}
        {#if inputRef.type === "password"}
            <EyeClosed color={theme === "dark" ? darkVersionIconColor : lightVersionIconColor} width={"28px"} height={"28px"}/>
        {:else}
            <EyeOpen color={theme === "dark" ? darkVersionIconColor : lightVersionIconColor} width={"28px"} height={"28px"}/>
        {/if}
    {/if}
</button>
