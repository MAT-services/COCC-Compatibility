// Visit the wiki for more info - https://kubejs.com/
console.info('Starting KubeJS startup... (Loaded startup example script)')

StartupEvents.modifyCreativeTab('create:base', event => {
	event.addAfter('create:brass_ingot', 'create:chromatic_compound')
    event.addAfter('create:brass_ingot', 'create:refined_radiance')
    event.addAfter('create:brass_ingot', 'create:shadow_steel')
    event.addAfter('create:copper_casing', 'create:refined_radiance_casing')
    event.addAfter('create:copper_casing', 'create:shadow_steel_casing')
})

StartupEvents.modifyCreativeTab('oritech:machine_group', event => {
	event.addAfter('oritech:transparent_item_pipe', 'belts:belt')
    event.addAfter('belts:belt', 'belts:conveyor_support')
    event.addAfter('belts:conveyor_support', 'belts:chute')
})
StartupEvents.modifyCreativeTab('oritech:machine_group', event => {
    event.removeDisplay('oritech:transparent_item_pipe')
	event.removeDisplay('belts:belt')
    event.removeDisplay('belts:conveyor_support')
})

Platform.mods.kubejs.name = 'Confluence Of Creation'