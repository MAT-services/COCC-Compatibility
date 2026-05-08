ServerEvents.recipes(event => { // THIS SCRIPT IS IN TESTING ! IT'S PROBABLE THAN IT DOESN'T WORK !
    let hardmode_melters = [
        "custommachinery:adamantite_melter",
        "custommachinery:titanium_melter"
    ]
    hardmode_melters.forEach(hardmode_melter => {
        event.custom({
            type: "custommachinery:custom_machine",
            machine: hardmode_melter,
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
                    mode: "input",
                    amount: 1
                },
                {
                    type: "custommachinery:fluid",
                    mode: "output",
                    id: "output1",
                    ingredient: {
                        item: "slag:molten_iron"
                    },
                    amount: 100
                }
            ]
        }).id('cocc:hardmode_melter/molten_iron');
    });
})