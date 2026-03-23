// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

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
      player.tell("§cIl faut 2 belts:chute pour placer ce bloc.")
    }
  }
})