import {test} from "@playwright/test"

test("Test the starting point",async({page}) => {
	await page.goto("/")
	await page.getByRole("heading",{name:"As a starting point if i unable to locate this."}).isVisible()
})