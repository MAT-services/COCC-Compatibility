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

    event.custom({
        "type": "slag:table_casting",
        "cast": "slag:cast/dusts",
        "ingredient": {
            "amount": 72,
            "id": "slag:molten_iron"
        },
        "result": {
            "count": 1,
            "id": "oritech:iron_dust"
        }
    }).id('cocc:table_casting/iron_dust');

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

    event.custom({
        "type": "slag:table_casting",
        "cast": "slag:cast/gems",
        "ingredient": {
            "amount": 72,
            "id": "slag:molten_iron"
        },
        "result": {
            "count": 1,
            "id": "oritech:iron_gem"
        }
    }).id('cocc:table_casting/iron_gem');
    event.custom({
        "type": "slag:table_casting",
        "cast": "slag:cast/gems",
        "ingredient": {
            "amount": 72,
            "id": "slag:molten_copper"
        },
        "result": {
            "count": 1,
            "id": "oritech:copper_gem"
        }
    }).id('cocc:table_casting/copper_gem');
    event.custom({
        "type": "slag:table_casting",
        "cast": "slag:cast/gems",
        "ingredient": {
            "amount": 72,
            "id": "slag:molten_gold"
        },
        "result": {
            "count": 1,
            "id": "oritech:gold_gem"
        }
    }).id('cocc:table_casting/gold_gem');/*
    event.custom({
        "type": "slag:table_casting",
        "cast": "slag:cast/gems",
        "ingredient": {
            "amount": 72,
            "id": "slag:molten_iron"
        },
        "result": {
            "count": 1,
            "id": "oritech:nickel_gem"
        }
    }).id('cocc:table_casting/iron_dust');
    event.custom({
        "type": "slag:table_casting",
        "cast": "slag:cast/gems",
        "ingredient": {
            "amount": 72,
            "id": "slag:molten_iron"
        },
        "result": {
            "count": 1,
            "id": "oritech:platinum_gem"
        }
    }).id('cocc:table_casting/iron_dust');
    event.custom({
        "type": "slag:table_casting",
        "cast": "slag:cast/gems",
        "ingredient": {
            "amount": 72,
            "id": "slag:molten_iron"
        },
        "result": {
            "count": 1,
            "id": "oritech:uranium_gem"
        }
    }).id('cocc:table_casting/iron_dust');*/
})