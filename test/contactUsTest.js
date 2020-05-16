var ContactUs_Page = require("../pages/ContactUs_Page");

beforeEach(function () {
  browser.url("/Contact-Us/contactus.html");
});

describe("Test Contact Us form WebdriverUni", function () {
  it.only("Should be able to submit a successful submission via contact us form", function (done) {
    ContactUs_Page.submitAllInformationViaContactUsForm('joe','Blogs','Joe_blogs123@outlook.com','How are you ?');
  });

//   it("Should not be able to submit a successful submission via contact us form as all fields are required", function (done) {
//     ContactUs_Page.setFirstName("Mike");
//     ContactUs_Page.setLastName("Woods");
//     ContactUs_Page.setEmailAddress("mike_woods@mail.com");
//     ContactUs_Page.clickSubmitButton();
//     ContactUs_Page.confirmUnsuccessfulSubmission();
//   });

//   it("Should not be able to submit a successful submission via contact us form as all fields are required", function (done) {
//     setFirstName("Sarah");
//     setEmailAddress("sarah_woods@mail.com");
//     clickSubmitButton();
//     confirmUnsuccessfulSubmission();
//   });

//   it("Should not be able to submit a successful submission via contact us form as all fields are required", function (done) {
//     setLastName("Jomes");
//     setEmailAddress("sarah_Jomes@mail.com");
//     clickSubmitButton();
//     confirmUnsuccessfulSubmission();
//   });
});
