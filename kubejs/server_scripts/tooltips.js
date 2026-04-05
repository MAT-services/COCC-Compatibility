// DOCUMENTATION: https://gist.github.com/KCtops6/02cdaa0540b714ad324bce8a4a4c300a

ItemEvents.modifyTooltips(event => {
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
