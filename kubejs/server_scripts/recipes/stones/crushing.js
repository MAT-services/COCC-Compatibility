ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": 'create:stone_types/scorchia'
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "chance": 0.3,
                "id": "create:crushed_raw_lead"
            },
            {
                "chance": 0.3,
                "id": "confluence:lead_nugget"
            }
        ]
    }).id('kubejs:crushing/scorchia_recycling');
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": 'create:stone_types/scoria'
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "chance": 0.3,
                "id": "confluence:crushed_raw_tungsten"
            },
            {
                "chance": 0.3,
                "id": "confluence:tungsten_nugget"
            }
        ]
    }).id('kubejs:crushing/scoria_recycling');
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": 'create:stone_types/limestone'
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "chance": 0.3,
                "id": "create:crushed_raw_silver"
            },
            {
                "chance": 0.3,
                "id": "confluence:silver_nugget"
            }
        ]
    }).id('kubejs:crushing/limestone_recycling');
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": 'dndecor:stone_types/dolomite'
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "chance": 0.3,
                "id": "create:crushed_raw_nickel"
            },
            {
                "chance": 0.3,
                "id": "oritech:nickel_nugget"
            }
        ]
    }).id('kubejs:crushing/dolomite_recycling');
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": 'dndecor:stone_types/gabbro'
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "chance": 0.3,
                "id": "create:crushed_raw_tin"
            },
            {
                "chance": 0.3,
                "id": "confluence:tin_nugget"
            }
        ]
    }).id('kubejs:crushing/scorchia_recycling');
})

/*/
create:scorchia = empty // confluence:raw_lead
create:veridium = Copper
minecraft:tuff = any
create:scoria = empty // confluence:raw_tungsten
create:ochrum = gold
create:limestone = empty // confluence:raw_silver
create:crimsite = iron 
create:asurine = zinc  
minecraft:dripstone_block = clay 
minecraft:calcite = bonepowder 
minecraft:diorite = quartz 
minecraft:andesite = cobblestone 
dndecor:dolomite = empty // oritech:raw_nickel
dndecor:gabbro = empty // confluence:raw_tin
/*/
