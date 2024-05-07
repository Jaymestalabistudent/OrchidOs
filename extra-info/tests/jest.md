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
add 

  },
  "devDependencies": {
    "jest-html-reporter": "^3.10.2"
  }
}
to package.json

After running the tests, a new folder named jest_html_reporters will be created.
Inside that folder, you’ll find an HTML report named report.html.
Open report.html in your browser to view the test results in a human-readable format.

