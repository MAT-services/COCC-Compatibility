// Visit the wiki for more info - https://kubejs.com/
console.info('Starting KubeJS startup... (Loaded startup example script)')

StartupEvents.modifyCreativeTab('create:base', event => {
	event.addAfter('create:brass_ingot', 'create:chromatic_compound')
    event.addAfter('create:brass_ingot', 'create:refined_radiance')
    event.addAfter('create:brass_ingot', 'create:shadow_steel')
    event.addAfter('create:copper_casing', 'create:refined_radiance_casing')
    event.addAfter('create:copper_casing', 'create:shadow_steel_casing')
})