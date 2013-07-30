Object.prototype.getType = function () {
    var results = /function (.{1,})\(/.exec((this).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
};
//@ sourceMappingURL=hacks.js.map
