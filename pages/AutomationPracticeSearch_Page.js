class AutomationPracticeSearch_Page {

  get search(){
    return $("#search_query_top");
  }

  get searchSubmit(){
    return $("#searchbox > button");
  }

  get scrollToTshirt(){
    return $("#center_column > h1");
  }

  get clickTshirt(){
    return $("div.right-block > h5 > a");
  }

  get quickView() {
    return $("//span[contains(text(),'Quick view')]");
  }

  get addToCart() {
    return $("#add_to_cart > button");
  }

  get proceedToCheckout() {
    return $("div.button-container > a");
  }

  get proceedToCheckoutBtn() {
    return $("a.button.btn.btn-default.standard-checkout.button-medium");
  }

  async searchItemOnHomePage(searchItem) {
    return await (await this.search).setValue(searchItem);
  }

  async clickOnSearchSubmitButton() {
    return await(this.searchSubmit).click();
  }
  
  scrollToViewTshirt() {
    return this.scrollToTshirt.scrollIntoView();
  }

  clickOnTshirt() {
    return this.clickTshirt.click();
  }

  hoverToQuickViewAndClickOnIt() {
    console.log("Entering into Hover");
    //browser.moveToElement()
    
    return this.quickView.moveTo(100,100);
    
  }

  clickOnAddToCartButton() {
    return this.addToCart.click();
  }

  clickOnProceedToCheckout() {
    return this.proceedToCheckout.click();
  }

  clickOnProceedToCheckoutOnSummaryPage() {
    return this.proceedToCheckoutBtn.click();
  }
}

module.exports = new AutomationPracticeSearch_Page();
