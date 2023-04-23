// put our child classes here
import { MinecraftItem } from "./InterfaceAndParent.js";

class MinecraftArmor extends MinecraftItem {
    private armorPoints: number;
    private wornOrNot: number = 0;
    public materialType: string;
    private durabilityLostPerUse: number;
    private craftingRecipe: string;
    private enchantments: string[] = [];

    constructor(itemName: string, itemAmount: number, craftable: boolean, enchantable: boolean,
    stack: number, durabilityLeft: number, use: string, damage: number, flammability: boolean,
    resistance: number, armorPointsGiven: number, materialMadeOf: string, durabilityFactor: number,
    gridRecipe: string) {
        super(itemName, itemAmount, craftable, enchantable, stack, durabilityLeft,
        use, damage, flammability, resistance);
        this.armorPoints = armorPointsGiven;
        this.materialType = materialMadeOf;
        this.durabilityLostPerUse = durabilityFactor;
        this.craftingRecipe = gridRecipe;
    }

    public firstUse(): void {
        console.log(`Attacked with ${this.name} and dealt ${this.getDamage()}`);
        this.durability -= this.durabilityLostPerUse * this.explosionResistance;
    }

    public getWornStatus(): string {
        if (this.wornOrNot == 0) {
            return `${this.name} is not worn!`;
        }
        else {
            return `${this.name} is worn!`;
        }
    }

    public secondUse(): void {
        if (this.wornOrNot == 0) {
            this.wornOrNot++;
            console.log("Armor worn!");
        }
        else {
            this.wornOrNot--;
            console.log("Armor undressed!");
        }
    }

    public getCraftingRecipe(): string {
        if(this.getCraftability() == false) {
            return 'Uncraftable!';
        }
        else {
            return this.craftingRecipe;
        }
    }
    
    public getEnchantments(): string {
        if(this.getEnchantability() == false) {
            return 'Cannot be enchanted!';
        }
        else {
            return this.enchantments.join(', ');
        }
    }

    public getArmorPoints(): number {
        return this.armorPoints;
    }

    public repair(): void {
        this.durability += this.itemInHand;
        console.log(`Repaired ${this.name} and added ${this.itemInHand} durability points!`);
    }

    public craft(amount: number): void {
        this.itemInHand += amount;
        console.log(`Crafted ${amount} ${this.name}`)
    }

    public enchant(enchantment: string): void {
        this.enchantments.push(enchantment);
        console.log(`Enchanted ${this.name} with ${enchantment}`);
    }
}

let DiamondArmor = new MinecraftArmor('Diamond Shoes', 1, true, true, 1, 365, 'Wearing', 0, true, 1, 2.5, 'Diamond', 3, "4 Diamonds")

console.log(DiamondArmor.getDurability());
console.log(DiamondArmor.getDamage());
DiamondArmor.firstUse();
console.log(DiamondArmor.getDurability());
console.log(DiamondArmor.getCraftingRecipe());
DiamondArmor.craft(3);
DiamondArmor.repair();
console.log(DiamondArmor.getDurability());

console.log();

console.log(DiamondArmor.getEnchantability());
DiamondArmor.enchant('Protection V');
console.log(DiamondArmor.getEnchantments());
DiamondArmor.enchant('Thorns III');
console.log(DiamondArmor.getEnchantments());
DiamondArmor.secondUse();
console.log(DiamondArmor.getArmorPoints());
console.log(DiamondArmor.getWornStatus());
DiamondArmor.secondUse();

console.log(DiamondArmor.getItemAmount());
