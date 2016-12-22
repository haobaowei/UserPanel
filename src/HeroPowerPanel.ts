class HeroPowerPanel extends egret.DisplayObjectContainer {

    private panelContainer: egret.DisplayObjectContainer;
    private text_Power: egret.TextField;

    private curHero: Hero;

    public constructor(hero: Hero) {
        super();
        this.curHero = hero;

        this.panelContainer = new egret.DisplayObjectContainer;
        this.text_Power = new egret.TextField;

        this.addChild(this.panelContainer);
        this.panelContainer.addChild(this.text_Power);

        this.UpdatePower();
    }

    public UpdatePower() {
        this.text_Power.text = "战斗力：" + this.curHero.Power;
    }

}