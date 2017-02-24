const TagBuilder = require('./dist/index').TagBuilder;
const builder = new TagBuilder();
const text = `I am some text text and some

    text`;

const result = builder.Generate(text);
console.log(result);