var Archer = (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        _super.call(this, "Archer", "Hero_Archer_jpg");
    }
    var d = __define,c=Archer,p=c.prototype;
    return Archer;
}(Hero));
egret.registerClass(Archer,'Archer');
var Sword = (function (_super) {
    __extends(Sword, _super);
    function Sword(icon) {
        _super.call(this, "Sword", icon, 10, 5);
        this.type = "WeaponLeft";
    }
    var d = __define,c=Sword,p=c.prototype;
    return Sword;
}(Equipment));
egret.registerClass(Sword,'Sword');
var Helm = (function (_super) {
    __extends(Helm, _super);
    function Helm(icon) {
        _super.call(this, "Helm", icon, 10, 5);
        this.type = "Helm";
    }
    var d = __define,c=Helm,p=c.prototype;
    return Helm;
}(Equipment));
egret.registerClass(Helm,'Helm');
//# sourceMappingURL=ItemPrefabs.js.map