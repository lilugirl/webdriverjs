const {
  Builder,
  By,
  Key,
  until
} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.baidu.com/'); //打开测试页面
    await driver.findElement(By.name('wd')).sendKeys('1KE', Key.RETURN); //定位某个元素，在输入框中输入内容
    await driver.wait(until.titleIs('1KE'), 1000);
  } finally {
    await driver.quit(); //退出
  }
})();