var foo;
(function (foo) {
    var fooclass = (function () {
        function fooclass() {
        }
        fooclass.prototype.test = function () {
            alert("Test");
        };
        return fooclass;
    })();
    foo.fooclass = fooclass;
})(foo || (foo = {}));
//@ sourceMappingURL=foo.js.map
