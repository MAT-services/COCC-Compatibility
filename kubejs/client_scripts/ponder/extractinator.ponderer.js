Ponder.registry((event) => {
  event.create("confluence:extractinator")
    .scene("scene_1", "Extractinator", "ponderer:extractinator_ponder", (scene, util) => {
      scene.addKeyframe();
      scene.showStructure();
      scene
          .text(60, "Instert an unusual item like gravel, silt, marine gravel or other and get more useful materials", [3.5, 1.5, 2]);
      scene.idle(65);
      scene.addKeyframe();
      scene.world.setBlocks(util.select.fromTo(1, 1, 2, 1, 1, 3), "createcasing:railway_deployer", false);
      scene.world.modifyBlock([1, 1, 2], () => Block.id("createcasing:railway_deployer").with("facing", "east"), false);
      scene.world.modifyBlock([1, 1, 3], () => Block.id("createcasing:railway_deployer").with("facing", "east"), false);
      scene
          .text(60, "Deployers can be used to automate it.", [1.5, 1, 3.5]);
      scene.idleSeconds(1);
      scene.world.setBlocks(util.select.fromTo(0, 1, 2, 0, 1, 3), "minecraft:hopper", false);
      scene.world.modifyBlock([0, 1, 2], () => Block.id("minecraft:hopper").with("facing", "east"), false);
      scene.world.modifyBlock([0, 1, 3], () => Block.id("minecraft:hopper").with("facing", "east"), false);
      scene.world.createItemEntity([0.5, 2, 3.5], [0, 0, 0], "minecraft:gravel");
      scene.world.createItemEntity([0.5, 2, 2.5], [0, 0, 0], "minecraft:gravel");
    });
});
