const pageScraper = require("./pageScraper")


async function scrapeAll(browserInstance) {
    let browser;
    try {
        browser = await browserInstance;
        await pageScraper.scraper(browser);
    } catch(err) {
        console
    }
}
