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