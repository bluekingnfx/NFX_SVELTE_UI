


<script lang="ts">
    import colorPalette, { type ThemeType } from "$lib/global/stores/colorPalette.js";

    export let functionToChangeVal:(cb:(prevVal:string) => string) => void

    export let theme:ThemeType
    let darkVersionIconColor = $colorPalette.darkThemeColorPalette.tertiaryColor
    let lightVersionIconColor = $colorPalette.lightThemeColorPalette.tertiaryColor


</script>

<button style="
    width: 80%;
    height: 80%;
    color:{theme === "dark" ? darkVersionIconColor : lightVersionIconColor};
    background-color:transparent;
    outline:none;
    border:0;
    font-size: 28px;
" on:click = {() => {
    functionToChangeVal((prevVal) => {
        return prevVal.toUpperCase()
    })
}}>
    A
</button>