


<script lang="ts">
    export let functionToChangeVal:(cb:(prevVal:string) => string) => void
</script>

<button style="
    width: 80%;
    height: 80%;
" on:click = {() => {
    functionToChangeVal((prevVal) => {
        return prevVal.toUpperCase()
    })
}}>
    A
</button>