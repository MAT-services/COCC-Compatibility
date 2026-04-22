// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
  event.remove({ id: /create:.*biomeswevegone/ })
})

BlockEvents.rightClicked(event => {
  const player = event.player
  const item = event.item

  if (item.id === 'belts:belt') {

    let count = 0
    player.inventory.allItems.forEach(i => {
      if (i.id === 'belts:chute') {
        count += i.count
      }
    })

    if (count < 2) {
      event.cancel()
      player.tell("§c2 belts chutes are nedded to place a conveyor belt.")
    }
  }
})

// FOR TESTING
PlayerEvents.loggedIn(event => {
  event.player.awardAdvancement("cocc:root")
})