const TagBuilder = require('../dist/index').TagBuilder;
const builder = new TagBuilder();
const text = `I am some text text and some

    text`;
const result = builder.Generate(text);


//tests
describe("one text",  () => {
    it('has 2 "some"', () => {
        expect(result.filter(tag => tag.name == "some")[0].amount).toBe(2);
    });

     it('has 3 "text"', () => {
        expect(result.filter(tag => tag.name == "text")[0].amount).toBe(3);
    });
})