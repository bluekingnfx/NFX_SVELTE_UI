import type { Meta, StoryObj } from "@storybook/svelte";
import UpperCaseComponent from "../../../components/TextInputField/UpperCaseComponent.svelte";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const sleep = async(delay=1000) => {
    return new Promise((resolve) => {
        setTimeout(resolve,delay)
    })
}

export default {
    title:"TextFieldInput/Slots",
    component: UpperCaseComponent,
    parameters: {
        backgrounds: { default: 'dark' },
    }
} satisfies Meta<UpperCaseComponent>

type Story = StoryObj<UpperCaseComponent>

export const UpperCaseComponentEx:Story = {
    args:{
        propsReq:{
            theme:"dark",
            labelText:"Enter Uppercase",
            placeHolder:"ex: AAA",
            inputValidationOptions:{
                validation: true,
                usingCusValidation:true,
                validationFunc:(val:string) => {
                    console.log(typeof val)
                    return (/^[^a-z]*$/).test(val)
                },
                giveBackEventObj:true
            },
            customErrorCompOptions:{
                useCustomErrorComp:true,
            },
            supportingText:{
                customComponent:false,
                text:'Upper case.'
            },
            inputIconOptions:{
                customComp:true,
                iconComp:true,
            },

            debounceOptions:{
                debounceTheInput:true,
                delayToDebounce: 500
            }
        }
    },
    play:async({canvasElement})=>{
        const canvas = within(canvasElement)
        const lab = canvas.getByText("Enter Uppercase")
        await userEvent.click(lab)
        const inp = canvas.getByPlaceholderText("ex: AAA")
        await userEvent.type(inp,"Siddharth Emily")
        await sleep()
        const elem = canvas.getByText("This highlighted purple color error component: Please enter Uppercase")
        await expect(elem).toBeInTheDocument()
        const but = canvas.getByText("A")
        await sleep()
        await userEvent.click(but)
        const elem2 = canvas.getByDisplayValue("SIDDHARTH EMILY")
        await expect(elem2).toBeInTheDocument()
        await sleep(1000)
        await expect(elem).not.toBeInTheDocument()
    }
}