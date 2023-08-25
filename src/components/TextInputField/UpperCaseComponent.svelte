
<script lang="ts">
    import TextFieldInput from "$lib/TextFieldInput/_roots/TextFieldInput.svelte";
    import UpperCaseIconComponent from "./UpperCaseIconComponent.svelte"
    export let propsReq:any 
</script>

<TextFieldInput {...propsReq}>
	<svelte:fragment slot="customIconComponent" let:functionToChangeVal>
		<UpperCaseIconComponent
			{functionToChangeVal}
			theme = {propsReq.theme}
		/>
	</svelte:fragment>
	<div slot="cusErrorComponent">
		<mark style="color:#0e00ff">This highlighted purple color error component: Please enter Uppercase</mark>
	</div>
</TextFieldInput>