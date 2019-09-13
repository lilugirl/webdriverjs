var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('http://1ke.co/login');
driver.findElement(By.css('.btn-large')).click();
driver.wait(until.elementLocated(By.css('.text-danger'))).getText().then(function (txt) {
  console.log('txt is :' + txt);
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