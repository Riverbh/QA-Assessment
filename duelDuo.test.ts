
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('see all bots is on the page', async () => {
    const buttonId = await driver.findElement(By.id('see-all'))

    const isDisplayed = await buttonId.isDisplayed()

    expect(isDisplayed).toBe(true)
})

test('draw button is on the page', async () => {
    const drawButtonId = await driver.findElement(By.id('draw'))

    const isDisplayed = await drawButtonId.isDisplayed()

    expect(isDisplayed).toBe(true)
})