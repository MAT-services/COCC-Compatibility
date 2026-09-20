// kubejsstudio custom: kubejsstudio:lava_bucket_from_spout_test-repair
ServerEvents.generateData('after_mods', event => {
    event.json(
      'create:fill_minecraft_bucket_with_minecraft_lava',
      {
        "type": "create:filling",
        "ingredients": [
          {"item":"minecraft:bucket"},
          {"type":"neoforge:tag","amount":1000,"tag":"c:lava"}
        ],
        "results": [{"id":"minecraft:lava_bucket"}]
      }
    )// Created for testing purposes !
})
