// kubejsstudio loot tables; re-apply merges by table id
ServerEvents.generateData('after_mods', event => {
    event.json('kubejs:loot_table/blocks/deepslate_thorium_ore', {"pools":[{"rolls":1.0,"bonus_rolls":0.0,"name":"main","conditions":[{"condition":"minecraft:survives_explosion"}],"entries":[{"type":"minecraft:item","name":"create_new_age:thorium"}]}]})
})
