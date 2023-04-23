// DONT CHANGE PLEASE

interface AbstractMinecraftObject {
    getName(): string;
    getDurability(): void;
    getItemAmount(): number;
    getEnchantability(): boolean;
    getCraftability(): boolean;
}

export class MinecraftItem implements AbstractMinecraftObject {
    public name: string;
    public itemInHand: number;
    private isCraftable: boolean;
    private isEnchantable: boolean;
    public stackSize: number;
    public durability: number;
    private useType: string;
    private damageDealt: number;
    private flammable: boolean;
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

    public getCraftability(): boolean {
        return this.isCraftable;
    }
    
    public getEnchantability(): boolean {
        return this.isEnchantable;
    }

    public getDamage(): number {
        return this.damageDealt;
    }

    public craft(amount: number): void {
    }

    public enchant(enchantment: string): void {
    }

    public firstUse(): void {
    }

    public secondUse(): void {
    }

    public repair(): void {
    }
}