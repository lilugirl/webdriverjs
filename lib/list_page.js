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

Page.prototype.searchCourse = function () {
  this.find(locator.searchBtn).click();
  this.write(locator.searchInput, locator.searchKeyWord);
  this.write(locator.searchInput, this.Keys.ENTER);
  return this.find(locator.courseTitle).getText();

}

module.exports = Page;