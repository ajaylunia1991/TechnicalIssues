class AutomationPracticeHomePage {
  get clickOnCreateAccount() {
    return $("//input[@id='email_create']");
  }
  get submitCreateButton() {
    return $("//button[@id='SubmitCreate']");
  }
  get firstName() {
    return $("//input[@id='customer_firstname']");
  }
  get lastName() {
    return $("//input[@id='customer_lastname']");
  }
  get password() {
    return $("//input[@id='passwd']");
  }
  get address() {
    return $("//input[@id='address1']");
  }
  get city() {
    return $("//input[@id='city']");
  }
  get state() {
    return $("#id_state");
  }
  get zipcode() {
    return $("//input[@id='postcode']");
  }
  get mobilephone() {
    return $("//input[@id='phone_mobile']");
  }
  get submitButton() {
    return $("//button[@id='submitAccount']");
  }
  get searchBox() {
    return $("//input[@id='search_query_top']");
  }
  get submitSearch() {
    return $("//button[@name='submit_search']");
  }

  clickOnCreateAccountButton(emailAddress) {
    return this.clickOnCreateAccount.setValue(emailAddress);
  }

  submitButtonCreateAccount() {
    return this.submitCreateButton.click();
  }

  setFirstName(firstName) {
    return this.firstName.setValue(firstName);
  }

  setLastName(lastName) {
    return this.lastName.setValue(lastName);
  }

  setPassword(password) {
    return this.password.setValue(password);
  }

  setAddress(address) {
    return this.address.setValue(address);
  }

  setCity(city) {
    return this.city.setValue(city);
  }

  setState(state) {
    return this.state.selectByVisibleText(state);
  }

  setZipCode(zipcode) {
    return this.zipcode.setValue(zipcode);
  }

  setMobilePhone(mobileNumber) {
    return this.mobilephone.setValue(mobileNumber);
  }

  clickSubmitButton() {
    return this.submitButton.click();
  }

  submitAllInformationViaRegistrationForm(firstName,lastName,password,address,city,state,zipcode,mobilephone){
    if (firstName) {
      this.firstName.setValue(firstName);
    }
    if (lastName) {
      this.lastName.setValue(lastName);
    }
    if (password) {
      this.password.setValue(password);
    }
    if (address) {
      this.address.setValue(address);
    }
    if (city) {
      this.city.setValue(city);
    }
    if (state) {
      this.setState(state);
    }
    if (zipcode) {
      this.zipcode.setValue(zipcode);
    }
    if(mobilephone){
      this.mobilephone.setValue(mobilephone);
    }
    this.submitButton.click();
    this.confirmSuccessfulUserAccountCreation(firstName,lastName);
  }

  confirmSuccessfulUserAccountCreation(firstname, lastname) {
    var successfulSubmissionHeader = "//a[@class='account']";
    var validateSubmissionHeader = browser.waitUntil(function () {
      return (
       $(successfulSubmissionHeader.getText()) == firstname + " " + lastname
      );
    }, 3000);
    assert.equal(validateSubmissionHeader, true);
  }

  confirmUnsuccessfulAccountCreation() {
    var unsuccessfulSubmissionHeader = "ol:nth-child(1) > li";
    var validateNoSubmissionHeader = browser.waitUntil(function () {
      return ($(unsuccessfulSubmissionHeader).getText() ==
        "An account using this email address has already been registered. Please enter a valid password or request a new one."
      );
    }, 3000);
    assert.equal(validateNoSubmissionHeader, true);
 }
}
module.exports = new AutomationPracticeHomePage();

// var createAccountEmailSelector = "//input[@id='email_create']";
// var submitCreateButtonSelector = "//button[@id='SubmitCreate']";
// var firstNameSelector = "//input[@id='customer_firstname']";
// var lastNameSelector = "//input[@id='customer_lastname']";
// // var emailAddressSelector = "//input[@id='email']";
// var passwordSelector = "//input[@id='passwd']";
// //var addFirstNameSelector = "//input[@id='firstname']";
// //var addLastNameSelector = "//input[@id='lastname']";
// var addressSelector = "//input[@id='address1']";
// // var successfulSubmissionSelector = "#contact_reply h1";
// var citySelector = "//input[@id='city']";
// var stateSelector = "//select[@id='id_state']";
// var zipCodeSelector = "//input[@id='postcode']";
// //var countrySelector = "//select[@id='id_country']";
// var mobilePhoneSelector = "//input[@id='phone_mobile']";
// //var futureAddressSelector = "//input[@id='alias']";
// // var registerButtonSelector = "//button[@id='submitAccount']";
// // var unsuccessfulSubmissionSelector = "body";
// var submitButtonSelector = "//button[@id='submitAccount']";
