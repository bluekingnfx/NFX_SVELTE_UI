


<script lang="ts">
	import { getContext } from "svelte";


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

<div class="parentContainer">
    <button class="icon" on:click={() => {
        changeBy1("decrement")
    }}>
        -
    </button>
    <button 
        class="icon" style="justify-content:flex-start"
        on:click={() => {
            changeBy1("increment")
        }}
    >
        +
    </button>
</div>
