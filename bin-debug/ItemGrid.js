var GridItem = (function (_super) {
    __extends(GridItem, _super);
    function GridItem(type) {
        _super.call(this);
        this.type = type;
        this.gridContainer = new egret.DisplayObjectContainer;
        this.Image_Background = CreateBitmapUtil.ByName("Sprite_Grid_png");
        this.addChild(this.gridContainer);
        this.gridContainer.addChild(this.Image_Background);
    }
    var d = __define,c=GridItem,p=c.prototype;
    d(p, "ChildItem"
        ,function () {
            return this.childItem;
        }
        ,function (item) {
            this.childItem = item;
        }
    );
    return GridItem;
}(egret.DisplayObjectContainer));
egret.registerClass(GridItem,'GridItem');
//# sourceMappingURL=ItemGrid.js.map