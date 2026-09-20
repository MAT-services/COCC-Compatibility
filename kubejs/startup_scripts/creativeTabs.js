// Check https://kubejs.com/wiki/tutorials/creative-tabs for general informations about Creative tabs.
// Check https://github.com/Roboter007/ModernTabs for more informations about Creative tabs sections.


//// CREATIVE TABS REGISTERING
StartupEvents.registry('creative_mode_tab', event => {
	event.create('dirt').icon(() => 'minecraft:dirt').content(() => [
		'minecraft:dirt',
		'minecraft:grass_block',
		'minecraft:podzol',
		'minecraft:coarse_dirt',
		'minecraft:rooted_dirt'
	])
})


//// CREATIVE TABS PLACING

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
    event.addAfter('belts:belt')
    event.addAfter('belts:conveyor_support')
    event.addAfter('belts:chute')
})

let top = [
    "custommachinery:machine_creator",
	"custommachinery:box_creator",
	"custommachinery:structure_creator",
	"custommachinery:configuration_card",
	"custommachinery:electric_sander"
]
top.forEach((op) => {
    StartupEvents.modifyCreativeTab('minecraft:op_blocks', event => {
        event.addAfter('computercraft:computer_command', op)
        event.addAfter('computercraft:computer_command', op)
        event.addAfter('computercraft:computer_command', op)
        event.addAfter('computercraft:computer_command', op)
    })
    StartupEvents.modifyCreativeTab("custommachinery:custom_machine", event => {
        event.remove(op)
    });
})

let vaults = [
    "create_bs:wooden_item_vault",
    "create_bs:copper_item_vault",
	"create_bs:iron_item_vault",
	"create_bs:emerald_item_vault",
	"create_bs:gold_item_vault",
    "create_bs:crystal_item_vault",
    "create_bs:diamond_item_vault",
    "create_bs:obsidian_item_vault",
    "create_bs:netherite_item_vault"
]
vaults.forEach((vault) => {
    StartupEvents.modifyCreativeTab('create:base', event => {
        event.addAfter('create:creative_crate', vault)
    })
})


//// CREATIVE TABS SECTIONING (Expermiental !)

/*
// just an example color
const exampleColor = new ModernColor("#36454F");

// use your already registered creative tab (in this example: EXAMPLE_TAB)
ModernTabs.builder("kubejs:tab")
    // makes it possible for the defined creative tab to use custom sections
    .withEnabledSections(true)
    // this method does the same as the withCustomBackgroundColor method, but it also changes the tab icon background color
	.withCustomColor(exampleColor);

// this defines which items are included in which section
// for creating a section you need to define a json file in your assets folder (scroll down a little, if you want to know how create a section)
SectionedItems.addItem([Item.of("kubejs:adamantite_melter"), Item.of("kubejs:titanium_melter")], ResourceLocation.parse("kubejs:default_section"));*/