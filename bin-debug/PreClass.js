var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    desc.get = function () {
        // console.log(target, propertyName)
        var cacheKey = "__cache" + propertyName;
        // if (!target[cacheKey]) {
        //     target[cacheKey] = getter.apply(this);
        //     return target[cacheKey];
        // } else {
        //     return target[cacheKey];
        // }
        console.log(this.cacheFlag);
        if (!this[cacheKey] || CacheFlagUtil.cacheFlag) {
            this[cacheKey] = getter.apply(this);
            this.cacheFlag = false;
            return this[cacheKey];
        }
        else {
            return this[cacheKey];
        }
    };
};
var CacheFlagUtil = (function () {
    function CacheFlagUtil() {
    }
    var d = __define,c=CacheFlagUtil,p=c.prototype;
    CacheFlagUtil.cacheFlag = true;
    return CacheFlagUtil;
}());
egret.registerClass(CacheFlagUtil,'CacheFlagUtil');
var User = (function () {
    function User(userNamer) {
        this.userName = "";
        this.level = -1;
        this.power = -1;
        this.heroList = [];
        this.heroSelectedList = this.heroList.filter(function (hero) { return hero.InTeam; });
        this.userName = userNamer;
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "Power"
        ,function () {
            var result = 0;
            this.heroSelectedList = this.heroList.filter(function (hero) { return hero.InTeam; });
            this.heroSelectedList.forEach(function (hero) { return result += hero.Power; });
            return result;
        }
    );
    d(p, "HeroList"
        ,function () {
            return this.heroList;
        }
    );
    p.AddHero = function (value) {
        this.heroList.push(value);
        CacheFlagUtil.cacheFlag = true;
    };
    __decorate([
        Cache
    ], p, "Power", null);
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero(heroName, icon) {
        this.level = 0;
        this.inTeam = false;
        this.equipentList = [];
        this.heroName = heroName;
        this.level = 1;
        this.inTeam = false;
        this.icon = icon;
        this.apperance = CreateBitmapUtil.ByName(icon);
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "InTeam"
        ,function () {
            return this.inTeam;
        }
        ,function (value) {
            this.inTeam = value;
            CacheFlagUtil.cacheFlag = true;
        }
    );
    d(p, "Level"
        ,function () {
            return this.level;
        }
        ,function (value) {
            this.level = value;
            CacheFlagUtil.cacheFlag = true;
        }
    );
    d(p, "Hp"
        ,function () {
            return this.level * 10;
        }
    );
    d(p, "Strength"
        ,function () {
            return this.level * 10;
        }
    );
    d(p, "Defence"
        ,function () {
            return this.level * 5;
        }
    );
    d(p, "Power"
        ,function () {
            var result = 0;
            this.equipentList.forEach(function (equip) { return result += equip.Power; });
            return this.Hp + this.Strength + this.Defence + result;
        }
    );
    p.AddEquipment = function (value) {
        this.equipentList.push(value);
        CacheFlagUtil.cacheFlag = true;
    };
    __decorate([
        Cache
    ], p, "Power", null);
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipment = (function () {
    function Equipment(equipName, icon, strength, defence) {
        this.strength = -1;
        this.defence = -1;
        this.level = 0;
        this.jewelList = [];
        this.equipName = equipName;
        this.strength = strength;
        this.defence = defence;
        this.level = 1;
        this.icon = icon;
        this.apperance = CreateBitmapUtil.ByName(icon);
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "Name"
        ,function () {
            return this.equipName;
        }
    );
    d(p, "Level"
        ,function () {
            return this.level;
        }
        ,function (value) {
            this.level = value;
            CacheFlagUtil.cacheFlag = true;
        }
    );
    d(p, "Strength"
        ,function () {
            return this.strength + this.level * 10;
        }
    );
    d(p, "Defence"
        ,function () {
            return this.level + this.level * 5;
        }
    );
    p.AddJewel = function (value) {
        this.jewelList.push(value);
        CacheFlagUtil.cacheFlag = true;
    };
    d(p, "Power"
        ,function () {
            var result = 0;
            this.jewelList.forEach(function (jewel) { return result += jewel.Power; });
            return this.Strength + this.Defence + result;
        }
    );
    __decorate([
        Cache
    ], p, "Power", null);
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
var Jewel = (function () {
    function Jewel(jewelName, icon, strength) {
        this.strength = -1;
        this.jewelList = [];
        this.jewelName = jewelName;
        this.strength = strength;
        this.icon = icon;
        this.apperance = CreateBitmapUtil.ByName(icon);
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "Strength"
        ,function () {
            return this.strength;
        }
    );
    d(p, "Power"
        ,function () {
            return this.Strength;
        }
    );
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=PreClass.js.map