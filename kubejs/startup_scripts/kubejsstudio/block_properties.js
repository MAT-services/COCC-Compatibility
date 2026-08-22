// kubejsstudio item/block properties; re-apply merges by id
BlockEvents.modification(event => {
    event.modify('kubejs:deepslate_thorium_ore', m => { m.requiresTool = true })
})
