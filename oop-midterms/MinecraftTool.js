"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// DONT CHANGE PLEASE!!
const InterfaceAndParent_js_1 = require("./InterfaceAndParent.js");
class MinecraftTool extends InterfaceAndParent_js_1.MinecraftItem {
    constructor(itemName, itemAmount, craftable, enchantable, stack, durabilityLeft, use, damage, flammability, resistance, miningSpeed, durabilityLostPerUse, miningLevel) {
        super(itemName, itemAmount, craftable, enchantable, stack, durabilityLeft, use, damage, flammability, resistance);
        this.miningSpeed = miningSpeed;
        this.miningLevel = miningLevel;
        this.durabilityLostPerUse = durabilityLostPerUse;
    }
    mine() {
        this.durability -= this.durabilityLostPerUse;
    }
    repair() {
        this.durability = this.stackSize * this.getDurability();
    }
    getName() {
        return "Tool: " + this.name;
    }
    getuseType() {
        return "Use: " + this.useType;
    }
    attack(target) {
        if (target instanceof MinecraftTool) {
            target.durability -= this.damageDealt / target.miningLevel;
        }
        else {
            target.durability -= this.damageDealt;
        }
    }
    upgradeMiningLevel(level) {
        this.miningLevel += level;
    }
    sharpen() {
        this.damageDealt *= 2;
    }
    getMiningSpeed() {
        return this.miningSpeed;
    }
    getMiningLevel() {
        return this.miningLevel;
    }
}
const pickaxe = new MinecraftTool("Diamond Pickaxe", 1, true, true, 1, 1500, "Mining", 0, false, 0, 5, 50, 5);
console.log(pickaxe.getName()); // output: item name
console.log(pickaxe.getuseType()); // output: item use
console.log("Item amount: " + pickaxe.getItemAmount()); // output: 1
console.log("Item durability: " + pickaxe.getDurability()); // Output: 150
pickaxe.mine();
console.log("Item durability after being used: " + pickaxe.getDurability()); // Output: 149
console.log(pickaxe.getMiningLevel()); // Output: 5
pickaxe.upgradeMiningLevel(2);
console.log(pickaxe.getMiningLevel()); // Output: 7
