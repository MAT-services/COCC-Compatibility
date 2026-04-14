ServerEvents.recipes(event => {
    let molds = [
        "terracotta_mold",
        'sandstone_mold'
    ]
    let casts = [
        { type: "ingots", item: "ingots", i: 0 },
        { type: "nuggets", item: "nuggets", i: 0 },
        //{ type: "plates", item: "plate", i: 1 }
    ]

    molds.forEach(mold => {
        casts.forEach((cast, i) => {
            //if (i===0) {
                event.custom({
                    type: "create:deploying",
                    ingredients: [
                        { item: `slag:${mold}` },
                        { tag: `slag:cast/${cast.item}` }
                    ],
                    results: [{
                        components: {
                            "slag:cast_type": `slag:cast/${cast.type}`
                        },
                        id: `slag:${mold}`
                    }],
                    keep_held_item: true
                }).id(`cocc:deploying/${mold}/${cast.type}`);
            /*} else {
                //event.recipes.create.deploying('slag:terracotta_mold[slag:cast_type="slag:cast/plates"]', [`slag:${mold}`, Item.of('slag:dynamic_part', '{slag:part_type:"slag:plate"}')])
                event.custom({
                    type: "create:deploying",
                    ingredients: [
                        { item: `slag:${mold}` },
                        { 
                            "components": {
                                "slag:part_type": "slag:plate"
                            },
                            "id": `slag:dynamic_part` 
                        }
                    ],
                    results: [{
                        components: {
                            "slag:cast_type": `slag:cast/${cast.item}`
                        },
                        id: `slag:${mold}`
                    }],
                    keep_held_item: true
                }).id(`cocc:deploying/${mold}/${cast.type}`);
            }*/
        })
    })
});
