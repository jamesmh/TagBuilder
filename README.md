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
You may pass into the ```Generate()``` function either a string or an array of strings. All the arrays will be combined / flattened together to create your results! New lines are accounted for etc. See next example for array usage.

```javascript

const texts = [`hello i am

        some weird
        
        text but my tags still count!`,
        `hello i am more text`,
         `some weird text ...`]
console.log(b.Generate(texts));

///outputs

/// [ { name: 'hello', amount: 2 },
///  { name: 'some', amount: 2 },
///  { name: 'weird', amount: 2 },
///  { name: 'text', amount: 3 },
///  { name: 'tags', amount: 1 },
///  { name: 'still', amount: 1 },
///  { name: 'count', amount: 1 },
///  { name: 'more', amount: 1 } ]

```
