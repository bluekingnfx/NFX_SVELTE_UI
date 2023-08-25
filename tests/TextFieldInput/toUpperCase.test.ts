
import {test} from "@playwright/test"


test("Upper-case custom Text Field Test",async({page}) => {
    await page.goto("/TextFieldInput")
    await page.locator("input[type='text']").click()
    await page.getByPlaceholder("ex: AAA").fill("Siddharth Emily")
    page.getByText("This highlighted purple color error component")
    await page.getByRole("button",{name:"A"}).click()
})