var Page = require('./base_page');

Page.prototype.requestBtn = function () {
  this.write('#login_username', 'lilugirl2005@126.com');
  return {
    opacity: this.find('.btn-large').getCssValue('opacity'),
    state: this.find('.btn-large').isEnabled()
  }
}

Page.prototype.clickSubmit = function () {
  return this.find('.btn-large').click();
}

Page.prototype.login = function () {
  this.requestBtn();
  this.clickSubmit();
  return this.find('.text-danger').getText();
}

module.exports = Page;