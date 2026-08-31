ItemEvents.modification(event => {
    event.modify(/^(confluence|terra_furniture|terra_curio|terra_entity):/, item => {
        //console.log(item) //STILL NOT WORKING !!!
        /*const modRarity = item.components.get("confluence_magic_lib:mod_rarity")

        if (modRarity.color === 'white') {item.rarity = 'more_rarities:trash'};
        if (modRarity.color === "green") {item.rarity = 'more_rarities:fine'};
        
        /*if (rarity && (modRarity.color === 'white' || modRarity.color === 'blue')) {item.rarity = 'more_rarities:trash'};
        if (rarity && (modRarity.color === 'white' || modRarity.color === 'blue')) {item.rarity = 'more_rarities:trash'};
        if (rarity && (modRarity.color === 'white' || modRarity.color === 'blue')) {item.rarity = 'more_rarities:trash'};*/
    })
})