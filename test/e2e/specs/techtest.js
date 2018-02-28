module.exports = {
  'techtest': function (browser) {
    browser
    .url('http://localhost:8080/techtest/#test')
      .waitForElementVisible('#app', 1000)
      .assert.visible('#app')

    .setValue('.form-control', 'camera')
      browser.expect.element('#app').text.to.not.contain('USB Stick');
      browser.expect.element('#app').text.to.not.contain('USB Plug');
      browser.expect.element('#app').text.to.not.contain('Small Phone');

    browser
    .clearValue('.form-control')
    .setValue('.form-control', 'USB Plug')
      browser.expect.element('#app').text.to.not.contain('USB Stick');
      browser.expect.element('#app').text.to.not.contain('Camera');
      browser.expect.element('#app').text.to.not.contain('Small Phone');

    browser
    .clearValue('.form-control')
    .setValue('.form-control', 'USB Stick')
      browser.expect.element('#app').text.to.not.contain('USB Plug');
      browser.expect.element('#app').text.to.not.contain('Camera');
      browser.expect.element('#app').text.to.not.contain('Small Phone');

    browser
    .clearValue('.form-control')
    .setValue('.form-control', 'Small Phone')
      browser.expect.element('#app').text.to.not.contain('USB Plug');
      browser.expect.element('#app').text.to.not.contain('Camera');
      browser.expect.element('#app').text.to.not.contain('USB Stick');
  }
}
