// A TESTER
ServerEvents.recipes(event => {
    let melters = [
        {recipe: "adamantite_melter", type: "cm"},
        {recipe: "titanium_melter", type: "cm"},
        {recipe: "melting", type: "slag"}
    ]
    let materials = [
        {id: "iron", level: 0, ingot: "minecraft:iron_ingot", fluid: "slag:molten_iron"}
    ]
    let materialTypes = [
        {id: "ingot", coef: 72},
        {id: "block", coef: 648},
        {id: "nugget", coef: 8},
        {id: "dust", coef: 72},
        {id: "small_dust", coef: 8},
        {id: "gem", coef: 80}
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
        })
        
        // OTHERS
    });
})