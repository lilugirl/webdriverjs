var Page = require('./base_page');
var locator = require('../utils/locators');
var courseItem = locator.courseItem;


Page.prototype.listCourses = function () {
  var courses = this.findAll(courseItem);
  courses.should.eventually.have.length.above(10);
}


Page.prototype.clickBasicBtn = function () {
  this.find(locator.filterBasicButton).click();
  return this.find(locator.filterActiveBbutton).getText();
}

module.exports = Page;