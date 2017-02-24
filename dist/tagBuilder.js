var _ = require('lodash');
var RemovePunctuationAndNewLine = function (str) { return str.replace(/[^\w]/g, ""); };
var MoreThan = function (num) { return function (text) { return text.length > num; }; };
var ToLower = function (t) { return t.toLowerCase(); };
var GroupToTag = function (group) {
    return {
        word: group[0],
        amount: group.length
    };
};
var TagName = function (tag) { return tag.word; };
var ToTagAmount = function (tag) { return tag.amount; };
var GetReducedTagFromGroup = function (group) {
    return {
        name: group[0].word,
        amount: group.map(ToTagAmount).reduce(function (acc, curr) { return acc + curr; })
    };
};
var ByCountMoreThan = function (num) { return function (tag) { return tag.amount > num; }; };
var ByTagName = function (a, b) { return a.word >= b.word ? 1 : -1; };
var TagBuilder = (function () {
    function TagBuilder() {
    }
    TagBuilder.prototype.Generate = function (texts) {
        var _this = this;
        var tags;
        if (texts instanceof Array) {
            tags = texts.map(function (text) { return _this.GenerateTagsFromText(text); });
        }
        else {
            tags = [this.GenerateTagsFromText(texts)];
        }
        return this.GenerateTagsFromTagsArrays(tags);
    };
    TagBuilder.prototype.GenerateTagsFromText = function (text) {
        return _(text.split(/[\s\r?\n|\r]+/))
            .map(RemovePunctuationAndNewLine)
            .filter(MoreThan(3))
            .map(ToLower)
            .groupBy(function (word) { return word; })
            .map(GroupToTag)
            .value();
    };
    TagBuilder.prototype.GenerateTagsFromTagsArrays = function (tags) {
        return _(tags)
            .flatten()
            .groupBy(TagName)
            .map(GetReducedTagFromGroup)
            .filter(ByCountMoreThan(0))
            .sort(ByTagName)
            .value();
    };
    return TagBuilder;
})();
exports.default = TagBuilder;
//# sourceMappingURL=tagBuilder.js.map