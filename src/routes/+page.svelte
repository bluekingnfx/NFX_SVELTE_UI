<script>

	import TextFieldInput from "$lib/TextFieldInput/_roots/TextFieldInput.svelte";

</script>
<!-- <h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
 -->

<TextFieldInput 
inputIconOptions={{
	iconComp:true,
    customComp:true,
	iconPosition:"left"
}} 
	labelText="This is looooooooooooooooooooooooooooooooooooong text"
/>