how to use jest to run tests on a html page 
using a little javascript to check for certain features

npm init -y
npm install --save-dev jest
npm install jsdom
create _test_ folder 
create OrchidOs.test.js
add code to OrchidOs.test.js
npm tests 

to show tests in html 
npm install jest-html-reporter --save-dev
npm i -D jest-junit-reporter
add 


  {
    "scripts": {
      "test": "jest"
    },
    "dependencies": {
      "jsdom": "^24.0.0"
    },
    "devDependencies": {
      "jest": "^29.7.0",
      "jest-html-reporter": "^3.10.2",
      "jest-junit-reporter": "^1.1.0"
    },
    "jest": {
      "testResultsProcessor": "./node_modules/jest-junit-reporter",
      "reporters": [
        "default",
        ["jest-html-reporter", {
          "publicPath": "./html-report",
          "filename": "report.html",
          "openReport": true
        }]
      ]
    }
  }

in terminal run 
npm test
and a output file will be produced holding the text
each test will be moved to offline-tests-results folder
