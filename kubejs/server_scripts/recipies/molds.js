ServerEvents.recipes(event => {
    let molds = [
        "terracotta_mold",
        'sandstone_mold'
    ]
    let casts = [
        { type: "ingots", item: "ingots", i: 0 },
        { type: "nuggets", item: "nuggets", i: 0 },
        { type: "plates", item: "plate", i: 1 },
        { type: "boots", item: "boots", i: 1},
        { type: "axe_heads", item: "axe_head", i: 1},
        { type: "hoe_heads", item: "hoe_head", i: 1},
        { type: "sword_blades", item: "sword_blade", i: 1},
        { type: "guards", item: "guard", i: 1},
        { type: "helmets", item: "helmet", i: 1},
        { type: "chestplates", item: "chestplate", i: 1},
        { type: "pickaxe_heads", item: "pickaxe_head", i: 1},
        { type: "leggings", item: "leggings", i: 1},
        { type: "shovel_heads", item: "shovel_head", i: 1},
        { type: "dusts", item: "dusts", i: 0}
    ]

    molds.forEach(mold => {
        casts.forEach((cast) => {
            if (cast.i===0) {
                event.custom({
                    type: "create:deploying",
                    ingredients: [
                        { item: `slag:${mold}` },
                        { tag: `c:${cast.item}` }
                    ],
                    results: [{
                        components: {
                            "slag:cast_type": `slag:cast/${cast.type}`
                        },
                        id: `slag:${mold}`
                    }],
                    keep_held_item: true
                }).id(`cocc:deploying/${mold}/${cast.type}`);
            } else {
                event.recipes.create.deploying(`slag:${mold}[slag:cast_type="slag:cast/${cast.type}"]`, [`slag:${mold}`, `slag:dynamic_part[slag:part_type="slag:${cast.item}"]`,]).keepHeldItem().id(`cocc:deploying/${mold}/${cast.type}`);
            }
        })
    })
});
