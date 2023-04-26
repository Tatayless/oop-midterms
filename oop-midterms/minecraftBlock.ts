import {MinecraftItem} from "./InterfaceAndParent.js";

// James Matthew Dumdum

class MinecraftBlock extends MinecraftItem {
    public hardness: number;
    public blastResistance: number;
    public toolRequired: string;
  
    constructor(
      itemName: string,
      itemAmount: number,
      craftable: boolean,
      enchantable: boolean,
      stack: number,
      durabilityLeft: number,
      use: string,
      damage: number,
      flammability: boolean,
      resistance: number,
      hardness: number,
      blastResistance: number,
      toolRequired: string
    ) {
      super(
        itemName,
        itemAmount,
        craftable,
        enchantable,
        stack,
        durabilityLeft,
        use,
        damage,
        flammability,
        resistance
      );
      this.hardness = hardness;
      this.blastResistance = blastResistance;
      this.toolRequired = toolRequired;
    }
  
    public mine(): void {}
  
    public place(): void {}

    public getHardness(): number {
    return this.hardness;
   }

    public getBlastResistance(): number {
    return this.blastResistance;
   }

    public getToolRequired(): string {
    return this.toolRequired;
    }

    public setBlastResistance(amount: number): void {
    this.blastResistance = amount;
    }
  }
  const testBlock = new MinecraftBlock(
    "Diamond Ore",
    1,
    false,
    false,
    1,
    3,
    "Mine",
    0,
    false,
    15,
    3,
    5,
    "Diamond Pickaxe"
  );
  
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
  
  // Test setBlastResistance method
  testBlock.setBlastResistance(2); 
  console.log(testBlock.blastResistance); // Output:2

  

