var CreateBitmapUtil = (function () {
    function CreateBitmapUtil() {
    }
    var d = __define,c=CreateBitmapUtil,p=c.prototype;
    CreateBitmapUtil.ByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return CreateBitmapUtil;
}());
egret.registerClass(CreateBitmapUtil,'CreateBitmapUtil');
//# sourceMappingURL=CreateBitmapUtil.js.map