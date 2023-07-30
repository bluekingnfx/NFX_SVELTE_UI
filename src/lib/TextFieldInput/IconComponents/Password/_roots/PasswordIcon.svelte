

<script lang="ts">
    import EyeClosed from "../resources/EyeClosed.svelte"
    import EyeOpen from "../resources/EyeOpen.svelte"

    export let inputRef:HTMLInputElement | undefined | null

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


<button on:click={ChangeTheTypeOfInput}>
    {#if inputRef}
        {#if inputRef.type === "password"}
            <EyeClosed color={"rgb(205, 205, 205)"}/>
        {:else}
            <EyeOpen color={"rgb(205, 205, 205)"}/>
        {/if}
    {/if}
</button>
