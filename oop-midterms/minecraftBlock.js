"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var InterfaceAndParent_js_1 = require("./InterfaceAndParent.js");
var MinecraftBlock = /** @class */ (function (_super) {
    __extends(MinecraftBlock, _super);
    function MinecraftBlock(itemName, itemAmount, craftable, enchantable, stack, durabilityLeft, use, damage, flammability, resistance, hardness, blastResistance, toolRequired) {
        var _this = _super.call(this, itemName, itemAmount, craftable, enchantable, stack, durabilityLeft, use, damage, flammability, resistance) || this;
        _this.hardness = hardness;
        _this.blastResistance = blastResistance;
        _this.toolRequired = toolRequired;
        return _this;
    }
    MinecraftBlock.prototype.mine = function () { };
    MinecraftBlock.prototype.place = function () { };
    MinecraftBlock.prototype.getHardness = function () {
        return this.hardness;
    };
    MinecraftBlock.prototype.getBlastResistance = function () {
        return this.blastResistance;
    };
    MinecraftBlock.prototype.getToolRequired = function () {
        return this.toolRequired;
    };
    MinecraftBlock.prototype.setBlastResistance = function (amount) {
        this.blastResistance = amount;
    };
    return MinecraftBlock;
}(InterfaceAndParent_js_1.MinecraftItem));
var testBlock = new MinecraftBlock("Diamond Ore", 1, false, false, 1, 3, "Mine", 0, false, 15, 3, 5, "Diamond Pickaxe");
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
testBlock.setBlastResistance(2);
console.log(testBlock.blastResistance);
