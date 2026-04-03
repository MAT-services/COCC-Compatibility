StartupEvents.registry('block', event => {

  event.create('incomplete_stone')
    .displayName('Incomplete Stone Floor')
    .hardness(4)
    .resistance(8)
    .requiresTool(false)
    .mapColor('metal')
    event.create("custommachinery:electric_sander", "custommachinery:custom_machine")
})