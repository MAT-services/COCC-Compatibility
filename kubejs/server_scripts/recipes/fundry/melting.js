// A TESTER
ServerEvents.recipes(event => {
    let melters = [
        {recipe: "adamantite_melter", type: "cm"},
        {recipe: "titanium_melter", type: "cm"},
        {recipe: "melting", type: "slag"}
    ]
    let materials = [
        {id: "iron", level: 0, ingot: "minecraft:iron_ingot", block: "minecraft:iron_block", fluid: "slag:molten_iron"},
        {id: "steel", level: 0, ingot: "oritech:steel_ingot", block: "oritech:steel_block", fluid: "kubejs:molten_steel"}
    ]
    let materialTypes = [
        {id: "ingot", coef: 72, cast: "table"},
        {id: "block", coef: 648, cast: "basin"},
        {id: "nugget", coef: 8, cast: "table"},
        {id: "dust", coef: 72, cast: "table"},
        //{id: "small_dust", coef: 8, cast: "table"},
        {id: "gem", coef: 80, cast: "table"}
    ]

    materials.forEach(material => {
        materialTypes.forEach(materialType => {
            melters.forEach(melter => {
                if (melter.type==="cm") {if (material.level < 2) {
                    event.custom({
                        type: "custommachinery:custom_machine",
                        machine: `custommachinery:${melter.recipe}`,
                        time: 100,
                        requirements: [
                            {
                                type: "custommachinery:item",
                                mode: "input",
                                id: "input1",
                                ingredient: {
                                    tag: `c:${materialType.id}s/${material.id}`
                                },
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
                                    "fluid": `${material.fluid}`,
                                    "amount": materialType.coef
                                }
                            }
                        ]
                    }).id(`cocc:${melter.recipe}/molten_${material.id}-from-${materialType.id}`);
                }}
                if (melter.type==="slag") {if (material.level < 1) {
                    event.custom({
                        "type": `slag:${melter.recipe}`,
                        "ingredient": {
                            "tag": `c:${materialType.id}s/${material.id}` 
                        },
                        "result": [
                            {
                            "amount": materialType.coef,
                            "id": `${material.fluid}` 
                            }
                        ]
                    }).id(`cocc:${melter.recipe}/molten_${material.id}-from-${materialType.id}`);
                }}
            });

            // Bassin Casting
            if (materialType.cast==="basin") {
                event.custom({
                    "type": "slag:basin_casting",
                    "ingredient": {
                        "amount": materialType.coef,
                        "id": `${material.fluid}`
                    },
                    "result": {
                        "count": 1,
                        "id": `${material.block}`
                    }
                }).id(`cocc:basin_casting/${material.id}`);
            }
            // Table Casting
            if (materialType.cast==="table") {
                event.custom({
                    "type": "slag:table_casting",
                    "cast": `slag:cast/${materialType.id}s`,
                    "ingredient": {
                        "amount": materialType.coef,
                        "id": `${material.fluid}`
                    },
                    "result": {
                        "count": 1,
                        "id": `${material.block}`
                    }
                }).id(`cocc:table_casting/${material.id}_${materialType.id}`);
            }
        })
    });
})