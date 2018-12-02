var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ress = (function () {
    function Ress() {
    }
    Ress.child = ["resource/default.res.json", "resource/default.thm.json", "resource"];
    return Ress;
}());
__reflect(Ress.prototype, "Ress");
//# sourceMappingURL=Ress.js.map