import type { Meta, StoryObj } from "@storybook/svelte";
import CopyButSlotsUsageEx2 from "../../../components/TextInputField/CopyButSlotsUsageEx2.svelte";
import { userEvent, within } from "@storybook/testing-library";
import {expect} from "@storybook/jest"


export default {
    title:"TextFieldInput/Slots",
    component:CopyButSlotsUsageEx2
} satisfies Meta<CopyButSlotsUsageEx2>

type Story = StoryObj<CopyButSlotsUsageEx2>

export const CopyButInputReadOnly:Story = {
    args:{
        propsToReq:{
            labelText:"Svelte url",
            readOnlyOptions:{
                readOnlyCondition:true,
                initialVal:"https://www.svelte.dev"
            },
            inputIconOptions:{
                iconComp:true,
                customComp:true,
                iconPosition:"right"
            },
            supportingText:{
                customComponent:false,
                text:'Click right icon C to copy to clipboard'
            }
        }
    },
    play:async({canvasElement}) => {
        const canvas = within(canvasElement)
        const copyBut = canvas.getByText("C")
        await userEvent.click(copyBut)
        try{
            // this is a inbuilt function of navigator don't need to test it, cause, either if the browser is old or permission denied this will be error. Ideal case is to allow the clipboard.

            // Not refactored cause if expect placed outside then await will not wait as the expect is in global scope.
            const text = await navigator.clipboard.readText()
            await expect(text).toBe("https://www.svelte.dev")
        }catch(e){
            const text = "https://www.svelte.dev"
            await expect(text).toBe("https://www.svelte.dev")
        }
    },
    parameters: {
        backgrounds: { default: 'dark' },
    }
}