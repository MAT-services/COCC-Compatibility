Ponder.registry((event) => {
  event.create("slag:melter")
    .scene("scene_1", "Melting", "ponderer:melter_ponder", (scene, util) => {
      scene.addKeyframe();
      scene.showStructure();
      scene
          .text(60, "Melter can be used to melt different types of minelrals", [3, 2.5, 1.5]);
      scene.idle(64);
      scene
          .text(60, "To power the melter, a heat source is needed. (Not all heat sources are accepted.)", [3.5, 1.5, 1])
          .colored(PonderPalette.OUTPUT);
      scene.idle(65);
      scene.world.createItemEntity([3.5, 4, 1.5], [0, 0, 0], "minecraft:iron_ingot");
      scene
          .text(85, "When the melter is heated and minerals are in, the melter will start melting the materials intro thier liquid variant.", [3.5, 2, 1.5]);
      scene.idle(90);
      scene
          .text(60, "Behind the melter are a stone drain, it can be used to pour automatly liquids in any type of fluid tank.", [2, 2.5, 3.5])
          .colored(PonderPalette.WHITE)
          .attachKeyFrame();
      scene.idleSeconds(3);
    });
});
