ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    "slag:crucible_interface",
    "slag:melter",
    "slag:drain",
    "slag:basin",
    "slag:table",
    "slag:crucible",
    "oritech:transparent_item_pipe",
    "oritech:item_pipe",
    "oritech:item_pipe_duct_block",
    "oritech:energy_pipe",
    "oritech:energy_pipe_duct_block",
    "oritech:superconductor",
    "oritech:superconductor_duct_block",
    "oritech:fluid_pipe",
    "oritech:fluid_pipe_duct_block",
    "oritech:machine_frame_block",
    "oritech:machine_extender",
    "oritech:capacitor_addon_extender",
    "oritech:creative_storage_block",
    "oritech:large_storage_block",
    "oritech:small_storage_block",
    "oritech:creative_tank_block",
    "oritech:small_tank_block"
  ])

  event.add('drones:mining_tools', [
    'create:mechanical_drill',
    'createcasing:brass_mechanical_drill',
    'createcasing:copper_mechanical_drill',
    'createcasing:railway_mechanical_drill',
    'createcasing:shadow_steel_mechanical_drill',
    'createcasing:refined_radiance_mechanical_drill',
    'createcasing:industrial_iron_mechanical_drill',
    'createcasing:weathered_iron_mechanical_drill'
  ])
  event.add('drones:pickup_tools', [
    "create:deployer",
    'createcasing:brass_deployer',
    'createcasing:copper_deployer',
    'createcasing:railway_deployer',
    'createcasing:shadow_steel_deployer',
    'createcasing:refined_radiance_deployer',
    'createcasing:industrial_iron_deployer',
    'createcasing:weathered_iron_deployer',
    "minecraft:hopper"
  ])
  event.add('drones:melee_damage', [
    '#drones:mining_tools',
    '#confluence:death'
  ])
  event.add('drones:arrow_launcher', [
    "#cocc:dart_trap"
  ])
})

ServerEvents.tags('item', event => {

  event.add('create_new_age:nuclear/fuel', [
    "create_new_age:nuclear_fuel",
    "oritech:small_uranium_pellet",
    "oritech:uranium_pellet",
    "oritech:small_plutonium_pellet",
    "oritech:plutonium_pellet"
  ])
  event.add('create_new_age:nuclear/energy_39800', [
    "oritech:uranium_pellet"
  ])
  event.add('create_new_age:nuclear/energy_4422', [
    "oritech:small_uranium_pellet"
  ])
  event.add('create_new_age:nuclear/energy_78800', [
    "oritech:plutonium_pellet"
  ])
  event.add('create_new_age:nuclear/energy_8756', [
    "oritech:small_plutonium_pellet"
  ])

  event.add('c:potions/bottle', [
    "minecraft:glass_bottle"
  ])

  event.remove('c:wires/copper', 'unify:copper_wire')
  event.remove('c:wires', 'unify:copper_wire')

  event.add('plates', [
    "kubejs:rose_gold_sheet",
    "kubejs:lead_sheet",
    "oritech:plastic_sheet",
    "create_new_age:overcharged_iron_sheet",
    "create_new_age:overcharged_golden_sheet",
    "kubejs:netherite_sheet"
  ])
  event.add('c:plates/rose_gold', "kubejs:rose_gold_sheet")
  event.add('c:plates/lead', "kubejs:lead_sheet")
  event.add('c:plates/netherite', 'kubejs:netherite_sheet')
  event.add('c:plates/overcharged_iron', "create_new_age:overcharged_iron_sheet")
  event.add('c:plates/overcharged_gold', "create_new_age:overcharged_golden_sheet")
})

ServerEvents.tags('fluid', event => {
  event.add('c:molten_brass', 'slag:molten_brass')
  event.add('c:molten_zinc', 'slag:molten_zinc')
  event.add('c:molten_steel', 'kubejs:molten_steel')
  let hot_fluids = [
    "slag:molten_brass",
    'slag:molten_zinc',
    'kubejs:molten_steel',
    "kubejs:platinum"
  ];
  hot_fluids.forEach((hot_fluid) => {
    event.add('confluence:fishing_able', [
      hot_fluid
    ])
    event.add('slag:hot_fluids', [
      hot_fluid
    ])
    event.add('minecraft:lava', [
      hot_fluid
    ])
  })
})