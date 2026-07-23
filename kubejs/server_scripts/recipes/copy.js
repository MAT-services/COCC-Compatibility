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
        const output = [GotJSON.result, {"id": "kubejs:dye_filter"}];
        const input = [{"item": "kubejs:dye_filter"}];

        for (const i of GotJSON.ingredients) {input.push(GotJSON.ingredients[i]);};
        event.custom({
            "type": "create:mixing",
            "ingredients": input,
            "results": output
        })
    })
});

