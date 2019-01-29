# TagBuilder

Blogs, for example, may want to keep track of the most common words within a blog post. This small utility can help to solve this problem.

Give the utility some text and it will give you the number of occurances for each word in the text.

Only words with more than 3 characters are counted.

Also, all words are converted to lowercase (case-insensitive).

## Install
Run ```npm install --save-dev tagbuilder```

If you clone this repo, you can ```npm install``` then run the jest unit tests by ```npm test```.

## Usage

### Single String

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

### Array Of Strings

Alternatively, you may supply an array of string to the ```Generate()``` method.

The results will be calculated/aggregated for all the strings supplied (as one unit).

```javascript

const texts = [`hello i am

        some weird
        
        text but my tags still count!`,
        `hello i am more text`,
         `some weird text ...`]
console.log(b.Generate(texts));

///output

/// [ { name: 'hello', amount: 2 },
///  { name: 'some', amount: 2 },
///  { name: 'weird', amount: 2 },
///  { name: 'text', amount: 3 },
///  { name: 'tags', amount: 1 },
///  { name: 'still', amount: 1 },
///  { name: 'count', amount: 1 },
///  { name: 'more', amount: 1 } ]

```
