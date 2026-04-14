ServerEvents.recipes(event => {
    event.custom({
    "type": "slag:melting",
    "ingredient": {
        "tag": "c:ingots/steel" 
    },
    "ingredients": [],
    "result": [
        {
        "amount": 72,
        "id": "kubejs:molten_steel" 
        }
    ]
    }).id('cocc:melting/molten_steel');
    event.custom({
        "type": "slag:table_casting",
        "cast": "slag:cast/ingots",
        "ingredient": {
            "amount": 72,
            "id": "kubejs:molten_steel"
        },
        "result": {
            "count": 1,
            "id": "oritech:steel_ingot"
        }
    }).id('cocc:table_casting/steel_ingot');
    event.custom({
        "type": "slag:basin_casting",
        "ingredient": {
            "amount": 648,
            "id": "kubejs:molten_steel"
        },
        "result": {
            "count": 1,
            "id": "oritech:steel_block"
        }
    }).id('cocc:basin_casting/steel_block');

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
})