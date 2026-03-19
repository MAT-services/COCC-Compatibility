StartupEvents.registry('item', event => {

  event.create('overcharged_steel')
    .displayName('Overcharged Steel')
    .maxStackSize(64)

  event.create('overcharged_motor')
    .displayName('Overcharged Motor')
    .maxStackSize(64)

  event.create('charged_crystal')
    .displayName('Charged Crystal')
    .maxStackSize(64)
  
  event.create('netherite_sheet')
    .displayName('Netherite Sheet')
    .maxStackSize(64)

  event.create('incomplete_circuit', 'create:sequenced_assembly')
    .displayName('Incomplete Circuit')
    .maxStackSize(64)

  event.create('uranium_tube')
    .displayName('Uranium Tube')
})

