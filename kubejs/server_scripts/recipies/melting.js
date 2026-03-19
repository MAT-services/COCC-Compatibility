ServerEvents.recipes(event => {
    event.custom({
    "type": "slag:melting",
    "ingredient": {
        "item": "create:brass_ingot"
    },
    "ingredients": [],
    "result": [
        {
        "amount": 72,
        "id": "kubejs:molten_brass"
        }
    ]
    });
})