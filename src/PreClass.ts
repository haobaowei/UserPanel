var Cache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {
    const getter = desc.get;
    desc.get = function () {
        // console.log(target, propertyName)

        var cacheKey = "__cache" + propertyName;
        // if (!target[cacheKey]) {
        //     target[cacheKey] = getter.apply(this);
        //     return target[cacheKey];
        // } else {
        //     return target[cacheKey];
        // }

        console.log(this.cacheFlag)

        if (!this[cacheKey] || CacheFlagUtil.cacheFlag) {
            this[cacheKey] = getter.apply(this);
            this.cacheFlag = false;
            return this[cacheKey];
        } else {
            return this[cacheKey];
        }

    }
}

class CacheFlagUtil {
    public static cacheFlag: boolean = true;
}

class User {
    private userName: string = "";

    private level: number = -1;

    private power: number = -1;

    private heroList: Hero[] = [];

    private heroSelectedList = this.heroList.filter(hero => hero.InTeam);

    @Cache
    public get Power(): number {
        var result = 0;
        this.heroSelectedList = this.heroList.filter(hero => hero.InTeam);
        this.heroSelectedList.forEach(hero => result += hero.Power);
        return result;
    }

    constructor(userNamer: string) {
        this.userName = userNamer;
    }

    public get HeroList() {
        return this.heroList;
    }
    public AddHero(value: Hero) {
        this.heroList.push(value);
        CacheFlagUtil.cacheFlag = true;
    }
}

abstract class Hero {

    private heroName: string;
    private level: number = 0;
    private inTeam: boolean = false;

    private equipentList: Equipment[] = [];

    public icon: string;
    public apperance: egret.Bitmap;

    constructor(heroName: string, icon: string) {
        this.heroName = heroName;
        this.level = 1;
        this.inTeam = false;

        this.icon = icon;
        this.apperance = CreateBitmapUtil.ByName(icon);
    }

    public get InTeam() {
        return this.inTeam;
    }
    public set InTeam(value) {
        this.inTeam = value;
        CacheFlagUtil.cacheFlag = true;
    }

    public get Level() {
        return this.level;
    }
    public set Level(value) {
        this.level = value;
        CacheFlagUtil.cacheFlag = true;
    }

    public get Hp(): number {
        return this.level * 10;
    }

    public get Strength(): number {
        return this.level * 10;
    }

    public get Defence(): number {
        return this.level * 5;
    }

    @Cache
    public get Power(): number {
        var result = 0;
        this.equipentList.forEach(equip => result += equip.Power);
        return this.Hp + this.Strength + this.Defence + result;
    }

    public AddEquipment(value: Equipment) {
        this.equipentList.push(value);
        CacheFlagUtil.cacheFlag = true;
    }

}

abstract class Equipment {

    private equipName: string;
    private strength: number = -1;
    private defence: number = -1;
    private level: number = 0;

    public type: string;

    private jewelList: Jewel[] = [];

    public icon: string;
    public apperance: egret.Bitmap;

    constructor(equipName: string, icon: string, strength: number, defence: number) {
        this.equipName = equipName;
        this.strength = strength;
        this.defence = defence;
        this.level = 1;

        this.icon = icon;
        this.apperance = CreateBitmapUtil.ByName(icon);
    }
    public get Name() {
        return this.equipName;
    }

    public get Level() {
        return this.level;
    }
    public set Level(value) {
        this.level = value;
        CacheFlagUtil.cacheFlag = true;
    }

    public get Strength(): number {
        return this.strength + this.level * 10;
    }

    public get Defence(): number {
        return this.level + this.level * 5;
    }

    public AddJewel(value: Jewel) {
        this.jewelList.push(value);
        CacheFlagUtil.cacheFlag = true;
    }

    @Cache
    public get Power(): number {
        var result = 0;
        this.jewelList.forEach(jewel => result += jewel.Power);
        return this.Strength + this.Defence + result;
    }
}

abstract class Jewel {

    private jewelName: string;
    private strength: number = -1;

    private jewelList: Jewel[] = [];

    public icon: string;
    public apperance: egret.Bitmap;

    constructor(jewelName: string, icon: string, strength: number) {
        this.jewelName = jewelName;
        this.strength = strength;

        this.icon = icon;
        this.apperance = CreateBitmapUtil.ByName(icon);
    }

    public get Strength(): number {
        return this.strength;
    }

    public get Power(): number {
        return this.Strength;
    }
}