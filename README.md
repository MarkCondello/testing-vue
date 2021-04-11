Set up a new npm project and install the dependencies required eg vue, webpac etc:
npm init -y

Note: Breaking changes in webpack 5.5, use this package.json  and remove mocha-webpack (no longer supported) and replace the below packages with the following versions:
   "mocha": "^7.1.1",
   "mochapack": "^2.0.6",
   "webpack": "^4.35.1"

##Bring in the vue test util library
In order to run tests, other libraries integrate with vue-utils such as mocha, jest etc. In this example we will be using mocha with mocha-webpack. See the documentation with more details about install here.

The mochapack module pre-compiles components for the purposes of testing.

Once we have our components created, we need to setup a test directory with the .spec.js extension for our tests.
We need to add a script to package.json to perform testings using mocha-pack. We need to tell mocha-webpack where to find the webpack config followed by which directory to run the tests for:

//package.json
“test”: “mochapack --webpack-config webpack.config.js test/*.spec.js”
Note: The documentation has details for the script here.

Now we can begin creating and running tests. Along with importing the component we want (to test against) and the mount method from test-utils (to create a wrapper for our component) we also need an assertion library to run assertions from. We also need the vue-template-compiler.

Here is out test file:
import Counter from '../src/components/Counter.js';
import { mount } from 'vue-test-utils'; // mochs up inputs like props automatically
import expect from "expect"; // package to assert expected values
 
describe ('Counter', ()=>{
   if('defaults to a count of 0', ()=>{
       let wrapper = mount(Counter);
       expect(wrapper.vm.count).toBe(0);
   });
});

Vue-test-utils requires a browser environment to run. We can simulate it in node using jsdom and jsdom-global

In order to use this, we need to include jsdom and add it to a file. This file will also be referenced by including it in the test script we created earlier:
"test": "mocha-webpack --webpack-config webpack.config.js --require test/setup.js test/*.spec.js"

Now when we run npm run test, if all goes according to plan (no missing packages, breaking changes etc) we will get a report for our first test:

###Using Vue Test Utils
Wrapper is used to interface between the component and what it contains and the events it has.

###Testing Vue Components

While running vue tests the following error may occur:

You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

Mocha-webpack helps us to precompile before a test is run. In order for that to work we need to tell webpack to compile the vue files with vue-loader. 
npm install vue-loader@^14.2.2

In the webpack config use ‘vue-loader’ 
 rules: [
           {
               test: /\.vue$/,
               use: 'vue-loader',
           }
       ]

Laravel mix does this out of the box.
 
#
