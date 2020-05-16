var AutomationPracticeHome_Page = require("../pages/AutomationPracticeHome_Page");

var assert = require('assert');

beforeEach(function() {
    browser.url('/index.php');
    $("//a[@class='login']").click();
    $("//h1[@class='page-heading']").scrollIntoView();
});

describe('Test Registeration form for Registering user in Automation practice', function() {

  it.only('Should be able to create account with passed email id for a kind of user', function(done) {
    AutomationPracticeHome_Page.clickOnCreateAccountButton('satyanadella@you-spam.com');    
    AutomationPracticeHome_Page.submitButtonCreateAccount();
    AutomationPracticeHome_Page.submitAllInformationViaRegistrationForm('satya','Nadella','123456','Seattle,Washington','Washington','Alabama','02861','011001');
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    clickOnCreateAccount('johnnydepp@fake-box.com');  
    setFirstName('Mike');
  	setLastName('Woods');
  	setEmailAddress('mike_woods@mail.com');
  	clickSubmitButton();
  	confirmUnsuccessfulSubmission();
    });

  it('User should not be able to create Account due to mail id already present in database', function(done) {
    clickOnCreateAccount('chrishemsworth@you-spam.com');
    submitButtonCreateAccount();
    //console.log(($("//li[contains(text(),'An account using this email address has already be')]").getText()));
  	confirmUnsuccessfulAccountCreation();
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	setLastName('Jomes');
  	setEmailAddress('sarah_Jomes@mail.com');
  	clickSubmitButton();
  	confirmUnsuccessfulSubmission();
    });
    
});