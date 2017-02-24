const TagBuilder = require('../dist/index').TagBuilder;
const builder = new TagBuilder();
const text = [`I am some text text and some

    text`, `some some times i love tags`, 'more and more'];
const result = builder.Generate(text);


//tests
describe("multi text",  () => {
    it('has 4 "some"', () => {
        expect(result.filter(tag => tag.name == "some")[0].amount).toBe(4);
    });

     it('has 3 "text"', () => {
        expect(result.filter(tag => tag.name == "text")[0].amount).toBe(3);
    });

    it('has 1 "times"', () => {
        expect(result.filter(tag => tag.name == "times")[0].amount).toBe(1);
    });

    it('has 2 "more"', () => {
        expect(result.filter(tag => tag.name == "more")[0].amount).toBe(2);
    });
})