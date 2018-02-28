module.exports = {
  'techtest': function (browser) {
    browser
    .url('http://localhost:8080/techtest/#test')
      .waitForElementVisible('#app', 1000)
      .assert.visible('#app')

    // tests search form works for the camera
    .setValue('.form-control', 'camera')
      browser.expect.element('#app').text.to.not.contain('USB Stick');
      browser.expect.element('#app').text.to.not.contain('USB Plug');
      browser.expect.element('#app').text.to.not.contain('Small Phone');

    // tests search form works for the USB Plug
    browser
    .clearValue('.form-control')
    .setValue('.form-control', 'USB Plug')
      browser.expect.element('#app').text.to.not.contain('USB Stick');
      browser.expect.element('#app').text.to.not.contain('Camera');
      browser.expect.element('#app').text.to.not.contain('Small Phone');

    // tests search form works for the USB Stick
    browser
    .clearValue('.form-control')
    .setValue('.form-control', 'USB Stick')
      browser.expect.element('#app').text.to.not.contain('USB Plug');
      browser.expect.element('#app').text.to.not.contain('Camera');
      browser.expect.element('#app').text.to.not.contain('Small Phone');

    // tests search form works for the phone
    browser
    .clearValue('.form-control')
    .setValue('.form-control', 'Small Phone')
      browser.expect.element('#app').text.to.not.contain('USB Plug');
      browser.expect.element('#app').text.to.not.contain('Camera');
      browser.expect.element('#app').text.to.not.contain('USB Stick');

    // tests the add to cart button works
    browser
    .click('#addToCart')
    .assert.containsText('.list-unstyled', 'Small Phone Nokia Phone ($199.00)')

    // tests to increase the number of a specific item
    browser
    .click('#addOne')
    .assert.containsText('.list-unstyled', '02 Items')
  }
}
