ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "pattern": [
        "#P",
        "P#"
        ],
        "key": {
        "P": {
            "item": "minecraft:paper"
        },
        "#": {
            "item": "oritech:steel_ingot"
        }
        },
        "result": {
        "components": {
            "slag:material_type": "slag:steel",
            "slag:part_type": "slag:plate"
        },
        "id": "slag:dynamic_part"
        }
    }).id('cocc:crafting_shaped/steel_plate');

    /*////////// This little script is here for testing only. Delete it when `auto.js` is working correctly.

    event.custom({
        "type": "slag:melting",
        "ingredients": [
            {
            "components": {
                "slag:material_type": "slag:steel",
                "slag:part_type": "slag:plate"
            },
            "count": 1,
            "id": "slag:dynamic_part"
            }
        ],
        "result": [
            {
            "amount": 144,
            "id": "kubejs:molten_steel"
            }
        ]
    }).id('cocc:melting/molten_steel_from_plate');

    /////////*/

    event.custom({
        "type": "slag:melting",
        "ingredients": [
            {
            "id": "oritech:quartz_dust"
            }
        ],
        "result": [
            {
            "amount": 72,
            "id": "slag:molten_quartz"
            }
        ]
    })
})