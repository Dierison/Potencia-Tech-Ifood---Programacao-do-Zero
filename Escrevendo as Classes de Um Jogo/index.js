let HeroClass = class {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    toAttack() {
        let attack = "Weapon"
        switch(this.type){
            case "Wizard":
                attack = "Magic"
                break;
            case "Warrior":
                attack = "Sword"
                break;
            case "Monk":
                attack = "Martial Arts"
                break;
            case "Ninja":
                attack = "Shuriken"
                break;
        }
        console.log(`The ${this.type} attacked using ${attack}`)
    }
}

let hero1 = new HeroClass("Dierison",28,"Wizard")
let hero2 = new HeroClass("Marcus",30, "Warrior")
let hero3 = new HeroClass("Bruna", 26, "Monk")
let hero4 = new HeroClass("Higor", 23, "Ninja")

hero1.toAttack()
hero2.toAttack()
hero3.toAttack()
hero4.toAttack()