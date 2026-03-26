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
    "alexscaves:hologram_projector",
    "alexscaves:magnetic_light",
    "oritech:creative_storage_block",
    "oritech:large_storage_block",
    "oritech:small_storage_block",
    "oritech:creative_tank_block",
    "oritech:small_tank_block",
    "alexscaves:magnetic_activator"
  ])

  event.add('alexscaves:ferromagnetic_blocks', [
    "confluence:iron_bricks_slab",
    "confluence:iron_bricks_stairs",
    "confluence:iron_bricks",
    "confluence:chiseled_iron_bricks",
    "confluence:iron_crate",
    "create:industrial_iron_block",
    "create:weathered_iron_block",
    "create:industrial_iron_window",
    "create:weathered_iron_window"
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
    'createcasing:brass_ deployer',
    'createcasing:copper_ deployer',
    'createcasing:railway_ deployer',
    'createcasing:shadow_steel_ deployer',
    'createcasing:refined_radiance_ deployer',
    'createcasing:industrial_iron_ deployer',
    'createcasing:weathered_iron_ deployer',
    "minecraft:hopper"
  ])
  event.add('drones:melee_damage', [
    {
      "id": "#drones:mining_tools",
      "required": false
    }
  ])
  event.add('drones:arrow_launcher', [
    // Add the confluence:otherworld traps here.
  ])
})

ServerEvents.tags('item', event => {

  event.add('alexscaves:nuclear_furnace_rods', [
    "create_new_age:nuclear_fuel",
    "oritech:small_uranium_pellet",
    "oritech:uranium_pellet",
    "oritech:small_plutonium_pellet",
    "oritech:plutonium_pellet",
    "kubejs:uranium_tube"
  ]);

  event.add('create_new_age:nuclear/fuel', [
    "create_new_age:nuclear_fuel",
    "oritech:small_uranium_pellet",
    "oritech:uranium_pellet",
    "oritech:small_plutonium_pellet",
    "oritech:plutonium_pellet",
    "kubejs:uranium_tube"
  ])

  event.add('create_new_age:nuclear/energy_28800', [
    "create_new_age:nuclear_fuel",
    "kubejs:uranium_tube"
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
})

ServerEvents.tags('fluid', event => {
  event.add('confluence:fishing_able', [
    'slag:molten_brass',
    'slag:molten_zinc',
    'kubejs:molten_steel'
  ])
  event.add('c:molten_brass', 'slag:molten_brass')
  event.add('c:molten_zinc', 'slag:molten_zinc')
  event.add('c:molten_steel', 'kubejs:molten_steel')
  event.add('slag:hot_fluids', [
    'slag:molten_brass',
    'slag:molten_zinc',
    'kubejs:molten_steel'
  ])
  event.add('minecraft:lava', [
    'slag:molten_brass',
    'slag:molten_zinc',
    'kubejs:molten_steel'
  ])
})