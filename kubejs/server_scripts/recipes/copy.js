ServerEvents.recipes(event => {
    event.forEachRecipe({ type: "terra_curio:workshop" }, recipe => {
        const GotJSON = JSON.parse(`${recipe.json}`);
        const input = GotJSON.ingredients;
        input.push("kubejs:workshop_mixer_adapter");
        const output = [GotJSON.result];
        output.push("kubejs:workshop_mixer_adapter");

        event.recipes.create.mixing(output, input)
    }); 

    event.forEachRecipe({ type: "confluence:dye_vat" }, recipe => {
        const GotJSON = JSON.parse(`${recipe.json}`);
        const output = [GotJSON.result];
        output.push({"id": "kubejs:dye_filter"});
        const input = [];
        input.push({"item": "kubejs:dye_filter"});

        GotJSON.ingredients.forEach(ingredient => {
            //let count = 1;
            const count = ingredient.count || 1;
            for (let i = 0; i < count; i++) {
                input.push(ingredient);
            }
        });
        event.custom({
            "type": "create:mixing",
            "ingredients": input,
            "results": output
        });
    })
});
