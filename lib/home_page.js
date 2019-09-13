var Page = require('./base_page');
var locator = require('../utils/locators');
var usernameInput = locator.usernameInput;
var submitBtn = locator.submitBtn;
var alertText = locator.alertText;

Page.prototype.requestBtn = function () {
  this.write(usernameInput, this.fake().email);

  return {
    background: this.find(submitBtn).getCssValue('background-color'),
    state: this.find(submitBtn).isEnabled()
  }
}

Page.prototype.clickSubmit = function () {
  return this.find('.btn-large').click();
}

Page.prototype.login = function () {
  this.requestBtn();

  this.clickSubmit();
  return this.find(alertText).getText();
}

module.exports = Page;