ServerEvents.recipes(event => {
	// Oritech nuclear reactor
    event.remove({output: "oritech:reactor_controller"});
	event.remove({output: 'oritech:reactor_wall'});
	event.remove({output: 'oritech:reactor_rod'});
	event.remove({output: 'oritech:reactor_double_rod'});
	event.remove({output: 'oritech:reactor_quad_rod'});
	event.remove({output: 'oritech:reactor_vent'});
	event.remove({output: 'oritech:reactor_reflector'});
	event.remove({output: 'oritech:reactor_heat_pipe'});
	event.remove({output: 'oritech:reactor_condenser'});
	event.remove({output: 'oritech:reactor_fuel_port'});
	event.remove({output: 'oritech:reactor_absorber_port'});
	event.remove({output: 'oritech:reactor_energy_port'});
	event.remove({output: 'oritech:reactor_redstone_port'});
	// Coins
	event.remove({output: "createdeco:copper_coin"})
	event.remove({input: "createdeco:copper_coin"})
})