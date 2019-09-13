var webdriver = require('selenium-webdriver'),
  {
    describe,
    it,
    after,
    before
  } = require('selenium-webdriver/testing'),
  By = webdriver.By,
  until = webdriver.until;

var driver;


describe('library app scenarios', function () {
  this.timeout(50000);
  beforeEach(function () {

    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();

    driver.get('http://1ke.co/login');



  });

  afterEach(function () {
    driver.quit();

  });

  it('works with mocha', function () {

    var submitBtn = driver.findElement(By.css('.btn-large'));

    submitBtn.click();

    driver.wait(until.elementLocated(By.css('.text-danger'))).getText().then(function (txt) {
      console.log('txt is :' + txt);
    });

  });

  it('works with mocha 2', function () {
    console.log('all right');
  })

});



/** 
 * 
 *
 driver.get('http://library-app.firebaseapp.com/');
 driver.findElement(By.css('input')).sendKeys('user@email.com');
 driver.findElement(By.css('.btn-lg')).getText().then(function (txt) {
   console.log('txt is :' + txt);
 })
 driver.findElement(By.css('.btn-lg')).click();
driver.findElement(By.css('.alert-success')).getText().then(function (txt) {
  console.log('Alert success txt is :' + txt);
});
driver.findElements(By.css('nav li')).then(function (elements) {
  elements.map(function (el) {
    el.getText().then(function (txt) {
      console.log('the text of the nav is ' + txt);
    })
  })
});

*/