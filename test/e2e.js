const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('http://127.0.0.1:3000/index/index');
        await driver.findElement(By.id('thumb')).click();
        const ani=driver.findElement(By.id('animation'));
        await driver.wait(until.titleIs('随风而行'), 5000);
        // await driver.wait(ani.isDisplayed(), 1000);
        // await driver.findElement(By.id('thumb')).click();
    } finally {
        await driver.quit();
    }
})();