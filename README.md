# OneFlow techtest

### Task 1: Coding Challenge

Having had a shortage of time, and trouble on my computer setting up nightwatch, I used the Vue repo to do the coding challenge. The files can be found in /techtest and the e2e tests are in /test/e2e/techtest.js.

I initially seperated the JS and CSS into separate files outside of the index.html. I then started writing the initial e2e tests to cover basic functionality. Testing was difficult as my PC was running them exceptionally slowly. With these being the first nightwatch tests I have written, I wanted to run the tests after all changes to the code. Most of the basic functionality was covered in the tests. Also I amended the vue.js script to fix the remove button and remove one button in the checkout. I attempted to uptdate the code with ES6 functionality but this caused minor issues, and being restricted running the tests I didn't want to waste too much time with this.

The e2e tests are run by

```
npm run test:e2e
```

This runs all the e2e tests, the techtest ones are labeled 'techtest'. I was unable to edit the test runner just to run just the techtest e2e file.
