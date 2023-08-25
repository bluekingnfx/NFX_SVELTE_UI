
<script lang='ts'>
    import TextFieldInput from "$lib/TextFieldInput/_roots/TextFieldInput.svelte";
    export let propsToReq:any
    let copyIcon = true
    let copyFeedBackText:string = ""
    const copyTheInpText = async() => {
        try{
            await navigator.clipboard.writeText(propsToReq.readOnlyOptions.initialVal)
            copyFeedBackText = "You copied the text"
        }catch(e){
            console.log(e)
            copyFeedBackText = "Please provide permission to copy the text"
        }
        copyIcon = false
        setTimeout(() => {
            copyIcon = true
        }, 5000);
    }
</script>

<style>
    .copyIconContainer{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .copyBut{
        width: 100%;
        height: 100%;
        outline: none;
        border: 0;
        color: #fff;
        font-size: 20px;
        background-color: transparent;
        cursor: pointer;
    }

    .copied{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 20px;
    }
</style>

<TextFieldInput
    {...propsToReq}
    {...
        (copyIcon === false && copyFeedBackText.length > 0) ? {
        supportingText:{
            ...propsToReq.supportingText,
            text: copyFeedBackText
        }
    } : {
        supportingText:{...propsToReq.supportingText}
    }}
>
    <div 
        slot="customIconComponent" class="copyIconContainer"
    >
        {#if copyIcon === true}
            <button 
                class="copyBut" 
                on:click={copyTheInpText}
            >
                C
            </button>
        {:else}
            <div class="copied">
                CD
            </div>
        {/if}
    </div>
</TextFieldInput>