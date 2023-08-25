
import type {Meta, StoryObj} from "@storybook/svelte"
import {userEvent, within} from "@storybook/testing-library"
import {expect} from "@storybook/jest"

import TextFieldInput from "./TextFieldInput.svelte";



export default {
    title:"TextFieldInput/Basic",
    component: TextFieldInput,
    parameters: {
        backgrounds: { default: 'dark' },
    }
} satisfies Meta<TextFieldInput>;

type Story = StoryObj<TextFieldInput>

export const Standard:Story = {
    args:{
        theme:"dark",
    },
    play:async({canvasElement}) => {
        const canvas = within(canvasElement)
        const InputElem = canvas.getAllByRole('textbox')[0]
        await userEvent.type(InputElem,"This is NFX Basic input with no-props")
        const element = canvas.getByDisplayValue("This is NFX Basic input with no-props")
        expect(element).toBeInTheDocument()
    },
}


export const WithPlaceHolderAndLabel:Story = {
    args:{
        placeHolder:"I am here cause of placeHolder prop",
        labelText: "I am here cause of labelText prop",
        ...Standard.args
    },
    play:async({canvasElement}) => {
        const canvas = within(canvasElement)
        const label = canvas.getByLabelText("I am here cause of labelText prop")
        await userEvent.click(label)
        const element = canvas.getAllByPlaceholderText("I am here cause of placeHolder prop")[0]
        expect(element).toBeInTheDocument()
    },
    parameters: {
        backgrounds: { default: 'dark' },
    }
}

const sleep = (delay=500) => {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

export const SupportingTextAndError:Story = {
    args:{
        supportingText: {
            customComponent: false,
            text: "I am supporting text"
        },
        customErrorCompOptions: {
            useCustomErrorComp:false,
            errorText: "This a error Text"
        },
        inputValidationOptions:{
            validation: true,
            usingCusValidation: false,
            validator:"password"
        },
        placeHolder: "ex: @Pa2wordComplex",
        labelText: "Enter a password",
        inputIconOptions:{
            iconComp:true,
            customComp:false
        },
        ...Standard.args
    },
    play:async({canvasElement}) => {
        const canvas = within(canvasElement)
        const lab = canvas.getByText("Enter a password")
        await userEvent.click(lab)
        const inp  = canvas.getByPlaceholderText("ex: @Pa2wordComplex")
        await userEvent.type(inp,"P@assWord")
        await sleep(2000)
        const but = canvas.getByRole("button")
        await userEvent.click(but)
        canvas.getByText("This a error Text")
        await userEvent.type(inp,"2277")
        await userEvent.click(but)
    }
}


export const ReadOnlyInputField:Story = {
    args:{
        supportingText: {
            customComponent: false,
            text: "I am supporting text"
        },
        customErrorCompOptions: {
            useCustomErrorComp:false,
            errorText: "This a error Text"
        },
        inputValidationOptions:{
            validation: true,
            usingCusValidation: false,
            validator:"password"
        },
        placeHolder: "ex: @Pa2wordComplex",
        labelText: "Enter a password",
        readOnlyOptions:{
            readOnlyCondition:true,
            initialVal:"This is readonlyField"
        },
        inputIconOptions:{
            iconComp:true,
            customComp:false,
        },
        ...Standard.args
    },
    play:async({canvasElement}) => {
        //await sleep(400)
        const canvas = within(canvasElement)
        const but = canvas.getByRole("button")
        await userEvent.click(but)
        const elem = canvas.getByDisplayValue("This is readonlyField")
        expect(elem).toBeInTheDocument()
        const errElem = canvas.getByText("This a error Text")
        expect(errElem).toBeInTheDocument()
    },

}