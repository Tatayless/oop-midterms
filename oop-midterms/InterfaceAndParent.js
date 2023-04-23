"use strict";
// DONT CHANGE PLEASE
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinecraftItem = void 0;
class MinecraftItem {
    constructor(itemName, itemAmount, craftable, enchantable, stack, durabilityLeft, use, damage, flammability, resistance) {
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
    getName() {
        return this.name;
    }
    getDurability() {
        return this.durability;
    }
    getItemAmount() {
        return this.itemInHand;
    }
    getCraftability() {
        return this.isCraftable;
    }
    getEnchantability() {
        return this.isEnchantable;
    }
    getDamage() {
        return this.damageDealt;
    }
    craft(amount) {
    }
    enchant(enchantment) {
    }
    firstUse() {
    }
    secondUse() {
    }
    repair() {
    }
}
exports.MinecraftItem = MinecraftItem;
