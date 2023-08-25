
import type { Meta, StoryObj } from "@storybook/svelte";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import TextFieldInput from "./TextFieldInput.svelte";


export default {
    title:"TextFieldInput/Slots",
    component:TextFieldInput,
    parameters: {
        backgrounds: { default: 'dark' },
    }
} satisfies Meta<TextFieldInput>

type Story = StoryObj<TextFieldInput>

export const NumberSlotEx:Story = {
    args:{
        theme:"dark",
        inputIconOptions:{
            iconComp:true,
            customComp:false,
        },
        inputValidationOptions:{
            usingCusValidation:false,
            validation: true,
            validator:"number"
        },
        labelText:"Enter a number",
        placeHolder:"@ex: 47",
    },
    play:async({canvasElement}) => {
        const canvas = within(canvasElement)
        const lab = canvas.getByText("Enter a number")
        await userEvent.click(lab)
        const inp = canvas.getByPlaceholderText("@ex: 47")
        await userEvent.type(inp,"47")
        const plusIcon = canvas.getByText("+")
        await userEvent.click(plusIcon)
        const expect48 = canvas.getByDisplayValue("48")
        await expect(expect48).toBeInTheDocument()
        const minusIcon = canvas.getByText("-")
        await userEvent.click(minusIcon)
        await userEvent.click(minusIcon)
        const expect46 = canvas.getByDisplayValue("46")
        await expect(expect46).toBeInTheDocument()
        await userEvent.click(plusIcon)
    }
}