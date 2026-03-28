ServerEvents.recipes(event => {
    event.custom(/*{
        type: "custommachinery:custom_machine",
        machine: "custommachinery:electric_sander",
        time: 200,

        inputs: [
            {
                type: "custommachinery:item",
                item: "create:rose_quartz",
                amount: 1
            }
        ],

        outputs: [
            {
                type: "custommachinery:item",
                item: "create:polished_rose_quartz",
                amount: 1
            }
        ]
    }*/{
    "type": "custommachinery:custom_machine",
    "machine": "custommachinery:electric_sander",
    "time": 100,
    "requirements": [
    {
        "type": "custommachinery:item",
        "mode": "input",
        "id": "input",
        "item": "create:rose_quartz",
        "amount": 1
    },
    {
        "type": "custommachinery:energy",
        "mode": "input",
        "amount": 1000
    },
    {
        "type": "custommachinery:item",
        "mode": "output",
        "id": "output",
        "item": "create:polished_rose_quartz",
        "amount": 1
    }]}).id('cocc:custom_machine/polished_rose_quartz');
})