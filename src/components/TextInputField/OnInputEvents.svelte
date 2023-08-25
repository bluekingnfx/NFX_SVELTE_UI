
<script lang="ts">
	import TextFieldInput from "$lib/TextFieldInput/_roots/TextFieldInput.svelte";

	let value = ""

	let inputRef:HTMLInputElement | undefined

	let value2 = ""

	const setValFromInpRef = () => {
		if(inputRef === undefined) return
		value2 = inputRef.value
	}

	export let propsReq:any


</script>


<TextFieldInput 
    on:inputChanged={(e) => {
		value = e.detail.value
	}}
	on:mountedWithInput = {(e) => {
		inputRef = e.detail
	}}
	{...propsReq}
/>

<mark>Value on custom event named inputChanged dispatched: {value}</mark>
<hr/>
<button on:click={setValFromInpRef}>
	GetInpVal
</button>
<mark>Value from input property .value: {value2}</mark>