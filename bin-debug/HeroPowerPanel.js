var HeroPowerPanel = (function (_super) {
    __extends(HeroPowerPanel, _super);
    function HeroPowerPanel(hero) {
        _super.call(this);
        this.curHero = hero;
        this.panelContainer = new egret.DisplayObjectContainer;
        this.text_Power = new egret.TextField;
        this.addChild(this.panelContainer);
        this.panelContainer.addChild(this.text_Power);
        this.UpdatePower();
    }
    var d = __define,c=HeroPowerPanel,p=c.prototype;
    p.UpdatePower = function () {
        this.text_Power.text = "战斗力：" + this.curHero.Power;
    };
    return HeroPowerPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(HeroPowerPanel,'HeroPowerPanel');
//# sourceMappingURL=HeroPowerPanel.js.map