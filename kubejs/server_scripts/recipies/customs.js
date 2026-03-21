ServerEvents.recipes(event => {
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "custommachinery:electric_sander",
        "time": 200,
        "requirements": [
            {
                "type": "custommachinery:item",
                "mode": "input",
                "item": "create:rose_quartz",
                "amount": 1
            },
            {
                "type": "custommachinery:item",
                "mode": "output",
                "item": "create:polished_rose_quartz",
                "amount": 1
            }
        ] // NOT WORKING
    })
});