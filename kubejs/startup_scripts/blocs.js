StartupEvents.registry('block', event => {

  event.create('incomplete_stone')
    .displayName('Incomplete Stone Floor')
    .hardness(4)
    .resistance(8)
    .requiresTool(false)
    .mapColor('metal')
  event.create("kuebjs:electric_sander", "custommachinery:custom_machine").machine("custommachinery:electric_sander")
  event.create("kubejs:adamantite_melter", "custommachinery:custom_machine").machine("custommachinery:adamantite_melter")
  event.create("kubejs:titanium_melter", "custommachinery:custom_machine").machine("custommachinery:titanium_melter")
})