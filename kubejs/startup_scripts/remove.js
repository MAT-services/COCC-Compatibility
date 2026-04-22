StartupEvents.modifyCreativeTab('oritech:machine_group', event => {
	event.remove('oritech:reactor_controller');
	event.remove('oritech:reactor_wall');
	event.remove('oritech:reactor_rod');
	event.remove('oritech:reactor_double_rod');
	event.remove('oritech:reactor_quad_rod');
	event.remove('oritech:reactor_vent');
	event.remove('oritech:reactor_reflector');
	event.remove('oritech:reactor_heat_pipe');
	event.remove('oritech:reactor_condenser');
	event.remove('oritech:reactor_fuel_port');
	event.remove('oritech:reactor_absorber_port');
	event.remove('oritech:reactor_energy_port');
	event.remove('oritech:reactor_redstone_port');
})

StartupEvents.modifyCreativeTab('createdeco:props_tab', event => {
	event.remove('createdeco:copper_coin');
})

StartupEvents.modifyCreativeTab('chipped:main', event => {
	event.remove('chipped:chisel'),
	event.remove('chipped:saw'),
	event.remove('chipped:multimeter'),
	event.remove('chipped:needles'),
	event.remove('chipped:alchemy_book'),
	event.remove('chipped:watering_can'),
	event.remove('chipped:tinkering_table'),
	event.remove('chipped:alchemy_bench'),
	event.remove('chipped:mason_table'),
	event.remove('chipped:loom_table'),
	event.remove('chipped:glassblower'),
	event.remove('chipped:botanist_workbench');
	event.remove('chipped:carpenters_table')
})

StartupEvents.modifyCreativeTab("belts:group", event => {
    event.remove('belts:belt')
    event.remove('belts:conveyor_support')
    event.remove('belts:chute')
});