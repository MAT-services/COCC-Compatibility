StartupEvents.registry('item', event => {

  event.create('overcharged_steel')
    .displayName('Overcharged Steel')
    .maxStackSize(64)

  event.create('overcharged_motor')
    .displayName('Overcharged Motor')
    .maxStackSize(64)

  event.create('uncharged_crystal')
    .displayName('Uncharged Crystal')
    .maxStackSize(1)
  
  event.create('netherite_sheet')
    .displayName('Netherite Sheet')
    .maxStackSize(64)

  event.create('incomplete_circuit', 'create:sequenced_assembly')
    .displayName('Incomplete Circuit')
    .maxStackSize(64)

  event.create('uranium_tube')
    .displayName('Uranium Tube')
    .maxStackSize(64)
  
  event.create('andesite_clip')
    .displayName('Andesite Clip')
    .maxStackSize(64)

  event.create('steel_plate')
    .displayName('Steel Plate')
    .maxStackSize(64)
    
  event.create('drill')
    .displayName('Drill')
    .maxStackSize(64)

  event.create('charging_crystal', 'create:sequenced_assembly')
    .displayName('Charging Crystal')
    .maxStackSize(1)

  event.create('plastic_ingot')
    .displayName('Plastic Ingot')
    .maxStackSize(64)

  event.create('gpu')
    .displayName('Graphic Card')
    .maxStackSize(64)

  event.create('cpu')
    .displayName('Processor')
    .maxStackSize(64)

  event.create('datacard')
    .displayName('Internal Storage Device')
    .maxStackSize(64)

  event.create('normal_display')
    .displayName('Basic Display')
    .maxStackSize(64)
  event.create('specialized_display')
    .displayName('Specialized Display')
    .maxStackSize(64)
  event.create('smart_display')
    .displayName('Smart Display')
    .maxStackSize(64)

  event.create('bnwscreen')
    .displayName('B&W Screen')
    .maxStackSize(64)

  event.create('rgbscreen')
    .displayName('Color Screen')
    .maxStackSize(64)
})

