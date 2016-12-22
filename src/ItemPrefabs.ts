class Archer extends Hero {
    constructor() {
        super("Archer", "Hero_Archer_jpg");
    }
}

class Sword extends Equipment {
    constructor(icon: string) {
        super("Sword", icon, 10, 5);
        this.type = "WeaponLeft";
    }
}

class Helm extends Equipment {
    constructor(icon: string) {
        super("Helm", icon, 10, 5);
        this.type = "Helm";
    }
}