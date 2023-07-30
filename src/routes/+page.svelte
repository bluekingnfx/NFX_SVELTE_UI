<script lang="ts">

	import TextFieldInput from "$lib/TextFieldInput/_roots/TextFieldInput.svelte";
	import UpperCaseComponent from "../components/UpperComponent.svelte"

</script>
<!-- <h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
-->

<TextFieldInput 
	inputIconOptions={{
	iconComp:true,
	customComp:false,
	}} 
	inputValidationOptions={{
		usingCusValidation:false,
		validation: true,
		validator:"number"
	}}
	labelText="This is looooooooooooooooooooooooooooooooooooong text"
	debounceOptions={{
		debounceTheInput:true,
		delayToDebounce: 500
	}}
	on:inputChanged={(e) => {
		console.log(e)
	}}
/>


<TextFieldInput 
	labelText="Enter Uppercase"
	placeHolder="ex: AAA"
	inputValidationOptions={{
		validation: true,
		usingCusValidation:true,
		cusDispatcherEventName:"listenToValueChange",
		validationFunc:(val) => {
			return (/^[A-Z]+[A-Z\s]*[A-Z]+$/).test(val)
		},
		giveBackEventObj:true
	}}
	customErrorCompOptions={{
		useCustomErrorComp:true,
	}}
	supportingText={{
		customComponent:false,
		text:'Upper case.'
	}}
	inputIconOptions={{
		customComp:true,
		iconComp:true,
	}}

	debounceOptions={{
		debounceTheInput:true,
		delayToDebounce: 500
	}}

	on:listenToValueChange = {(e) => {
		console.log(e.detail)
	}}

>
	<svelte:fragment slot="customIconComponent" let:functionToChangeVal>
		<UpperCaseComponent
			functionToChangeVal={functionToChangeVal}
		/>
	</svelte:fragment>
	<div slot="cusErrorComponent">
		<mark style="color:#0e00ff">This highlighted purple color error component</mark>
	</div>
</TextFieldInput>


<TextFieldInput 
	labelText="Enter your password"
	placeHolder="ex:yourPassword@123"
	inputValidationOptions={{
		usingCusValidation:false,
		validation:true,
		validator:"password"
	}}
	supportingText={{
		customComponent:false,
		text:"Required"
	}}
	customErrorCompOptions={{
		useCustomErrorComp:false,
		errorText:"Please enter a valid password"
	}}
	inputIconOptions={{
		customComp:false,
		iconComp:true,
		iconPosition:"right",
	}}
/>