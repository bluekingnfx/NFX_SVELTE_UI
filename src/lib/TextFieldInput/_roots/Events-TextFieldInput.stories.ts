import type { Meta, StoryObj } from "@storybook/svelte";
import OnInputEvents from "../../../components/TextInputField/OnInputEvents.svelte";
import  { userEvent, within } from "@storybook/testing-library";
import {expect} from "@storybook/jest"


export default {
    title:"TextFieldInput/Events",
    component: OnInputEvents,
    parameters: {
        backgrounds: { default: 'dark' },
    }
} satisfies Meta<OnInputEvents>

type Story = StoryObj<OnInputEvents>

export const InputChanged_Event:Story = {
    args:{
        propsReq:{
            obtainInputReference: {
                needReference:true,
            },
            inputValidationOptions:{
                validation:false,
            },
            theme: "dark"
        }
    },
    play:async({canvasElement}) => {
        const canvas = within(canvasElement)
        const inp = canvas.getAllByRole("textbox")[0]
        await userEvent.type(inp,"ValueForMarkedText")
        const markedText = canvas.getByText("Value on custom event named inputChanged dispatched: ValueForMarkedText")
        // eslint-disable-next-line storybook/await-interactions
        expect(markedText).toBeInTheDocument()
        const but = canvas.getByText("GetInpVal")
        await userEvent.click(but)
        const markedText2 = canvas.getByText("Value from input property .value: ValueForMarkedText")
        await expect(markedText2).toBeInTheDocument()
    }
}  
