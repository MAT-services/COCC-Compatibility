// Also add ways to automatically melt raw materials.
// Test the DnE recipes generation doesn't work correctly.
// Ok, so, the test works with SNE melter... Now, we need to do the same with CM.
// Add corresponding recipes to crafting shaped too.
//  Potentially place the variables in another file... If possible.

// Check if doing 
/**
 *  {  
        "type": "neoforge:components",  
        "items": "examplemod:example_item",  
        "components": {  
            // Add component information here  
        },  
        "strict": true  
    }
 */
// is possible.

ServerEvents.recipes(event => {
    let melters = [
        {recipe: "adamantite_melter", type: "cm"},
        {recipe: "titanium_melter", type: "cm"},
        {recipe: "melting", type: "slag"}
    ]
    let materials = [
        {id: "iron", level: 0, fluid: "slag:molten_iron", ingot: "minecraft:iron_ingot", storage_block: "minecraft:iron_block", nugget: "minecraft:iron_nugget", dust: "oritech:iron_dust", gem: "oritech:iron_gem", DSE:true},
        {id: "gold", level: 0, fluid: "slag:molten_gold", ingot: "minecraft:gold_ingot", storage_block: "minecraft:gold_block", nugget: "minecraft:gold_nugget", dust: "oritech:gold_dust", gem: "oritech:gold_gem", DSE:true},
        {id: "copper", level: 0, fluid: "slag:molten_copper", ingot: "minecraft:copper_ingot", storage_block: "minecraft:copper_block", nugget: "create:copper_nugget", dust: "oritech:copper_dust", gem: "oritech:copper_gem", DSE:true},
        {id: "steel", level: 0, fluid: "kubejs:molten_steel", ingot: "oritech:steel_ingot", storage_block: "oritech:steel_block", dust: "oritech:steel_dust", DSE:true},
        {id: "platinum", level: 0, fluid: "kubejs:molten_platinum", ingot: "confluence:platinum_ingot", storage_block: "confluence:platinum_block", nugget: "confluence:platinum_nugget", dust: "oritech:platinum_dust", gem: "oritech:platinum_gem"},
        {id: "diamond", level: 0, fluid: "slag:molten_diamond", storage_block: "minecraft:diamond_block", gem: "minecraft:diamond", DSE:true}, 
        {id: "emerald", level: 0, fluid: "slag:molten_emerald", storage_block: "minecraft:emerald_block", gem: "minecraft:emerald", DSE:true},
        {id: "lead", level: 0, fluid: "kubejs:molten_lead", ingot: "confluence:lead_ingot", storage_block: "confluence:lead_block", nugget: "confluence:lead_nugget", /*re: "confluence:raw_material_lead",*/ DSE:true},
        {id: "thorium", level: 0, fluid: "kubejs:molten_thorium", ingot: null, storage_block: null, nugget: null, dust: null, gem: null},
        {id: "netherite", level: 0, fluid: "slag:molten_netherite", ingot: "minecraft:netherite_ingot", storage_block: "minecraft:netherite_block", nugget: "createdeco:netherite_nugget", DSE:true},
        {id: "tin", level: 0, fluid: "kubejs:molten_tin", ingot: "confluence:tin_ingot", storage_block: "confluence:tin_block", nugget: "confluence:tin_nugget" /*re: "confluence:raw_material_tin"*/},
        {id: "rose_gold", level: 0, fluid: "slag:molten_rose_gold", ingot: "slag:rose_gold_ingot", nugget: "slag:rose_gold_nugget", DSE:true},
        //{id: "uranium", level: 1, fluid: null, },
        {id: "silver", level: 0, fluid: "kubejs:molten_silver", ingot: "confluence:silver_ingot", storage_block: "confluence:silver_block", nugget:"confluence:silver_nugget"},
        {id: "nickel", level: 0, fluid: "kubejs:molten_nickel", ingot: "oritech:nickel_ingot", storage_block: "oritech:nickel_block", nugget: "oritech:nickel_nugget", dust: "oritech:nickel_dust", gem: "oritech:nickel_gem" /*re: "oritech:raw_material_nickel"*/}
    ]
    let itemTypes = [ // Vanilla Implant / Dynamic Slag'n Embers
        // Vanilla Implant
        {id: "ingot", coef: 72, cast: "table", type: "VI"},
        {id: "storage_block", coef: 648, cast: "basin", type: "VI"},
        {id: "nugget", coef: 8, cast: "table", type: "VI"},
        {id: "dust", coef: 72, cast: "table", type: "VI"},
        //{id: "small_dust", coef: 8, cast: "table", type: "VI"},
        {id: "gem", coef: 72 /* I'm not sure if that's a good idea... */, cast: "table", type: "VI", nt:"rafined"},
        // Raw Materials
        {id: "raw_material", coef: 96, cast: "ore", type: "VI"},
        // Dynamic SnE (To test.)
        {id: "plate", coef: 144, cast: "table", type: "DSE"},
        {id: "shovel_head", coef: 72, cast: "table", type: "DSE"},
        {id: "pickaxe_head", coef: 216, cast: "table", type: "DSE"},
        {id: "axe_head", coef: 216, cast: "table", type: "DSE"},
        {id: "hoe_head", coef: 144, cast: "table", type: "DSE"}, 
        {id: "sword_blade", coef: 144, cast: "table", type: "DSE"},
        {id: "guard", coef: 72, cast: "table", type: "DSE"},
        {id: "helmet", coef: 216, type: "DSE"},
        {id: "chestplate", coef: 432, type: "DSE"},
        {id: "leggings", coef: 72, type: "DSE"},
        {id: "boots", coef: 72, type: "DSE"}
    ]

    materials.forEach(material => {
        itemTypes.forEach(itemType => {
            function getItem(from) { 
                if (itemType.type==="VI") {
                    if (from==="output") {
                        return {id: material[itemType.id]}
                    } else if (["inputTag", "custom"].includes(from)) {
                        return {tag: `c:${itemType.id}s/${material.id}`}
                    }
                }
                if (itemType.type==="DSE") {
                    if (from==="output") { 
                        return {
                            "count": 1,
                            "id": "slag:dynamic_part",
                            "components": {
                                "slag:material_type": `slag:${material.id}`,
                                "slag:part_type": `slag:${itemType.id}`
                            }
                        };
                    } else if (from==="inputDsE") {
                        return {
                            "id": "slag:dynamic_part",
                            "components": {
                                "slag:material_type": `slag:${material.id}`,
                                "slag:part_type": `slag:${itemType.id}`
                            },
                            "count": 1
                        };
                    } else if (from==="custom") {
                        return {  
                            "type": "neoforge:components",  
                            "items": "slag:dynamic_part",  
                            "components": {
                                "slag:material_type": `slag:${material.id}`,
                                "slag:part_type": `slag:${itemType.id}`
                            },  
                            "strict": false
                        };
                    }
                }
            }
            if (((material[itemType.id]!=null || itemType.cast==="ore") || (itemType.type==="DSE" && material.DSE===true)) && material.fluid!=null) {
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
                                    ingredient: getItem("custom"),
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
                        let recipe = {
                            "type": `slag:${melter.recipe}`,
                            "result": [
                                {
                                    "amount": itemType.coef,
                                    "id": material.fluid
                                }
                            ]
                        };
                        if (itemType.type==="VI") {recipe.ingredient = getItem("inputTag"); recipe.ingredients = []}
                        if (itemType.type==="DSE") recipe.ingredients = [getItem("inputDsE")]
                        event.custom(recipe).id(`cocc:${melter.recipe}/molten_${material.id}-from-${itemType.id}`);
                    }}
                })
                // Bassin Casting
                if (itemType.cast==="basin" && material.storage_block != null) {
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
                if (itemType.cast==="table" && (material[itemType.id] != null || (itemType.type==="DSE" && material.DSE===true))) {
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
