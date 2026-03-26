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