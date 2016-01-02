QUnit.test("Collision Tests", function(assert) {
  var platform = new Platform(40, 40, 200, 20, 0, 0, false);
  var player = new Player(35, 35, []);

  assert.ok(player.collidesWith(platform),
      "Player Collides With Platform");

  platform.x = 5000;
  assert.ok(!player.collidesWith(platform),
      "Player Does Not Collide With Platform");
});

QUnit.test("Collision Handling Tests", function(assert) {
  var platform1 = new Platform(40, 40, 20, 40, 0, 0, false);
  var platform2 = new Platform(0, 40, 200, 20, 0, 0, false);
  var player = new Player(35, 35, [platform1, platform2]);
  console.log(player.getCollisionCandidates());
  assert.ok(player.getCollisionCandidates().length > 0,
      "Player Collides With Both Platforms");
  player.update();
  assert.ok(player.getCollisionCandidates().length === 0,
      "Player Does Not Collide With Any Platforms");
});
