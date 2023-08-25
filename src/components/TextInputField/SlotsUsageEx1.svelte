


<script lang="ts">
    import TextFieldInput from "$lib/TextFieldInput/_roots/TextFieldInput.svelte";
    export let propsReq:any 

    let inputRef: HTMLInputElement | undefined

    let passwordConFlags = {
        oneUpperCase: false,
        oneLowerCase: false,
        oneNumb: false,
        oneSpecialChar: false,
        onlyTen: false,
    }

    let allRight = false

    const passwordConFlagger = (val:{value: string, isValid:boolean}) => {
        if(/.*[A-Z].*/.test(val.value)){
            passwordConFlags = {
                ...passwordConFlags,
                oneUpperCase:true,
            }
        }else{
            passwordConFlags = {
                ...passwordConFlags,
                oneUpperCase:false,
            }
        }

        if(/.*[a-z].*/.test(val.value)){
            passwordConFlags = {
                ...passwordConFlags,
                oneLowerCase:true,
            }
        }else{
            passwordConFlags = {
                ...passwordConFlags,
                oneLowerCase:false,
            }
        }

        if(/[0-9]/.test(val.value)){
            passwordConFlags = {
                ...passwordConFlags,
                oneNumb: true,
            }
        }else{
            passwordConFlags = {
                ...passwordConFlags,
                oneNumb: false,
            }
        }

        if(/[^a-zA-Z0-9]/.test(val.value)){
            passwordConFlags = {
                ...passwordConFlags,
                oneSpecialChar: true
            }
        }else{
            passwordConFlags = {
                ...passwordConFlags,
                oneSpecialChar: false
            }
        }

        if(val.value.length === 10){
            passwordConFlags = {
                ...passwordConFlags,
                onlyTen: true,
            }
        }else{
            passwordConFlags = {
                ...passwordConFlags,
                onlyTen: false,
            }
        }

        allRight = val.isValid
    }


    let show = true

    const toggleShowRHide = (type:"show" | "hide") => {
        if(inputRef === undefined) return 
        if(type === "hide"){
            inputRef.type = "password"
            show = true
        }else{
            inputRef.type = "text"
            show = false
        }
    }
</script>

<style>
    .SuppContainer{
        width: 100%;
        height: max-content;
        box-sizing: border-box;
        background-color: #1c1c1c;
        padding: 10px;
    }

    .suppTextListing{
        width: 100%;
        height: max-content;
        margin: 0;
        font-size: 18px;
        color: #c5c5c5;
        font-family: "Tahoma", Geneva, Verdana, sans-serif;
        padding-inline-start:0px;
        padding: 10px;
        line-height: 26px;
        list-style:none;
    }

    .iconLabel{
        display:flex;
        align-items: center;
        justify-content: center;
        text-decoration: underline;
        font-size: 18px;
        background-color: transparent;
        outline: none;
        border:0px;
        color: #c5c5c5;
        margin-right: 10px;
        cursor: pointer
    }

</style>

<TextFieldInput 
    {...propsReq} 
    on:inputChanged={(e) => {
        passwordConFlagger(e.detail)
    }}

    obtainInputReference={{
        needReference:true,
        customComponentEventName: "inputMounted"
    }}

    on:inputMounted = {(e) => {
        inputRef = e.detail
    }}
>
    <div slot="customSupportingText">
        <div class="SuppContainer">
            {#if allRight === false}<ul class="suppTextListing">
                <li>
                    At least One Uppercase character
                </li>
                <li>
                    At least One lowerCase  character
                </li>
                <li>
                    At least One numerical character
                </li>
                <li>
                    At least One special character
                </li>
                <li>
                    Must be in length of 8 to 10
                </li>
            </ul>
            {:else}
            <ul class="suppTextListing">
                <li>
                    ✅ At least One Uppercase character
                </li>
                <li>
                    ✅ At least One lowerCase  character
                </li>
                <li>
                    ✅ At least One numerical character
                </li>
                <li>
                    ✅ At least One special character
                </li>
                <li>
                    ✅ Must be in length of 8 to 10
                </li>
            </ul>
            {/if}
        </div> 
    </div>
    <div slot="cusErrorComponent">
        <div class="SuppContainer">
            <ul class="suppTextListing">
                <li>
                    {passwordConFlags.oneUpperCase === false ? "❌" : "✅"} At least One Uppercase character
                </li>
                <li>
                    {passwordConFlags.oneLowerCase === false ? "❌" : "✅"} At least One lowerCase  character
                </li>
                <li>
                    {passwordConFlags.oneNumb === false ? "❌" : "✅"} At least One numerical character
                </li>
                <li>
                    {passwordConFlags.oneSpecialChar === false ? "❌" : "✅"} At least One special character
                </li>
                <li>
                    {passwordConFlags.onlyTen === false ? "❌" : "✅"} Must be in length of 8 to 10
                </li>
            </ul>
        </div> 
    </div>
    <div slot="customIconComponent">
        {#if show === false}
            <button class="iconLabel" 
                on:click={() => {
                    toggleShowRHide("hide")
                }}
            >
                Hide
            </button>
        {:else}
            <button 
                class="iconLabel"
                on:click={() => {
                    toggleShowRHide("show")
                }}
            >
                Show
            </button>
        {/if}
    </div>

</TextFieldInput>
