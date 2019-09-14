var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  Keys = webdriver.Key,
  until = webdriver.until,
  chrome = require('selenium-webdriver/chrome');

var o = new chrome.Options();
o.addArguments('start-fullscreen');
o.addArguments('disable-infobars');
o.addArguments('headless');
o.setUserPreferences({
  creentials_enable_service: false
});

var fake = require('../utils/fake_data');

var Page =
  function () {
    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(o).build();
    var driver = this.driver;
    this.fake = fake;
    this.Keys = Keys;


    this.visit = function (theUrl) {
      return driver.get(theUrl);
    }

    this.quit = function () {
      return driver.quit();
    }

    this.find = function (el) {
        driver.wait(until.elementLocated(By.css(el)), 5000);
        return driver.findElement(By.css(el));

      },
      this.findAll = function (el) {
        driver.wait(until.elementLocated(By.css(el)), 500);
        return driver.findElements(By.css(el));
      },
      this.write = function (el, txt) {
        return this.find(el).sendKeys(txt);
      }


  }

module.exports = Page;