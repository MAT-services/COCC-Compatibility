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
    });
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
    })
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
    })

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
      "id": "kubejs:steel_plate",
      "count": 1
    }
  })
  event.custom({
    "type": "slag:melting",
    "ingredient": {
        "tag": "kubejs:steel_plate" 
    },
    "ingredients": [],
    "result": [
        {
        "amount": 144,
        "id": "kubejs:molten_steel" 
        }
    ]
    });
})