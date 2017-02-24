const _ = require('lodash');

class TagBuilder {
  constructor() {}

  Generate(texts) {
    let tags;
    if (texts instanceof Array) {
      tags = texts.map(text => this.GenerateTagsFromText(text));
    } else {
      tags = [this.GenerateTagsFromText(texts)];
    }

    return this.GenerateTagsFromTagsArrays(tags);
  }
}

const GenerateTagsFromText = function (text) {
  return _(text.split(/[\s\r?\n|\r]+/))
    .map(RemovePunctuationAndNewLine)
    .filter(MoreThan(3))
    .map(ToLower)
    .groupBy(word => word)
    .map(GroupToTag)
    .value();
}

const GenerateTagsFromTagsArrays = function (tags) {
  return _(tags)
    .flatten()
    .groupBy(TagName)
    .map(GetReducedTagFromGroup)
    .filter(ByCountMoreThan(0))
    .sort(ByTagName)
    .value();
}

const RemovePunctuationAndNewLine = (str) => str.replace(/[^\w]/g, "");
const MoreThan = (num) => (text) => text.length > num;
const ToLower = (t) => t.toLowerCase();
const GroupToTag = (group) => {
  return {
    word: group[0],
    amount: group.length
  }
};

const TagName = (tag) => tag.word;
const ToTagAmount = (tag) => tag.amount;
const GetReducedTagFromGroup = (group) => {
  return {
    name: group[0].word,
    amount: group.map(ToTagAmount).reduce((acc, curr) => acc + curr)
  };
};
const ByCountMoreThan = (num) => (tag) => tag.amount > num;
const ByTagName = (a, b) => a.word >= b.word ? 1 : -1;

module.exports = TagBuilder;