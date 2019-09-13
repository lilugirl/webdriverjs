  var {
    describe,
    it,
    after,
    before
  } = require('selenium-webdriver/testing');
  var Page = require('./lib/home_page');
  var page;
  var driver;
  var assert = require('assert');


  describe('library app scenarios', function () {
    this.timeout(50000);
    beforeEach(function () {

      page = new Page();
      page.driver.manage().window().setPosition(0, -600);
      page.visit('http://1ke.co/login');


    });

    afterEach(function () {
      page.driver.quit();

    });

    it('works with mocha', function () {


      page.login().then(
        function (txt) {
          console.log('txt is :' + txt);
          assert(txt === '请输入密码');
        }
      )



    });

    it('works with mocha 2', function () {
      console.log('all right');
      assert.equal(1 + 2, 4);
    });

    it('works with mocha 3', function () {
      console.log('yes');
    })

  });