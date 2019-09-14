  var {
    describe,
    it,
    after,
    before
  } = require('selenium-webdriver/testing');
  var Page = require('../lib/list_page');
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  var should = chai.should();
  var page;
  var assert = require('assert');

  chai.use(chaiAsPromised);


  describe('library app scenarios', function () {
    this.timeout(50000);
    beforeEach(function () {

      page = new Page();
      page.driver.manage().window().setPosition(0, -600);
      page.visit('http://1ke.co/course/explore');


    });

    afterEach(function () {
      page.driver.quit();

    });

    it('it should have a list', function () {

      var list = page.listCourses();


    });

    it('it should have filter', function () {

      page.clickBasicBtn().should.eventually.contain('零基础');



    });

  });