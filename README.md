# TagBuilder

Give it some text and it will count and group all the "words" - or "tags". All words are converted to lowercase (for now...). Only words with more than 3 characters are counted.

##Install
Run ```npm install --save-dev tagbuilder```

##Usage
```javascript
const TagBuilder = require('tagbuilder').TagBuilder;
const builder = new TagBuilder();

//then...

builder.Generate("i am some text here we go text");

//output

//[ { name: 'some', amount: 1 },
//  { name: 'text', amount: 2 },
//  { name: 'here', amount: 1 } ]
```
You may pass into the ```Generate()``` function either a string or an array of strings. All the arrays will be combined / flattened together to create your results!
