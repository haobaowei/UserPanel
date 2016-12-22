class HeroItemsPanel extends egret.DisplayObjectContainer {

    private heroImageContainer: egret.DisplayObjectContainer;

    private grids: { [index: string]: GridItem } = {};

    private grid_Container: egret.DisplayObjectContainer;
    private grid_Helm: GridItem;
    private grid_WeaponLeft: GridItem;
    private grid_Shose: GridItem;

    private grid_Wing: GridItem;
    private grid_WeaponRight: GridItem;
    private grid_Ring: GridItem;

    private panelItem: ItemPanel;

    public constructor(panelItem: ItemPanel) {
        super();
        this.panelItem = panelItem;

        this.grid_Container = new egret.DisplayObjectContainer;
        this.addChild(this.grid_Container);
        this.grid_Container.y = 50;

        this.grid_Helm = new GridItem("Helm");
        this.grid_Helm.y = 0;
        this.grid_WeaponLeft = new GridItem("WeaponLeft");
        this.grid_WeaponLeft.y = 20 + this.grid_Helm.height;
        this.grid_Shose = new GridItem("Shose");
        this.grid_Shose.y = 40 + this.grid_Helm.height * 2;

        this.grid_Wing = new GridItem("Wing");
        this.grid_Wing.x = 640 - this.grid_Wing.width;
        this.grid_Wing.y = 0;
        this.grid_WeaponRight = new GridItem("WeaponRight");
        this.grid_WeaponRight.x = 640 - this.grid_Wing.width;
        this.grid_WeaponRight.y = 20 + this.grid_Helm.height;
        this.grid_Ring = new GridItem("Ring");
        this.grid_Ring.x = 640 - this.grid_Wing.width;
        this.grid_Ring.y = 40 + this.grid_Helm.height * 2;

        this.addGrid(this.grid_Helm);
        this.addGrid(this.grid_WeaponLeft);
        this.addGrid(this.grid_Shose);
        this.addGrid(this.grid_Wing);
        this.addGrid(this.grid_WeaponRight);
        this.addGrid(this.grid_Ring);

        this.heroImageContainer = new egret.DisplayObjectContainer;
        this.addChild(this.heroImageContainer);
        this.heroImageContainer.x = this.grid_Helm.width;
        this.heroImageContainer.width = 640 - this.grid_Helm.width * 2;
    }

    public addHero(hero: Hero) {
        var heroImage = CreateBitmapUtil.ByName(hero.icon);
        this.heroImageContainer.addChild(heroImage);
        var scale: number = this.heroImageContainer.width / heroImage.width;
        heroImage.scaleX = heroImage.scaleY = scale;

    }

    public addGrid(grid: GridItem) {
        this.grid_Container.addChild(grid);
        this.grids[grid.type] = grid;
    }

    public addItem(itemType: string, item: Equipment) {
        this.grids[itemType].addChild(item.apperance);
        this.grids[itemType].ChildItem = item;

        this.grids[itemType].touchEnabled = true;
        this.grids[itemType].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGridTap, this);
        // this.grids[itemType].addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onGridMove, this);

    }

    public removeItem(itemType: string, item: Equipment) {
        this.grids[itemType].removeChild(item.apperance);
        this.grids[itemType].ChildItem = null;

        this.grids[itemType].touchEnabled = false;
    }

    private onGridTap(event: egret.TouchEvent) {
        var gridClicked = event.target;
        this.panelItem.showPanel(event.stageX, event.stageY, gridClicked.ChildItem);
    }

    private onGridMove(event: egret.TouchEvent) {
        var gridClicked = event.target;
        gridClicked.setChildIndex(gridClicked.gridContainer, 100)
        gridClicked.ChildItem.apperance.x = event.localX;
        gridClicked.ChildItem.apperance.y = event.localY;
    }

}