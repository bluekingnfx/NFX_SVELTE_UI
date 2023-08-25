


<script lang="ts">
    // lib imports
	import { getContext } from "svelte";

    //Variables for internal use
    export let theme
    export let darkVersionIconColor 
    export let lightVersionIconColor

    //functions
    const functionToChangeVal:(cb:(prevVal:string,isValid:boolean) => undefined | string) => void = getContext("changeVal")

    const changeBy1 = (type:"increment"|"decrement") => {
        functionToChangeVal((prevVal)  => {

            if(prevVal.length === 0){
                return String(type === "increment" ? 1 : -1)
            }
            const numToOperate = Number(prevVal)

            if(isNaN(numToOperate) === false){
                return String(type === "increment" ? numToOperate + 1 : numToOperate - 1)
            }else{
                return prevVal
            }
        })
    }

</script>


<style>
    .parentContainer{
        width: 100%;
        height: 100%;
        display:flex;
        flex-flow: column nowrap;
        justify-content: center;
        cursor: pointer;
    }

    .icon{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-flow: column nowrap;
        outline: none;
        border: 0;
        font-size: 25px;
        background-color: transparent;
    }


</style>

<div  
    class="parentContainer"
>
    <button class="icon" 
        on:click={() => {
            changeBy1("decrement")
        }} 
        aria-label="Decrement"
        style="color:{theme === "dark" ? darkVersionIconColor : lightVersionIconColor}"
    >
        -
    </button>
    <button 
        class="icon"
        on:click={() => {
            changeBy1("increment")
        }}
        aria-label="increment"
        style="
            justify-content:flex-start;
            color:{theme === "dark" ? darkVersionIconColor : lightVersionIconColor};
        "
    >
        +
    </button>
</div>
