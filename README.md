Instructions:
To play the game, enter a number in the box and click on the button.
See if you can figure out the logic. Happy playing!


Internal comments (not for shipped solution :))
Even though the fizz_buzz could be created as a function only (not wrapped in a “class”), I created it in a class called Calculator. Thinking this would then make it scalable in the future? Is this best practice? Do programmers typically create a “class”?
In the test sample there is a file called “sample_partial.html”. It somehow can see the file app.js (having the js code). Where is this defined??

When doing the Jasmine tests, it seems that you have to have the ui html file in the fixtures folder? I tried to add it to the root and change the fixtures path, but it did not seem to work.

If the html files have to be in the spec/fixtures folder, does this mean that you copy these files to their proper locations after they are tested (index.html to the root for instance)?

In the beginning I did not add the script ‘document ready’ code in the index.html file, but I had it in the fizz_buzz_ui.js file. Then the first test passed, but not the others. I tried to reset the values, but with no success. After adding the ‘document ready’ script in the index.html file and then calling a var set in fizz_buzz_ui.js it worked.
How can the first test pass?
Why do you have the shorter script in the index.html? It seems you should only have the body tag code (excluding the body tag).

I had some strange CSS problems. Not sure what they were coming from. I had a div id for the fizz buzz game. The browser would not show the settings for the div id though. I had the settings in a separate css file and the div id last. It would not work even when changing name of the id or changing it to a class. I moved it to the style tag in the index document. It would still not work. I also ran the index file in incognito, but that did not help. Taking out the ending curly bracket made it strangely work. Adding it back would then make it still work. Very strange! However having it in a separate file still does not work. To add, in the css I have another id and settings for h1 and they both work fine.



## JS Test Boilerplate 0.1 (WIP)
[![Build Status](https://travis-ci.org/CraftAcademy/karma-jquery-jasmine_boilerplate.svg?branch=master)](https://travis-ci.org/CraftAcademy/karma-jquery-jasmine_boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/CraftAcademy/karma-jquery-jasmine_boilerplate/badge.svg?branch=master)](https://coveralls.io/github/CraftAcademy/karma-jquery-jasmine_boilerplate?branch=master)

####Dependencies
* [Jasmine](https://github.com/jasmine/jasmine)
* [Karma](https://github.com/karma-runner/karma)
  - [Karma Jasmine](https://github.com/karma-runner/karma-jasmine)
  - [Karma Jasmine JQuery](https://github.com/bessdsv/karma-jasmine-jquery)
  - [Karma Chrome Launcher](https://github.com/karma-runner/karma-chrome-launcher)
  - [Karma Coverage](https://github.com/karma-runner/karma-coverage)
  - [Karma Coveralls](https://github.com/caitp/karma-coveralls)
  - [Karma Spec Reporter](https://github.com/mlex/karma-spec-reporter)

####Services
* [Travis](https://travis-ci.org/) for Continuous Integration
* [Coveralls](https://coveralls.io/) for Test Coverage

####Set up
Fork or download this repo (using `git clone`) and modify the files to suite your testing needs.

You can also use SVN to download this repo to your new project folder. On OSX you can install SVN using Homebrew.
```
$ brew install subversion
```

Create a new folder and `cd` into it. Run the `svn export` command to download files.

```
$ svn export https://github.com/CraftAcademy/karma-jquery-jasmine_boilerplate/trunk . --force
```
Once downloaded, you need to install all dependencies. Run
```
$ npm install
```

####Usage
You can use this setup to test your units and your jQuery events. Place your JavaScript code in `assets/js/` folder and partials in `spec/fixtures/` folder.

Your specs need to be end with `_spec.js` (e.g. `fizz_buzz_spec.js`)

Run tests with
```
$ npm test

# or

$ karma start karma.conf.js
```

####Adding tests
I have included some basic specs and `js` code for you to examine. Basically you need to build up your test environment and tear it down afterwards.
You can have different setups by nesting your `describe` blocks/functions.

```javascript
# spec/my_spec.js
describe("Given my code", function () {

	beforeEach(function () {
		/* ... Set up your test ... */
	});

	afterEach(function () {
		/* ... Tear it down ... */
	});

	describe("When ...", function () {

		beforeEach(function () {
		  /* ... Context specific setup ... */
		});

		it("Then...", function () {
			expect(true).toEqual(true);
		});
	});
});
```
