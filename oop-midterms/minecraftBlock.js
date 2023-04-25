"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InterfaceAndParent_js_1 = require("./InterfaceAndParent.js");
class MinecraftBlock extends InterfaceAndParent_js_1.MinecraftItem {
    constructor(itemName, itemAmount, craftable, enchantable, stack, durabilityLeft, use, damage, flammability, resistance, hardness, blastResistance, toolRequired) {
        super(itemName, itemAmount, craftable, enchantable, stack, durabilityLeft, use, damage, flammability, resistance);
        this.hardness = hardness;
        this.blastResistance = blastResistance;
        this.toolRequired = toolRequired;
    }
    mine() { }
    place() { }
}
const testBlock = new MinecraftBlock("Diamond Ore", 1, false, false, 1, 3, "Mine", 0, false, 15, 3, 5, "Diamond Pickaxe");
// Test getName method
console.log(testBlock.getName()); // Output: Diamond Ore
// Test getDurability method
console.log(testBlock.getDurability()); // Output: 3
// Test getItemAmount method
console.log(testBlock.getItemAmount()); // Output: 1
// Test getHardness method
console.log(testBlock.hardness); // Output: 5
// Test getBlastResistance method
console.log(testBlock.blastResistance); // Output: 3
// Test getToolRequired method
console.log(testBlock.toolRequired); // Output: Diamond Pickaxe
// Test mine method
testBlock.mine();
// Test place method
testBlock.place();
