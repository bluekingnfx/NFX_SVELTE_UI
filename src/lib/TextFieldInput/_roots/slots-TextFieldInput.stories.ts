import type { Meta, StoryObj } from "@storybook/svelte";
import SlotCustomErrorComponent from "../../../components/TextInputField/SlotsUsageEx1.svelte";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest"


export default {
    title:"TextFieldInput/Slots",
    component: SlotCustomErrorComponent,
    parameters: {
        backgrounds: { default: 'dark' },
    }
} satisfies Meta<SlotCustomErrorComponent>

const sleep = (delay=1000) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}

type Story = StoryObj<SlotCustomErrorComponent>

export const CustomTextInputField:Story = {
    args:{
        propsReq:{
            theme:"dark",
            typeOfYourInput: "password",
            labelText:"Enter your password",
            placeHolder:"ex:yourPassword@123",
            inputValidationOptions:{
                usingCusValidation:true,
                validation:true,
                validationFunc:(val:string) => {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(val)
                }
            },
            supportingText:{
                customComponent:true,
            },
            customErrorCompOptions:{
                useCustomErrorComp:true,
            },
            inputIconOptions:{
                customComp:true,
                iconComp:true,
                iconPosition:"right",
            }
        }
    },
    play:async({canvasElement}) => {

        const boilerPlateExpect = async(
            inputField:HTMLElement,
            typeWhat:string,
            sentence:string,
        ) => {
            await userEvent.type(inputField,typeWhat)
            await sleep(1000)
            const elem = canvas.getByText(sentence)
            await expect(elem).toBeInTheDocument()
        }

        const canvas = within(canvasElement)
        const labelText = canvas.getByText("Enter your password")
        await userEvent.click(labelText)
        const inputField = canvas.getByPlaceholderText("ex:yourPassword@123")
        await boilerPlateExpect(inputField,"1","✅ At least One numerical character") 
        await boilerPlateExpect(inputField,"a","✅ At least One lowerCase character")
        await boilerPlateExpect(inputField,"A","✅ At least One Uppercase character")
        await boilerPlateExpect(inputField,"!","❌ Must be in length of 8 to 10")
        const elem = canvas.getByText("Show")
        await userEvent.click(elem)
        await sleep(2000)
        await boilerPlateExpect(inputField,"22132","✅ Must be in length of 8 to 10")
        await userEvent.click(canvas.getByText("Hide"))
    }
}

