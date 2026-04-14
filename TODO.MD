# Textures
- Remade the textures of the items pipes.
# Mods
To add: 
   - Create: processing 

# Advancements
Learn and create.

# Recipies

> [!CAUTION] - Add molds recipies with deployers ! WORKS BUT NEED ATTENTION FOR OTHER RECIPIES ! .
- Add the workshop of the tinker for the recipie of the assembler and add the workshop recipies to the assembler.
- Add linked to sculkcite. 
- Change the spawner to use the heavy core.
- See if Oritech Sools can be used in crafts.
- Add Heavy Core recipie (It will need A LOT of molten steel).
- Check to update recipies that are previously deleted due to Alex Caves crashes.

# Custom Machinery
- See if machine recipies works without "id" fields. (I do not think but that's a possibility.)
- Place the Electric Sander in the place specified in the documentation: https://frinn.gitbook.io/custom-machinery-1.21/creating-custom-machines/machine-appearance/block-appearance
- Create more machines: 
    - Automatic Extractinator
    - Automatic Molder

# Files
- Delete ~/kubejs/assets/confluence/lang 
# Items
- Modify modular parts to work better with Slag n' Embers runtime: Doc-conversation data/ (Mod ID) /slag/materials/ (Material Name) .json ```{
  "defense": 6.5,
  "durability": 1536.0,
  "enchantability": 19.0,
  "id": "slag:titanium",
  "knockback_resistance": 0.1,
  "molten_fluid": "slag:molten_titanium",
"repair_ingredient": {
    "tag": "c:ingots/titanium"
},
"palette": {
  "0xB7B6B6",
  "0x9E9E9E",
  "0x6A6B6A",
  "0x3F3F3F",
  "0x1B1B1A"
},
  "sharpness": 7.5,
  "sort_order": 320,
  "speed": 12.0,
  "texture": "metal",
  "tier": 5.0,
  "toughness": 1.5
}
 [RUNE], 
Luna — 15:50
you changed the palette too {} -.-
for arrays/lists you want [] 
Vibe [RUNE],  — 15:51
oh gosh
it works
thanks so much
i feel so stupid 😭
 [RUNE], 
Luna — 15:52
well check with like chat gpt for any typos you make 👍
Vibe [RUNE],  — 15:53
high chance gpt hallucinates tho
 [RUNE], 
Luna — 15:54
well its just looking for any typo of the json syntax
Vibe [RUNE],  — 16:12
back again
{
  "defense": 9.0,
  "durability": 2500.0,
  "enchantability": 22.0,
  "id": "slag:martian_steel",
  "molten_fluid": "slag:molten_martian_steel",
  "repair_ingredient": {
    "item": "northstar:martian_steel"
},
"palette": [
  "0xB2C1B7",
  "0x828885",
  "0x777E79",
  "0x58605B",
  "0x434B44",
  "0x3A403C",
  "0x1B1C1B"
],
  "sharpness": 9.0,
  "sort_order": 340,
  "speed": 14.0,
  "texture": "metal",
  "tier": 5.0
}
why isnt this one working?
 [RUNE], 
MAT — 16:17
Wait... We can create fluids with the SnE runtime ???
LonelySoul1107 — 16:18
via datapacks
MAT — 16:18
POV: Me that have created a LOT of stuff manually:

GIF
So... Yeah, let's redo anything...😅
Are there a documentation to do it ?
Vibe [RUNE],  — 16:22
i wish there was, unless im blind and i cant find it
so, how do u register molten fluids then?
im still yet to do that
MAT — 16:24
I just created a new fluid, create apply the proprieties and tags and set the recipies manually.
That can take an hour just for that...
MAT — 16:34
Also, is there a way to add custom molds to SnE ?
Luna — 16:47
not fluids
but have to just apply the tags n stuff correctly to the fluid
Luna — 16:48
ye
Luna — 16:50
add a new tag for a cast type inside this
Image
registering a new part generates the mold by default btw
then you need to create the model/textures for it
Luna — 16:58
textures/item/"type"_mold/"Tag Name".png
textures/item/cutout/"type"_mold/"Tag Name".png

models/item/"type"_mold/"Tag Name".json
models/item/cutout/"type"_mold/"Tag Name".json

json models are pretty much this
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "(modID):(Texture Path)"
  }
}
then you got your custom mold :3``` PS: This is a conversation copied from Luna HUB Discord server.
