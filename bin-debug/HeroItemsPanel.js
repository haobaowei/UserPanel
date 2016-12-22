var HeroItemsPanel = (function (_super) {
    __extends(HeroItemsPanel, _super);
    function HeroItemsPanel(panelItem) {
        _super.call(this);
        this.grids = {};
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
    var d = __define,c=HeroItemsPanel,p=c.prototype;
    p.addHero = function (hero) {
        var heroImage = CreateBitmapUtil.ByName(hero.icon);
        this.heroImageContainer.addChild(heroImage);
        var scale = this.heroImageContainer.width / heroImage.width;
        heroImage.scaleX = heroImage.scaleY = scale;
    };
    p.addGrid = function (grid) {
        this.grid_Container.addChild(grid);
        this.grids[grid.type] = grid;
    };
    p.addItem = function (itemType, item) {
        this.grids[itemType].addChild(item.apperance);
        this.grids[itemType].ChildItem = item;
        this.grids[itemType].touchEnabled = true;
        this.grids[itemType].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGridTap, this);
        // this.grids[itemType].addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onGridMove, this);
    };
    p.removeItem = function (itemType, item) {
        this.grids[itemType].removeChild(item.apperance);
        this.grids[itemType].ChildItem = null;
        this.grids[itemType].touchEnabled = false;
    };
    p.onGridTap = function (event) {
        var gridClicked = event.target;
        this.panelItem.showPanel(event.stageX, event.stageY, gridClicked.ChildItem);
    };
    p.onGridMove = function (event) {
        var gridClicked = event.target;
        gridClicked.setChildIndex(gridClicked.gridContainer, 100);
        gridClicked.ChildItem.apperance.x = event.localX;
        gridClicked.ChildItem.apperance.y = event.localY;
    };
    return HeroItemsPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(HeroItemsPanel,'HeroItemsPanel');
//# sourceMappingURL=HeroItemsPanel.js.map