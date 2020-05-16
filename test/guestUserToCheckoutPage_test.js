var AutomationPracticeSearch_Page = require("../pages/AutomationPracticeSearch_Page");
//var AutomationPracticeHome_Page = require("../pages/AutomationPracticeHome_Page");

var assert = require("assert");

beforeEach(function () {
  browser.url("/index.php");
});

describe("Functioning of Guest User on Automation Practice Website", function () {
  it("should make guest user to search t-shirt and proceed to checkout page", async function (done) {
    await AutomationPracticeSearch_Page.searchItemOnHomePage("T-shirt");
    AutomationPracticeSearch_Page.clickOnSearchSubmitButton();
    // AutomationPracticeSearch_Page.scrollToViewTshirt();
    // browser.pause(3000);
    // AutomationPracticeSearch_Page.clickOnTshirt();
    // AutomationPracticeSearch_Page.clickOnAddToCartButton();
    // browser.pause(3000);
    // AutomationPracticeSearch_Page.clickOnProceedToCheckout();
    // browser.pause(3000);
    // AutomationPracticeSearch_Page.clickOnProceedToCheckoutOnSummaryPage();
  });
});
