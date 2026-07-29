RechiseledEvents.chiseling(event => {
    event.add('factory_blocks', [
    `factory_blocks:factory`,
    `factory_blocks:rust`,
    `factory_blocks:vrust`,
    `factory_blocks:srust`,
    `factory_blocks:wireframe`,
    `factory_blocks:pwireframe`,
    `factory_blocks:hazard`,
    `factory_blocks:hazardo`,
    `factory_blocks:circuit`,
    `factory_blocks:metalbox`,
    `factory_blocks:gcircuit`,
    `factory_blocks:pgcircuit`,
    `factory_blocks:grinder`,
    `factory_blocks:old_vents`,
    `factory_blocks:rust_plates`,
    `factory_blocks:bcircuit`,
    `factory_blocks:ice`,
    `factory_blocks:mosaic`,
    `factory_blocks:bwireframe`,
    `factory_blocks:rusty_scaffold`,
    `factory_blocks:caution`,
    `factory_blocks:large_pipes`,
    `factory_blocks:small_pipes`,
    `factory_blocks:vent`,
    `factory_blocks:gvent`,
    `factory_blocks:insulation`,
    `factory_blocks:gears`,
    `factory_blocks:cables`,
    `factory_blocks:rust_bplates`,
    `factory_blocks:grate`,
    `factory_blocks:rgrate`,
    `factory_blocks:hex`,
    `factory_blocks:wgpanel`,
    `factory_blocks:wopanel`,
    `factory_blocks:sturdy`,
    `factory_blocks:megacell`,
    `factory_blocks:exhaust`,
    `factory_blocks:engineer`,
    `factory_blocks:scaffold`,
    `factory_blocks:piping`,
    `factory_blocks:large_plating`,
    `factory_blocks:fan_side`,
    `factory_blocks:fan`,
    `factory_blocks:fan_on`,
    `factory_blocks:fan_four`,
    `factory_blocks:fan_four_on`,
    `factory_blocks:fan_malfunction`,
    `factory_blocks:fan_malfunction_on`
  ]);
  let supportedWoodTypes = [
    `acacia`,
    `bamboo`,
    `birch`,
    `cherry`,
    `crimson`,
    `dark_oak`,
    `oak`,
    `jungle`,
    `mangrove`,
    `spruce`,
    `warped`
  ]
  supportedWoodTypes.forEach(wood => {
    event.add('accacia_frame', [
        `buildersdelight:${wood}_frame_1`,
        `buildersdelight:${wood}_frame_2`,
        `buildersdelight:${wood}_frame_3`,
        `buildersdelight:${wood}_frame_4`,
        `buildersdelight:${wood}_frame_5`,
        `buildersdelight:${wood}_frame_6`,
        `buildersdelight:${wood}_frame_7`,
        `buildersdelight:${wood}_frame_8`
    ]);
    event.add('accacia_glass', [
        `buildersdelight:${wood}_glass_1`,
        `buildersdelight:${wood}_glass_2`,
        `buildersdelight:${wood}_glass_3`,
        `buildersdelight:${wood}_glass_4`,
        `buildersdelight:${wood}_glass_5`,
        `buildersdelight:${wood}_glass_6`,
        `buildersdelight:${wood}_glass_7`,
        `buildersdelight:${wood}_glass_8`
    ]);
    event.add('accacia_glass_pane', [
        `buildersdelight:${wood}_glass_pane_1`,
        `buildersdelight:${wood}_glass_pane_2`,
        `buildersdelight:${wood}_glass_pane_3`,
        `buildersdelight:${wood}_glass_pane_4`,
        `buildersdelight:${wood}_glass_pane_5`,
        `buildersdelight:${wood}_glass_pane_6`,
        `buildersdelight:${wood}_glass_pane_7`,
        `buildersdelight:${wood}_glass_pane_8`
    ]);
    event.add('accacia_planks', [
        `minecraft:${wood}_planks`,
        `buildersdelight:${wood}_planks_1`,
        `buildersdelight:${wood}_planks_2`,
        `buildersdelight:${wood}_planks_3`,
        `buildersdelight:${wood}_planks_4`,
        `buildersdelight:${wood}_planks_5`,
        `buildersdelight:${wood}_planks_6`,
        `buildersdelight:${wood}_planks_7`
    ]);
    event.add('accacia_slab', [
        `minecraft:${wood}_slab`,
        `buildersdelight:${wood}_slab_1`,
        `buildersdelight:${wood}_slab_2`,
        `buildersdelight:${wood}_slab_3`,
        `buildersdelight:${wood}_slab_4`,
        `buildersdelight:${wood}_slab_5`,
        `buildersdelight:${wood}_slab_6`,
        `buildersdelight:${wood}_slab_7`
    ]);
    event.add('accacia_staris', [
        `minecraft:${wood}_stairs`,
        `buildersdelight:${wood}_stairs_1`,
        `buildersdelight:${wood}_stairs_2`,
        `buildersdelight:${wood}_stairs_3`,
        `buildersdelight:${wood}_stairs_4`,
        `buildersdelight:${wood}_stairs_5`,
        `buildersdelight:${wood}_stairs_6`,
        `buildersdelight:${wood}_stairs_7`
    ])
  }) // Do same for the other ones in buildersdelight\chisel\ . + APPERENTLY NOT WORKING !!!
})

/*let factoryBlocks = []

ServerEvents.tags('block', event => {
    factoryBlocks = event
        .get('factory_blocks:factory')
        .getObjectIds()

    console.info(
        `[DEBUG] Factory blocks: ${factoryBlocks}`
    )
})


RechiseledEvents.chiseling(event => {
    console.info(
        `[DEBUG] Rechiseled entries: ${factoryBlocks}`
    )

    event.add(
        'factory_blocks_factory',
        factoryBlocks
    )
})*///NOT WORKING !!!