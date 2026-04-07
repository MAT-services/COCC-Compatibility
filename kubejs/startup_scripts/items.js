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
  
  event.create('andesite_clip')
    .displayName('Andesite Clip')
    .maxStackSize(64)

  event.create('steel_plate') // To replace with SnE runtime
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
    .displayName('Graphic Unit')
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
  event.create('holophisic_display')
    .displayName("HoloPhisic Display")

  event.create('bnwscreen')
    .displayName('B&W Screen')
    .maxStackSize(64)

  event.create('rgbscreen')
    .displayName('RGB Screen')
    .maxStackSize(64)

  event.create('incomplete_chip', 'create:sequenced_assembly')
    .displayName('Incomplete Unit')
    .maxStackSize(1)

  event.create('brass_propeller')
    .displayName('Brass Propeller')
    .maxStackSize(64)

  event.create('iron_cog')
    .displayName('Iron Cog')
    .maxStackSize(64)

  event.create('copper_cog')
    .displayName('Copper Cog')
    .maxStackSize(64)  

  event.create('lead_cog')
    .displayName('Lead Cog')
    .maxStackSize(64)    
  
  event.create('rubber')
    .displayName('Rubber Paste')
    .maxStackSize(64)

  event.create('cable')
    .displayName('Empty Cable')
    .maxStackSize(64)

  event.create('rose_gold_sheet')
    .displayName('Rose Gold Sheet')
    .maxStackSize(64)

  event.create('sculkcite_gem')
    .displayName('Sculkcite Gem')
    .maxStackSize(64)
  
  event.create('sculkcite_shard')
    .displayName('Sculkcite Shard')
    .maxStackSize(64)
  
  event.create('incomplete_component', 'create:sequenced_assembly')
    .displayName('Incomplete Component')
    .maxStackSize(64)
})

