var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('https://library-app.firebaseapp.com/');
driver.findElement(By.css('input')).sendKeys('user@email.com');
driver.findElement(By.css('.btn-lg')).click();

/** 
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