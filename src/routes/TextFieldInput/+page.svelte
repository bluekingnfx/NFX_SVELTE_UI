<script lang="ts">

	import TextFieldInput from "$lib/TextFieldInput/_roots/TextFieldInput.svelte";
	import UpperCaseComponent from "../../components/TextInputField/UpperCaseIconComponent.svelte"

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
		//console.log(e)
	}}
	obtainInputReference = {{
        needReference:true,
        customComponentEventName: "inputRefMount"
    }}

	on:inputRefMount = {(e) => {
		//console.log(e.detail)
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
			console.log(typeof val)
			return (/^[^a-z]*$/).test(val)
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
		//console.log(e.detail)
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

<TextFieldInput 
	labelText="Enter your url"
	placeHolder="ex:https://www.google.com"
	inputValidationOptions={{
		usingCusValidation:false,
		validation:true,
		validator:"url",
		RegexForValidation:/^https:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?$/
	}}
	supportingText={{
		customComponent:false,
		text:"Required"
	}}
	customErrorCompOptions={{
		useCustomErrorComp:false,
		errorText:"Please enter a url"
	}}
	inputIconOptions={{
		customComp:false,
		iconComp:true,
		iconPosition:"left",
	}}
/>


<TextFieldInput
	supportingText = {{
		customComponent: false,
		text: "I am supporting text"
	}}
	customErrorCompOptions = {{
		useCustomErrorComp:false,
		errorText: "This a error Text"
	}}
	inputValidationOptions = {{
		validation: true,
		usingCusValidation: false,
		validator:"password"
	}}
	placeHolder = "ex: @Pa2wordComplex"
	labelText = "Enter a password"
	readOnlyOptions = {{
		readOnlyCondition:true,
		initialVal:"This is readonlyField"
	}}
/>

<TextFieldInput 
	inputValidationOptions = {{
		validation: true,
		usingCusValidation: false,
		validator:"tel"
	}}
	labelText = "Enter a Tel"
/>