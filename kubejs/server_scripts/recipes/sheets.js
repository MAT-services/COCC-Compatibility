ServerEvents.recipes(event => {
    event.custom({
        "type": "create_processing:magnetic_pressing",
        "ingredients": [
            {
            "tag": "c:plates/rose_gold"
            }
        ],
        "magnetic_condition": "magnetic",
        "results": [
            {
            "id": "slag:rose_gold_ingot"
            }
        ]
    }).id('cocc:magnetic_pressing/sheets/rose_gold');
    event.custom({
        "type": "create_processing:magnetic_pressing",
        "ingredients": [
            {
            "tag": "c:plates/lead"
            }
        ],
        "magnetic_condition": "magnetic",
        "results": [
            {
            "id": "confluence:lead_ingot"
            }
        ]
    }).id('cocc:magnetic_pressing/sheets/lead');
    event.custom({
        "type": "create_processing:magnetic_pressing",
        "ingredients": [
            {
            "tag": 'c:plates/plastic'
            }
        ],
        "magnetic_condition": "magnetic",
        "results": [
            {
            "id": "kubejs:plastic_ingot"
            }
        ]
    }).id('cocc:magnetic_pressing/sheets/plastic');
    event.custom({
        "type": "create_processing:magnetic_pressing",
        "ingredients": [
            {
            "tag": "c:plates/andesite_alloy"
            }
        ],
        "magnetic_condition": "magnetic",
        "results": [
            {
            "id": "create:andesite_alloy"
            }
        ]
    }).id('cocc:magnetic_pressing/sheets/andesite_alloy');
    event.custom({
        "type": "create_processing:magnetic_pressing",
        "ingredients": [
            {
            "tag": "c:plates/zinc"
            }
        ],
        "magnetic_condition": "magnetic",
        "results": [
            {
            "id": "create:zinc_ingot"
            }
        ]
    }).id('cocc:magnetic_pressing/sheets/zinc');
    event.custom({
        "type": "create_processing:magnetic_pressing",
        "ingredients": [
            {
            "tag": "c:plates/industrial_iron"
            }
        ],
        "magnetic_condition": "magnetic",
        "results": [
            {
            "id": "createdeco:industrial_iron_ingot"
            }
        ]
    }).id('cocc:magnetic_pressing/sheets/industrial_iron');
    event.custom({
        "type": "create_processing:magnetic_pressing",
        "ingredients": [
            {
            "tag": "c:plates/brass"
            }
        ],
        "magnetic_condition": "magnetic",
        "results": [
            {
            "id": "create:brass_ingot"
            }
        ]
    }).id('cocc:magnetic_pressing/sheets/');
    event.custom({
        "type": "create_processing:magnetic_pressing",
        "ingredients": [
            {
            "tag": "c:plates/overcharged_iron"
            }
        ],
        "magnetic_condition": "magnetic",
        "results": [
            {
            "id": "create_new_age:overcharged_iron"
            }
        ]
    }).id('cocc:magnetic_pressing/sheets/overcharged_iron');
    event.custom({
        "type": "create_processing:magnetic_pressing",
        "ingredients": [
            {
            "tag": "c:plates/overcharged_gold"
            }
        ],
        "magnetic_condition": "magnetic",
        "results": [
            {
            "id": "create_new_age:overcharged_gold"
            }
        ]
    }).id('cocc:magnetic_pressing/sheets/overcharged_gold');
    event.custom({
        "type": "create_processing:magnetic_pressing",
        "ingredients": [
            {
            "tag": "c:plates/netherite"
            }
        ],
        "magnetic_condition": "magnetic",
        "results": [
            {
            "id": "minecraft:netherite_ingot"
            }
        ]
    }).id('cocc:magnetic_pressing/sheets/netherite');
})