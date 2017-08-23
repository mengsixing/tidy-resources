var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('firefox')
.build();

driver.get('http://localhost:8080/tidy/javascript/lesson/addprise/index.html');
var button = driver.wait(until.elementLocated(By.css('.hand')), 10000);
button.click();
button.click();
button.click();
button.click();
button.click();
button.click();
button.click();
button.click();
button.click();
button.click();
button.click();
button.click();
driver.quit();