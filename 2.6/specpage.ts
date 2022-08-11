import {
    Builder, 
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement
} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

export class googlePage {
    driver: WebDriver; 
    url: string = 'https://www.google.com/'
    searchBar: By = By.name('q')
    results: By = By.id('rso')
    header: By = By.css('.titleText')
    constructor(driver: WebDriver, url: string) {
        this.driver = driver
        this.url = url 
}
    

    async navigate(){ 
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.header))
    
    
}
    }
    test('for async functionality'), async () => {
        await driver.get('https://www.google.com')
        await driver.wait(until.elementLocated(By.name('q')))
        await driver.findElement(By.name('q')).sendKeys('Purple\n')
        await driver.wait(until.elementLocated(By.id('rso')))
        let value = await driver.findElement(By.id('rso')).getText()
        expect(value.toLowerCase()).toContain("purple") }
