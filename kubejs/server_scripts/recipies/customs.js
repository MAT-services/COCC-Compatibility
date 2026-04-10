ServerEvents.recipes(event => {
    event.custom({
        type: "custommachinery:custom_machine",
        machine: "custommachinery:electric_sander",
        time: 100,
        requirements: [
            {
                type: "custommachinery:item",
                mode: "input",
                id: "input",
                ingredient: {
                    item: "create:rose_quartz"
                },
                amount: 1
            },
            {
                type: "custommachinery:energy",
                mode: "input",
                amount: 1000
            },
            {
                type: "custommachinery:item",
                mode: "output",
                id: "output",
                ingredient: {
                    item: "create:polished_rose_quartz"
                },
                amount: 1
            }
        ]
    }).id('cocc:electric_sander/polished_rose_quartz');
})