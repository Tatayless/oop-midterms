"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// put our child classes here
const InterfaceAndParent_js_1 = require("./InterfaceAndParent.js");
class MinecraftArmor extends InterfaceAndParent_js_1.MinecraftItem {
    constructor(itemName, itemAmount, craftable, enchantable, stack, durabilityLeft, use, damage, flammability, resistance, armorPointsGiven, materialMadeOf, durabilityFactor, gridRecipe) {
        super(itemName, itemAmount, craftable, enchantable, stack, durabilityLeft, use, damage, flammability, resistance);
        this.wornOrNot = 0;
        this.enchantments = [];
        this.armorPoints = armorPointsGiven;
        this.materialType = materialMadeOf;
        this.durabilityLostPerUse = durabilityFactor;
        this.craftingRecipe = gridRecipe;
    }
    firstUse() {
        console.log(`Attacked with ${this.name} and dealt ${this.getDamage()}`);
        this.durability -= this.durabilityLostPerUse * this.explosionResistance;
    }
    getWornStatus() {
        if (this.wornOrNot == 0) {
            return `${this.name} is not worn!`;
        }
        else {
            return `${this.name} is worn!`;
        }
    }
    secondUse() {
        if (this.wornOrNot == 0) {
            this.wornOrNot++;
            console.log("Armor worn!");
        }
        else {
            this.wornOrNot--;
            console.log("Armor undressed!");
        }
    }
    getCraftingRecipe() {
        if (this.getCraftability() == false) {
            return 'Uncraftable!';
        }
        else {
            return this.craftingRecipe;
        }
    }
    getEnchantments() {
        if (this.getEnchantability() == false) {
            return 'Cannot be enchanted!';
        }
        else {
            return this.enchantments.join(', ');
        }
    }
    getArmorPoints() {
        return this.armorPoints;
    }
    repair() {
        this.durability += this.itemInHand;
        console.log(`Repaired ${this.name} and added ${this.itemInHand} durability points!`);
    }
    craft(amount) {
        this.itemInHand += amount;
        console.log(`Crafted ${amount} ${this.name}`);
    }
    enchant(enchantment) {
        this.enchantments.push(enchantment);
        console.log(`Enchanted ${this.name} with ${enchantment}`);
    }
}
let DiamondArmor = new MinecraftArmor('Diamond Shoes', 1, true, true, 1, 365, 'Wearing', 0, true, 1, 2.5, 'Diamond', 3, "4 Diamonds");
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
