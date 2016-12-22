class GridItem extends egret.DisplayObjectContainer {

    public type: string;

    private gridContainer: egret.DisplayObjectContainer;
    private Image_Background: egret.Bitmap;

    public constructor(type: string) {
        super();

        this.type = type;

        this.gridContainer = new egret.DisplayObjectContainer;
        this.Image_Background = CreateBitmapUtil.ByName("Sprite_Grid_png");

        this.addChild(this.gridContainer);
        this.gridContainer.addChild(this.Image_Background);
    }

    private childItem: Equipment;
    public set ChildItem(item: Equipment) {
        this.childItem = item;
    }
    public get ChildItem() {
        return this.childItem;
    }
}