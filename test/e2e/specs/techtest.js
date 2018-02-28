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
  }
}
