// Also add ways to automatically melt raw materials.
// Test the DnE recipes generation doesn't work correctly.
// Ok, so, the test works with SNE melter... Now, we need to do the same with CM.

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
        {id: "emerald", level: 0, fluid: "slag:molten_emerald", ingot: "empty", storage_block: "minecraft:emerald_block", nugget: "empty", dust: "empty", gem: "minecraft:emerald"},
        {id: "lead", level: 0, fluid: "kubejs:molten_lead", ingot: "confluence:lead_ingot", storage_block: "confluence:lead_block", nugget: "confluence:lead_nugget", dust: "empty", gem: "empty"},
        {id: "thorium", level: 0, fluid: "kubejs:molten_thorium", ingot: "empty", storage_block: "empty", nugget: "empty", dust: "empty", gem: "empty"}
    ]
    let itemTypes = [ // Vanilla Implant / Dynamic Slag'n Embers
        // Vanilla Implant
        {id: "ingot", coef: 72, cast: "table", type: "VI", nt: "rafined"},
        {id: "storage_block", coef: 648, cast: "basin", type: "VI", nt: "rafined"},
        {id: "nugget", coef: 8, cast: "table", type: "VI", nt: "rafined"},
        {id: "dust", coef: 72, cast: "table", type: "VI", nt: "rafined"},
        //{id: "small_dust", coef: 8, cast: "table", type: "VI", nt: "rafined"},
        {id: "gem", coef: 72 /* I'm not sure if that's a good idea... */, cast: "table", type: "VI", nt:"rafined"},
        /** Raw Materials
         * {id: }
         * {id: }
         */
        // Dynamic SnE (Never tested, to test.)
        {id: "plate", coef: 144, cast: "table", type: "DSE", nt: "rafined"}
    ]

    materials.forEach(material => {
        itemTypes.forEach(itemType => {
            function getItem(from) { // Potentially add `"count": 1` if the SNE recipes do not work.
                if (itemType.type==="VI") {
                    if (from==="output") {return {id: material[itemType.id]}};
                    if (["input", "custom"].includes(from)) {return {tag: `c:${itemType.id}s/${material.id}`}};
                }
                if (itemType.type==="DSE") {
                    if (from!="custom") {
                        return {
                            "id": "slag:dynamic_part",
                            "components": {
                                "slag:material_type": `slag:${material.id}`,
                                "slag:part_type": `slag:${itemType.id}`
                            },
                            "count": 1
                        }
                    };
                    if (from==="custom") {
                        return {
                            item: `slag:dynamic_part`,
                            "components": {
                                "slag:material_type": `slag:${material.id}`,
                                "slag:part_type": `slag:${itemType.id}`
                            }
                        };
                    }
                }
            }
            if (material[itemType.id]!="empty" && material.fluid!="empty") {
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
                                    ingredient: getItem("custom"), // Potentially try with `ingredients: [getItems("custom")]` instead of `ingredient: getItem("custom")`.
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
                            //"ingredient": getItem("input"), // Doesn't work for DSE.
                            "ingredients": [
                                getItem("output") // To try with VI, Normally work with DSE.
                            ],
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
                if (itemType.cast==="basin" && material.storage_block != "empty") {
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
                if (itemType.cast==="table" && material[itemType.id] != "empty") {
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