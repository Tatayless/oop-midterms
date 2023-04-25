// DONT CHANGE PLEASE

interface AbstractMinecraftObject {
    getName(): string;
    getDurability(): number;
    getItemAmount(): number;
}

class MinecraftItem implements AbstractMinecraftObject {
    public name: string;
    private itemInHand: number;
    public isCraftable: boolean;
    public isEnchantable: boolean;
    public stackSize: number;
    private durability: number;
    private useType: string;
    private damageDealt: number;
    public flammable: boolean;
    public explosionResistance: number;

    constructor(itemName: string, itemAmount: number, craftable: boolean, enchantable: boolean, stack: number,
    durabilityLeft: number, use: string, damage: number, flammability: boolean, resistance: number) {
        this.name = itemName;
        this.itemInHand = itemAmount;
        this.isCraftable = craftable;
        this.isEnchantable = enchantable;
        this.stackSize = stack;
        this.durability = durabilityLeft;
        this.useType = use;
        this.damageDealt = damage;
        this.flammable = flammability;
        this.explosionResistance = resistance;
    }

    public getName(): string {
        return this.name;
    }
    
    public getDurability(): number {
        return this.durability;
    }

    public getItemAmount(): number {
        return this.itemInHand;
    }

    public getCraftingRecipe(): void {
    }
    
    public getEnchantments(): void {
    }

    public craft(amount: number): void {
    }

    public enchant(enchantment: string): void {
    }

    public attack(): void {
    }

    public place(): void {
    }

    public repair(): void {
    }
}

class MinecraftTool extends MinecraftItem {
    private miningSpeed: number;
    private miningLevel: number;
    private durabilityLostPerUse: number;

    constructor(itemName: string, itemAmount: number, craftable: boolean, enchantable: boolean, stack: number,
        durabilityLeft: number, use: string, damage: number, flammability: boolean, resistance: number,
        miningSpeed: number, durabilityLostPerUse: number, miningLevel: number) {
        super(itemName, itemAmount, craftable, enchantable, stack, durabilityLeft, use, damage, flammability, resistance);
        this.miningSpeed = miningSpeed;
        this.miningLevel = miningLevel;
        this.durabilityLostPerUse = durabilityLostPerUse;
    }



    mine(): void {
        this.durability -= this.durabilityLostPerUse;
    }

    repair(): void {
        this.durability = this.stackSize * this.getDurability();
    }

 
    getName(): string {
        return "Tool: " + this.name;
    }
    
    getuseType(): string{
        return "Use: " + this.useType;
    }

   
    attack(target: MinecraftItem): void {
        if (target instanceof MinecraftTool) {
            target.durability -= this.damageDealt / target.miningLevel;
        } else {
            target.durability -= this.damageDealt;
        }
    }

    upgradeMiningLevel(level: number): void {
        this.miningLevel += level;
    }
    


    sharpen(): void {
        this.damageDealt *= 2;
    }

    getMiningSpeed(): number {
        return this.miningSpeed;
    }

    getMiningLevel(): number {
        return this.miningLevel;
    }
}

const pickaxe = new MinecraftTool("Diamond Pickaxe", 1, true, true, 1, 1500, "Mining", 0, false, 0, 5, 50, 5)
console.log(pickaxe.getName()); // output: item name
console.log(pickaxe.getuseType()) // output: item use
console.log("Item amount: " + pickaxe.getItemAmount()) // output: 1
console.log("Item durability: " + pickaxe.getDurability()); // Output: 150


pickaxe.mine();
console.log("Item durability after being used: " + pickaxe.getDurability()); // Output: 149

console.log(pickaxe.getMiningLevel()); // Output: 5
pickaxe.upgradeMiningLevel(2);
console.log(pickaxe.getMiningLevel()); // Output: 7
