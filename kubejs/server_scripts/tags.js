ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', 'kubejs:proxy_extractinator')
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
})

ServerEvents.tags('fluid', event => {
  event.add('confluence:fishing_able', 'kubejs:molten_brass')
  event.add('c:molten_brass', 'kubejs:molten_brass')
  event.add('slag:hot_fluids', 'kubejs:molten_brass')
  event.add('minecraft:lava', 'kubejs:molten_brass')
})