


<script lang="ts">

    //Import statements
    import URLIcon from "../resources/URLIcon.svelte"

    //Variables for internal use
    export let inputRef:HTMLInputElement | undefined | null
    export let theme
    export let darkVersionIconColor 
    export let lightVersionIconColor
    export let isValid:boolean

    //functions
    const openLink = (inputRef:HTMLInputElement | undefined | null) => {
        if(inputRef && window){
            window.open(inputRef.value,"_blank")
        }
    }
</script>

<style>
    button{
        width: 100%;
        height: 100%;
        transition: opacity 0.4s linear;
        cursor: pointer;
        outline:none;
        border: none;
        background-color: transparent;
    }
    .button_pointerEvents{
        cursor:alias;
        pointer-events: none;
        opacity: 0.4;
    }
</style>

<button 
    class:button_pointerEvents={isValid === false}
    on:click={() => openLink(inputRef)}
    aria-label="View url"
>
    <URLIcon 
        color={theme === "dark" ? darkVersionIconColor : lightVersionIconColor}
        width={"24px"} 
        height={"24px"}
    />
</button>