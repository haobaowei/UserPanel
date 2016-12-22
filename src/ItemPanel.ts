class ItemPanel extends egret.DisplayObjectContainer {

    private panelContainer: egret.DisplayObjectContainer;
    private Image_background: egret.Bitmap;
    private Image_Close: egret.Bitmap;
    private Image_Change: egret.Bitmap;
    private text_Name: egret.TextField;
    private text_Des: egret.TextField;

    public constructor() {
        super();
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
        this.Image_Change.touchEnabled = true;
        this.Image_Change.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeTap, this);

        this.addChild(this.panelContainer);
        this.panelContainer.addChild(this.Image_background);
        this.panelContainer.addChild(this.Image_Close);
        this.panelContainer.addChild(this.Image_Change);
        this.panelContainer.addChild(this.text_Name);
        this.panelContainer.addChild(this.text_Des);

        this.hidePanel();
    }

    private curItem: Equipment;

    public showPanel(posX: number, poxY: number, item: Equipment) {
        this.panelContainer.x = posX;
        this.panelContainer.y = poxY;
        this.panelContainer.alpha = 1;

        this.curItem = item;
        this.text_Name.text = item.Name;
        this.text_Des.text = "攻击力：" + item.Power + "\n" + "防御力：" + item.Defence + "\n" + "等级：" + item.Level;
    }

    private onCloseTap(event: egret.Event) {
        this.hidePanel();
    }

    private onChangeTap(event: egret.Event) {
        // this.curItem
    }

    public hidePanel() {
        this.panelContainer.alpha = 0;
    }
}