var ItemPanel = (function (_super) {
    __extends(ItemPanel, _super);
    function ItemPanel() {
        _super.call(this);
        this.panelContainer = new egret.DisplayObjectContainer;
        this.Image_background = CreateBitmapUtil.ByName("Sprite_Panel_Item_png");
        this.Image_Close = CreateBitmapUtil.ByName("Sprite_Close_png");
        this.Image_Change = CreateBitmapUtil.ByName("Sprite_Select_png");
        this.text_Name = new egret.TextField;
        this.text_Des = new egret.TextField;
        this.text_Des.y = this.text_Name.height + 50;
        this.Image_background.scaleX = this.Image_background.scaleY = 0.5;
        this.Image_Close.x = this.Image_background.width / 2;
        this.Image_Close.scaleX = this.Image_Close.scaleY = 0.5;
        this.Image_Change.x = this.Image_background.width / 4 - this.Image_Change.width / 2;
        this.Image_Change.y = this.Image_background.height / 2 - this.Image_Change.height;
        this.Image_Change.scaleY = 0.5;
        this.Image_Close.touchEnabled = true;
        this.Image_Close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseTap, this);
        this.addChild(this.panelContainer);
        this.panelContainer.addChild(this.Image_background);
        this.panelContainer.addChild(this.Image_Close);
        this.panelContainer.addChild(this.Image_Change);
        this.panelContainer.addChild(this.text_Name);
        this.panelContainer.addChild(this.text_Des);
        this.hidePanel();
    }
    var d = __define,c=ItemPanel,p=c.prototype;
    p.showPanel = function (posX, poxY, item) {
        this.panelContainer.x = posX;
        this.panelContainer.y = poxY;
        this.panelContainer.alpha = 1;
        this.text_Name.text = item.Name;
        this.text_Des.text = "攻击力：" + item.Power + "\n" + "防御力：" + item.Defence + "\n" + "等级：" + item.Level;
    };
    p.onCloseTap = function (event) {
        this.hidePanel();
    };
    p.hidePanel = function () {
        this.panelContainer.alpha = 0;
    };
    return ItemPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(ItemPanel,'ItemPanel');
//# sourceMappingURL=ItemPanel.js.map