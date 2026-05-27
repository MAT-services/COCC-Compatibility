ServerEvents.recipes(event => {
    let melters = [
        {recipe: "adamantite_melter", type: "cm"},
        {recipe: "titanium_melter", type: "cm"},
        {recipe: "melting", type: "slag"}
    ]
    let materials = [
        {id: "iron", level: 0, fluid: "slag:molten_iron", ingot: "minecraft:iron_ingot", storage_block: "minecraft:iron_block", nugget: "minecraft:iron_nugget", dust: "oritech:iron_dust", gem: "oritech:iron_gem"},
        {id: "gold", level: 0, fluid: "slag:molten_gold", ingot: "minecraft:gold_ingot", storage_block: "minecraft:gold_block", nugget: "minecraft:gold_nugget", dust: "oritech:gold_dust", gem: "oritech:gold_gem"},
        {id: "copper", level: 0, fluid: "slag:molten_copper", ingot: "minecraft:copper_ingot", storage_block: "minecraft:copper_block", nugget: "create:copper_nugget", dust: "oritech:copper_dust", gem: "oritech:copper_gem"},
        {id: "steel", level: 0, fluid: "kubejs:molten_steel", ingot: "oritech:steel_ingot", storage_block: "oritech:steel_block", nugget: "empty", dust: "oritech:steel_dust", gem: "empty"},
        {id: "platinum", level: 0, fluid: "kubejs:molten_platinum", ingot: "confluence:platinum_ingot", storage_block: "confluence:platinum_block", nugget: "confluence:platinum_nugget", dust: "oritech:platinum_dust", gem: "empty"},
        {id: "diamond", level: 0, fluid: "slag:molten_diamond", ingot: "empty", storage_block: "minecraft:diamond_block", nugget: "empty", dust: "empty", gem: "minecraft:diamond"},
        {id: "emerauld", level: 0, fluid: "slag:molten_emerauld", ingot: "empty", storage_block: "minecraft:emerauld_block", nugget: "empty", dust: "empty", gem: "minecraft:emerauld"},
        {id: "tin", level: 0, fluid: "empty", ingot: "confluence:tin_ingot", storage_block: "confluence:tin_block", nugget: "confluence:tin_nugget", dust: "empty", gem: "empty"}
    ]
    let itemTypes = [ // Vanilla Implant / Dynamic Slag'n Embers
        // Vanilla Implant
        {id: "ingot", coef: 72, cast: "table", type: "VI"},
        {id: "storage_block", coef: 648, cast: "basin", type: "VI"},
        {id: "nugget", coef: 8, cast: "table", type: "VI"},
        {id: "dust", coef: 72, cast: "table", type: "VI"},
        //{id: "small_dust", coef: 8, cast: "table", type: "VI"},
        {id: "gem", coef: 72 /* I'm not sure if that's a good idea... */, cast: "table", type: "VI"},
        // Dynamic SnE (Never tested, to test.)
        {id: "plate", coef: 144, cast: "table", type: "DSE"}
    ]

    materials.forEach(material => {
        itemTypes.forEach(itemType => {
            if (material[itemType.id]!="empty") {
                function getItem(from) { // Potentially add `"count": 1` if the SNE recipes do not work.
                    if (itemType.type==="VI") {
                        if (from==="output") {return {item: material[itemType.id]/* VERIFY IF ID / ITEM works for SNE and MJS together. */}}; if (from==="input") {return {tag: `c:${itemType.id}s/${material.id}`}}
                    }
                    if (itemType.type==="DSE") {
                        return {item: `slag:dynamic_part`,"components": {"slag:material_type": `slag:${material.id}`,"slag:part_type": `slag:${itemType.id}`}}
                    }
                }

                melters.forEach(melter => {
                    if (melter.type==="cm") {if (material.level < 3) {
                        event.custom({
                            type: "custommachinery:custom_machine",
                             machine: `custommachinery:${melter.recipe}`,
                            time: 100,
                            requirements: [
                                {
                                    type: "custommachinery:item",
                                    mode: "input",
                                    id: "input1",
                                    ingredient: getItem("input"),
                                    amount: 1
                                },
                                {
                                    type: "custommachinery:fuel",
                                    amount: 1
                                },
                                {
                                    "type": "custommachinery:fluid",
                                    "mode": "output",
                                    "id": "output1",
                                    "ingredient": {
                                        "fluid": material.fluid,
                                        "amount": itemType.coef
                                    }
                                }
                            ]
                        }).id(`cocc:${melter.recipe}/molten_${material.id}-from-${itemType.id}`);
                    }}
                    if (melter.type==="slag") {if (material.level < 1) {
                        event.custom({
                            "type": `slag:${melter.recipe}`,
                            "ingredient": {
                                "tag": `c:${itemType.id}s/${material.id}` 
                            },
                            "ingredients": [],
                            "result": [
                                {
                                    "amount": itemType.coef,
                                    "id": material.fluid
                                }
                            ]
                        }).id(`cocc:${melter.recipe}/molten_${material.id}-from-${itemType.id}`);
                    }}
                })
                // Bassin Casting
                if (itemType.cast==="basin") {
                    event.custom({
                        "type": "slag:basin_casting",
                        "ingredient": {
                            "amount": itemType.coef,
                            "id": material.fluid
                        },
                        "result": {
                            "count": 1,
                            "id": material.storage_block
                        }
                    }).id(`cocc:basin_casting/${material.id}`);
                }
                // Table Casting
                if (itemType.cast==="table") {
                    event.custom({
                        "type": "slag:table_casting",
                        "cast": `slag:cast/${itemType.id}s`,
                        "ingredient": {
                            "amount": itemType.coef,
                            "id": material.fluid
                        },
                        "result": getItem("output")
                    }).id(`cocc:table_casting/${material.id}_${itemType.id}`);
                }
            }
        })
    });
})