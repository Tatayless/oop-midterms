// DONT CHANGE

interface AbstractMinecraftObject {
    name: string;
    id: number;
    isCraftable: boolean;
    isEnchantable: boolean;
    stackSize: number;
    durability: number;
    useType: string;
    damageDealt: number;
    flammable: boolean;
    explosionResistance: number;

    getDurability(): number;
    getName(): string;
    getID(): number;
}

class MinecraftItem {
    public name: string;
    private itemInHand: number;
    public isCraftable: boolean;
    public isEnchantable: boolean;
    public stackSize: number;
    private durability: number;
    protected useType: string;
    private damageDealt: number;
    private flammable: boolean;
    private explosionResistance: number;

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

    getDurability(): number {
        return this.durability;
    }

    getName(): string {
        return this.name;
    }

    getItemAmount(): number {
        return this.itemInHand;
    }

    getCraftingRecipe(): void {
    }
    
    getEnchantments(): void {
    }

    craft(amount: number): void {
    }

    enchant(enchantment: string): void {
    }

    attack(): void {
    }

    place(): void {
    }

    repair(): void {
    }
}