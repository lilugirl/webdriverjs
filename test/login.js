  var Page = require('../lib/home_page');
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  var should = chai.should();
  var page;
  var assert = require('assert');

  chai.use(chaiAsPromised);


  describe('1ke login scenarios', function () {
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



      var login = page.login();
      login.should.eventually.contain('密码!');



    });

    it('works with mocha 2', function () {
      console.log('all right');
      assert.equal(1 + 2, 3);
    });

    it('works with mocha 3', function () {
      var btn = page.requestBtn();
      btn.background.should.eventually.equal('rgba(29, 206, 115, 1)');
      btn.state.should.eventually.be.true;

    })

  });