# A demonstration of JQuery promise refactoring for HackYouFuture

This repo demonstrates how an initial version of working code can be improved through **refactoring**.

From [www.refactoring.com](https://www.refactoring.com/):

> Refactoring:

 >…is a disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior.

> Its heart is a series of small behavior preserving transformations. Each transformation (called a “refactoring”) does little, but a sequence of transformations can produce a significant restructuring. Since each refactoring is small, it’s less likely to go wrong. The system is kept fully working after each small refactoring, reducing the chances that a system can get seriously broken during the restructuring.

This repo contains a number of versions of the JavaScript file `index.js`. The original `index.js` was live-coded during a lecture at HackYourFuture. It took some tweaking to get it working, and this version shows the end result of the lecture.

A subsequent revisit of the code after the lecture suggested that it could be improved from its initial live-coded form. This was done through a series of refactorings (`index1.js` ... `index5.js`), where each intermediate refactoring brought insights for a further refactoring until reaching the final form in `index5.js`.

In `index6.js` an alternate version is given that replaces the `$.getJSON()` function with a custom function `getJSON()` that uses `XMLHttpRequest` and returns an ES6 promise.

To run the code with a particular version of `index.js`, please change `index.html` to load the appropriate version in the `script` tag.

