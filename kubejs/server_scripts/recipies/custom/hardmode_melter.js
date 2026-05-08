ServerEvents.recipes(event => {
    let hardmode_melters = [
        "adamantite_melter",
        "titanium_melter"
    ]
    hardmode_melters.forEach(hardmode_melter => {
        event.custom({
            type: "custommachinery:custom_machine",
            machine: `custommachinery:${hardmode_melter}`,
            time: 100,
            requirements: [
                {
                    type: "custommachinery:item",
                    mode: "input",
                    id: "input1",
                    ingredient: {
                        item: "minecraft:iron_ingot"
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
                        "fluid": "slag:molten_iron",
                        "amount": 72
                    },
                }
            ]
        }).id(`cocc:${hardmode_melter}_melter/molten_iron`);
    });
})