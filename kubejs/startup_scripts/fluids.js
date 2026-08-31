StartupEvents.registry('fluid', event => {
    const moltenFluids = [
        "steel",
        "platinum",
        "thorium",
        "lead",
        "nickel",
        "tin",
        "silver",
        "tungsten",
        "crimtane",
        "demonite"
    ]
    moltenFluids.forEach(fluid => {
        event.create(`kubejs:molten_${fluid}`).displayName(`Molten ${fluid}`).stillTexture(`kubejs:fluid/molten_${fluid}_still`).flowingTexture(`kubejs:fluid/molten_${fluid}_flow`).slopeFindDistance(2).levelDecreasePerBlock(2).tickRate(30).type(t => t.lightLevel(10).temperature(1300).viscosity(6000).canDrown(false))
    });
});
