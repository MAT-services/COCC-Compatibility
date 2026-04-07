ServerEvents.recipes(event => {
  event.remove({ output: 'create_new_age:basic_motor' })
  event.shaped('create_new_age:basic_motor', [
    '#R#',
    'ABC',
    '#R#'
  ], {
    A: 'oritech:motor',
    B: 'create:industrial_iron_block',
    C: 'create:shaft',
    '#': '#cocc:all_iron_nuggets_similar',
    R: '#c:nuggets/rose_gold'
  }).id('cocc:shaped/basic_motor')

  event.remove({ output: 'create_new_age:advanced_motor' })
  event.shaped('create_new_age:advanced_motor', [
    '#R#',
    'ABC',
    '#R#'
  ], {
    A: 'kubejs:overcharged_motor',
    B: 'create:rotation_speed_controller',
    C: 'create:shaft',
    '#': 'create:brass_nugget',
    R: '#c:nuggets/rose_gold'
  }).id('cocc:shaped/advanced_motor')

  event.shaped('kubejs:overcharged_motor', [
		" A ",
		"#B#",
		"#B#"
  ], {
    A: 'oritech:nickel_ingot',
    '#': 'kubejs:overcharged_steel',
    B: 'oritech:magnetic_coil'
  }).id('cocc:shaped/overcharged_motor')
  event.custom({
    "type": "oritech:assembler",
    "ingredients": [
      {
        "tag": "c:ingots/nickel"
      },
      {
        "item": "kubejs:overcharged_steel"
      },
      {
        "item": "oritech:magnetic_coil"
      },
      {
        "item": "oritech:magnetic_coil"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "kubejs:overcharged_motor"
      }
    ],
    "time": 96
  }).id('cocc:assembler/overcharged_motor');

  event.recipes.create.mechanical_crafting('confluence:hellforge', [
    'NNNL',
    'NFNC',
    'BBBB'
  ], {
    N: 'minecraft:nether_brick',
    L: 'minecraft:lava_bucket',
    F: 'slag:brick_forge',
    C: 'create:blaze_cake',
    B: 'create:blaze_cake_base'
  }).id('cocc:mechanical_crafting/hellforge')

  event.remove({ output: 'oritech:overcharged_crystal' })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "kubejs:uncharged_crystal"
    },
    "transitional_item": {
      "id": "kubejs:charging_crystal"
    },
    "sequence": [
      {
        "type": "create_new_age:energising",
        "energy_needed": 1000,
        "ingredients": [
          {
            "item": "kubejs:charging_crystal"
          }
        ],
        "results": [
          {
            "id": "kubejs:charging_crystal"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:charging_crystal"
          },
          {
            "fluid": "slag:molten_gold",
            "type": "neoforge:single",
            "amount": 250
          }
        ],
        "results": [
          {
            "id": "kubejs:charging_crystal"
          }
        ]
      },
      {
        "type": "create_new_age:energising",
        "energy_needed": 2000,
        "ingredients": [
          {
            "tag": "kubejs:charging_crystal"
          }
        ],
        "results": [
          {
            "id": "kubejs:charging_crystal"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:charging_crystal"
          },
          {
            "fluid": "slag:molten_iron",
            "type": "neoforge:single",
            "amount": 250
          }
        ],
        "results": [
          {
            "id": "kubejs:charging_crystal"
          }
        ]
      },
      {
        "type": "create_new_age:energising",
        "energy_needed": 3000,
        "ingredients": [
          {
            "tag": "kubejs:charging_crystal"
          }
        ],
        "results": [
          {
            "id": "kubejs:charging_crystal"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "oritech:overcharged_crystal",
        "chance": 0.98
      },
      {
        "id": "kubejs:uncharged_crystal",
        "chance": 0.02
      }
    ],
    "loops": 2
  }).id('cocc:sequenced_assembly/overcharged_crystal');


  event.custom({
    "type": "create:haunting",
    "ingredients": [
      {
        "item": "minecraft:granite"
      }
    ],
    "results": [
      {
        "id": "confluence:granite"
      }
    ]
  }).id('cocc:haunting/confluence_granite');
  
  event.remove({ id: 'oritech:atomicforge/reinfdeepslate' });
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "minecraft:deepslate"
    },
    "transitional_item": {
      "id": "kubejs:incomplete_stone"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_stone"
          },
          {
            "item": "kubejs:sculkcite_gem"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_stone"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_stone"
          },
          {
            "type": "neoforge:single",
            "fluid": "slag:molten_obsidian",
            "amount": 250
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_stone"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_stone"
          },
          {
            "item": "minecraft:sculk_vein"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_stone"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_stone"
          }
        ],
        "processingTime": 200,
        "results": [
          {
            "id": "kubejs:incomplete_stone"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "minecraft:reinforced_deepslate",
        "chance": 0.9
      },
      {
        "id": "minecraft:deepslate"
      },
      {
        "id": "minecraft:sculk"
      }
    ],
    "loops": 10
  }).id('shadoukube:reinforced_deepslate'); // Modify it to use deep alloys.
  event.remove({ id: 'oritech:particle/heavy_core' }); // Create that use deep alloys.

  event.remove({ output: 'oritech:processing_unit' })
  event.remove({ id: "oritech:assembler/processingunit"})
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create_connected:control_chip"
    },
    "transitional_item": {
      "id": "kubejs:incomplete_chip"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_chip"
          },
          {
            "item": "oritech:electrum_ingot"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_chip"
          },
          {
            "item": "oritech:carbon_fibre_strands"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_chip"
          },
          {
            "tag": "c:plates/plastic"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_chip"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_chip"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_chip"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "oritech:processing_unit"
      }
    ],
    "loops": 1
  }).id('cocc:sequenced_assembly/processing_unit');
  event.custom({
    "type": "oritech:assembler",
    "ingredients": [
      {
        "tag": "c:plates/plastic"
      },
      {
        "tag": "c:carbon_fibre"
      },
      {
        "tag": "c:ingots/electrum"
      },
      {
        "item": "create_connected:control_chip"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "oritech:processing_unit"
      }
    ],
    "time": 96
  }).id('cocc:assembler/processing_unit');

  event.remove({ output: 'toms_storage:inventory_connector'});
  event.custom({
	"type": "minecraft:crafting_shapeless",
	"ingredients": [
		{
			"item": "create_connected:inventory_bridge"
		},
		{
			"item": "create_connected:inventory_bridge"
		},
		{
			"item": "create_connected:inventory_bridge"
		},
		{
			"item": "create_connected:inventory_bridge"
		}
	],
	"result": {
		"id": "toms_storage:inventory_connector"
	}
});
  event.remove({output : 'toms_storage:storage_terminal'});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "##",
      "EG",
      "##"
    ],
    "key": {
      "#": {
        "item": "create:brass_ingot"
      },
      "E": {
        "item": "create_connected:control_chip"
      },
      "G": {
        "item": "kubejs:normal_display"
      }
    },
    "result": {
      "id": "toms_storage:storage_terminal"
    }
  }).id('cocc:crafting_shaped/storage_terminal');
  event.remove({output : 'toms_storage:crafting_terminal'});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "toms_storage:storage_terminal"
      },
      {
        "item": "minecraft:crafter"
      },
      {
        "tag": "cocc:color_displays"
      }
    ],
    "result": {
      "id": "toms_storage:crafting_terminal"
    }
  });
  event.remove({output: 'toms_storage:trim'});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "create:andesite_casing"
      },
      {
        "item": "create:item_vault"
      }
    ],
    "result": {
      "id": "toms_storage:trim"
    }
  }).id('cocc:crafting_shapeless/trim');
  event.remove({output: 'toms_storage:inventory_cable'});
  event.custom({
    "type": "create:deploying",
    "ingredients": [
      {
        "item": "kubejs:cable"
      },
      {
        "item": "create:crafter_slot_cover"
      }
    ],
    "results": [
      {
        "id": "toms_storage:inventory_cable"
      }
    ]
  }).id('cocc:deploying/inventory_cable'); 
  event.remove({output: 'toms_storage:basic_inventory_hopper'});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "toms_storage:inventory_cable"
      },
      {
        "item": "minecraft:hopper"
      }
    ],
    "result": {
      "id": "toms_storage:basic_inventory_hopper"
    }
  }).id('cocc:crafting_shapeless/basic_inventory_hopper');
  event.remove({output: 'toms_storage:inventory_cable_connector'});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " IB",
      "CVP",
      " IB"
    ],
    "key": {
      "I": {
        "tag": "cocc:all_iron_nuggets_similar"
      },
      "B": {
        "item": "create:brass_ingot"
      },
      "C": {
        "item": "toms_storage:inventory_cable"
      },
      "V": {
        "item": "create:item_vault"
      },
      "P": {
        "item": "minecraft:ender_pearl"
      }
    },
    "result": {
      "id": "toms_storage:inventory_cable_connector"
    }
  }).id('cocc:crafting_shaped/inventory_cable_connector');
  event.remove({output: 'toms_storage:inventory_proxy'});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "ingredients": [
      {
        "item": "create:brass_casing"
      }
    ],
    "pattern": [
      "B",
      "C",
      "S"
    ],
    "key": {
      "B": {
        "item": "create:brass_casing"
      },
      "S": {
        "item": "create_connected:item_silo"
      },
      "C": {
        "item": "create:chute"
      }
    },
    "result": {
      "id": "toms_storage:inventory_proxy"
    }
  }).id('cocc:crafting_shaped/inventory_proxy');
  event.remove({output: 'toms_storage:inventory_interface'});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "#C#",
      "#E#",
      "#V#"
    ],
    "key": {
      "#": {
        "item": "create:brass_ingot"
      },
      "C": {
        "item": "create_connected:control_chip"
      },
      "E": {
        "item": "minecraft:ender_pearl"
      },
      "V": {
        "item": "create:item_vault"
      }
    },
    "result": {
      "id": "toms_storage:inventory_interface"
    }
  }).id('cocc:crafting_shaped/inventory_interface');
  event.remove({output: 'toms_storage:wireless_terminal'});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create:golden_sheet"
    },
    "transitional_item": {
      "id": "create_connected:incomplete_control_chip"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "create_connected:control_chip"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "tag": "minecraft:wooden_pressure_plates"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "kubejs:smart_display"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "tag": "cocc:all_iron_nuggets_similar"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "toms_storage:wireless_terminal",
        "chance": 1
      }
    ],
    "loops": 1
  }).id('cocc:sequenced_assembly/wireless_terminal');
  event.remove({output: 'toms_storage:adv_wireless_terminal'});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create_new_age:overcharged_golden_sheet"
    },
    "transitional_item": {
      "id": "create_connected:incomplete_control_chip"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "create_connected:control_chip"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "kubejs:netherite_sheet"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "kubejs:smart_display"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "tag": "cocc:all_iron_nuggets_similar"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "toms_storage:adv_wireless_terminal",
        "chance": 1
      }
    ],
    "loops": 1
  }).id('cocc:sequenced_assembly/adv_wireless_terminal');
  
  event.custom({
    "type": "create:pressing",
    "ingredients": [
      {
        "item": "minecraft:netherite_ingot"
      }
    ],
    "results": [
      {
        "id": "kubejs:netherite_sheet"
      }
    ]
  }).id('cocc:pressing/netherite_sheet');

  event.remove({output: "oritech:item_pipe"});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      " N ",
      "###"
    ],
    "key": {
      "#": {
        "tag": "minecraft:planks"
      },
      "N": {
        "item": "belts:belt"
      }
    },
    "result": {
      "id": "oritech:item_pipe"
    }
  }).id('cocc:crafting_shaped/item_pipe');

  event.custom({
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:cobblestone"
      },
      {
        "type": "neoforge:single",
        "fluid": "slag:molten_quartz",
        "amount": 100
      }
    ],
    "results": [
      {
        "id": "minecraft:dripstone_block"
      }
    ]
  }).id('cocc:filling/dripstone_block');
  event.custom({
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:dripstone_block"
      },
      {
        "type": "neoforge:single",
        "fluid": "slag:molten_obsidian",
        "amount": 100
      }
    ],
    "results": [
      {
        "id": "minecraft:tuff"
      }
    ]
  }).id('cocc:filling/tuff');

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "#P#",
      "#G#"
    ],
    "key": {
      "#": {
        "item": "create:andesite_alloy"
      },
      "P": {
        "item": "oritech:processing_unit"
      },
      "G": {
        "item": "kubejs:normal_display"
      }
    },
    "result": {
      "id": "computercraft:computer_normal"
    }
  }).id('cocc:crafting_shaped/computercraft_computer_normal');

  event.remove({output: "computercraft:computer_advanced"});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "#P#",
      "#G#"
    ],
    "key": {
      "#": {
        "item": "create:brass_ingot"
      },
      "P": {
        "item": "oritech:advanced_computing_engine"
      },
      "G": {
        "item": "kubejs:smart_display"
      }
    },
    "result": {
      "id": "computercraft:computer_advanced"
    }
  }).id('cocc:crafting_shaped/computercraft_computer_advanced');

  event.remove({output: 'computercraft:pocket_computer_normal'});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "tag": "c:plates/plastic"
    },
    "transitional_item": {
      "id": "create_connected:incomplete_control_chip"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "oritech:processing_unit"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "create:andesite_alloy"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "kubejs:normal_display"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "tag": "cocc:all_iron_nuggets_similar"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "computercraft:pocket_computer_normal",
        "chance": 1
      }
    ],
    "loops": 1
  }).id('cocc:sequenced_assembly/pocket_computer_normal');

  event.remove({output: 'computercraft:pocket_computer_advanced'});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "tag": "c:plates/plastic"
    },
    "transitional_item": {
      "id": "create_connected:incomplete_control_chip"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "oritech:advanced_computing_engine"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "create:brass_sheet"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "kubejs:smart_display"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "tag": "cocc:all_iron_nuggets_similar"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "computercraft:pocket_computer_advanced",
        "chance": 1
      }
    ],
    "loops": 1
  }).id('cocc:sequenced_assembly/pocket_computer_advanced');

  event.remove({output: "computercraft:speaker"});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "minecraft:note_block"
      },
      {
        "item": "create:andesite_casing"
      }
    ],
    "result": {
      "id": "computercraft:speaker"
    }
  }).id('cocc:crafting_shapeless/speaker');

  event.remove({output: "computercraft:cable"});
  event.custom({
    "type": "create:filling",
    "ingredients": [
      {
        "item": "kubejs:cable"
      },
      {
        "type": "neoforge:single",
        "fluid": "slag:molten_redstone",
        "amount": 10
      }
    ],
    "results": [
      {
        "id": "computercraft:cable"
      }
    ]
  }).id("cocc:shaped/computercraft_cable");

  event.remove({output: "computercraft:wired_modem_full"});
  event.remove({output: "computercraft:wired_modem"});
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "create:andesite_casing"
      },
      {
        "item": "create_new_age:copper_wire"
      }
    ],
    "results": [
      {
        "id": "computercraft:wired_modem_full"
      }
    ]
  }).id('cocc:crafting_shapeless/wired_modem');
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "computercraft:wired_modem_full"
      }
    ],
    "result": {
      "id": "computercraft:wired_modem"
    }
  }).id('cocc:crafting_shapeless/wired_modem_alt');
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "computercraft:wired_modem"
      }
    ],
    "result": {
      "id": "computercraft:wired_modem_full"
    }
  }).id('cocc:crafting_shapeless/wired_modem_full_alt');

  event.remove({output: "computercraft:redstone_relay"});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "minecraft:redstone"
      },
      {
        "item": "oritech:processing_unit"
      },
      {
        "item": "create:andesite_casing"
      }
    ],
    "result": {
      "id": "computercraft:redstone_relay"
    }
  }).id('cocc:crafting_shapeless/redstone_relay');

  event.remove({output: "computercraft:monitor_normal"});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "create:andesite_casing"
      },
      {
        "item": "create_connected:control_chip"
      },
      {
        "item": "kubejs:normal_display"
      }
    ],
    "result": {
      "id": "computercraft:monitor_normal"
    }
  }).id('cocc:crafting_shapeless/monitor_normal');

  event.remove({output: "computercraft:monitor_advanced"});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "create:brass_casing"
      },
      {
        "item": "oritech:processing_unit"
      },
      {
        "item": "kubejs:smart_display"
      }
    ],
    "result": {
      "id": "computercraft:monitor_advanced"
    }
  }).id('cocc:crafting_shapeless/monitor_advanced');

  event.remove({output: "computercraft:printer"});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "create:andesite_casing"
      },
      {
        "item": "create_connected:control_chip"
      },
      {
        "item": "minecraft:ink_sac"
      }
    ],
    "result": {
      "id": "computercraft:printer"
    }
  }).id('cocc:crafting_shapeless/printer');

  event.remove({output: "computercraft:disk_drive"});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "create:andesite_casing"
      },
      {
        "item": "create_connected:control_chip"
      },
      {
        "tag": "c:plates/plastic"
      }
    ],
    "result": {
      "id": "computercraft:disk_drive"
    }
  }).id('cocc:crafting_shapeless/disk_drive');

  // REPLACE OUTPUT HERE
  event.remove({output: "computercraft:disk"});
  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:black_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 1118481, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/black');;
  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:red_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 13388876, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/red');;

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:green_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 5744206, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/green');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:brown_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 8349260, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/brown');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:blue_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 3368652, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/blue');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:purple_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 11691749, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/purple');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:cyan_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 5020082, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/cyan');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:light_gray_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 5020082, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/light_gray');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:gray_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 5000268, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/gray');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:pink_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 15905484, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/pink');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:lime_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 8375321, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/lime');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:yellow_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 14605932, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/yellow');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:light_blue_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 10072818, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/light_blue');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:magenta_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 15040472, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/magenta');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:orange_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 15905331, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/orange');

  event.custom({
    "type": "computercraft:impostor_shapeless",
    "category": "redstone",
    "group": "computercraft:disk",
    "ingredients": [{"tag": "c:dusts/redstone"}, {"tag": "c:plates/plastic"}, {"item": "minecraft:white_dye"}],
    "result": {
      "components": {"minecraft:dyed_color": {"rgb": 15790320, "show_in_tooltip": false}},
      "count": 1,
      "id": "computercraft:disk"
    }
  }).id('cocc:impostor_shapeless/disk/white');

  
  event.remove({output: "computercraft:wireless_modem_normal"});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create:andesite_casing"
    },
    "transitional_item": {
      "id": "create_connected:incomplete_control_chip"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "minecraft:ender_pearl"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "type": "neoforge:single",
            "fluid": "slag:molten_redstone",
            "amount": 250
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "computercraft:wireless_modem_normal",
        "chance": 1
      }
    ],
    "loops": 2
  }).id('cocc:sequenced_assembly/wireless_modem_normal');

  event.remove({output: "computercraft:wireless_modem_advanced"});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create:brass_casing"
    },
    "transitional_item": {
      "id": "create_connected:incomplete_control_chip"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "minecraft:ender_eye"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "type": "neoforge:single",
            "fluid": "slag:molten_redstone",
            "amount": 250
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "computercraft:wireless_modem_advanced",
        "chance": 1
      }
    ],
    "loops": 2
  }).id('cocc:sequenced_assembly/wireless_modem_advanced');

  event.remove({ output: "create_connected:control_chip"});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create_new_age:blank_circuit"
    },
    "loops": 3,
    "results": [
      {
        "chance": 120.0,
        "id": "create_connected:control_chip"
      },
      {
        "chance": 8.0,
        "id": "minecraft:redstone"
      },
      {
        "chance": 8.0,
        "id": "create:electron_tube"
      },
      {
        "chance": 5.0,
        "id": "create:golden_sheet"
      },
      {
        "chance": 3.0,
        "id": "minecraft:gold_nugget"
      },
      {
        "chance": 1.0,
        "id": "create:iron_sheet"
      },
      {
        "chance": 2.0,
        "id": "create:crushed_raw_gold"
      },
      {
        "chance": 1.0,
        "id": "create_new_age:blank_circuit"
      },
      {
        "id": "minecraft:quartz"
      },
      {
        "id": "minecraft:compass"
      }
    ],
    "sequence": [// TO MODIFY NOWWWWW
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "create:electron_tube"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "minecraft:redstone"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          },
          {
            "item": "create:golden_sheet"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "create_connected:incomplete_control_chip"
          }
        ],
        "results": [
          {
            "id": "create_connected:incomplete_control_chip"
          }
        ]
      }
    ],
    "transitional_item": {
      "id": "create_connected:incomplete_control_chip"
    }
  }).id('cocc:sequenced_assembly/control_chip');

  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "tag": "c:stripped_logs"
      },
      {
        "item": "create:refined_radiance"
      }
    ],
    "results": [
      {
        "id": "create:refined_radiance_casing"
      }
    ]
  }).id('cocc:item_application/refined_radiance_casing');

  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "tag": "c:stripped_logs"
      },
      {
        "item": "create:shadow_steel"
      }
    ],
    "results": [
      {
        "id": "create:shadow_steel_casing"
      }
    ]
  }).id('cocc:item_application/shadow_steel_casing');

  event.custom({
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create:limestone"
      },
      {
        "type": "neoforge:single",
        "fluid": "slag:molten_quartz",
        "amount": 50
      }
    ],
    "results": [
      {
        "id": "minecraft:calcite"
      }
    ]
  }).id('cocc:filling/calcite');
  event.remove({output: "createcasing:chorium_ingot"});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create:andesite_alloy"
    },
    "transitional_item": {
      "id": "createcasing:processing_chorium"
    },
    "sequence": [
      
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "createcasing:processing_chorium"
          },
          {
            "type": "neoforge:single",
            "fluid": "minecraft:lava",
            "amount": 250
          }
        ],
        "results": [
          {
            "id": "createcasing:processing_chorium"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "createcasing:processing_chorium"
          },
          {
            "item": "minecraft:chorus_fruit"
          }
        ],
        "results": [
          {
            "id": "createcasing:processing_chorium"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "createcasing:processing_chorium"
          },
          {
            "type": "neoforge:single",
            "fluid": "slag:molten_obsidian",
            "amount": 100
          }
        ],
        "results": [
          {
            "id": "createcasing:processing_chorium"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "createcasing:processing_chorium"
          },
          {
            "item": "oritech:enderic_compound"
          }
        ],
        "results": [
          {
            "id": "createcasing:processing_chorium"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "createcasing:processing_chorium"
          },
          {
            "type": "neoforge:single",
            "fluid": "slag:molten_lapis",
            "amount": 100
          }
        ],
        "results": [
          {
            "id": "createcasing:processing_chorium"
          }
        ]
      },
      
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "createcasing:processing_chorium"
          },
          {
            "item": "confluence:falling_star"
          }
        ],
        "results": [
          {
            "id": "createcasing:processing_chorium"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "createcasing:processing_chorium"
          }
        ],
        "results": [
          {
            "id": "createcasing:processing_chorium"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "create:chromatic_compound",
        "chance": 1
      }
    ],
    "loops": 4
  }).id('cocc:sequenced_assembly/chromatic_compound');
  
  event.remove({output: "create_new_age:blank_circuit"});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create:iron_sheet"
    },
    "transitional_item": {
      "id": "kubejs:incomplete_circuit"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_circuit"
          },
          {
            "tag": "c:nuggets/copper"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_circuit"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_circuit"
          },
          {
            "tag": "c:nuggets/copper"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_circuit"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_circuit"
          },
          {
            "tag": "c:nuggets/copper"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_circuit"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_circuit"
          },
          {
            "tag": "c:nuggets/copper"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_circuit"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_circuit"
          },
          {
            "type": "neoforge:single",
            "fluid": "slag:molten_redstone",
            "amount": 2
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_circuit"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "create_new_age:blank_circuit",
        "chance": 1
      }
    ],
    "loops": 2
  })

  event.remove({id: 'create:splashing/magma_block'}) 

  event.custom({
    "type": "create:pressing",
    "ingredients": [
      {
        "item": "minecraft:stone"
      }
    ],
    "results": [
      {
        "id": "create:cut_deepslate"
      }
    ]
  }).id('cocc:pressing/cut_deepslate');

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "##",
      "##"
    ],
    "key": {
      "#": {
        "tag": "c:gems/amethyst"
      }
    },
    "result": {
      "id": "minecraft:amethyst_block"
    }
  }).id('cocc:crafting_shaped/amethyst_block');

  event.remove({output: "toms_storage:paint_kit"});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "sd",
      "dn"
    ],
    "key": {
      "d": {
        "tag": "c:dyes"
      },
      "s": {
        "item": "create:iron_sheet"
      },
      "n": {
        "item": "minecraft:iron_nugget"
      }
    },
    "result": {
      "id": "toms_storage:paint_kit"
    }
  }).id('cocc:crafting_shaped/paint_kit');

  event.remove({output: "oritech:electrum_ingot"});
  event.remove({id: "oritech:electrum_blockblock"});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "BB",
      "RR"
    ],
    "key": {
      "R": {
        "tag": "c:dusts/redstone"
      },
      "B": {
        "item": "create_new_age:overcharged_gold"
      }
    },
    "result": {
      "id": "oritech:electrum_ingot"
    }
  }).id('cocc:crafting_shaped/electrum_ingot');
  event.custom({
    "type": "oritech:foundry",
    "ingredients": [
      {
        "item": "create_new_age:overcharged_gold"
      },
      {
        "tag": "c:dusts/redstone"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "oritech:electrum_ingot"
      }
    ],
    "time": 120
  })
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "create_new_age:overcharged_gold"
      },
      {
        "item": "minecraft:redstone"
      }
    ],
    "results": [
      {
        "id": "oritech:electrum_ingot"
      }
    ],
    "heat_requirement": "heated"
  })

  event.remove({output: "create_new_age:reactor_glass"});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "tag": "c:glass_blocks"
      },
      {
        "item": "create_new_age:reactor_casing"
      }
    ],
    "result": {
      "id": "create_new_age:reactor_glass"
    }
  }).id('cocc:crafting_shapeless/reactor_glass');

  event.remove({output: "create:rope_pulley"});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "C",
      "R",
      "S"
    ],
    "key": {
      "R": {
        "tag": "cocc:rope_coils"
      },
      "S": {
        "tag": "c:plates/iron"
      },
      "C": {
        "item": "create:andesite_casing"
      }
    },
    "result": {
      "id": "create:rope_pulley"
    }
  }).id('cocc:crafting_shaped/rope_pulley');

  event.remove({output: "create_new_age:generator_coil"});
  event.custom({
    "type": "create:mechanical_crafting",
    "category": "misc",
    "key": {
      "#": {
        "item": "oritech:magnetic_coil"
      },
      "S": {
        "tag": "c:ingots/steel"
      },
      "H": {
        "item": "create:shaft"
      }
    },
    "pattern": [
      " ### ",
      "#SSS#",
      "#SHS#",
      "#SSS#",
      " ### "
    ],
    "result": {
      "id": "create_new_age:generator_coil",
      "count": 2
    },
    "accept_mirrored": true
  }).id('cocc:mechanical_crafting/generator_coil');

  event.remove({output: "oritech:clay_catalyst_beads"});
  event.remove({id: "oritech:assembler/claybeads"})
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "minecraft:clay"
      },
      {
        "tag": "c:sands"
      }
    ],
    "result": {
      "id": "oritech:clay_catalyst_beads",
      "count": 7
    }
  }).id('cocc:crafting_shapeless/clay_catalyst_beads');
  event.custom({
    "type": "oritech:assembler",
    "ingredients": [
      {
        "item": "minecraft:clay_ball"
      },
      {
        "item": "minecraft:clay_ball"
      },
      {
        "item": "minecraft:clay_ball"
      },
      {
        "item": "minecraft:clay_ball"
      }
    ],
    "results": [
      {
        "count": 4,
        "id": "oritech:clay_catalyst_beads"
      }
    ],
    "time": 5
  }).id('cocc:assembler/clay_catalyst_beads');

  event.remove({ id: "oritech:assembler/enderlens"});
  event.custom({
    "type": "oritech:assembler",
    "ingredients": [
      {
        "item": "oritech:adamant_ingot"
      },
      {
        "item": "oritech:carbon_fibre_strands"
      },
      {
        "item": "oritech:enderic_compound"
      },
      {
        "item": "confluence:lens"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "oritech:enderic_lens"
      }
    ],
    "time": 144
  }).id('cocc:assembler/enderic_lens');

  event.shaped('oritech:electrum_block', ['AAA', 'AAA', 'AAA'], { A: 'oritech:electrum_ingot' }).id('cocc:shaped/electrum_block');
  event.shapeless('9x oritech:electrum_ingot', ['oritech:electrum_block']).id('cocc:shapeless/electrum_ingot_from_block');

  event.smelting('confluence:lens', 'minecraft:glass_pane').xp(0.1).cookingTime(200).id('cocc:smelting/lens');
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "confluence:lens"
    },
    "transitional_item": {
      "id": "confluence:lens"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "confluence:lens"
          },
          {
            "item": "oritech:carbon_fibre_strands"
          }
        ],
        "results": [
          {
            "id": "confluence:lens"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "confluence:lens"
          }
        ],
        "results": [
          {
            "id": "confluence:lens"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "confluence:black_lens",
        "chance": 1
      }
    ],
    "loops": 1
  })

  event.remove({output: "terra_guns:high_velocity_bullet"})
  event.custom({
    "type": "confluence:heavy_work_bench",
    "ingredients": [
      {
        "type": "confluence_magic_lib:amount_ingredient",
        "count": 50,
        "ingredient": {
          "item": "confluence:empty_bullet"
        }
      },
      {
        "item": "confluence:cog"
      },
      {
        "item": "confluence:soul_of_flight"
      }
    ],
    "result": {
      "count": 50,
      "id": "terra_guns:high_velocity_bullet"
    }
  }).id('cocc:heavy_work_bench/high_velocity_bullet');

  event.shaped('confluence:cog', ['AAA', 'ABA', 'AAA'], { A: 'create:brass_nugget', B: 'create:andesite_alloy' }).id('cocc:shaped/confluence-cog');

  event.remove({output: "create:precision_mechanism"});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "tag": "c:plates/gold"
    },
    "loops": 5,
    "results": [
      {
        "chance": 120.0,
        "id": "create:precision_mechanism"
      },
      {
        "chance": 8.0,
        "id": "create:golden_sheet"
      },
      {
        "chance": 8.0,
        "id": "create:andesite_alloy"
      },
      {
        "chance": 5.0,
        "id": "confluence:cog"
      },
      {
        "chance": 3.0,
        "id": "minecraft:gold_nugget"
      },
      {
        "chance": 2.0,
        "id": "create:shaft"
      },
      {
        "chance": 2.0,
        "id": "create:crushed_raw_gold"
      },
      {
        "id": "minecraft:iron_ingot"
      },
      {
        "id": "minecraft:clock"
      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create:incomplete_precision_mechanism"
          },
          {
            "item": "confluence:cog"
          }
        ],
        "results": [
          {
            "id": "create:incomplete_precision_mechanism"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create:incomplete_precision_mechanism"
          },
          {
            "item": "petrolsparts:coaxial_gear"
          }
        ],
        "results": [
          {
            "id": "create:incomplete_precision_mechanism"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create:incomplete_precision_mechanism"
          },
          {
            "tag": "c:nuggets/iron"
          }
        ],
        "results": [
          {
            "id": "create:incomplete_precision_mechanism"
          }
        ]
      }
    ],
    "transitional_item": {
      "id": "create:incomplete_precision_mechanism"
    }
  }).id('cocc:sequenced_assembly/precision_mechanism');

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create:iron_sheet"
    },
    "transitional_item": {
      "id": "create:incomplete_precision_mechanism"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create:incomplete_precision_mechanism"
          },
          {
            "item": "confluence:lens"
          }
        ],
        "results": [
          {
            "id": "create:incomplete_precision_mechanism"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create:incomplete_precision_mechanism"
          },
          {
            "item": "create:precision_mechanism"
          }
        ],
        "results": [
          {
            "id": "create:incomplete_precision_mechanism"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create:incomplete_precision_mechanism"
          },
          {
            "item": "confluence:lens"
          }
        ],
        "results": [
          {
            "id": "create:incomplete_precision_mechanism"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create:incomplete_precision_mechanism"
          },
          {
            "item": "create:iron_sheet"
          }
        ],
        "results": [
          {
            "id": "create:incomplete_precision_mechanism"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "create:incomplete_precision_mechanism"
          }
        ],
        "results": [
          {
            "id": "create:incomplete_precision_mechanism"
          }
        ]
      }
    ],
        "results": [
      {
        "chance": 145.0,
        "id": "confluence:mechanical_lens"
      },
      {
        "chance": 5.0,
        "id": "create:precision_mechanism"
      },
      {
        "chance": 3.0,
        "id": "create:iron_sheet"
      },
      {
        "chance": 3.0,
        "id": "confluence:lens"
      },
      {
        "id": "confluence:black_lens"
      }
    ],
    "loops": 1
  })

  event.remove({output: "confluence:space_gun"});
  event.custom({
    "type": "confluence:heavy_work_bench",
    "key": {
      "#": {
        "type": "confluence_magic_lib:amount_ingredient",
        "count": 2,
        "ingredient": { "item": "confluence:meteorite_ingot" }
      },
      "H": {
        "type": "confluence_magic_lib:amount_ingredient",
        "count": 4,
        "ingredient": { "item": "confluence:meteorite_ingot" }
      },
      "l": {
        "item": "oritech:enderic_lens"
      }
    },
    "pattern": [
      "#   ",
      "H#l#",
      "HH  ",
      " HH "
    ],
    "result": {
      "count": 1,
      "id": "confluence:space_gun"
    }
  }).id('cocc:heavy_work_bench/space_gun');
  
  event.remove({output: "oritech:iron_plating_block"});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "NSN",
      "SBS",
      "NSN"
    ],
    "key": {
      "B": {
        "item": "create:industrial_iron_block"
      },
      "S": {
        "item": "minecraft:smooth_stone_slab"
      },
      "N": {
        "item": "oritech:steel_dust"
      }
    },
    "result": {
      "id": "oritech:iron_plating_block",
      "count": 5
    }
  }).id('cocc:crafting_shaped/iron_plating_block');

  event.remove({output: "oritech:machine_plating_block"});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "NSN",
      "SBS",
      "NSN"
    ],
    "key": {
      "B": {
        "tag": "c:chiseled_blocks/copper"
      },
      "S": {
        "item": "minecraft:smooth_stone_slab"
      },
      "N": {
        "item": "oritech:steel_dust"
      }
    },
    "result": {
      "id": "oritech:machine_plating_block",
      "count": 5
    }
  });

  event.remove({output: "oritech:carbon_plating_block"});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "NSN",
      "SBS",
      "NSN"
    ],
    "key": {
      "B": {
        "item": "oritech:reinforced_carbon_sheet"
      },
      "S": {
        "item": "minecraft:smooth_stone_slab"
      },
      "N": {
        "item": "oritech:coal_dust"
      }
    },
    "result": {
      "id": "oritech:carbon_plating_block",
      "count": 5
    }
  });

  event.remove({output: "oritech:nickel_plating_block"});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "NSN",
      "S S",
      "NSN"
    ],
    "key": {
      "S": {
        "item": "minecraft:smooth_stone_slab"
      },
      "N": {
        "item": "oritech:nickel_dust"
      }
    },
    "result": {
      "id": "oritech:nickel_plating_block",
      "count": 5
    }
  })

  event.remove({output: "oritech:enderic_compound"});
  /*event.remove({ id: [
    "oritech:centrifuge/endericsculk",
    "oritech:grinder/pearl_enderic",
    "oritech:grinder/stone_enderic",
    "oritech:pulverizer/pearl_enderic"
  ]})*/
  event.remove({ id: "oritech:centrifuge/endericsculk"});
  event.remove({ id: "oritech:grinder/pearl_enderic"});
  event.remove({ id: "oritech:grinder/stone_enderic"});
  event.remove({ id: "oritech:pulverizer/pearl_enderic"});
  event.remove({ id: "oritech:pulverizer/pearl_enderic"});
  event.remove({ id: "oritech:particle/enderic_compound"});
  event.custom({
    "type": "oritech:particle_collision",
    "ingredients": [
      {
        "item": "confluence:raw_meteorite"
      },
      {
        "item": "minecraft:ender_pearl"
      }
    ],
    "results": [
      {
        "count": 4,
        "id": "oritech:enderic_compound"
      }
    ],
    "time": 500
  }).id('cocc:particle_collision/enderic_compound');
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "confluence:meteorite_ingot"
      },
      {
        "item": "minecraft:ender_pearl"
      }
    ],
    "results": [
      {
        "id": "oritech:enderic_compound",
        "count": 2
      }
    ],
    "heat_requirement": "heated"
  })
  event.custom({
    "type": "oritech:foundry",
    "ingredients": [
      {
        "item": "confluence:meteorite_ingot"
      },
      {
        "item": "minecraft:ender_pearl"
      }
    ],
    "results": [
      {
        "id": "oritech:enderic_compound",
        "count": 2
      }
    ],
    "time": 120
  })

  event.remove({output: "oritech:laser_arm_block"});
  event.custom({
    "type": "create:mechanical_crafting",
    "category": "misc",
    "key": {
      "A": {
        "item": "oritech:enderic_lens"
      },
      "B": {
        "item": "create:mechanical_arm"
      },
      "C": {
        "item": "kubejs:overcharged_motor"
      },
      "D": {
        "tag": "oritech:plating"
      }
    },
    "pattern": [
      "A",
      "B",
      "C",
      "D"
    ],
    "result": {
      "id": "oritech:laser_arm_block"
    },
    "accept_mirrored": true
  }); 

  event.custom({
    "type": "slag:alloying",
    "ingredients": [
      {
        "amount": 8,
        "id": "slag:molten_copper"
      },
      {
        "amount": 8,
        "id": "slag:molten_zinc"
      }
    ],
    "result": {
      "amount": 16,
      "id": "slag:molten_brass"
    }
  }).id('cocc:alloying/molten_brass');

  event.remove({output: "oritech:pulverizer_block"});
  event.shaped('oritech:pulverizer_block', ['AAA', 'ABA', 'CDC'], { A: 'create:cogwheel', B: 'create:millstone', C: 'oritech:motor', D: '#oritech:plating' }).id('cocc:shaped/pulverizer_block');

  event.remove({output: "waystones:warp_stone"});
  event.shaped('waystones:warp_stone', [' E ', 'O F', ' P '], { F: 'slag:dynamic_part[slag:material_type="slag:flint",slag:part_type="slag:plate"]', E: 'minecraft:ender_eye', O: 'slag:dynamic_part[slag:material_type="slag:obsidian",slag:part_type="slag:plate"]', P: 'minecraft:ender_pearl' }).id('cocc:shaped/warp_stone');

  event.remove({output: "oritech:machine_core_1"});
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "create:andesite_casing"
      },
      {
        "item": "create_new_age:overcharged_diamond"
      }
    ],
    "results": [
      {
        "id": "oritech:machine_core_1"
      }
    ]
  }).id('cocc:item_application/machine_core_1');

  event.remove({output: "oritech:machine_core_2"});
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "oritech:iron_plating_block"
      },
      {
        "item": "create_new_age:overcharged_diamond"
      }
    ],
    "results": [
      {
        "id": "oritech:machine_core_2"
      }
    ]
  }).id('cocc:item_application/machine_core_2');

  event.remove({output: "oritech:machine_core_3"});
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "oritech:machine_core_2"
      },
      {
        "item": "oritech:carbon_fibre_strands"
      }
    ],
    "results": [
      {
        "id": "oritech:machine_core_3"
      }
    ]
  }).id('cocc:item_application/machine_core_3');

  event.remove({output: "oritech:machine_core_4"});
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "oritech:machine_core_3"
      },
      {
        "item": "oritech:enderic_compound"
      }
    ],
    "results": [
      {
        "id": "oritech:machine_core_4"
      }
    ]
  }).id('cocc:item_application/machine_core_4');

  event.remove({output: "oritech:machine_core_5"});
  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "oritech:machine_core_4"
      },
      {
        "item": "oritech:advanced_computing_engine"
      }
    ],
    "results": [
      {
        "id": "oritech:machine_core_5"
      }
    ]
  }).id('cocc:item_application/machine_core_5');

  event.remove({output: "oritech:machine_core_6"})
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "oritech:machine_core_5"
    },
    "transitional_item": {
      "id": "kubejs:incomplete_circuit"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_circuit"
          },
          {
            "tag": "c:storage_blocks/platinum"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_circuit"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_circuit"
          },
          {
            "item": "oritech:dubios_container"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_circuit"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "oritech:machine_core_6",
        "chance": 1
      }
    ],
    "loops": 1
  }).id('cocc:sequenced_assembly/machine_core_6');

  event.remove({output: "oritech:machine_core_7"});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "oritech:machine_core_6"
    },
    "transitional_item": {
      "id": "kubejs:incomplete_circuit"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_circuit"
          },
          {
            "item": "oritech:superconductor"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_circuit"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_circuit"
          },
          {
            "item": "oritech:prometheum_ingot"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_circuit"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_circuit"
          },
          {
            "item": "oritech:superconductor"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_circuit"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "oritech:machine_core_7",
        "chance": 1
      }
    ],
    "loops": 2
  }).id('cocc:sequenced_assembly/machine_core_7');

  event.remove({output: "create:brass_hand"});
  event.shaped('create:brass_hand', [' A ', 'AAA', ' B '], { A: 'create:brass_ingot', B: 'createdeco:andesite_sheet' }).id('cocc:shaped/brass_hand');

  event.shaped('kubejs:andesite_clip', ['A A', 'AAA', ' B '], { A: 'create:andesite_alloy', B: 'slag:dynamic_part[slag:part_type="slag:plate",slag:material_type="slag:andesite_alloy"]' }).id('cocc:shaped/andesite_clip');
  
  event.remove({output: "create:mechanical_arm"});
  event.shaped('create:mechanical_arm', ['ABC', 'BA ', 'DEF'], { A: 'oritech:carbon_fibre_strands', B: 'createcasing:brass_shaft', C: 'kubejs:andesite_clip', D: 'create:precision_mechanism', E: 'create:brass_casing', F: 'petrolsparts:coaxial_gear' }).id('cocc:shaped/mechanical_arm');

  event.custom({
    "type": "slag:double_smelting",
    "cookingTime": 200,
    "experience": 0.6,
    "ingredientA": {
      "item": "minecraft:copper_ingot"
    },
    "ingredientB": {
      "item": "create:zinc_ingot"
    },
    "result": {
      "count": 2,
      "id": "create:brass_ingot"
    }
  });

  event.remove({id: "createcasing:cutting/brass_ingot"});
  event.shaped('8x createcasing:brass_shaft', ['A', 'A'], { A: 'create:brass_ingot' }).id('cocc:shaped/brass_shaft');

    event.custom({
    "type": "confluence:heavy_work_bench",
    "key": {
      "#": {
        "type": "confluence_magic_lib:amount_ingredient",
        "count": 2,
        "ingredient": { "item": "minecraft:cobblestone" }
      },
      "P": {
        "item": 'minecraft:cobblestone'
      }
    },
    "pattern": [
      " PP ",
      "P  P",
      "####",
      "####"
    ],
    "result": {
      "count": 1,
      "id": "confluence:encumbering_stone"
    }
  }).id('cocc:heavy_work_bench/encumbering_stone');
  event.custom({
    "type": "create:mechanical_crafting",
    "category": "misc",
    "key": {
      "S": {
        "item": 'minecraft:cobblestone'
      },
      "#": {
        "item": "minecraft:cobblestone"
      }
    },
    "pattern": [
      "  SS  ",
      " S  S ",
      "######",
      "######",
      " #### "
    ],
    "result": {
      "id": "confluence:encumbering_stone"
    },
    "accept_mirrored": true
  }).id('cocc:mechanical_crafting/encumbering_stone');

  event.remove({output: "create:whisk"});
  event.shaped('create:whisk', ['BBB', 'BCB', ' A '], { A: 'createdeco:andesite_sheet', B: 'create:iron_sheet', C: '#cocc:all_iron_nuggets_similar' }).id('cocc:shaped/whisk');
  
  event.remove({output: "drones:drill"});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      {
        "item": "kubejs:drill"
      },
      {
        "tag": "cocc:all_iron_nuggets_similar"
      }
    ],
    "result": {
      "id": "drones:drill",
      "count": 1
    }
  }).id('cocc:crafting_shapeless/drones_drill');

  event.remove({output: "drones:controller"});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "#P#",
      "#G#"
    ],
    "key": {
      "#": {
        "tag": "c:plates/plastic"
      },
      "P": {
        "item": "oritech:drone_port_block"
      },
      "G": {
        "tag": "cocc:color_displays"
      }
    },
    "result": {
      "id": "drones:controller"
    }
  }).id('cocc:crafting_shaped/drones_controller');

  event.shaped('kubejs:drill', [' A ', 'ABA', ' S '], { A: 'create:andesite_alloy', B: '#c:ingots/iron', S: 'createdeco:andesite_sheet' }).id('cocc:shaped/kubejs_drill');
  
  event.remove({output: 'create:mechanical_drill'});
  event.remove({output: 'createcasing:brass_mechanical_drill'});
  event.remove({output: 'createcasing:copper_mechanical_drill'});
  event.remove({output: 'createcasing:railway_mechanical_drill'});
  event.remove({output: 'createcasing:shadow_steel_mechanical_drill'});
  event.remove({output: 'createcasing:refined_radiance_mechanical_drill'});
  event.remove({output: 'createcasing:industrial_iron_mechanical_drill'});
  event.remove({output: 'createcasing:weathered_iron_mechanical_drill'});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "create:andesite_casing"
      },
      {
        "item": "kubejs:drill"
      }
    ],
    "result": {
      "id": "create:mechanical_drill"
    }
  }).id('cocc:crafting_shapeless/mechanical_drill');
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "create:brass_casing"
      },
      {
        "item": "kubejs:drill"
      }
    ],
    "result": {
      "id": "createcasing:brass_mechanical_drill"
    }
  }).id('cocc:crafting_shapeless/brass_mechanical_drill');
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "create:copper_casing"
      },
      {
        "item": "kubejs:drill"
      }
    ],
    "result": {
      "id": "createcasing:copper_mechanical_drill"
    }
  }).id('cocc:crafting_shapeless/copper_mechanical_drill');
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "createcasing:railway_mechanical_drill"
      },
      {
        "item": "kubejs:drill"
      }
    ],
    "result": {
      "id": "createcasing:railway_mechanical_drill"
    }
  }).id('cocc:crafting_shapeless/railway_mechanical_drill');
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "createcasing:shadow_steel_mechanical_drill"
      },
      {
        "item": "kubejs:drill"
      }
    ],
    "result": {
      "id": "createcasing:shadow_steel_mechanical_drill"
    }
  }).id('cocc:crafting_shapeless/shadow_steel_mechanical_drill');
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "createcasing:refined_radiance_mechanical_drill"
      },
      {
        "item": "kubejs:drill"
      }
    ],
    "result": {
      "id": "createcasing:refined_radiance_mechanical_drill"
    }
  }).id('cocc:crafting_shapeless/refined_radiance_mechanical_drill');
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "createcasing:industrial_iron_mechanical_drill"
      },
      {
        "item": "kubejs:drill"
      }
    ],
    "result": {
      "id": "createcasing:industrial_iron_mechanical_drill"
    }
  }).id('cocc:crafting_shapeless/industrial_iron_mechanical_drill');
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "createcasing:weathered_iron_mechanical_drill"
      },
      {
        "item": "kubejs:drill"
      }
    ],
    "result": {
      "id": "createcasing:weathered_iron_mechanical_drill"
    }
  }).id('cocc:crafting_shapeless/weathered_iron_mechanical_drill');
  
  event.remove({output: "drones:wood_rotor"});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      {
        "item": "oritech:motor"
      },
      {
        "item": "create:sail_frame"
      },
      {
        "item": "create:propeller"
      }
    ],
    "result": {
      "id": "drones:wood_rotor"
    }
  }).id('cocc:crafting_shapeless/wood_rotor');

  event.remove({output: "drones:iron_rotor"})
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      {
        "item": "oritech:motor"
      },
      {
        "item": "oritech:machine_frame_block"
      },
      {
        "item": "create:propeller"
      }
    ],
    "result": {
      "id": "drones:iron_rotor"
    }
  }).id('cocc:crafting_shapeless/iron_rotor');

  event.remove({output: "drones:frame"});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "pattern": [
      "SSS",
      "PPP",
      "SSS"
    ],
    "key": {
      "S": {
        "item": "minecraft:smooth_stone"
      },
      "P": {
        "tag": "c:plates/plastic"
      }
    },
    "result": {
      "id": "drones:frame",
      "count": 6
    }
  }).id('cocc:crafting_shaped/drones_frame');

  event.remove({output: "drones:ion_thruster"});
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      {
        "item": "oritech:ion_thruster"
      }
    ],
    "result": {
      "id": "drones:ion_thruster",
      "count": 2
    }
  }).id('cocc:crafting_shapeless/ion_thruster');

  event.remove({output: "belts:belt"});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create:belt_connector"
    },
    "transitional_item": {
      "id": "oritech:motor"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "oritech:motor"
          },
          {
            "item": "oritech:motor"
          }
        ],
        "results": [
          {
            "id": "oritech:motor"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "oritech:motor"
          },
          {
            "item": "kubejs:steel_plate"
          }
        ],
        "results": [
          {
            "id": "oritech:motor"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "belts:belt",
        "chance": 1
      }
    ],
    "loops": 1
  })

  event.remove({output: "belts:chute"});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "pattern": [
      "1",
      "2",
      "3"
    ],
    "key": {
      "1": {
        "item": "create:electron_tube"
      },
      "2": {
        "tag": "c:ingots/steel"
      },
      "3": {
        "item": "minecraft:dried_kelp"
      }
    },
    "result": {
      "id": "belts:chute",
      "count": 2
    }
  }).id('cocc:crafting_shaped/belts_chute');

  event.custom({
    "type": "slag:table_casting",
    "cast": "slag:cast/plates",
    "ingredient": {
      "amount": 72,
      "id": "kubejs:molten_steel"
    },
    "result": {
      "id": "kubejs:steel_plate"
    }
  });

  event.remove({output: "oritech:plastic_sheet"});
  event.smelting('kubejs:plastic_ingot', 'oritech:polymer_resin').xp(0.1).cookingTime(50).id('cocc:smelting/plastic_ingot');
  event.blasting('kubejs:plastic_ingot', 'oritech:polymer_resin').xp(0.1).cookingTime(50).id('cocc:blasting/plastic_ingot');
  event.custom({
    "type": "create:pressing",
    "ingredients": [
      {
        "item": "kubejs:plastic_ingot"
      }
    ],
    "results": [
      {
        "id": "oritech:plastic_sheet"
      }
    ]
  }).id('cocc:pressing/plastic_sheet');
  event.remove({id: "oritech:centrifuge/fluid/plasticbio"});
  event.remove({id: "oritech:centrifuge/fluid/plasticbiobetter"});
  event.remove({id: "oritech:centrifuge/fluid/plasticoil"});
  event.remove({id: "oritech:centrifuge/fluid/plasticoilbetter"});
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 500,
      "fluid": "minecraft:water"
    },
    "fluidOutputs": [],
    "ingredients": [
      {
        "item": "oritech:raw_biopolymer"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "kubejs:plastic_ingot"
      }
    ],
    "time": 120
  });
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 250,
      "fluid": "oritech:still_mineral_slurry"
    },
    "fluidOutputs": [],
    "ingredients": [
      {
        "item": "oritech:raw_biopolymer"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "kubejs:plastic_ingot"
      }
    ],
    "time": 120
  });
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 250,
      "fluid": "oritech:still_mineral_slurry"
    },
    "fluidOutputs": [],
    "ingredients": [
      {
        "item": "oritech:polymer_resin"
      }
    ],
    "results": [
      {
        "count": 4,
        "id": "kubejs:plastic_ingot"
      }
    ],
    "time": 120
  });
  
  event.shaped('9x kubejs:plastic_ingot', ['A'], { A: 'oritech:plastic_block' }).id('cocc:shaped/plastic_ingot_9x');
  event.shaped('oritech:plastic_block', ['AAA', 'AAA', 'AAA'], { A: 'kubejs:plastic_ingot' }).id('cocc:shaped/plastic_block');
  
  event.remove({id: "oritech:particle/overcharged_crystal"});
  event.custom({
    "type": "oritech:particle_collision",
    "ingredients": [
      {
        "item": "oritech:fluxite"
      },
      {
        "item": "oritech:energite_dust"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "kubejs:uncharged_crystal"
      }
    ],
    "time": 5000
  }).id('cocc:particle_collision/uncharged_crystal');
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " A ",
      "CBC",
      "CBC"
    ],
    "key": {
      "A": {
        "item": "minecraft:amethyst_block"
      },
      "B": {
        "item": "oritech:advanced_battery"
      },
      "C": {
        "item": "oritech:superconductor"
      }
    },
    "result": {
      "id": "kubejs:uncharged_crystal"/*,
      "count": 3*/
    }
  });

  event.custom({
    "type": "create:pressing",
    "ingredients": [
      {
        "item": "create:copper_nugget"
      }
    ],
    "results": [
      {
        "id": "confluence:copper_coin"
      }
    ]
  }).id('cocc:pressing/copper_coin');
  event.shaped('4x confluence:copper_coin', ['A'], { A: 'createdeco:copper_coinstack' }).id('cocc:shaped/copper_coin_4x');
  event.shaped('createdeco:copper_coinstack', ['AA', 'AA'], { A: 'confluence:copper_coin' }).id('cocc:shaped/copper_coinstack');

  event.shaped('kubejs:cpu', ['AAA'], { A: 'oritech:processing_unit' }).id('cocc:shaped/cpu');
  event.shapeless('kubejs:datacard', ['computercraft:disk', 'create_new_age:blank_circuit']).id('cocc:shapeless/datacard');

  event.shaped('kubejs:normal_display', ['AAA', 'BC ', 'AAA'], { A: 'create:andesite_alloy', B: 'kubejs:gpu', C: 'kubejs:bnwscreen' }).id('cocc:shaped/normal_display');
  event.shaped('kubejs:specialized_display', ['AAA', 'BC ', 'AAA'], { A: '#c:plates/plastic', B: 'kubejs:gpu', C: 'kubejs:rgbscreen' }).id('cocc:shaped/specialized_display');
  event.shaped('kubejs:smart_display', ['AAA', 'BCD', 'AAA'], { A: 'create:brass_ingot', B: 'kubejs:gpu', C: 'kubejs:rgbscreen', D: 'create:electron_tube' }).id('cocc:shaped/smart_display');
  
  event.shaped('kubejs:bnwscreen', [' A', 'BA', ' A'], { A: '#c:glass_panes', B: 'minecraft:redstone' }).id('cocc:shaped/bnwscreen');
  event.shaped('kubejs:rgbscreen', ['AGB', 'CGD', ' GE'], { A: 'create:electron_tube', B: 'minecraft:red_dye', C: 'minecraft:redstone', D: 'minecraft:green_dye', E: 'minecraft:blue_dye', G: '#c:glass_panes' }).id('cocc:shaped/rgbscreen');

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create_connected:control_chip"
    },
    "transitional_item": {
      "id": "kubejs:incomplete_chip"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_chip"
          },
          {
            "tag": 'c:ingots/rose_gold'
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_chip"
          },
          {
            "item": "oritech:carbon_fibre_strands"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_chip"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_chip"
          },
          {
            "tag": "c:plates/plastic"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_chip"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_chip"
          }
        ],
        "results": [
          {
            "id": "kubejs:incomplete_chip"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "kubejs:gpu"
      }
    ],
    "loops": 1
  });
  event.custom({
    "type": "oritech:assembler",
    "ingredients": [
      {
        "tag": "c:plates/plastic"
      },
      {
        "tag": "c:carbon_fibre"
      },
      {
        "tag": 'c:ingots/rose_gold'
      },
      {
        "item": "create_connected:control_chip"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "kubejs:gpu"
      }
    ],
    "time": 96
  }).id('cocc:assembler/gpu');

  event.custom({
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:pointed_dripstone"
      },
      {
        "type": "neoforge:single",
        "fluid": "slag:molten_netherite",
        "amount": 104
      }
    ],
    "results": [
      {
        "id": "confluence:spike"
      }
    ]
  }).id('cocc:spouting/spike');
  
  event.remove({output: "immersive_aircraft:propeller"});
  event.recipes.create.mechanical_crafting('immersive_aircraft:propeller', [
      "   A ",
      "AA A ",
      "  B  ",
      " A AA",
      " A   "
  ], {
    A: 'slag:dynamic_part[slag:material_type="slag:iron",slag:part_type="slag:plate"]',
    B: 'create:propeller'
  }).id("cocc:mechanical_crafting/aircraft_propeller");

  event.remove({output: "immersive_aircraft:enhanced_propeller"});
  event.recipes.create.mechanical_crafting('immersive_aircraft:enhanced_propeller', [
      "   A ",
      "AA A ",
      "  B  ",
      " A AA",
      " A   "
  ], {
    A: 'slag:dynamic_part[slag:material_type="slag:brass",slag:part_type="slag:plate"]',
    B: 'kubejs:brass_propeller'
  }).id("cocc:mechanical_crafting/aircraft_enhanced_propeller");

  event.shaped('kubejs:iron_cog', ['AAA', 'ABA', 'AAA'], { A: '#c:nuggets/iron', B: 'create:andesite_alloy' }).id('cocc:shaped/iron_cog');
  event.shaped('kubejs:lead_cog', ['AAA', 'ABA', 'AAA'], { A: '#c:nuggets/lead', B: 'create:andesite_alloy' }).id('cocc:shaped/lead_cog');
  event.shaped('kubejs:copper_cog', ['AAA', 'ABA', 'AAA'], { A: '#c:nuggets/copper', B: 'create:andesite_alloy' }).id('cocc:shaped/copper_cog');
  
  event.remove({output: "immersive_aircraft:industrial_gears"});
  event.shapeless("immersive_aircraft:industrial_gears", ["kubejs:copper_cog", "#cocc:all_iron_cogs_similar", "minecraft:lever"]).id('cocc:shapeless/industrial_gears');
  
  event.shaped('kubejs:cable', [' A ', 'A A', ' A '], { A: 'kubejs:rubber' }).id('cocc:shaped/cable');
  
  event.custom({
    "type": "oritech:centrifuge_fluid",
    "fluidInput": {
      "amount": 200,
      "fluid": "oritech:still_sulfuric_acid"
    },
    "ingredients": [{ "item": "kubejs:plastic_ingot"}], 
    "fluidOutputs": [],
    "results": [
      {
        "count": 1,
        "id": "kubejs:rubber"
      }
    ],
    "time": 120
  });

  event.shaped('kubejs:brass_propeller', [' A ', 'ABA', ' A '], { A: 'create:brass_sheet', B: 'create:brass_ingot' }).id('cocc:shaped/brass_propeller');
  
  event.remove({output: "cyberspace:machine_casing_block"});
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "tag": "c:stripped_woods"
    },
    "transitional_item": {
      "id": "create_new_age:incomplete_reactor_casing"
    },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_new_age:incomplete_reactor_casing"
          },
          {
            "item": "cyberspace:synthetic_capsule"
          }
        ],
        "results": [
          {
            "id": "create_new_age:incomplete_reactor_casing"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_new_age:incomplete_reactor_casing"
          },
          {
            "item": "cyberspace:quantum_core"
          }
        ],
        "results": [
          {
            "id": "create_new_age:incomplete_reactor_casing"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_new_age:incomplete_reactor_casing"
          },
          {
            "item": "cyberspace:graphene_coated_iron_ingot"
          }
        ],
        "results": [
          {
            "id": "create_new_age:incomplete_reactor_casing"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "cyberspace:machine_casing_block"
      }
    ],
    "loops": 1
  }).id('cocc:sequenced/machine_casing_block');
  
  event.remove({output: "cyberspace:graphite_fiber"});
  event.remove({output: "cyberspace:graphite_blend"});
  event.custom({
    "type": "oritech:atomic_forge",
    "ingredients": [
      {
        "item": "oritech:coal_dust"
      },
      {
        "item": "oritech:adamant_dust"
      },
      {
        "item": "oritech:adamant_dust"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "cyberspace:graphite_blend"
      }
    ],
    "time": 5
  })
  event.remove({output: "cyberspace:graphene_coated_iron_ingot"});
  event.smelting('cyberspace:graphene_coated_iron_ingot', 'cyberspace:graphite_blend').xp(0.1).cookingTime(200).id('cocc:smelting/graphene_coated_iron_ingot');
  event.blasting('cyberspace:graphene_coated_iron_ingot', 'cyberspace:graphite_blend').xp(0.1).cookingTime(200).id('cocc:blasting/graphene_coated_iron_ingot');
  event.remove({output: "cyberspace:graphene"});
  event.custom({
    "type": "create:pressing",
    "ingredients": [
      {
        "item": "cyberspace:graphene_coated_iron_ingot"
      }
    ],
    "results": [
      {
        "id": "cyberspace:graphene"
      }
    ]
  }).id('cocc:pressing/graphene');

  event.remove({output: "cyberspace:synthetic_capsule"})
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "kubejs:rubber"
    },
    "transitional_item": {
      "id": "create_new_age:incomplete_fuel"
    },
    "sequence": [
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "create_new_age:incomplete_fuel"
          }
        ],
        "results": [
          {
            "id": "create_new_age:incomplete_fuel"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_new_age:incomplete_fuel"
          },
          {
            "item": "cyberspace:graphene"
          }
        ],
        "results": [
          {
            "id": "create_new_age:incomplete_fuel"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "create_new_age:incomplete_fuel"
          }
        ],
        "results": [
          {
            "id": "create_new_age:incomplete_fuel"
          }
        ]
      }
    ],
    "results": [
      {
        "id": "cyberspace:synthetic_capsule",
        "chance": 1
      }
    ],
    "loops": 1
  }).id('cocc:sequenced_assembly/synthetic_capsule');

  event.remove({output: "custommachinery:configuration_card"});

  event.shaped('oritech:steel_ingot', ['AA', 'BB'], { A: 'confluence:lead_ingot', B: '#minecraft:coals' }).id('cocc:crafting/steel_ingot-var');
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "oritech:coal_dust"
      },
      {
        "item": "confluence:lead_ingot"
      }
    ],
    "results": [
      {
        "id": "oritech:steel_ingot"
      }
    ],
    "heat_requirement": "heated"
  }).id('cocc:mixing/steel_ingot-var');
  event.custom({
    "type": "oritech:foundry",
    "ingredients": [
      {
        "tag": "c:ingots/lead"
      },
      {
        "tag": "c:dusts/coal"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "oritech:steel_ingot"
      }
    ],
    "time": 39
  })

  event.remove({output: "slag:brick_forge"});
  event.shaped('slag:brick_forge', ['ABA', 'BCB', 'ADA'], { A: 'minecraft:mud_bricks', B: 'minecraft:birch_log', C: 'minecraft:blast_furnace', D: 'minecraft:netherrack' }).id('cocc:shaped/brick_forge');
  
  
  event.custom({
    "type": "create:pressing",
    "ingredients": [
      {
        "item": "slag:rose_gold_ingot"
      }
    ],
    "results": [
      {
        "id": "kubejs:rose_gold_sheet"
      }
    ]
  }).id('cocc:pressing/rose_gold_sheet');

  event.remove({output: "create_new_age:reinforced_motor"});
  event.custom({
    "type": "create:mechanical_crafting",
    "category": "misc",
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "create_new_age:overcharged_diamond"
      },
      "C": {
        "item": "kubejs:rose_gold_sheet"
      },
      "D": {
        "item": "create:iron_sheet"
      },
      "E": {
        "item": "kubejs:overcharged_motor"
      },
      "F": {
        "item": "create:shaft"
      },
      "X": {
        "item": "create:industrial_iron_block"
      }
    },
    "pattern": [
      "ABCDA",
      "BXEFF",
      "ABCDA"
    ],
    "result": {
      "id": "create_new_age:reinforced_motor"
    },
    "accept_mirrored": true
  }).id('cocc:mechanical_crafting/reinforced_motor');

/*
  event.remove({output: ""});
  event.custom();
*/
})
