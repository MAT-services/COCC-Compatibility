// DOCUMENTATION: https://gist.github.com/KCtops6/02cdaa0540b714ad324bce8a4a4c300a

ItemEvents.modifyTooltips(event => {
    event.modify("alexscaves:uranium_rod", text => {
        text.add(Text.gray("Cannot be used as Reactor Rods."))
    });
    event.modify("alexscaves:magnetic_activator", text => {
        text.add(Text.gray("Magnietized redstone source."))
    });
    event.modify("alexscaves:raygun", text => {
        text.add(Text.gray("Ranged Damage: 1.5"))
        text.add(Text.gray("Irradiate the target."))
    });
    event.modify("alexscaves:drain", text => {
        text.add(Text.gray("Empty Water from one place to another."))
    });
    event.modify("drones:wood_rotor", text => {
        text.add(Text.gray("Used to propel drones."))
    });
    event.modify("drones:iron_rotor", text => {
        text.add(Text.gray("Used to propel drones."))
    });
    event.modify("drones:ion_thruster", text => {
        text.add(Text.gray("Used to propel drones."))
    });
    event.modify("drones:drill", text => {
        text.add(Text.gray("Improves mining speed when a drone is equipped."))
    });
});
