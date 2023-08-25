


import {test,expect} from "@playwright/test"


test("URL input of TestInput field",async({page}) => {
    await page.goto("/TextFieldInput")
    await page.locator("input[type='url']").click()
    await page.getByPlaceholder("ex:https://www.google.com").fill("Not an input an url")
    await page.getByRole("button").nth(4).isDisabled()
    await page.getByPlaceholder("ex:https://www.google.com").fill("https://www.google.com/")
    const newPagePromise = page.waitForEvent("popup")
    await page.getByRole("button").nth(4).click()
    const newPage = await newPagePromise
    const title = await newPage.title()
    expect(title).toBe("Google")
})












