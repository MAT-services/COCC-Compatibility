ServerEvents.recipes(event => {
    event.forEachRecipe({ type: "terra_curio:workshop" }, recipe => {
        const input = JSON.parse(`${recipe.json}`).ingredients;
        input.unshift("kubejs:workshop_mixer_adapter");
        const output = [JSON.parse(`${recipe.json}`).result];
        output.unshift("kubejs:workshop_mixer_adapter");

        event.recipes.create.mixing(output, input)
    }); 

    event.forEachRecipe({ type: "confluence:dye_vat" }, recipe => {
        const output = [JSON.parse(`${recipe.json}`).result];
        output.unshift("kubejs:dye_filter");

        const lenght = JSON.parse(`${recipe.json}`).ingredients.lenght;
        let x = 0;
        // How do we do "while (x>lenght) {const item = JSON.parse(`${recipe.json}`).ingredients[x]}" in JS ? 
    })
    /*
    event.forEachRecipe({ type: "confluence:dye_vat" }, recipe => {
        const input = JSON.parse(`${recipe.json}`).ingredients;
        input.unshift({"item": "kubejs:dye_filter"});
        const output = [JSON.parse(`${recipe.json}`).result];
        output.unshift({"id": "kubejs:dye_filter"});

        event.custom({
            "type": "create:mixing",
            "ingredients": input,
            "results": output
        })
    }); */
});

