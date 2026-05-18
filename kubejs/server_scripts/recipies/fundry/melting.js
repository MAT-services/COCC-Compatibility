// A TESTER
ServerEvents.recipes(event => {
    let melters = [
        {recipe: "adamantite_melter", type: "cm"},
        {recipe: "titanium_melter", type: "cm"},
        {recipe: "melting", type: "slag"}
    ]
    let materials = [
        {id: "iron", ingot: "minecraft:iron_ingot"}
    ]
    let materialTypes = [
        "ingot",
        "block",
        "nuget",
        "dust",
        "gem"
    ]
    melters.forEach(melter => {
        if (melter.type==="cm") {
            materials.forEach(material => {
                event.custom({
                    type: "custommachinery:custom_machine",
                    machine: `custommachinery:${melter}`,
                    time: 100,
                    requirements: [
                        {
                            type: "custommachinery:item",
                            mode: "input",
                            id: "input1",
                            ingredient: {
                                item: `${material.ingot}`
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
                                "fluid": `slag:molten_${material.id}`,
                                "amount": 72
                            },
                        }
                    ]
                }).id(`cocc:${melter.recipe}/molten_${material.ingot}`);
            })
        }
        if (melter.type==="slag") {
            ///SNE recipe
        }
    });
})