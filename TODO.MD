# GUIs
- Replace all essentials-added buttons with CoC buttons and replace the terra advancements button.
- Add a GUI for packs. (Textures, data, shaders...)
# Blocks
- Add the torium node.
- Add the deepslate thorium ore.
- Create some molten (fluxite ?) fluids.
# Textures
- Replace some materials textures by Uniful textures. 
- Remade the textures of the items pipes.
- Create the textures for other fluids.
# Mods
To add: 
   - Nothing
# TAGS
- Modify chipped barrels tags to contraptions considere it as barrels.
# Recipies
- Check if this works: 
```JS
ServerEvents.recipes(event => {
  event.forEachRecipe({ type: "minecraft:smelting" }, recipe => {
    const input = recipe.getInput();
    const output = recipe.getOutput();
    const time = recipe.getCookingTime();

    event.recipes.custommachinery.custom_machine("custommachinery:rogue_furnace", 5)
      .requireItem(input)
      .produceItem(output);
  });
});
```
- Permet creating blood by pressing meat
.- EDIT THE CYBERSPACE RECIPES !
- Add Dye Vat recipes to the mixer (And found something to balance.)
- Add Cooking pots recipes to the Mixer.
- See if that's possible to replace the purifing recipe (or else) by the Crystal Ball. (Or found another method because that will probably doesn't work.)
- Add chisel recipes to dual recipes.
- Finish the auto.js script. (When finished, delete the 26-48 section in custom.js.)
- Make living items reproductable with puryfing recipes.
- Change the Dangersense potion to use lumiere shards and make lumiere shards renewable.
- Change the items pipes to: 
    ABC
    A Conveyor Belt
    B material item vault 
    C Special item.
- Make uses for wires blocks. (Like resistances. See GregTech.)
- Try to see if it's possible to add a better JEI integration to slag:dynamic parts.
- Replace the bassin recipie to use deep alloys and the melter recipie sheme to look like a bassin.
- Delete Oritech Colision particle recipie for the Echo Shard.
- Add the workshop of the tinker for the recipie of the assembler and add the workshop recipies to the assembler.
- Add linked to sculkcite. 
- Change the spawner recipe to use the heavy core.
- See if Oritech Sools can be used in crafts.
- Add Heavy Core recipie (It will need A LOT of molten steel and else).
- Check if Alex Caves do not breaks the game now. (Check to update recipies that are previously deleted due to Alex Caves crashes.)

# Custom Machinery
- Learn the documentation: https://frinn.gitbook.io/custom-machinery-1.21/creating-custom-machines/machine-appearance/block-appearance
- Finish the Hardmode Melters (See if it's possible to automatly translate the recipes from the melter to the hardmode melters.)
- Create more machines: 
    - Automatic Workshop
    - Automatic Extractinator (Modular Machinery Reborn)
    - NPC Automatic Shops
    - Dropper (Ex: beacon -> act like becon beam, black hole [! MAKE THE BLACK HOLE REMOVABLE / OBTAINABLE ! (Potentially broke it when a beacon is placed under it.)] -> act like the void, water bucket -> act like water, corrupted wash -> corrupt items)

# Modular Machinery Reborn
- CHECK THE DOCS: https://wikis.degrassi.es/docs

# Files
- Delete the dual files in slideshows images.
- Create the web places.
# Items
- Rename the pipez pipes to advanced pipes.
- Create uses for Cobalt Obsidian. (Obtain cobalt nuggets from the chlorophilite extractinator ?)
- Create seeds for all RU nylium types.
- Create seeds for all RU grass types.

See if en_us.snbt in FTBQuests config folder can be exploited.